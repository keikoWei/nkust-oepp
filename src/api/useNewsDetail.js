import { ref, onMounted, watch, computed } from 'vue'
import { getNewsById, getPublicNewsById, downloadNewsFile, getNewsFileDownloadUrl } from './news'

function getFileNameFromPath(filePath) {
  if (!filePath) return ''
  try {
    const segment = filePath.split('/').pop() || filePath
    const decoded = decodeURIComponent(segment)
    const afterUnderscore = decoded.indexOf('_') >= 0 ? decoded.slice(decoded.indexOf('_') + 1) : decoded
    return afterUnderscore || decoded
  } catch {
    const segment = filePath.split('/').pop() || filePath
    const afterUnderscore = segment.indexOf('_') >= 0 ? segment.slice(segment.indexOf('_') + 1) : segment
    return afterUnderscore || segment
  }
}

function mapApiNewsToAnnouncement(apiNews) {
  if (!apiNews) return null
  const d = apiNews.publishTime ? new Date(apiNews.publishTime) : null
  const dateStr = d ? `${d.getFullYear()}.${String(d.getMonth() + 1).padStart(2, '0')}.${String(d.getDate()).padStart(2, '0')}` : ''
  const filePaths = apiNews.filePaths || []
  const firstFile = filePaths[0]
  return {
    id: apiNews.id,
    title: apiNews.title,
    date: dateStr,
    content: apiNews.contentHtml,
    contentHtml: apiNews.contentHtml,
    images: apiNews.imageUrls || [],
    downloadFilePath: firstFile || undefined,
    downloadFileName: firstFile ? getFileNameFromPath(firstFile) : undefined
  }
}

function convertUrlsToLinks(html) {
  if (!html) return ''
  let processed = html
  const linkPlaceholders = []
  processed = processed.replace(/<a[^>]*>(.*?)<\/a>/gi, (match, content) => {
    const placeholder = `__LINK_PLACEHOLDER_${linkPlaceholders.length}__`
    linkPlaceholders.push({ placeholder, original: match })
    return placeholder
  })
  const urlRegex = /(https?:\/\/[^\s<>"']+|bit\.ly\/[^\s<>"']+|reurl\.cc\/[^\s<>"']+|forms\.gle\/[^\s<>"']+|lin\.ee\/[^\s<>"']+)/gi
  processed = processed.replace(urlRegex, (url) => {
    const fullUrl = url.startsWith('http://') || url.startsWith('https://') ? url : `https://${url}`
    return `<a href="${fullUrl}" target="_blank" style="color: #534741; text-decoration: underline;">${url}</a>`
  })
  linkPlaceholders.forEach(({ placeholder, original }) => {
    processed = processed.replace(placeholder, original)
  })
  return processed
}

/**
 * @param {Ref<number>|ComputedRef<number>|number|function} id - 消息 ID（可為 ref/computed 或數字或 getter）
 * @param {Object} [options] - { stateNews: 從 router state 傳入的 news 物件，可省略 }
 */
export function useNewsDetail(id, options = {}) {
  const announcement = ref(null)
  const loading = ref(true)
  const loadFailed = ref(false)
  const modalImage = ref(null)

  const processedContent = computed(() => {
    if (!announcement.value) return ''
    const raw = announcement.value.content ?? announcement.value.contentHtml
    if (!raw) return ''
    return convertUrlsToLinks(raw)
  })

  function getIdNum() {
    const raw = typeof id === 'function' ? id() : (id?.value ?? id)
    return typeof raw === 'number' ? raw : parseInt(raw, 10)
  }

  async function load(idNum) {
    loading.value = true
    loadFailed.value = false
    announcement.value = null
    if (Number.isNaN(idNum)) {
      loadFailed.value = true
      loading.value = false
      return
    }
    const state = window.history.state
    if (state?.news && (state.news.id === idNum || state.news.id === String(idNum))) {
      announcement.value = mapApiNewsToAnnouncement(state.news)
      loading.value = false
      return
    }
    if (options.stateNews && (options.stateNews.id === idNum || options.stateNews.id === String(idNum))) {
      announcement.value = mapApiNewsToAnnouncement(options.stateNews)
      loading.value = false
      return
    }
    let apiNews = await getPublicNewsById(idNum)
    if (!apiNews) {
      try {
        apiNews = await getNewsById(idNum)
      } catch {
        apiNews = null
      }
    }
    if (apiNews) {
      announcement.value = mapApiNewsToAnnouncement(apiNews)
    } else {
      loadFailed.value = true
    }
    loading.value = false
  }

  onMounted(() => {
    load(getIdNum())
  })

  const idSource = typeof id === 'function' ? id : () => (id?.value ?? id)
  if (typeof id === 'function' || (id && Object.prototype.hasOwnProperty.call(id, 'value'))) {
    watch(idSource, () => load(getIdNum()), { immediate: false })
  }

  function openImageModal(image) {
    modalImage.value = image
  }

  function closeImageModal() {
    modalImage.value = null
  }

  function getDisplayFileName(downloadFileUrl) {
    if (!downloadFileUrl) return ''
    try {
      return decodeURIComponent(downloadFileUrl.split('/').pop())
    } catch {
      return downloadFileUrl.split('/').pop() || ''
    }
  }

  async function handleDownloadFile(item) {
    if (!item?.downloadFilePath) return
    const filePath = item.downloadFilePath
    const fileName = item.downloadFileName || getFileNameFromPath(filePath)
    try {
      const blob = await downloadNewsFile(filePath)
      const url = URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = url
      a.download = fileName
      document.body.appendChild(a)
      a.click()
      document.body.removeChild(a)
      URL.revokeObjectURL(url)
    } catch (err) {
      console.error('下載失敗:', err)
      window.open(getNewsFileDownloadUrl(filePath), '_blank')
    }
  }

  return {
    announcement,
    loading,
    loadFailed,
    processedContent,
    modalImage,
    openImageModal,
    closeImageModal,
    getDisplayFileName,
    handleDownloadFile
  }
}

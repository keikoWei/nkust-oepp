import { ref, onMounted, watch, computed } from 'vue'
import { getPublicCourses, downloadCourseFile, getCourseFileDownloadUrl } from './course'

const CENTER_ROLE = 'EDUCATION_CENTER'

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

function mapApiCourseToDetail(apiCourse) {
  if (!apiCourse) return null
  const d = apiCourse.publishTime ? new Date(apiCourse.publishTime) : null
  const dateStr = d ? `${d.getFullYear()}.${String(d.getMonth() + 1).padStart(2, '0')}.${String(d.getDate()).padStart(2, '0')}` : ''
  const filePaths = apiCourse.filePaths || []
  const firstFile = filePaths[0]
  return {
    id: apiCourse.id,
    title: apiCourse.title,
    date: dateStr,
    content: apiCourse.contentHtml,
    contentHtml: apiCourse.contentHtml,
    images: apiCourse.imageUrls || apiCourse.image_urls || [],
    downloadFilePath: firstFile || undefined,
    downloadFileName: firstFile ? getFileNameFromPath(firstFile) : undefined
  }
}

function convertUrlsToLinks(html) {
  if (!html) return ''
  let processed = html
  const linkPlaceholders = []
  processed = processed.replace(/<a[^>]*>(.*?)<\/a>/gi, (match) => {
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
 * 熱門課程詳情（教推中心）
 * @param {Ref<number>|ComputedRef<number>|number|function} id - 課程 ID
 * @param {Object} [options] - { stateCourse: 從 router state 傳入的 course 物件，可省略 }
 */
export function useCourseDetail(id, options = {}) {
  const course = ref(null)
  const loading = ref(true)
  const loadFailed = ref(false)
  const modalImage = ref(null)

  const processedContent = computed(() => {
    if (!course.value) return ''
    const raw = course.value.content ?? course.value.contentHtml
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
    course.value = null
    if (Number.isNaN(idNum)) {
      loadFailed.value = true
      loading.value = false
      return
    }
    const state = window.history.state
    if (state?.course && (state.course.id === idNum || state.course.id === String(idNum))) {
      course.value = mapApiCourseToDetail(state.course)
      loading.value = false
      return
    }
    if (options.stateCourse && (options.stateCourse.id === idNum || options.stateCourse.id === String(idNum))) {
      course.value = mapApiCourseToDetail(options.stateCourse)
      loading.value = false
      return
    }
    try {
      const res = await getPublicCourses(CENTER_ROLE)
      const list = Array.isArray(res) ? res : (res?.data ?? []) || []
      const found = list.find((c) => c.id === idNum || c.id === String(idNum))
      if (found) {
        course.value = mapApiCourseToDetail(found)
      } else {
        loadFailed.value = true
      }
    } catch {
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
      const blob = await downloadCourseFile(filePath)
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
      window.open(getCourseFileDownloadUrl(filePath), '_blank')
    }
  }

  return {
    course,
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

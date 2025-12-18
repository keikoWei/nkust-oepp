<template>
  <div class="news-management-page">
    <!-- 消息列表 -->
    <div class="table-container">
      <table class="data-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>標題</th>
            <th>內容預覽</th>
            <th>圖片數量</th>
            <th>檔案數量</th>
            <th>排序</th>
            <th>狀態</th>
            <th>公開時間</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="news in filteredNews" :key="news.id">
            <td>{{ news.id }}</td>
            <td>{{ news.title }}</td>
            <td>
              <button class="preview-btn" @click="openContentPreview(news)">查看內容</button>
            </td>
            <td>{{ news.imageUrls ? news.imageUrls.length : 0 }}</td>
            <td>{{ news.filePaths ? news.filePaths.length : 0 }}</td>
            <td>{{ news.sortOrder }}</td>
            <td>
              <label class="toggle-switch">
                <input
                  type="checkbox"
                  :checked="news.isEnabled"
                  @change="handleToggleStatus(news)"
                />
                <span class="toggle-slider"></span>
                <span class="toggle-label">{{ news.isEnabled ? '啟用' : '停用' }}</span>
              </label>
            </td>
            <td>{{ formatDateTime(news.publishTime) }}</td>
            <td>
              <button class="modify-btn" @click="handleEdit(news)">修改</button>
              <button class="delete-btn" @click="handleDelete(news)">刪除</button>
            </td>
          </tr>
          <tr v-if="filteredNews.length === 0">
            <td colspan="9" class="empty-message">目前沒有消息</td>
          </tr>
        </tbody>
      </table>
    </div>
    
    <!-- 分頁控制 -->
    <div class="pagination-container">
      <button
        class="page-btn"
        :disabled="currentPage === 1"
        @click="goToPage(currentPage - 1)"
      >
        上一頁
      </button>
      <span class="page-info">第 {{ currentPage }} 頁</span>
      <button
        class="page-btn"
        :disabled="currentPage === totalPages"
        @click="goToPage(currentPage + 1)"
      >
        下一頁
      </button>
      <button class="refresh-btn" @click="loadNews">刷新</button>
    </div>

    <!-- 新增/編輯消息模態框 -->
    <div class="modal-overlay" v-if="showModal" @click="closeModal">
      <div class="modal-content large-modal" @click.stop>
        <div class="modal-header">
          <h3>{{ editingNews ? '編輯消息' : '新增消息' }}</h3>
          <button class="close-btn" @click="closeModal">×</button>
        </div>
        <form @submit.prevent="handleSubmit" class="modal-form">
          <div class="form-group">
            <label>標題 <span class="required">*</span></label>
            <input
              v-model="form.title"
              type="text"
              placeholder="請輸入消息標題"
              required
            />
          </div>

          <div class="form-group">
            <label>內容 <span class="required">*</span></label>
            <Editor
              api-key="q4x1cg4t1gyoigcv3xwxyg0tzl5unehwe0dvihlqqj1yl051"
              v-model="form.contentHtml"
              :init="editorConfig"
            />
          </div>

          <div class="form-group">
            <label>圖片</label>
            <input
              type="file"
              accept="image/*"
              multiple
              @change="handleImagesChange"
              ref="imageInput"
            />
            <div v-if="imagePreviews.length > 0 || (editingNews && editingNews.imageUrls && editingNews.imageUrls.length > 0)" class="images-preview">
              <div
                v-for="(preview, index) in imagePreviews"
                :key="`new-${index}`"
                class="image-item"
              >
                <img :src="preview.url" alt="預覽" />
                <button type="button" class="remove-image-btn" @click="removeNewImage(index)">×</button>
                <div class="sync-carousel-checkbox">
                  <label class="checkbox-label">
                    <input
                      type="checkbox"
                      v-model="preview.syncToCarousel"
                    />
                    <span>同步至輪播圖</span>
                  </label>
                </div>
              </div>
              <div
                v-for="(imageUrl, index) in (editingNews ? editingNews.imageUrls : [])"
                :key="`existing-${index}`"
                class="image-item"
                v-if="!imageUrlsToRemove.includes(imageUrl)"
              >
                <img :src="imageUrl" alt="現有圖片" />
                <button type="button" class="remove-image-btn" @click="markImageForRemoval(imageUrl)">×</button>
                <span class="image-label">現有</span>
              </div>
            </div>
          </div>

          <div class="form-group">
            <label>檔案</label>
            <input
              type="file"
              accept=".pdf,.doc,.docx,.xls,.xlsx"
              multiple
              @change="handleFilesChange"
              ref="fileInput"
            />
            <div v-if="selectedFiles.length > 0 || (editingNews && editingNews.filePaths && editingNews.filePaths.length > 0)" class="files-preview">
              <div
                v-for="(file, index) in selectedFiles"
                :key="`new-file-${index}`"
                class="file-item"
              >
                <span>{{ file.name }}</span>
                <button type="button" class="remove-file-btn" @click="removeNewFile(index)">×</button>
              </div>
              <div
                v-for="(filePath, index) in (editingNews ? editingNews.filePaths : [])"
                :key="`existing-file-${index}`"
                class="file-item"
                v-if="!filePathsToRemove.includes(filePath)"
              >
                <span>{{ getFileName(filePath) }}</span>
                <button type="button" class="remove-file-btn" @click="markFileForRemoval(filePath)">×</button>
                <span class="file-label">現有</span>
              </div>
            </div>
          </div>

          <div class="form-group">
            <label>排序順序</label>
            <input
              v-model.number="form.sortOrder"
              type="number"
              min="0"
              placeholder="0"
            />
          </div>

          <div class="form-group">
            <label>公開時間</label>
            <input
              v-model="form.publishTime"
              type="datetime-local"
            />
            <small class="form-hint">留空表示立即公開</small>
          </div>

          <div class="form-group">
            <label class="checkbox-label">
              <input
                v-model="form.isEnabled"
                type="checkbox"
              />
              <span>啟用</span>
            </label>
          </div>

          <div v-if="errorMessage" class="error-message">
            {{ errorMessage }}
          </div>

          <div class="modal-actions">
            <button type="button" class="cancel-btn" @click="closeModal">取消</button>
            <button type="submit" class="submit-btn" :disabled="loading">
              {{ loading ? '處理中...' : (editingNews ? '更新' : '新增') }}
            </button>
          </div>
        </form>
      </div>
    </div>

    <!-- 內容預覽彈出視窗 -->
    <div class="modal-overlay" v-if="showPreviewModal" @click="closeContentPreview">
      <div class="modal-content preview-modal" @click.stop>
        <div class="modal-header">
          <h3>{{ previewNews?.title || '內容預覽' }}</h3>
          <button class="close-btn" @click="closeContentPreview">×</button>
        </div>
        <div class="preview-content" v-html="previewNews?.contentHtml || ''"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import { createNews, updateNews, deleteNews, getAllNews } from '@/api/news'
import { createCarousel } from '@/api/carousel'
import Editor from '@tinymce/tinymce-vue'


const route = useRoute()

// 根據路由取得當前中心角色
const getCurrentCenterRole = () => {
  const pathParts = route.path.split('/')
  const center = pathParts[2] // /dashboard/center/tab
  
  const centerRoleMap = {
    'oceom': 'HEADQUARTERS',
    'eec': 'EDUCATION_CENTER',
    'epc': 'EXHIBITION_CENTER',
    'ppc': 'PRODUCT_CENTER',
    'com': 'MANAGEMENT_CENTER'
  }
  
  return centerRoleMap[center] || 'HEADQUARTERS'
}

const currentCenterRole = computed(() => getCurrentCenterRole())

const newsList = ref([])
const currentPage = ref(1)
const itemsPerPage = 10
const searchQuery = ref('')
const showModal = ref(false)
const editingNews = ref(null)
const showPreviewModal = ref(false)
const previewNews = ref(null)
const loading = ref(false)
const errorMessage = ref('')
const imagePreviews = ref([])
const selectedImageFiles = ref([])
const selectedFiles = ref([])
const imageUrlsToRemove = ref([])
const filePathsToRemove = ref([])
const imageInput = ref(null)
const fileInput = ref(null)

const form = ref({
  title: '',
  contentHtml: '',
  sortOrder: 0,
  isEnabled: true,
  publishTime: ''
})

// TinyMCE 編輯器配置（參考官方範例）
const editorConfig = {
  toolbar_mode: 'sliding',
  height: 400,
  menubar: false,
  plugins: [
    // Core editing features
    'anchor', 'autolink', 'charmap', 'codesample', 'emoticons', 'link', 'lists', 'media', 'searchreplace', 'table', 'visualblocks', 'wordcount',
    // Additional features for news management
    'image', 'code', 'fullscreen', 'insertdatetime', 'preview', 'help'
  ],
  toolbar: 'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | forecolor backcolor | link image media table | align lineheight | checklist numlist bullist indent outdent | emoticons charmap | removeformat | code fullscreen | help',
  content_style: 'body { font-family: "GenYoGothic TW", "源樣黑體", "Microsoft JhengHei", sans-serif; font-size: 14pt; }',
  font_size_formats: '8pt 10pt 12pt 14pt 16pt 18pt 24pt 36pt 48pt',
  font_family_formats: 'GenYoGothic TW="GenYoGothic TW", "源樣黑體", "Microsoft JhengHei", sans-serif; Microsoft JhengHei="Microsoft JhengHei", sans-serif; Arial=arial,helvetica,sans-serif; Courier New=courier new,courier,monospace; Georgia=georgia,palatino,serif; Tahoma=tahoma,arial,helvetica,sans-serif; Times New Roman=Times New Roman,times,serif; Verdana=verdana,geneva,sans-serif',
  branding: false,
  promotion: false
}

// 處理編輯器內容變化
const handleContentChange = (content) => {
  form.value.contentHtml = content
}

// 根據搜尋和中心角色過濾消息
const filteredNews = computed(() => {
  // 先過濾當前中心的消息
  let filtered = newsList.value.filter(news => 
    news.centerRole === currentCenterRole.value
  )

  // 再根據搜尋條件過濾
  if (searchQuery.value) {
    const query = searchQuery.value.toLowerCase()
    filtered = filtered.filter(news => 
      news.title.toLowerCase().includes(query) ||
      (news.contentHtml && news.contentHtml.toLowerCase().includes(query))
    )
  }

  // 分頁
  const start = (currentPage.value - 1) * itemsPerPage
  const end = start + itemsPerPage
  return filtered.slice(start, end)
})

const totalPages = computed(() => {
  // 先過濾當前中心的消息
  let filtered = newsList.value.filter(news => 
    news.centerRole === currentCenterRole.value
  )
  
  // 再根據搜尋條件過濾
  if (searchQuery.value) {
    const query = searchQuery.value.toLowerCase()
    filtered = filtered.filter(news => 
      news.title.toLowerCase().includes(query) ||
      (news.contentHtml && news.contentHtml.toLowerCase().includes(query))
    )
  }
  
  return Math.ceil(filtered.length / itemsPerPage)
})

// 載入消息列表
const loadNews = async () => {
  try {
    loading.value = true
    newsList.value = await getAllNews()
  } catch (error) {
    console.error('載入消息失敗:', error)
    errorMessage.value = error.message || '載入失敗'
  } finally {
    loading.value = false
  }
}

// 處理圖片選擇
const handleImagesChange = (event) => {
  const files = Array.from(event.target.files)
  files.forEach(file => {
    selectedImageFiles.value.push(file)
    const reader = new FileReader()
    reader.onload = (e) => {
      imagePreviews.value.push({ 
        url: e.target.result, 
        file,
        syncToCarousel: false // 預設不勾選
      })
    }
    reader.readAsDataURL(file)
  })
}

// 處理檔案選擇
const handleFilesChange = (event) => {
  const files = Array.from(event.target.files)
  selectedFiles.value.push(...files)
}

// 移除新上傳的圖片
const removeNewImage = (index) => {
  imagePreviews.value.splice(index, 1)
  selectedImageFiles.value.splice(index, 1)
}

// 標記現有圖片為刪除
const markImageForRemoval = (imageUrl) => {
  if (!imageUrlsToRemove.value.includes(imageUrl)) {
    imageUrlsToRemove.value.push(imageUrl)
  }
}

// 移除新上傳的檔案
const removeNewFile = (index) => {
  selectedFiles.value.splice(index, 1)
}

// 標記現有檔案為刪除
const markFileForRemoval = (filePath) => {
  if (!filePathsToRemove.value.includes(filePath)) {
    filePathsToRemove.value.push(filePath)
  }
}

// 開啟編輯模態框
const handleEdit = (news) => {
  editingNews.value = news
  form.value = {
    title: news.title,
    contentHtml: news.contentHtml,
    sortOrder: news.sortOrder,
    isEnabled: news.isEnabled,
    publishTime: news.publishTime ? formatDateTimeLocal(news.publishTime) : ''
  }
  imagePreviews.value = []
  selectedImageFiles.value = []
  selectedFiles.value = []
  imageUrlsToRemove.value = []
  filePathsToRemove.value = []
  showModal.value = true
}

// 開啟新增模態框
const handleAdd = () => {
  editingNews.value = null
  form.value = {
    title: '',
    contentHtml: '',
    sortOrder: 0,
    isEnabled: true,
    publishTime: ''
  }
  imagePreviews.value = []
  selectedImageFiles.value = []
  selectedFiles.value = []
  imageUrlsToRemove.value = []
  filePathsToRemove.value = []
  errorMessage.value = ''
  showModal.value = true
}

// 關閉模態框
const closeModal = () => {
  showModal.value = false
  editingNews.value = null
  form.value = {
    title: '',
    contentHtml: '',
    sortOrder: 0,
    isEnabled: true,
    publishTime: ''
  }
  imagePreviews.value = []
  selectedImageFiles.value = []
  selectedFiles.value = []
  imageUrlsToRemove.value = []
  filePathsToRemove.value = []
  errorMessage.value = ''
  syncToCarousel.value = false
  if (imageInput.value) imageInput.value.value = ''
  if (fileInput.value) fileInput.value.value = ''
}

// 打開內容預覽視窗
const openContentPreview = (news) => {
  previewNews.value = news
  showPreviewModal.value = true
}

// 關閉內容預覽視窗
const closeContentPreview = () => {
  showPreviewModal.value = false
  previewNews.value = null
}

// 提交表單
const handleSubmit = async () => {
  try {
    loading.value = true
    errorMessage.value = ''

    const formData = new FormData()
    formData.append('title', form.value.title)
    formData.append('centerRole', currentCenterRole.value)
    formData.append('contentHtml', form.value.contentHtml)
    
    // 添加新圖片
    selectedImageFiles.value.forEach(file => {
      formData.append('images', file)
    })
    
    // 添加新檔案
    selectedFiles.value.forEach(file => {
      formData.append('files', file)
    })
    
    // 刪除圖片
    if (imageUrlsToRemove.value.length > 0) {
      formData.append('imageUrlsToRemove', JSON.stringify(imageUrlsToRemove.value))
    }
    
    // 刪除檔案
    if (filePathsToRemove.value.length > 0) {
      formData.append('filePathsToRemove', JSON.stringify(filePathsToRemove.value))
    }
    
    formData.append('sortOrder', form.value.sortOrder.toString())
    formData.append('isEnabled', form.value.isEnabled.toString())
    
    if (form.value.publishTime) {
      formData.append('publishTime', new Date(form.value.publishTime).toISOString())
    }

    if (editingNews.value) {
      // 更新
      await updateNews(editingNews.value.id, formData)
    } else {
      // 新增
      await createNews(formData)
    }

    // 為勾選的圖片創建輪播圖
    const imagesToSync = imagePreviews.value.filter(preview => preview.syncToCarousel)
    if (imagesToSync.length > 0) {
      try {
        // 為每張勾選的圖片創建輪播圖
        for (const preview of imagesToSync) {
          const carouselFormData = new FormData()
          carouselFormData.append('title', form.value.title)
          carouselFormData.append('centerRole', currentCenterRole.value)
          carouselFormData.append('image', preview.file)
          carouselFormData.append('clickUrl', '') // 可以留空或設置為消息詳情頁的連結
          carouselFormData.append('sortOrder', '0')
          carouselFormData.append('isEnabled', 'true')
          
          await createCarousel(carouselFormData)
        }
      } catch (carouselError) {
        console.error('同步新增輪播圖失敗:', carouselError)
        // 不阻止消息的創建，只記錄錯誤
      }
    }

    // 重新載入列表
    await loadNews()
    closeModal()
  } catch (error) {
    console.error('提交失敗:', error)
    errorMessage.value = error.message || '操作失敗'
  } finally {
    loading.value = false
  }
}

// 刪除消息
const handleDelete = async (news) => {
  if (!confirm(`確定要刪除「${news.title}」嗎？`)) {
    return
  }

  try {
    loading.value = true
    await deleteNews(news.id)
    await loadNews()
  } catch (error) {
    console.error('刪除失敗:', error)
    alert(error.message || '刪除失敗')
  } finally {
    loading.value = false
  }
}

// 切換啟用狀態
const handleToggleStatus = async (news) => {
  try {
    const formData = new FormData()
    formData.append('isEnabled', (!news.isEnabled).toString())
    
    await updateNews(news.id, formData)
    await loadNews()
  } catch (error) {
    console.error('更新狀態失敗:', error)
    alert(error.message || '更新失敗')
    await loadNews()
  }
}

// 分頁
const goToPage = (page) => {
  if (page >= 1 && page <= totalPages.value) {
    currentPage.value = page
  }
}

// 格式化日期時間
const formatDateTime = (dateTime) => {
  if (!dateTime) return '立即公開'
  const date = new Date(dateTime)
  return date.toLocaleString('zh-TW', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit'
  })
}

// 格式化為 datetime-local 格式
const formatDateTimeLocal = (dateTime) => {
  if (!dateTime) return ''
  const date = new Date(dateTime)
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const day = String(date.getDate()).padStart(2, '0')
  const hours = String(date.getHours()).padStart(2, '0')
  const minutes = String(date.getMinutes()).padStart(2, '0')
  return `${year}-${month}-${day}T${hours}:${minutes}`
}

// 取得內容預覽
const getContentPreview = (contentHtml) => {
  if (!contentHtml) return ''
  // 移除 HTML 標籤，只保留文字
  const div = document.createElement('div')
  div.innerHTML = contentHtml
  const text = div.textContent || div.innerText || ''
  return text.length > 50 ? text.substring(0, 50) + '...' : text
}

// 取得檔案名稱
const getFileName = (filePath) => {
  return filePath.split('/').pop() || filePath
}

// 監聽搜尋變化，重置到第一頁
watch(searchQuery, () => {
  currentPage.value = 1
})

// 監聽路由變化，當切換中心時重新載入資料
watch(() => route.path, () => {
  currentPage.value = 1
  loadNews()
})

// 監聽父組件的新增事件
defineExpose({
  handleAdd
})

// 搜尋事件處理器
const searchHandler = (event) => {
  searchQuery.value = event.detail || ''
}

// 監聽來自 DashboardPage 的事件
onMounted(() => {
  loadNews()
  
  // 監聽自定義事件來開啟新增模態框
  window.addEventListener('open-news-modal', handleAdd)
  
  // 監聽搜尋事件
  window.addEventListener('news-search', searchHandler)
})

// 清理事件監聽器
onUnmounted(() => {
  window.removeEventListener('open-news-modal', handleAdd)
  window.removeEventListener('news-search', searchHandler)
  
  // 清理 TinyMCE 實例
  if (tinymce) {
    tinymce.remove()
  }
})
</script>

<style scoped>
.news-management-page {
  width: 100%;
}

.table-container {
  overflow-x: auto;
  margin-bottom: 20px;
}

.data-table {
  width: 100%;
  border-collapse: collapse;
  font-family: "GenYoGothic TW", "Microsoft JhengHei", sans-serif;
}

.data-table thead {
  background-color: #f8f8f8;
}

.data-table th {
  padding: 12px;
  text-align: left;
  font-weight: 600;
  color: #534741;
  border-bottom: 2px solid #e3d9cd;
  font-size: 14px;
}

.data-table td {
  padding: 12px;
  border-bottom: 1px solid #e8e8e8;
  font-size: 14px;
  color: #333;
}

.data-table tbody tr:hover {
  background-color: #f9f9f9;
}

.preview-btn {
  background-color: #534741;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 6px 12px;
  cursor: pointer;
  font-size: 13px;
  font-family: "GenYoGothic TW", "Microsoft JhengHei", sans-serif;
  transition: background-color 0.3s;
}

.preview-btn:hover {
  background-color: #3d332f;
}

.toggle-switch {
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
}

.toggle-switch input {
  display: none;
}

.toggle-slider {
  position: relative;
  width: 44px;
  height: 24px;
  background-color: #ccc;
  border-radius: 24px;
  transition: background-color 0.3s;
}

.toggle-slider::before {
  content: '';
  position: absolute;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background-color: white;
  top: 3px;
  left: 3px;
  transition: transform 0.3s;
}

.toggle-switch input:checked + .toggle-slider {
  background-color: #4CAF50;
}

.toggle-switch input:checked + .toggle-slider::before {
  transform: translateX(20px);
}

.toggle-label {
  font-size: 14px;
  color: #333;
  font-family: "GenYoGothic TW", "Microsoft JhengHei", sans-serif;
}

.modify-btn {
  padding: 6px 12px;
  background-color: #534741;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  transition: background-color 0.3s;
  font-family: "GenYoGothic TW", "Microsoft JhengHei", sans-serif;
  margin-right: 8px;
}

.modify-btn:hover {
  background-color: #3d3329;
}

.delete-btn {
  padding: 6px 12px;
  background-color: #f44336;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  transition: background-color 0.3s;
  font-family: "GenYoGothic TW", "Microsoft JhengHei", sans-serif;
}

.delete-btn:hover {
  background-color: #d32f2f;
}

.empty-message {
  text-align: center;
  padding: 40px;
  color: #999;
  font-size: 16px;
}

.pagination-container {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 15px;
  margin-top: 20px;
}

.page-btn {
  padding: 8px 16px;
  background-color: #f5f5f5;
  color: #666;
  border: 1px solid #e3d9cd;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  transition: all 0.3s;
  font-family: "GenYoGothic TW", "Microsoft JhengHei", sans-serif;
}

.page-btn:hover:not(:disabled) {
  background-color: #e8e8e8;
}

.page-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.page-info {
  font-size: 14px;
  color: #666;
  font-family: "GenYoGothic TW", "Microsoft JhengHei", sans-serif;
}

.refresh-btn {
  padding: 8px 20px;
  background-color: #FFC107;
  color: #333;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  transition: background-color 0.3s;
  font-family: "GenYoGothic TW", "Microsoft JhengHei", sans-serif;
}

.refresh-btn:hover {
  background-color: #FFB300;
}

/* 模態框樣式 */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.modal-content {
  background: white;
  border-radius: 8px;
  width: 90%;
  max-width: 600px;
  max-height: 90vh;
  overflow-y: auto;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
}

.large-modal {
  max-width: 900px;
}

.preview-modal {
  max-width: 1000px;
  width: 95%;
}

.preview-content {
  padding: 20px;
  max-height: 70vh;
  overflow-y: auto;
  font-family: "GenYoGothic TW", "源樣黑體", "Microsoft JhengHei", sans-serif;
  line-height: 1.6;
  color: #333;
}

.preview-content img {
  max-width: 100%;
  height: auto;
  margin: 10px 0;
}

.preview-content p {
  margin: 10px 0;
}

.preview-content table {
  width: 100%;
  border-collapse: collapse;
  margin: 15px 0;
}

.preview-content table td,
.preview-content table th {
  border: 1px solid #ddd;
  padding: 8px;
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  border-bottom: 1px solid #e3d9cd;
}

.modal-header h3 {
  margin: 0;
  font-size: 20px;
  color: #534741;
  font-family: "GenYoGothic TW", "Microsoft JhengHei", sans-serif;
}

.close-btn {
  background: none;
  border: none;
  font-size: 28px;
  color: #999;
  cursor: pointer;
  padding: 0;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: all 0.3s;
}

.close-btn:hover {
  background-color: #f5f5f5;
  color: #534741;
}

.modal-form {
  padding: 20px;
}

.form-group {
  margin-bottom: 20px;
}

.form-group label {
  display: block;
  margin-bottom: 8px;
  font-size: 14px;
  color: #534741;
  font-weight: 500;
  font-family: "GenYoGothic TW", "Microsoft JhengHei", sans-serif;
}

.required {
  color: #f44336;
}

.form-hint {
  display: block;
  margin-top: 5px;
  font-size: 12px;
  color: #999;
  font-family: "GenYoGothic TW", "Microsoft JhengHei", sans-serif;
}

.form-group input[type="text"],
.form-group input[type="number"],
.form-group input[type="datetime-local"],
.form-group textarea,
.form-group select {
  width: 100%;
  padding: 10px;
  border: 2px solid #e3d9cd;
  border-radius: 6px;
  font-size: 14px;
  transition: border-color 0.3s;
  font-family: "GenYoGothic TW", "Microsoft JhengHei", sans-serif;
  box-sizing: border-box;
}

.form-group input:focus,
.form-group textarea:focus,
.form-group select:focus {
  outline: none;
  border-color: #534741;
}

/* TinyMCE 編輯器樣式 */
:deep(.tox-tinymce) {
  border: 2px solid #e3d9cd !important;
  border-radius: 6px;
}

:deep(.tox-tinymce:focus-within) {
  border-color: #534741 !important;
}

:deep(.tox-edit-area__iframe) {
  background-color: white;
}

.form-group input[type="file"] {
  width: 100%;
  padding: 10px;
  border: 2px solid #e3d9cd;
  border-radius: 6px;
  font-size: 14px;
  font-family: "GenYoGothic TW", "Microsoft JhengHei", sans-serif;
}

.images-preview {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 10px;
}

.image-item {
  position: relative;
  width: 120px;
  height: 120px;
  border: 1px solid #e3d9cd;
  border-radius: 6px;
  overflow: hidden;
}

.image-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.remove-image-btn {
  position: absolute;
  top: 5px;
  right: 5px;
  background-color: rgba(244, 67, 54, 0.9);
  color: white;
  border: none;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  cursor: pointer;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s;
}

.remove-image-btn:hover {
  background-color: #d32f2f;
}

.image-label {
  position: absolute;
  bottom: 5px;
  left: 5px;
  background-color: #534741;
  color: white;
  padding: 2px 4px;
  border-radius: 4px;
  font-size: 10px;
  font-weight: 500;
  font-family: "GenYoGothic TW", "Microsoft JhengHei", sans-serif;
  white-space: nowrap;
}

.files-preview {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 10px;
}

.file-item {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px;
  background-color: #f5f5f5;
  border-radius: 6px;
  font-size: 14px;
  font-family: "GenYoGothic TW", "Microsoft JhengHei", sans-serif;
}

.file-item > span:not(.file-label) {
  flex: 1;
  color: #333;
}

.remove-file-btn {
  background-color: #f44336;
  color: white;
  border: none;
  border-radius: 4px;
  width: 24px;
  height: 24px;
  cursor: pointer;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s;
}

.remove-file-btn:hover {
  background-color: #d32f2f;
}

.file-label {
  background-color: #534741 !important;
  color: white !important;
  padding: 3px 6px;
  border-radius: 4px;
  font-size: 11px;
  font-weight: 600;
  white-space: nowrap;
  font-family: "GenYoGothic TW", "Microsoft JhengHei", sans-serif;
  flex: none;
  display: inline-block;
  min-width: auto;
}

.sync-carousel-checkbox {
  position: absolute;
  bottom: 5px;
  right: 5px;
  background-color: rgba(255, 255, 255, 0.9);
  padding: 4px 8px;
  border-radius: 4px;
  z-index: 10;
}

.sync-carousel-checkbox .checkbox-label {
  margin: 0;
  font-size: 11px;
  white-space: nowrap;
}

.sync-carousel-checkbox .checkbox-label span {
  color: #534741;
  font-weight: 500;
}

.checkbox-label {
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
}

.checkbox-label input[type="checkbox"] {
  width: auto;
  cursor: pointer;
}

.error-message {
  padding: 12px;
  background-color: #fee;
  border: 1px solid #fcc;
  border-radius: 6px;
  color: #c33;
  font-size: 14px;
  margin-bottom: 15px;
  font-family: "GenYoGothic TW", "Microsoft JhengHei", sans-serif;
}

.modal-actions {
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  margin-top: 20px;
  padding-top: 20px;
  border-top: 1px solid #e3d9cd;
}

.cancel-btn {
  padding: 10px 20px;
  background-color: #f5f5f5;
  color: #666;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 14px;
  transition: background-color 0.3s;
  font-family: "GenYoGothic TW", "Microsoft JhengHei", sans-serif;
}

.cancel-btn:hover {
  background-color: #e8e8e8;
}

.submit-btn {
  padding: 10px 20px;
  background-color: #534741;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  transition: background-color 0.3s;
  font-family: "GenYoGothic TW", "Microsoft JhengHei", sans-serif;
}

.submit-btn:hover:not(:disabled) {
  background-color: #3d3329;
}

.submit-btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}
</style>

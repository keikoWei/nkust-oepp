<template>
  <div class="hot-courses-management-page">
    <!-- 課程列表 -->
    <div class="table-container">
      <table class="data-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>主圖片</th>
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
          <tr v-for="course in filteredCourses" :key="course.id">
            <td>{{ course.id }}</td>
            <td>
              <img 
                v-if="course.mainImageUrl" 
                :src="course.mainImageUrl" 
                alt="主圖" 
                class="table-thumbnail"
                @click="openImageModal(course.mainImageUrl)"
              />
            </td>
            <td>{{ course.title }}</td>
            <td>
              <button class="preview-btn" @click="openContentPreview(course)">查看內容</button>
            </td>
            <td>{{ course.imageUrls ? course.imageUrls.length : 0 }}</td>
            <td>{{ course.filePaths ? course.filePaths.length : 0 }}</td>
            <td>{{ course.sortOrder }}</td>
            <td>
              <label class="toggle-switch">
                <input
                  type="checkbox"
                  :checked="course.isEnabled"
                  @change="handleToggleStatus(course)"
                />
                <span class="toggle-slider"></span>
                <span class="toggle-label">{{ course.isEnabled ? '啟用' : '停用' }}</span>
              </label>
            </td>
            <td>{{ formatDateTime(course.publishTime) }}</td>
            <td>
              <button class="modify-btn" @click="handleEdit(course)">修改</button>
              <button class="delete-btn" @click="handleDelete(course)">刪除</button>
            </td>
          </tr>
          <tr v-if="filteredCourses.length === 0">
            <td colspan="10" class="empty-message">目前沒有課程</td>
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
      <button class="refresh-btn" @click="loadCourses">刷新</button>
    </div>

    <!-- 新增/編輯課程模態框 -->
    <div class="modal-overlay" v-if="showModal" @click="closeModal">
      <div class="modal-content large-modal" @click.stop>
        <div class="modal-header">
          <h3>{{ editingCourse ? '編輯課程' : '新增課程' }}</h3>
          <button class="close-btn" @click="closeModal">×</button>
        </div>
        <form @submit.prevent="handleSubmit" class="modal-form">
          <div class="form-group">
            <label>標題 <span class="required">*</span></label>
            <input
              v-model="form.title"
              type="text"
              placeholder="請輸入課程標題"
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
            <label>主圖片 <span class="required" v-if="!editingCourse">*</span></label>
            <input
              type="file"
              accept="image/*"
              @change="handleMainImageChange"
              ref="mainImageInput"
              :required="!editingCourse"
            />
            <small class="form-hint">課程的主要展示圖片（必填）</small>
            <div v-if="mainImagePreview || (editingCourse && editingCourse.mainImageUrl)" class="main-image-preview">
              <img :src="mainImagePreview || editingCourse.mainImageUrl" alt="主圖片預覽" />
              <button v-if="mainImagePreview" type="button" class="remove-image-btn" @click="removeMainImage">×</button>
              <span v-if="!mainImagePreview && editingCourse" class="image-label">現有</span>
            </div>
          </div>

          <div class="form-group">
            <label>其他圖片</label>
            <input
              type="file"
              accept="image/*"
              multiple
              @change="handleImagesChange"
              ref="imageInput"
            />
            <small class="form-hint">可上傳多張圖片</small>
            <div v-if="imagePreviews.length > 0 || (editingCourse && editingCourse.imageUrls && editingCourse.imageUrls.length > 0)" class="images-preview">
              <div
                v-for="(preview, index) in imagePreviews"
                :key="`new-${index}`"
                class="image-item"
              >
                <img :src="preview.url" alt="預覽" />
                <button type="button" class="remove-image-btn" @click="removeNewImage(index)">×</button>
              </div>
              <div
                v-for="(imageUrl, index) in (editingCourse ? editingCourse.imageUrls : [])"
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
            <small class="form-hint">可上傳 PDF、Word、Excel 文件</small>
            <div v-if="selectedFiles.length > 0 || (editingCourse && editingCourse.filePaths && editingCourse.filePaths.length > 0)" class="files-preview">
              <div
                v-for="(file, index) in selectedFiles"
                :key="`new-file-${index}`"
                class="file-item"
              >
                <span>{{ file.name }}</span>
                <button type="button" class="remove-file-btn" @click="removeNewFile(index)">×</button>
              </div>
              <div
                v-for="(filePath, index) in (editingCourse ? editingCourse.filePaths : [])"
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
              {{ loading ? '處理中...' : (editingCourse ? '更新' : '新增') }}
            </button>
          </div>
        </form>
      </div>
    </div>

    <!-- 內容預覽彈出視窗 -->
    <div class="modal-overlay" v-if="showPreviewModal" @click="closeContentPreview">
      <div class="modal-content preview-modal" @click.stop>
        <div class="modal-header">
          <h3>{{ previewCourse?.title || '內容預覽' }}</h3>
          <button class="close-btn" @click="closeContentPreview">×</button>
        </div>
        <div class="preview-content" v-html="previewCourse?.contentHtml || ''"></div>
      </div>
    </div>

    <!-- 圖片放大模態框 -->
    <div class="image-modal-overlay" v-if="modalImage" @click="closeImageModal">
      <div class="image-modal-content" @click.stop>
        <button class="image-close-btn" @click="closeImageModal">×</button>
        <img :src="modalImage" alt="放大圖片" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import { createCourse, updateCourse, deleteCourse, getAllCourses } from '@/api/course'
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

// 資料狀態
const coursesList = ref([])
const currentPage = ref(1)
const itemsPerPage = 10
const searchQuery = ref('')
const showModal = ref(false)
const showPreviewModal = ref(false)
const previewCourse = ref(null)
const editingCourse = ref(null)
const loading = ref(false)
const errorMessage = ref('')
const modalImage = ref(null)

// TinyMCE 配置
const editorConfig = {
  toolbar_mode: 'sliding',
  height: 400,
  menubar: false,
  plugins: [
    'anchor', 'autolink', 'charmap', 'codesample', 'emoticons', 'link', 'lists', 'media', 'searchreplace', 'table', 'visualblocks', 'wordcount',
    'image', 'code', 'fullscreen', 'insertdatetime', 'preview', 'help'
  ],
  toolbar: 'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | forecolor backcolor | link image media table | align lineheight | checklist numlist bullist indent outdent | emoticons charmap | removeformat | code fullscreen | help',
  content_style: 'body { font-family: "GenYoGothic TW", "Microsoft JhengHei", sans-serif; font-size: 14px; }',
  font_size_formats: '8pt 10pt 12pt 14pt 16pt 18pt 24pt 36pt 48pt',
  font_family_formats: 'GenYoGothic TW=GenYoGothic TW, 源樣夜黑體; Microsoft JhengHei=Microsoft JhengHei, 微軟正黑體; Arial=Arial, Helvetica, sans-serif; Times New Roman=Times New Roman, Times, serif',
  branding: false,
  promotion: false
}

// 表單狀態
const form = ref({
  title: '',
  contentHtml: '',
  sortOrder: 0,
  isEnabled: true,
  publishTime: ''
})

// 圖片和檔案狀態
const mainImagePreview = ref(null)
const selectedMainImageFile = ref(null)
const imagePreviews = ref([])
const selectedImageFiles = ref([])
const selectedFiles = ref([])
const imageUrlsToRemove = ref([])
const filePathsToRemove = ref([])

// 主圖片輸入參考
const mainImageInput = ref(null)
const imageInput = ref(null)
const fileInput = ref(null)

// 載入課程列表
const loadCourses = async () => {
  try {
    loading.value = true
    // 獲取所有課程，前端會根據當前中心角色過濾
    coursesList.value = await getAllCourses()
  } catch (error) {
    console.error('載入課程失敗:', error)
    errorMessage.value = error.message || '載入失敗'
  } finally {
    loading.value = false
  }
}

// 過濾後的課程列表（根據當前中心角色和搜尋關鍵字）
const filteredCourses = computed(() => {
  const currentCenterRole = getCurrentCenterRole()
  // 先過濾當前中心的課程
  let filtered = coursesList.value.filter(course => course.centerRole === currentCenterRole)
  
  // 再根據搜尋條件過濾
  if (searchQuery.value) {
    const query = searchQuery.value.toLowerCase()
    filtered = filtered.filter(course =>
      course.title.toLowerCase().includes(query) ||
      (course.contentHtml && course.contentHtml.toLowerCase().includes(query))
    )
  }
  
  // 依據ID排序，數字越大排序越前面（由新到舊）
  filtered.sort((a, b) => b.id - a.id)
  
  // 分頁
  const start = (currentPage.value - 1) * itemsPerPage
  const end = start + itemsPerPage
  return filtered.slice(start, end)
})

// 總頁數
const totalPages = computed(() => {
  const currentCenterRole = getCurrentCenterRole()
  // 先過濾當前中心的課程
  let filtered = coursesList.value.filter(course => course.centerRole === currentCenterRole)
  
  // 再根據搜尋條件過濾
  if (searchQuery.value) {
    const query = searchQuery.value.toLowerCase()
    filtered = filtered.filter(course =>
      course.title.toLowerCase().includes(query) ||
      (course.contentHtml && course.contentHtml.toLowerCase().includes(query))
    )
  }
  
  // 依據ID排序，數字越大排序越前面（由新到舊）
  filtered.sort((a, b) => b.id - a.id)
  
  return Math.ceil(filtered.length / itemsPerPage)
})

// 跳轉頁面
const goToPage = (page) => {
  if (page >= 1 && page <= totalPages.value) {
    currentPage.value = page
  }
}

// 格式化日期時間
const formatDateTime = (dateTime) => {
  if (!dateTime) return '立即公開'
  const date = new Date(dateTime)
  return date.toLocaleString('zh-TW')
}

// 從檔案路徑取得檔案名稱
const getFileName = (filePath) => {
  if (!filePath) return ''
  return filePath.split('/').pop()
}

// 處理主圖片變更
const handleMainImageChange = (event) => {
  const files = event.target.files
  if (files && files.length > 0) {
    const file = files[0]
    selectedMainImageFile.value = file
    
    const reader = new FileReader()
    reader.onload = (e) => {
      mainImagePreview.value = e.target.result
    }
    reader.readAsDataURL(file)
  }
}

// 移除主圖片
const removeMainImage = () => {
  mainImagePreview.value = null
  selectedMainImageFile.value = null
  if (mainImageInput.value) {
    mainImageInput.value.value = ''
  }
}

// 處理其他圖片變更
const handleImagesChange = (event) => {
  const files = event.target.files
  if (files) {
    for (let i = 0; i < files.length; i++) {
      const file = files[i]
      selectedImageFiles.value.push(file)
      
      const reader = new FileReader()
      reader.onload = (e) => {
        imagePreviews.value.push({
          url: e.target.result,
          file: file
        })
      }
      reader.readAsDataURL(file)
    }
  }
  
  // 清空 input
  if (imageInput.value) {
    imageInput.value.value = ''
  }
}

// 移除新圖片
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

// 處理檔案變更
const handleFilesChange = (event) => {
  const files = event.target.files
  if (files) {
    for (let i = 0; i < files.length; i++) {
      selectedFiles.value.push(files[i])
    }
  }
  
  // 清空 input
  if (fileInput.value) {
    fileInput.value.value = ''
  }
}

// 移除新檔案
const removeNewFile = (index) => {
  selectedFiles.value.splice(index, 1)
}

// 標記現有檔案為刪除
const markFileForRemoval = (filePath) => {
  if (!filePathsToRemove.value.includes(filePath)) {
    filePathsToRemove.value.push(filePath)
  }
}

// 打開內容預覽
const openContentPreview = (course) => {
  previewCourse.value = course
  showPreviewModal.value = true
}

// 關閉內容預覽
const closeContentPreview = () => {
  showPreviewModal.value = false
  previewCourse.value = null
}

// 打開圖片放大模態框
const openImageModal = (imageUrl) => {
  modalImage.value = imageUrl
}

// 關閉圖片放大模態框
const closeImageModal = () => {
  modalImage.value = null
}

// 切換狀態
const handleToggleStatus = async (course) => {
  try {
    const formData = new FormData()
    formData.append('isEnabled', (!course.isEnabled).toString())
    
    await updateCourse(course.id, formData)
    course.isEnabled = !course.isEnabled
  } catch (error) {
    console.error('切換狀態失敗:', error)
    alert(error.message || '切換狀態失敗')
  }
}

// 處理新增
const handleAdd = () => {
  editingCourse.value = null
  form.value = {
    title: '',
    contentHtml: '',
    sortOrder: 0,
    isEnabled: true,
    publishTime: ''
  }
  mainImagePreview.value = null
  selectedMainImageFile.value = null
  imagePreviews.value = []
  selectedImageFiles.value = []
  selectedFiles.value = []
  imageUrlsToRemove.value = []
  filePathsToRemove.value = []
  errorMessage.value = ''
  showModal.value = true
}

// 處理編輯
const handleEdit = (course) => {
  editingCourse.value = course
  form.value = {
    title: course.title,
    contentHtml: course.contentHtml,
    sortOrder: course.sortOrder,
    isEnabled: course.isEnabled,
    publishTime: course.publishTime ? new Date(course.publishTime).toISOString().slice(0, 16) : ''
  }
  mainImagePreview.value = null
  selectedMainImageFile.value = null
  imagePreviews.value = []
  selectedImageFiles.value = []
  selectedFiles.value = []
  imageUrlsToRemove.value = []
  filePathsToRemove.value = []
  errorMessage.value = ''
  showModal.value = true
}

// 處理刪除
const handleDelete = async (course) => {
  if (!confirm(`確定要刪除課程「${course.title}」嗎？`)) {
    return
  }
  
  try {
    loading.value = true
    await deleteCourse(course.id)
    await loadCourses()
    alert('刪除成功')
  } catch (error) {
    console.error('刪除失敗:', error)
    alert(error.message || '刪除失敗')
  } finally {
    loading.value = false
  }
}

// 處理提交
const handleSubmit = async () => {
  try {
    loading.value = true
    errorMessage.value = ''
    
    const formData = new FormData()
    formData.append('title', form.value.title)
    formData.append('centerRole', getCurrentCenterRole())
    formData.append('contentHtml', form.value.contentHtml)
    
    // 主圖片（創建時必填）
    if (selectedMainImageFile.value) {
      formData.append('mainImage', selectedMainImageFile.value)
    } else if (!editingCourse.value) {
      throw new Error('請選擇主圖片')
    }
    
    // 其他圖片
    for (let i = 0; i < selectedImageFiles.value.length; i++) {
      formData.append('images', selectedImageFiles.value[i])
    }
    
    // 檔案
    for (let i = 0; i < selectedFiles.value.length; i++) {
      formData.append('files', selectedFiles.value[i])
    }
    
    // 如果是編輯，添加要刪除的圖片和檔案
    if (editingCourse.value) {
      if (imageUrlsToRemove.value.length > 0) {
        formData.append('imageUrlsToRemove', JSON.stringify(imageUrlsToRemove.value))
      }
      if (filePathsToRemove.value.length > 0) {
        formData.append('filePathsToRemove', JSON.stringify(filePathsToRemove.value))
      }
    }
    
    formData.append('sortOrder', form.value.sortOrder.toString())
    formData.append('isEnabled', form.value.isEnabled.toString())
    
    if (form.value.publishTime) {
      const publishDate = new Date(form.value.publishTime)
      formData.append('publishTime', publishDate.toISOString())
    }
    
    if (editingCourse.value) {
      await updateCourse(editingCourse.value.id, formData)
      alert('更新成功')
    } else {
      await createCourse(formData)
      alert('新增成功')
    }
    
    closeModal()
    await loadCourses()
  } catch (error) {
    console.error('提交失敗:', error)
    errorMessage.value = error.message || '操作失敗'
  } finally {
    loading.value = false
  }
}

// 關閉模態框
const closeModal = () => {
  showModal.value = false
  editingCourse.value = null
  form.value = {
    title: '',
    contentHtml: '',
    sortOrder: 0,
    isEnabled: true,
    publishTime: ''
  }
  mainImagePreview.value = null
  selectedMainImageFile.value = null
  imagePreviews.value = []
  selectedImageFiles.value = []
  selectedFiles.value = []
  imageUrlsToRemove.value = []
  filePathsToRemove.value = []
  errorMessage.value = ''
}

// 監聽搜尋變化，重置到第一頁
watch(searchQuery, () => {
  currentPage.value = 1
})

// 監聽路由變化，當切換中心或模組時重新載入資料
watch(
  () => route.path,
  (newPath, oldPath) => {
    console.log('HotCoursesManagementPage route.path changed:', oldPath, '->', newPath)
    // 確保路徑真的變化了
    if (newPath !== oldPath && newPath.includes('/hot-courses')) {
      currentPage.value = 1
      coursesList.value = [] // 清空舊資料
      loadCourses()
    }
  }
)

// 搜尋事件處理器
const searchHandler = (event) => {
  searchQuery.value = event.detail || ''
}

// 監聽來自 DashboardPage 的事件
onMounted(() => {
  console.log('HotCoursesManagementPage mounted, path:', route.path)
  currentPage.value = 1
  coursesList.value = [] // 清空舊資料
  loadCourses()
  
  // 監聽自定義事件來開啟新增模態框
  window.addEventListener('open-hot-courses-modal', handleAdd)
  
  // 監聽搜尋事件
  window.addEventListener('hot-courses-search', searchHandler)
})

// 清理事件監聽器和狀態
onUnmounted(() => {
  console.log('HotCoursesManagementPage unmounted')
  window.removeEventListener('open-hot-courses-modal', handleAdd)
  window.removeEventListener('hot-courses-search', searchHandler)
  // 清理所有狀態
  coursesList.value = []
  currentPage.value = 1
  searchQuery.value = ''
  showModal.value = false
  editingCourse.value = null
  showPreviewModal.value = false
  previewCourse.value = null
  loading.value = false
  errorMessage.value = ''
  mainImagePreview.value = null
  selectedMainImageFile.value = null
  imagePreviews.value = []
  selectedImageFiles.value = []
  selectedFiles.value = []
  imageUrlsToRemove.value = []
  filePathsToRemove.value = []
})
</script>

<style scoped>
.hot-courses-management-page {
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

.table-thumbnail {
  width: 80px;
  height: 50px;
  object-fit: cover;
  border-radius: 4px;
  cursor: pointer;
  transition: transform 0.3s;
}

.table-thumbnail:hover {
  transform: scale(1.1);
}

.empty-message {
  text-align: center;
  padding: 40px;
  color: #999;
  font-size: 16px;
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
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  overflow-y: auto;
  padding: 20px;
}

.modal-content {
  background: white;
  border-radius: 8px;
  width: 100%;
  max-width: 600px;
  max-height: 90vh;
  overflow-y: auto;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
}

.modal-content.large-modal {
  max-width: 900px;
}

.modal-content.preview-modal {
  max-width: 800px;
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  border-bottom: 1px solid #e0e0e0;
  position: sticky;
  top: 0;
  background: white;
  z-index: 1;
}

.modal-header h3 {
  margin: 0;
  color: #534741;
  font-size: 20px;
}

.close-btn {
  background: none;
  border: none;
  font-size: 28px;
  color: #666;
  cursor: pointer;
  padding: 0;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  transition: background-color 0.2s;
}

.close-btn:hover {
  background-color: #f0f0f0;
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
  color: #534741;
  font-weight: 500;
}

.form-group input[type="text"],
.form-group input[type="number"],
.form-group input[type="datetime-local"],
.form-group textarea,
.form-group select {
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
  font-family: inherit;
}

.form-group input[type="file"] {
  width: 100%;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
}

.form-hint {
  display: block;
  margin-top: 4px;
  font-size: 12px;
  color: #666;
}

.required {
  color: #f44336;
}

.checkbox-label {
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  user-select: none;
}

.checkbox-label input[type="checkbox"] {
  width: auto;
  cursor: pointer;
}

/* 主圖片預覽 */
.main-image-preview {
  margin-top: 12px;
  position: relative;
  display: inline-block;
}

.main-image-preview img {
  max-width: 300px;
  max-height: 200px;
  border-radius: 8px;
  border: 2px solid #534741;
  display: block;
}

.main-image-preview .remove-image-btn {
  position: absolute;
  top: 4px;
  right: 4px;
  width: 28px;
  height: 28px;
  background-color: rgba(244, 67, 54, 0.9);
  color: white;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.2s;
}

.main-image-preview .remove-image-btn:hover {
  background-color: #d32f2f;
}

/* 其他圖片預覽 */
.images-preview {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  gap: 12px;
  margin-top: 12px;
}

.image-item {
  position: relative;
  border-radius: 8px;
  overflow: hidden;
  border: 2px solid #ddd;
  aspect-ratio: 1;
}

.image-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.image-item .remove-image-btn {
  position: absolute;
  top: 4px;
  right: 4px;
  width: 24px;
  height: 24px;
  background-color: rgba(244, 67, 54, 0.9);
  color: white;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.2s;
}

.image-item .remove-image-btn:hover {
  background-color: #d32f2f;
}

.image-label {
  position: absolute;
  bottom: 4px;
  left: 4px;
  background-color: #534741;
  color: white;
  padding: 2px 4px;
  border-radius: 2px;
  font-size: 11px;
  font-weight: 500;
  white-space: nowrap;
}

/* 檔案預覽 */
.files-preview {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 12px;
}

.file-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 12px;
  background-color: #f5f5f5;
  border-radius: 4px;
  border: 1px solid #ddd;
  position: relative;
}

.file-item span {
  flex: 1;
  font-size: 14px;
  color: #534741;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.file-item .remove-file-btn {
  width: 24px;
  height: 24px;
  background-color: #f44336;
  color: white;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  margin-left: 8px;
  transition: background-color 0.2s;
}

.file-item .remove-file-btn:hover {
  background-color: #d32f2f;
}

.file-label {
  background-color: #534741 !important;
  color: white !important;
  padding: 4px 8px;
  border-radius: 3px;
  font-size: 13px;
  font-weight: 600;
  white-space: nowrap;
  flex: none;
  display: inline-block;
  min-width: auto;
  margin-left: 8px;
}

.error-message {
  background-color: #ffebee;
  color: #c62828;
  padding: 12px;
  border-radius: 4px;
  margin-bottom: 16px;
  font-size: 14px;
}

.modal-actions {
  display: flex;
  justify-content: flex-end;
  gap: 12px;
  margin-top: 24px;
  padding-top: 20px;
  border-top: 1px solid #e0e0e0;
}

.cancel-btn,
.submit-btn {
  padding: 10px 24px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  transition: opacity 0.2s;
}

.cancel-btn {
  background-color: #757575;
  color: white;
}

.cancel-btn:hover {
  opacity: 0.8;
}

.submit-btn {
  background-color: #534741;
  color: white;
}

.submit-btn:hover:not(:disabled) {
  opacity: 0.8;
}

.submit-btn:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}

/* 內容預覽樣式 */
.preview-content {
  padding: 20px;
  line-height: 1.6;
  color: #333;
}

.preview-content :deep(h1),
.preview-content :deep(h2),
.preview-content :deep(h3) {
  margin-top: 1em;
  margin-bottom: 0.5em;
  color: #534741;
}

.preview-content :deep(p) {
  margin-bottom: 1em;
}

.preview-content :deep(img) {
  max-width: 100%;
  height: auto;
  border-radius: 4px;
}

.preview-content :deep(ul),
.preview-content :deep(ol) {
  margin-left: 1.5em;
  margin-bottom: 1em;
}

.preview-content :deep(table) {
  border-collapse: collapse;
  width: 100%;
  margin-bottom: 1em;
}

.preview-content :deep(table td),
.preview-content :deep(table th) {
  border: 1px solid #ddd;
  padding: 8px;
}

.preview-content :deep(table th) {
  background-color: #f5f5f5;
}

/* 圖片放大模態框 */
.image-modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2000;
  cursor: pointer;
}

.image-modal-content {
  position: relative;
  max-width: 90%;
  max-height: 90%;
}

.image-modal-content img {
  max-width: 100%;
  max-height: 90vh;
  object-fit: contain;
}

.image-close-btn {
  position: absolute;
  top: -40px;
  right: -40px;
  background: white;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  font-size: 24px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #534741;
  transition: background-color 0.2s;
}

.image-close-btn:hover {
  background-color: #f0f0f0;
}

@media (max-width: 768px) {
  .modal-content {
    max-width: 100%;
    max-height: 100vh;
    border-radius: 0;
  }

  .images-preview {
    grid-template-columns: repeat(auto-fill, minmax(80px, 1fr));
  }

  .main-image-preview img {
    max-width: 100%;
  }

  .image-close-btn {
    top: 10px;
    right: 10px;
  }
}
</style>

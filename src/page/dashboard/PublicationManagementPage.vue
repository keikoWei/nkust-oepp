<template>
  <div class="publication-management-page">
    <!-- 出版品列表 -->
    <div class="table-container">
      <table class="data-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>主圖片</th>
            <th>標題</th>
            <th>iframe 連結</th>
            <th>排序</th>
            <th>建立時間</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="publication in filteredPublications" :key="publication.id">
            <td>{{ publication.id }}</td>
            <td>
              <img 
                v-if="publication.mainImageUrl" 
                :src="publication.mainImageUrl" 
                alt="主圖" 
                class="table-thumbnail"
                @click="openImageModal(publication.mainImageUrl)"
              />
            </td>
            <td>{{ publication.title }}</td>
            <td>
              <a 
                v-if="publication.iframeLink" 
                :href="publication.iframeLink" 
                target="_blank"
                class="link-text"
              >
                {{ publication.iframeLink }}
              </a>
              <span v-else class="no-link">無</span>
            </td>
            <td>{{ publication.sortOrder }}</td>
            <td>{{ formatDateTime(publication.createdAt) }}</td>
            <td>
              <button class="modify-btn" @click="handleEdit(publication)">修改</button>
              <button class="delete-btn" @click="handleDelete(publication)">刪除</button>
            </td>
          </tr>
          <tr v-if="filteredPublications.length === 0">
            <td colspan="7" class="empty-message">目前沒有出版品</td>
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
      <button class="refresh-btn" @click="loadPublications">刷新</button>
    </div>

    <!-- 新增/編輯出版品模態框 -->
    <div class="modal-overlay" v-if="showModal" @click="closeModal">
      <div class="modal-content" @click.stop>
        <div class="modal-header">
          <h3>{{ editingPublication ? '編輯出版品' : '新增出版品' }}</h3>
          <button class="close-btn" @click="closeModal">×</button>
        </div>
        <form @submit.prevent="handleSubmit" class="modal-form">
          <div class="form-group">
            <label>標題 <span class="required">*</span></label>
            <input
              v-model="form.title"
              type="text"
              placeholder="請輸入出版品標題"
              required
            />
          </div>

          <div class="form-group">
            <label>主圖片 <span class="required" v-if="!editingPublication">*</span></label>
            <input
              type="file"
              accept="image/*"
              @change="handleMainImageChange"
              ref="mainImageInput"
              :required="!editingPublication"
            />
            <small class="form-hint">出版品的主要展示圖片（創建時必填）</small>
            <div v-if="mainImagePreview || (editingPublication && editingPublication.mainImageUrl)" class="main-image-preview">
              <img :src="mainImagePreview || editingPublication.mainImageUrl" alt="主圖片預覽" />
              <button v-if="mainImagePreview" type="button" class="remove-image-btn" @click="removeMainImage">×</button>
              <span v-if="!mainImagePreview && editingPublication" class="image-label">現有</span>
            </div>
          </div>

          <div class="form-group">
            <label>iframe 連結 <span class="required">*</span></label>
            <input
              v-model="form.iframeLink"
              type="url"
              placeholder="https://example.com/publication-viewer"
              required
            />
            <small class="form-hint">用於嵌入外部內容的連結（如 PDF 閱讀器、影片播放器等）</small>
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

          <div v-if="errorMessage" class="error-message">
            {{ errorMessage }}
          </div>

          <div class="modal-actions">
            <button type="button" class="cancel-btn" @click="closeModal">取消</button>
            <button type="submit" class="submit-btn" :disabled="loading">
              {{ loading ? '處理中...' : (editingPublication ? '更新' : '新增') }}
            </button>
          </div>
        </form>
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
import { createPublication, updatePublication, deletePublication, getAllPublications } from '@/api/publication'

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
const publicationsList = ref([])
const currentPage = ref(1)
const itemsPerPage = 10
const searchQuery = ref('')
const showModal = ref(false)
const editingPublication = ref(null)
const loading = ref(false)
const errorMessage = ref('')
const modalImage = ref(null)

// 表單狀態
const form = ref({
  title: '',
  iframeLink: '',
  sortOrder: 0
})

// 圖片狀態
const mainImagePreview = ref(null)
const selectedMainImageFile = ref(null)
const mainImageInput = ref(null)

// 載入出版品列表
const loadPublications = async () => {
  try {
    loading.value = true
    // 獲取所有出版品，前端會根據當前中心角色過濾
    publicationsList.value = await getAllPublications()
  } catch (error) {
    console.error('載入出版品失敗:', error)
    errorMessage.value = error.message || '載入失敗'
  } finally {
    loading.value = false
  }
}

// 過濾後的出版品列表（根據當前中心角色和搜尋關鍵字）
const filteredPublications = computed(() => {
  const currentCenterRole = getCurrentCenterRole()
  // 先過濾當前中心的出版品
  let filtered = publicationsList.value.filter(publication => 
    publication.centerRole === currentCenterRole
  )
  
  // 再根據搜尋條件過濾
  if (searchQuery.value) {
    const query = searchQuery.value.toLowerCase()
    filtered = filtered.filter(publication =>
      publication.title.toLowerCase().includes(query) ||
      (publication.iframeLink && publication.iframeLink.toLowerCase().includes(query))
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
  // 先過濾當前中心的出版品
  let filtered = publicationsList.value.filter(publication => 
    publication.centerRole === currentCenterRole
  )
  
  // 再根據搜尋條件過濾
  if (searchQuery.value) {
    const query = searchQuery.value.toLowerCase()
    filtered = filtered.filter(publication =>
      publication.title.toLowerCase().includes(query) ||
      (publication.iframeLink && publication.iframeLink.toLowerCase().includes(query))
    )
  }
  
  // 依據ID排序，數字越大排序越前面（由新到舊）
  filtered.sort((a, b) => b.id - a.id)
  
  return Math.max(1, Math.ceil(filtered.length / itemsPerPage))
})

// 跳轉頁面
const goToPage = (page) => {
  if (page >= 1 && page <= totalPages.value) {
    currentPage.value = page
  }
}

// 格式化日期時間
const formatDateTime = (dateTime) => {
  if (!dateTime) return '-'
  const date = new Date(dateTime)
  return date.toLocaleString('zh-TW')
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

// 打開圖片放大模態框
const openImageModal = (imageUrl) => {
  modalImage.value = imageUrl
}

// 關閉圖片放大模態框
const closeImageModal = () => {
  modalImage.value = null
}

// 處理新增
const handleAdd = () => {
  editingPublication.value = null
  form.value = {
    title: '',
    iframeLink: '',
    sortOrder: 0
  }
  mainImagePreview.value = null
  selectedMainImageFile.value = null
  errorMessage.value = ''
  showModal.value = true
}

// 處理編輯
const handleEdit = (publication) => {
  editingPublication.value = publication
  form.value = {
    title: publication.title,
    iframeLink: publication.iframeLink,
    sortOrder: publication.sortOrder
  }
  mainImagePreview.value = null
  selectedMainImageFile.value = null
  errorMessage.value = ''
  showModal.value = true
}

// 處理刪除
const handleDelete = async (publication) => {
  if (!confirm(`確定要刪除出版品「${publication.title}」嗎？`)) {
    return
  }
  
  try {
    loading.value = true
    await deletePublication(publication.id)
    await loadPublications()
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
    formData.append('iframeLink', form.value.iframeLink)
    
    // 主圖片（創建時必填）
    if (selectedMainImageFile.value) {
      formData.append('mainImage', selectedMainImageFile.value)
    } else if (!editingPublication.value) {
      throw new Error('請選擇主圖片')
    }
    
    formData.append('sortOrder', (form.value.sortOrder || 0).toString())
    
    if (editingPublication.value) {
      await updatePublication(editingPublication.value.id, formData)
      alert('更新成功')
    } else {
      formData.append('centerRole', getCurrentCenterRole())
      await createPublication(formData)
      alert('新增成功')
    }
    
    closeModal()
    await loadPublications()
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
  editingPublication.value = null
  form.value = {
    title: '',
    iframeLink: '',
    sortOrder: 0
  }
  mainImagePreview.value = null
  selectedMainImageFile.value = null
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
    console.log('PublicationManagementPage route.path changed:', oldPath, '->', newPath)
    // 確保路徑真的變化了
    if (newPath !== oldPath && newPath.includes('/publication')) {
      currentPage.value = 1
      publicationsList.value = [] // 清空舊資料
      loadPublications()
    }
  }
)

// 搜尋事件處理器
const searchHandler = (event) => {
  searchQuery.value = event.detail || ''
}

// 監聽來自 DashboardPage 的事件
onMounted(() => {
  console.log('PublicationManagementPage mounted, path:', route.path)
  currentPage.value = 1
  publicationsList.value = [] // 清空舊資料
  loadPublications()
  
  // 監聽自定義事件來開啟新增模態框
  window.addEventListener('open-publication-modal', handleAdd)
  
  // 監聽搜尋事件
  window.addEventListener('publication-search', searchHandler)
})

// 清理事件監聽器和狀態
onUnmounted(() => {
  console.log('PublicationManagementPage unmounted')
  window.removeEventListener('open-publication-modal', handleAdd)
  window.removeEventListener('publication-search', searchHandler)
  // 清理所有狀態
  publicationsList.value = []
  currentPage.value = 1
  searchQuery.value = ''
  showModal.value = false
  editingPublication.value = null
  loading.value = false
  errorMessage.value = ''
  mainImagePreview.value = null
  selectedMainImageFile.value = null
  modalImage.value = null
})
</script>

<style scoped>
.publication-management-page {
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

.link-text {
  color: #2196F3;
  text-decoration: none;
  max-width: 300px;
  display: inline-block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.link-text:hover {
  text-decoration: underline;
}

.no-link {
  color: #999;
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
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
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
  font-family: "GenYoGothic TW", "Microsoft JhengHei", sans-serif;
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
  font-family: "GenYoGothic TW", "Microsoft JhengHei", sans-serif;
}

.form-group input[type="text"],
.form-group input[type="url"],
.form-group input[type="number"] {
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
  font-family: inherit;
  box-sizing: border-box;
}

.form-group input[type="file"] {
  width: 100%;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
}

.form-group input:focus {
  outline: none;
  border-color: #534741;
}

.form-hint {
  display: block;
  margin-top: 4px;
  font-size: 12px;
  color: #666;
  font-family: "GenYoGothic TW", "Microsoft JhengHei", sans-serif;
}

.required {
  color: #f44336;
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

.error-message {
  background-color: #ffebee;
  color: #c62828;
  padding: 12px;
  border-radius: 4px;
  margin-bottom: 16px;
  font-size: 14px;
  font-family: "GenYoGothic TW", "Microsoft JhengHei", sans-serif;
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
  transition: background-color 0.3s;
  font-family: "GenYoGothic TW", "Microsoft JhengHei", sans-serif;
}

.cancel-btn {
  background-color: #757575;
  color: white;
}

.cancel-btn:hover {
  background-color: #616161;
}

.submit-btn {
  background-color: #534741;
  color: white;
}

.submit-btn:hover:not(:disabled) {
  background-color: #3d3329;
}

.submit-btn:disabled {
  background-color: #ccc;
  cursor: not-allowed;
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

  .main-image-preview img {
    max-width: 100%;
  }

  .image-close-btn {
    top: 10px;
    right: 10px;
  }
}
</style>

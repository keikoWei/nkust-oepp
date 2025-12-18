<template>
  <div class="carousel-management-page">
    <!-- 輪播圖列表 -->
    <div class="table-container">
      <table class="data-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>標題</th>
            <th>圖片預覽</th>
            <th>點擊連結</th>
            <th>排序</th>
            <th>狀態</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="carousel in filteredCarousels" :key="carousel.id">
            <td>{{ carousel.id }}</td>
            <td>{{ carousel.title }}</td>
            <td>
              <img 
                :src="carousel.imageUrl" 
                :alt="carousel.title"
                class="carousel-preview"
                @click="openImageModal(carousel.imageUrl)"
              />
            </td>
            <td>
              <a 
                v-if="carousel.clickUrl" 
                :href="carousel.clickUrl" 
                target="_blank"
                class="link-text"
              >
                {{ carousel.clickUrl }}
              </a>
              <span v-else class="no-link">無</span>
            </td>
            <td>{{ carousel.sortOrder }}</td>
            <td>
              <label class="toggle-switch">
                <input
                  type="checkbox"
                  :checked="carousel.isEnabled"
                  @change="handleToggleStatus(carousel)"
                />
                <span class="toggle-slider"></span>
                <span class="toggle-label">{{ carousel.isEnabled ? '啟用' : '停用' }}</span>
              </label>
            </td>
            <td>
              <button class="modify-btn" @click="handleEdit(carousel)">修改</button>
              <button class="delete-btn" @click="handleDelete(carousel)">刪除</button>
            </td>
          </tr>
          <tr v-if="filteredCarousels.length === 0">
            <td colspan="7" class="empty-message">目前沒有輪播圖</td>
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
      <button class="refresh-btn" @click="loadCarousels">刷新</button>
    </div>

    <!-- 新增/編輯輪播圖模態框 -->
    <div class="modal-overlay" v-if="showModal" @click="closeModal">
      <div class="modal-content" @click.stop>
        <div class="modal-header">
          <h3>{{ editingCarousel ? '編輯輪播圖' : '新增輪播圖' }}</h3>
          <button class="close-btn" @click="closeModal">×</button>
        </div>
        <form @submit.prevent="handleSubmit" class="modal-form">
          <div class="form-group">
            <label>標題 <span class="required">*</span></label>
            <input
              v-model="form.title"
              type="text"
              placeholder="請輸入輪播圖標題"
              required
            />
          </div>

          <div class="form-group">
            <label>圖片 <span class="required">*</span></label>
            <input
              type="file"
              accept="image/*"
              @change="handleImageChange"
              :required="!editingCarousel"
            />
            <div v-if="imagePreview" class="image-preview">
              <img :src="imagePreview" alt="預覽" />
            </div>
            <div v-else-if="editingCarousel && editingCarousel.imageUrl" class="image-preview">
              <img :src="editingCarousel.imageUrl" alt="目前圖片" />
              <p class="preview-note">目前圖片（選擇新圖片以更新）</p>
            </div>
          </div>

          <div class="form-group">
            <label>點擊連結</label>
            <input
              v-model="form.clickUrl"
              type="url"
              placeholder="https://example.com（選填）"
            />
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
              {{ loading ? '處理中...' : (editingCarousel ? '更新' : '新增') }}
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
import { createCarousel, updateCarousel, deleteCarousel, getAllCarousels } from '@/api/carousel'

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

const carousels = ref([])
const currentPage = ref(1)
const itemsPerPage = 10
const searchQuery = ref('')
const showModal = ref(false)
const editingCarousel = ref(null)
const loading = ref(false)
const errorMessage = ref('')
const imagePreview = ref(null)
const selectedImageFile = ref(null)
const modalImage = ref(null)

const form = ref({
  title: '',
  clickUrl: '',
  sortOrder: 0,
  isEnabled: true
})

// 根據搜尋和中心角色過濾輪播圖
const filteredCarousels = computed(() => {
  // 先過濾當前中心的輪播圖
  let filtered = carousels.value.filter(carousel => 
    carousel.centerRole === currentCenterRole.value
  )

  // 再根據搜尋條件過濾
  if (searchQuery.value) {
    const query = searchQuery.value.toLowerCase()
    filtered = filtered.filter(carousel => 
      carousel.title.toLowerCase().includes(query)
    )
  }

  // 依據ID排序，數字越大排序越前面（由新到舊）
  filtered.sort((a, b) => b.id - a.id)

  // 分頁
  const start = (currentPage.value - 1) * itemsPerPage
  const end = start + itemsPerPage
  return filtered.slice(start, end)
})

const totalPages = computed(() => {
  // 先過濾當前中心的輪播圖
  let filtered = carousels.value.filter(carousel => 
    carousel.centerRole === currentCenterRole.value
  )
  
  // 再根據搜尋條件過濾
  if (searchQuery.value) {
    const query = searchQuery.value.toLowerCase()
    filtered = filtered.filter(carousel => 
      carousel.title.toLowerCase().includes(query)
    )
  }
  
  // 依據ID排序，數字越大排序越前面（由新到舊）
  filtered.sort((a, b) => b.id - a.id)
  
  return Math.ceil(filtered.length / itemsPerPage)
})

// 載入輪播圖列表
const loadCarousels = async () => {
  try {
    loading.value = true
    // 獲取所有輪播圖，前端會根據當前中心角色過濾
    carousels.value = await getAllCarousels()
  } catch (error) {
    console.error('載入輪播圖失敗:', error)
    errorMessage.value = error.message || '載入失敗'
  } finally {
    loading.value = false
  }
}

// 處理圖片選擇
const handleImageChange = (event) => {
  const file = event.target.files[0]
  if (file) {
    selectedImageFile.value = file
    // 建立預覽
    const reader = new FileReader()
    reader.onload = (e) => {
      imagePreview.value = e.target.result
    }
    reader.readAsDataURL(file)
  }
}

// 開啟編輯模態框
const handleEdit = (carousel) => {
  editingCarousel.value = carousel
  form.value = {
    title: carousel.title,
    clickUrl: carousel.clickUrl || '',
    sortOrder: carousel.sortOrder,
    isEnabled: carousel.isEnabled
  }
  imagePreview.value = null
  selectedImageFile.value = null
  showModal.value = true
}

// 開啟新增模態框
const handleAdd = () => {
  editingCarousel.value = null
  form.value = {
    title: '',
    clickUrl: '',
    sortOrder: 0,
    isEnabled: true
  }
  imagePreview.value = null
  selectedImageFile.value = null
  errorMessage.value = ''
  showModal.value = true
}

// 關閉模態框
const closeModal = () => {
  showModal.value = false
  editingCarousel.value = null
  form.value = {
    title: '',
    clickUrl: '',
    sortOrder: 0,
    isEnabled: true
  }
  imagePreview.value = null
  selectedImageFile.value = null
  errorMessage.value = ''
}

// 提交表單
const handleSubmit = async () => {
  try {
    loading.value = true
    errorMessage.value = ''

    const formData = new FormData()
    formData.append('title', form.value.title)
    // 根據當前路由自動設定中心角色
    formData.append('centerRole', currentCenterRole.value)
    
    if (selectedImageFile.value) {
      formData.append('image', selectedImageFile.value)
    }
    
    if (form.value.clickUrl) {
      formData.append('clickUrl', form.value.clickUrl)
    }
    
    formData.append('sortOrder', form.value.sortOrder.toString())
    formData.append('isEnabled', form.value.isEnabled.toString())

    if (editingCarousel.value) {
      // 更新
      await updateCarousel(editingCarousel.value.id, formData)
    } else {
      // 新增（必須有圖片）
      if (!selectedImageFile.value) {
        errorMessage.value = '請選擇圖片'
        return
      }
      await createCarousel(formData)
    }

    // 重新載入列表
    await loadCarousels()
    closeModal()
  } catch (error) {
    console.error('提交失敗:', error)
    errorMessage.value = error.message || '操作失敗'
  } finally {
    loading.value = false
  }
}

// 刪除輪播圖
const handleDelete = async (carousel) => {
  if (!confirm(`確定要刪除「${carousel.title}」嗎？`)) {
    return
  }

  try {
    loading.value = true
    await deleteCarousel(carousel.id)
    await loadCarousels()
  } catch (error) {
    console.error('刪除失敗:', error)
    alert(error.message || '刪除失敗')
  } finally {
    loading.value = false
  }
}

// 切換啟用狀態
const handleToggleStatus = async (carousel) => {
  try {
    const formData = new FormData()
    formData.append('isEnabled', (!carousel.isEnabled).toString())
    
    await updateCarousel(carousel.id, formData)
    await loadCarousels()
  } catch (error) {
    console.error('更新狀態失敗:', error)
    alert(error.message || '更新失敗')
    // 恢復原狀態
    await loadCarousels()
  }
}

// 開啟圖片放大模態框
const openImageModal = (imageUrl) => {
  modalImage.value = imageUrl
}

// 關閉圖片放大模態框
const closeImageModal = () => {
  modalImage.value = null
}

// 分頁
const goToPage = (page) => {
  if (page >= 1 && page <= totalPages.value) {
    currentPage.value = page
  }
}

// 監聽搜尋變化，重置到第一頁
watch(searchQuery, () => {
  currentPage.value = 1
})

// 監聽路由變化，當切換中心時重新載入資料
watch(
  () => route.path, 
  (newPath, oldPath) => {
    console.log('CarouselManagementPage route.path changed:', oldPath, '->', newPath)
    // 確保路徑真的變化了
    if (newPath !== oldPath && newPath.includes('/carousel')) {
      currentPage.value = 1
      carousels.value = [] // 清空舊資料
      loadCarousels()
    }
  }
)

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
  console.log('CarouselManagementPage mounted, path:', route.path)
  currentPage.value = 1
  carousels.value = [] // 清空舊資料
  loadCarousels()
  
  // 監聽自定義事件來開啟新增模態框
  window.addEventListener('open-carousel-modal', handleAdd)
  
  // 監聽搜尋事件
  window.addEventListener('carousel-search', searchHandler)
})

// 清理事件監聽器和狀態
onUnmounted(() => {
  console.log('CarouselManagementPage unmounted')
  window.removeEventListener('open-carousel-modal', handleAdd)
  window.removeEventListener('carousel-search', searchHandler)
  // 清理狀態
  carousels.value = []
  currentPage.value = 1
  searchQuery.value = ''
  showModal.value = false
})
</script>

<style scoped>
.carousel-management-page {
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

.carousel-preview {
  width: 80px;
  height: 50px;
  object-fit: cover;
  border-radius: 4px;
  cursor: pointer;
  transition: transform 0.3s;
}

.carousel-preview:hover {
  transform: scale(1.1);
}

.link-text {
  color: #2196F3;
  text-decoration: none;
  max-width: 200px;
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

.form-group input[type="text"],
.form-group input[type="url"],
.form-group input[type="number"],
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
.form-group select:focus {
  outline: none;
  border-color: #534741;
}

.form-group input[type="file"] {
  width: 100%;
  padding: 10px;
  border: 2px solid #e3d9cd;
  border-radius: 6px;
  font-size: 14px;
  font-family: "GenYoGothic TW", "Microsoft JhengHei", sans-serif;
}

.image-preview {
  margin-top: 10px;
  text-align: center;
}

.image-preview img {
  max-width: 100%;
  max-height: 200px;
  border-radius: 6px;
  border: 1px solid #e3d9cd;
}

.preview-note {
  margin-top: 8px;
  font-size: 12px;
  color: #999;
  font-family: "GenYoGothic TW", "Microsoft JhengHei", sans-serif;
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

/* 圖片放大模態框 */
.image-modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2000;
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
  right: 0;
  background: none;
  border: none;
  color: white;
  font-size: 32px;
  cursor: pointer;
  padding: 0;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: all 0.3s;
}

.image-close-btn:hover {
  background-color: rgba(255, 255, 255, 0.2);
}
</style>


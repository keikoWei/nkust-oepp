<template>
  <div class="training-plan-management-page">
    <!-- 委訓計畫列表 -->
    <div class="table-container">
      <table class="data-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>標題</th>
            <th>連結</th>
            <th>排序</th>
            <th>建立時間</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="plan in filteredPlans" :key="plan.id">
            <td>{{ plan.id }}</td>
            <td>{{ plan.title }}</td>
            <td>
              <a 
                v-if="plan.link" 
                :href="plan.link" 
                target="_blank"
                class="link-text"
              >
                {{ plan.link }}
              </a>
              <span v-else class="no-link">無</span>
            </td>
            <td>{{ plan.sortOrder }}</td>
            <td>{{ formatDateTime(plan.createdAt) }}</td>
            <td>
              <button class="modify-btn" @click="handleEdit(plan)">修改</button>
              <button class="delete-btn" @click="handleDelete(plan)">刪除</button>
            </td>
          </tr>
          <tr v-if="filteredPlans.length === 0">
            <td colspan="6" class="empty-message">目前沒有委訓計畫</td>
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
      <button class="refresh-btn" @click="loadPlans">刷新</button>
    </div>

    <!-- 新增/編輯委訓計畫模態框 -->
    <div class="modal-overlay" v-if="showModal" @click="closeModal">
      <div class="modal-content" @click.stop>
        <div class="modal-header">
          <h3>{{ editingPlan ? '編輯委訓計畫' : '新增委訓計畫' }}</h3>
          <button class="close-btn" @click="closeModal">×</button>
        </div>
        <form @submit.prevent="handleSubmit" class="modal-form">
          <div class="form-group">
            <label>標題 <span class="required">*</span></label>
            <input
              v-model="form.title"
              type="text"
              placeholder="請輸入委訓計畫標題"
              required
            />
          </div>

          <div class="form-group">
            <label>連結 URL <span class="required">*</span></label>
            <input
              v-model="form.link"
              type="url"
              placeholder="https://example.com/training-plan"
              required
            />
            <small class="form-hint">必須是有效的 URL 格式</small>
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
              {{ loading ? '處理中...' : (editingPlan ? '更新' : '新增') }}
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import { createTrainingPlan, updateTrainingPlan, deleteTrainingPlan, getAllTrainingPlans } from '@/api/trainingPlan'

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
const plansList = ref([])
const currentPage = ref(1)
const itemsPerPage = 10
const searchQuery = ref('')
const showModal = ref(false)
const editingPlan = ref(null)
const loading = ref(false)
const errorMessage = ref('')

// 表單狀態
const form = ref({
  title: '',
  link: '',
  sortOrder: 0
})

// 載入委訓計畫列表
const loadPlans = async () => {
  try {
    loading.value = true
    // 獲取所有委訓計畫，前端會根據當前中心角色過濾
    plansList.value = await getAllTrainingPlans()
  } catch (error) {
    console.error('載入委訓計畫失敗:', error)
    errorMessage.value = error.message || '載入失敗'
  } finally {
    loading.value = false
  }
}

// 過濾後的委訓計畫列表（根據當前中心角色和搜尋關鍵字）
const filteredPlans = computed(() => {
  const currentCenterRole = getCurrentCenterRole()
  // 先過濾當前中心的委訓計畫
  let filtered = plansList.value.filter(plan => 
    plan.centerRole === currentCenterRole
  )
  
  // 再根據搜尋條件過濾
  if (searchQuery.value) {
    const query = searchQuery.value.toLowerCase()
    filtered = filtered.filter(plan =>
      plan.title.toLowerCase().includes(query) ||
      (plan.link && plan.link.toLowerCase().includes(query))
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
  // 先過濾當前中心的委訓計畫
  let filtered = plansList.value.filter(plan => 
    plan.centerRole === currentCenterRole
  )
  
  // 再根據搜尋條件過濾
  if (searchQuery.value) {
    const query = searchQuery.value.toLowerCase()
    filtered = filtered.filter(plan =>
      plan.title.toLowerCase().includes(query) ||
      (plan.link && plan.link.toLowerCase().includes(query))
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

// 處理新增
const handleAdd = () => {
  editingPlan.value = null
  form.value = {
    title: '',
    link: '',
    sortOrder: 0
  }
  errorMessage.value = ''
  showModal.value = true
}

// 處理編輯
const handleEdit = (plan) => {
  editingPlan.value = plan
  form.value = {
    title: plan.title,
    link: plan.link,
    sortOrder: plan.sortOrder
  }
  errorMessage.value = ''
  showModal.value = true
}

// 處理刪除
const handleDelete = async (plan) => {
  if (!confirm(`確定要刪除委訓計畫「${plan.title}」嗎？`)) {
    return
  }
  
  try {
    loading.value = true
    await deleteTrainingPlan(plan.id)
    await loadPlans()
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
    
    const data = {
      title: form.value.title,
      link: form.value.link,
      sortOrder: form.value.sortOrder || 0
    }
    
    if (editingPlan.value) {
      await updateTrainingPlan(editingPlan.value.id, data)
      alert('更新成功')
    } else {
      data.centerRole = getCurrentCenterRole()
      await createTrainingPlan(data)
      alert('新增成功')
    }
    
    closeModal()
    await loadPlans()
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
  editingPlan.value = null
  form.value = {
    title: '',
    link: '',
    sortOrder: 0
  }
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
    console.log('TrainingPlanManagementPage route.path changed:', oldPath, '->', newPath)
    // 確保路徑真的變化了
    if (newPath !== oldPath && newPath.includes('/training-plan')) {
      currentPage.value = 1
      plansList.value = [] // 清空舊資料
      loadPlans()
    }
  }
)

// 搜尋事件處理器
const searchHandler = (event) => {
  searchQuery.value = event.detail || ''
}

// 監聽來自 DashboardPage 的事件
onMounted(() => {
  console.log('TrainingPlanManagementPage mounted, path:', route.path)
  currentPage.value = 1
  plansList.value = [] // 清空舊資料
  loadPlans()
  
  // 監聽自定義事件來開啟新增模態框
  window.addEventListener('open-training-plan-modal', handleAdd)
  
  // 監聽搜尋事件
  window.addEventListener('training-plan-search', searchHandler)
})

// 清理事件監聽器和狀態
onUnmounted(() => {
  console.log('TrainingPlanManagementPage unmounted')
  window.removeEventListener('open-training-plan-modal', handleAdd)
  window.removeEventListener('training-plan-search', searchHandler)
  // 清理所有狀態
  plansList.value = []
  currentPage.value = 1
  searchQuery.value = ''
  showModal.value = false
  editingPlan.value = null
  loading.value = false
  errorMessage.value = ''
})
</script>

<style scoped>
.training-plan-management-page {
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

@media (max-width: 768px) {
  .modal-content {
    max-width: 100%;
    max-height: 100vh;
    border-radius: 0;
  }
}
</style>

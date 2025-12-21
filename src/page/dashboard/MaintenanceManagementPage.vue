<template>
  <div class="maintenance-management-page">
    <div class="maintenance-card">
      <h2>網站維護管理</h2>
      <div class="maintenance-status">
        <p class="status-label">維護狀態：</p>
        <label class="toggle-switch">
          <input
            type="checkbox"
            :checked="isMaintenance"
            @change="handleToggleMaintenance"
            :disabled="loading"
          />
          <span class="toggle-slider"></span>
          <span class="toggle-label">{{ isMaintenance ? '維護中' : '正常運作' }}</span>
        </label>
      </div>
      <div v-if="errorMessage" class="error-message">
        {{ errorMessage }}
      </div>
      <div v-if="successMessage" class="success-message">
        {{ successMessage }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { getMaintenanceStatus, toggleMaintenanceMode } from '@/api/maintenance'

const isMaintenance = ref(false)
const loading = ref(false)
const errorMessage = ref('')
const successMessage = ref('')

// 載入維護狀態
const loadMaintenanceStatus = async () => {
  try {
    loading.value = true
    errorMessage.value = ''
    const response = await getMaintenanceStatus()
    isMaintenance.value = response.maintenanceMode || false
  } catch (error) {
    console.error('載入維護狀態失敗:', error)
    errorMessage.value = error.message || '載入維護狀態失敗'
  } finally {
    loading.value = false
  }
}

// 切換維護狀態
const handleToggleMaintenance = async (event) => {
  const previousStatus = isMaintenance.value
  const newStatus = event.target.checked
  
  // 顯示確認對話框
  const action = newStatus ? '開啟' : '關閉'
  const confirmMessage = newStatus 
    ? '確定要開啟維護模式嗎？\n\n開啟後，所有前端頁面將導向維護頁面，只有後台管理頁面可以正常訪問。'
    : '確定要關閉維護模式嗎？\n\n關閉後，所有前端頁面將恢復正常訪問。'
  
  if (!confirm(confirmMessage)) {
    // 用戶取消，恢復開關狀態
    event.target.checked = previousStatus
    return
  }
  
  try {
    loading.value = true
    errorMessage.value = ''
    successMessage.value = ''
    
    // 使用 toggle API 切換維護模式
    const response = await toggleMaintenanceMode()
    isMaintenance.value = response.maintenanceMode || false
    successMessage.value = response.message || (isMaintenance.value ? '維護模式已開啟' : '維護模式已關閉')
    
    // 3 秒後清除成功訊息
    setTimeout(() => {
      successMessage.value = ''
    }, 3000)
  } catch (error) {
    console.error('切換維護狀態失敗:', error)
    errorMessage.value = error.message || '切換維護狀態失敗'
    // 恢復原狀態
    isMaintenance.value = previousStatus
    event.target.checked = previousStatus
  } finally {
    loading.value = false
  }
}

onMounted(() => {
  loadMaintenanceStatus()
})
</script>

<style scoped>
.maintenance-management-page {
  width: 100%;
  padding: 20px;
}

.maintenance-card {
  background: #fff;
  border-radius: 8px;
  padding: 30px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  max-width: 600px;
  margin: 0 auto;
}

.maintenance-card h2 {
  margin: 0 0 30px 0;
  color: #534741;
  font-size: 24px;
  font-weight: 600;
}

.maintenance-status {
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 20px;
}

.status-label {
  margin: 0;
  font-size: 16px;
  color: #333;
  font-weight: 500;
}

.toggle-switch {
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
}

.toggle-switch input[type="checkbox"] {
  display: none;
}

.toggle-slider {
  position: relative;
  width: 50px;
  height: 26px;
  background-color: #ccc;
  border-radius: 26px;
  transition: background-color 0.3s;
}

.toggle-slider::before {
  content: '';
  position: absolute;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: white;
  top: 3px;
  left: 3px;
  transition: transform 0.3s;
}

.toggle-switch input[type="checkbox"]:checked + .toggle-slider {
  background-color: #4CAF50;
}

.toggle-switch input[type="checkbox"]:checked + .toggle-slider::before {
  transform: translateX(24px);
}

.toggle-switch input[type="checkbox"]:disabled + .toggle-slider {
  opacity: 0.6;
  cursor: not-allowed;
}

.toggle-label {
  font-size: 16px;
  color: #333;
  font-weight: 500;
}

.error-message {
  background-color: #fee;
  color: #c33;
  padding: 12px;
  border-radius: 4px;
  margin-top: 15px;
  border: 1px solid #fcc;
}

.success-message {
  background-color: #efe;
  color: #3c3;
  padding: 12px;
  border-radius: 4px;
  margin-top: 15px;
  border: 1px solid #cfc;
}
</style>



<template>
  <div class="training-plan-management-page">
    <h2>委訓計畫管理</h2>
    <p>此功能正在開發中...</p>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

// 監聽來自 DashboardPage 的事件
const handleAdd = () => {
  alert('新增委訓計畫功能開發中')
}

const searchHandler = (event) => {
  console.log('搜尋委訓計畫:', event.detail)
}

onMounted(() => {
  window.addEventListener('open-training-plan-modal', handleAdd)
  window.addEventListener('training-plan-search', searchHandler)
})

onUnmounted(() => {
  window.removeEventListener('open-training-plan-modal', handleAdd)
  window.removeEventListener('training-plan-search', searchHandler)
})
</script>

<style scoped>
.training-plan-management-page {
  padding: 20px;
  font-family: "GenYoGothic TW", "Microsoft JhengHei", sans-serif;
}

h2 {
  color: #534741;
  margin-bottom: 20px;
}

p {
  color: #666;
  font-size: 16px;
}
</style>


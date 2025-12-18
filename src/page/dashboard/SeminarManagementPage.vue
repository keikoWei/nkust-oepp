<template>
  <div class="seminar-management-page">
    <h2>研討會選項管理</h2>
    <p>此功能正在開發中...</p>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

// 監聽來自 DashboardPage 的事件
const handleAdd = () => {
  alert('新增研討會功能開發中')
}

const searchHandler = (event) => {
  console.log('搜尋研討會:', event.detail)
}

onMounted(() => {
  window.addEventListener('open-seminar-modal', handleAdd)
  window.addEventListener('seminar-search', searchHandler)
})

onUnmounted(() => {
  window.removeEventListener('open-seminar-modal', handleAdd)
  window.removeEventListener('seminar-search', searchHandler)
})
</script>

<style scoped>
.seminar-management-page {
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


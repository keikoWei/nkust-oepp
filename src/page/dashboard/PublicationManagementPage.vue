<template>
  <div class="publication-management-page">
    <h2>出版品管理</h2>
    <p>此功能正在開發中...</p>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

// 監聽來自 DashboardPage 的事件
const handleAdd = () => {
  alert('新增出版品功能開發中')
}

const searchHandler = (event) => {
  console.log('搜尋出版品:', event.detail)
}

onMounted(() => {
  window.addEventListener('open-publication-modal', handleAdd)
  window.addEventListener('publication-search', searchHandler)
})

onUnmounted(() => {
  window.removeEventListener('open-publication-modal', handleAdd)
  window.removeEventListener('publication-search', searchHandler)
})
</script>

<style scoped>
.publication-management-page {
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


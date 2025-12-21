<template>
  <div class="maintenance-page">
    <img src="/maintain.png" alt="網頁維護中" class="maintenance-image" />
  </div>
</template>

<script setup>
// 維護頁面，只需要顯示維護圖片
</script>

<style scoped>
.maintenance-page {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  width: 100%;
  background-color: #fff;
  padding: 20px;
}

.maintenance-image {
  max-width: 100%;
  height: auto;
  object-fit: contain;
}
</style>



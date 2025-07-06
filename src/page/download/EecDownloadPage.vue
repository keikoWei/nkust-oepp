<template>
  <AppHeader />
  
  <!-- 頂部圖片區域 -->
  <section class="download-banner">
    <div class="banner-image">
      <img src="/image/members/member_top.jpg" alt="下載專區頂部圖片" class="banner-img">
    </div>
  </section>
  
  <div class="download-page">
    <DownloadHeader activeTab="eec" />
    
    <!-- 下載內容區域 -->
    <div class="download-content">
      <h2>下載內容</h2>
      <p>此處將顯示教育推廣中心相關下載內容...</p>
    </div>
  </div>
  
  <!-- Footer -->
  <MainFooterComponent waveColor="#d9d9d9" />
</template>

<script setup>
import AppHeader from '@/components/AppHeader.vue'
import DownloadHeader from '@/components/download/DownloadHeader.vue'
import MainFooterComponent from '@/components/MainFooterComponent.vue'
</script>

<style scoped>
/* 頂部圖片區域 */
.download-banner {
  width: calc(70vw);
  max-width: 100%;
  margin: 0 auto;
  position: relative;
  overflow: hidden;
}

.banner-image {
  width: 100%;
  height: 422px;  /* 原本 630px * 0.67 */
  position: relative;
  overflow: hidden;
}

.banner-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.download-page {
  width: 70vw;
  max-width: 100%;
  margin: 0 auto;
  padding: 1.3rem 0.7rem 67px 0.7rem;  /* 原本 2rem 1rem 100px 1rem * 0.67 */
  font-family: "GenYoGothic TW", "源樣黑體月", "Microsoft JhengHei", sans-serif;
  background-color: #d9d9d9;
  min-height: 60vh;
}

.download-content {
  margin-top: 1.3rem;  /* 原本 2rem * 0.67 */
  padding: 1.3rem 0;  /* 原本 2rem * 0.67 */
}

.download-content h2 {
  font-size: 24pt;  /* 原本 36pt * 0.67 */
  color: #333;
  text-align: center;
  margin-bottom: 1.3rem;  /* 原本 2rem * 0.67 */
  font-weight: normal;
}

.download-content p {
  font-size: 12pt;  /* 原本 18pt * 0.67 */
  color: #666;
  line-height: 1.6;
  text-align: center;
}
</style> 
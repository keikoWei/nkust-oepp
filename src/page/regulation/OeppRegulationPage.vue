<template>
  <AppHeader />
  
  <!-- 頂部圖片區域 -->
  <section class="regulation-banner">
    <div class="banner-image">
      <img src="/image/members/member_top.jpg" alt="法規相關頂部圖片" class="banner-img">
    </div>
  </section>
  
  <div class="regulation-page">
    <RegulationHeader activeTab="oepp" />
    
    <!-- 法規內容區域 -->
    <div class="regulation-content">
      <h2>暫無法規內容</h2>
      <p>暫無此處將顯示教育事業暨產品推廣處相關法規內容...</p>
    </div>
  </div>
  
  <!-- Footer -->
  <MainFooterComponent />
</template>

<script setup>
import AppHeader from '@/components/AppHeader.vue'
import RegulationHeader from '@/components/regulation/RegulationHeader.vue'
import MainFooterComponent from '@/components/MainFooterComponent.vue'
</script>

<style scoped>
/* 頂部圖片區域 */
.regulation-banner {
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

.regulation-page {
  width: 70vw;
  max-width: 100%;
  margin: 0 auto;
  padding: 1.3rem 0.7rem 67px 0.7rem;  /* 原本 2rem 1rem 100px 1rem * 0.67 */
  font-family: "GenYoGothic TW", "源樣黑體月", "Microsoft JhengHei", sans-serif;
  background-color: white;
  min-height: 60vh;
}

.regulation-content {
  margin-top: 1.3rem;  /* 原本 2rem * 0.67 */
  padding: 1.3rem 0;  /* 原本 2rem * 0.67 */
}

.regulation-content h2 {
  font-size: 24pt;  /* 原本 36pt * 0.67 */
  color: #333;
  text-align: center;
  margin-bottom: 1.3rem;  /* 原本 2rem * 0.67 */
  font-weight: normal;
}

.regulation-content p {
  font-size: 12pt;  /* 原本 18pt * 0.67 */
  color: #666;
  line-height: 1.6;
  text-align: center;
}

/* 手機版樣式 */
@media (max-width: 480px) {
  .regulation-banner {
    width: 100vw;
    margin: 0;
  }
  
  .banner-image {
    height: 200px;  /* 手機版縮小高度 */
  }
  
  .regulation-page {
    width: 100vw;
    margin: 0;
    padding: 1rem 1rem 50px 1rem;
  }
  
  .regulation-content {
    width: 100%;
  }
  
  .regulation-content h2 {
    font-size: 20pt;
  }
  
  .regulation-content p {
    font-size: 10pt;
  }
}
</style> 
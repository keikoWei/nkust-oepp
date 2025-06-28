<template>
  <!-- 頂部圖片區域 -->
  <section class="regulation-banner">
    <div class="banner-image">
      <img src="/image/members/member_top.jpg" alt="法規相關頂部圖片" class="banner-img">
    </div>
  </section>
  
  <div class="regulation-page">
    <RegulationHeader activeTab="ppc" />
    
    <!-- 法規內容區域 -->
    <div class="regulation-content">
      <h2>法規內容</h2>
      <p>此處將顯示產品推廣中心相關法規內容...</p>
    </div>
  </div>
  
  <!-- Footer -->
  <MainFooterComponent />
</template>

<script setup>
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
  height: 630px;
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
  padding: 2rem 1rem 100px 1rem;
  font-family: "GenYoGothic TW", "源樣黑體月", "Microsoft JhengHei", sans-serif;
  background-color: white;
  min-height: 60vh;
}

.regulation-content {
  margin-top: 2rem;
  padding: 2rem 0;
}

.regulation-content h2 {
  font-size: 36pt;
  color: #333;
  text-align: center;
  margin-bottom: 2rem;
  font-weight: normal;
}

.regulation-content p {
  font-size: 18pt;
  color: #666;
  line-height: 1.6;
  text-align: center;
}
</style> 
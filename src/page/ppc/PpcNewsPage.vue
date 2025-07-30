<template>
  <div class="ppc-news-page">
    <!-- Header -->
    <PpcHeader />
    
    <!-- 頂部圖片區域 -->
    <section class="member-banner">
      <div class="banner-image">
        <img src="/image/dkshop/DKSHOP_LOGO.png" alt="DK SHOP Logo" class="banner-img">
        <div class="watermark">最新消息</div>
      </div>
    </section>
    
    <!-- 最新消息內容區域 -->
    <div class="news-content">
      <div class="content-wrapper">
        <PpcNewsComponents />
      </div>
    </div>
    
    <!-- Footer -->
    <MainFooterComponent waveColor="#fff" backgroundColor="#e3d496" textColor="#534741" />
  </div>
</template>

<script setup>
import PpcHeader from '@/components/PpcHeader.vue'
import MainFooterComponent from '@/components/MainFooterComponent.vue'
import PpcNewsComponents from '@/components/PpcNewsComponents.vue'
</script>

<style scoped>
.ppc-news-page {
  width: 100%;
  margin: 0;
  padding: 0;
  background-color: #ffffff;
  font-family: "GenYoGothic TW", "源樣黑體月", "Microsoft JhengHei", sans-serif;
}

/* 頂部圖片區域 */
.member-banner {
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

.watermark {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  z-index: 2;
  padding: 34px 0 0 54px;
  color: white;
  font-size: 37pt;
  font-weight: bold;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
  margin: 0;
  letter-spacing: 2px;
  font-family: "GenYoGothic TW", "源樣黑體月", "Microsoft JhengHei", sans-serif;
}

.news-content {
  width: 100%;
  min-height: 600px;
  padding: 3rem 0;
  background-color: #ffffff;
}

.content-wrapper {
  width: 70vw;
  max-width: 100%;
  margin: 0 auto;
  padding: 0 2rem;
}



/* 響應式設計 */
@media (max-width: 768px) {
  .content-wrapper {
    width: 90vw;
    padding: 0 1rem;
  }
  
  .news-content {
    padding: 2rem 0;
  }
  

  
  .member-banner {
    width: 90vw;
  }
  
  .banner-image {
    height: 300px;
  }
  
  .watermark {
    padding: 20px 0 0 30px;
    font-size: 24pt;
  }
}
</style>

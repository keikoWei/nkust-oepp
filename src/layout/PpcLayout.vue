<template>
  <div class="ppc-layout">
    <PpcHeader />

    <!-- 產品推廣中心內容 -->
    <div class="ppc-home">
      <section class="banner no-gap">
        <Carousel :images="carouselImages" :interval="10000" :showWatermark="false" />
      </section>

      <!-- 最新消息區域 -->
      <section class="news-section">
        <PpcNewsComponents />
      </section>

      <!-- 影片輪播區域 -->
      <section class="video-banner">
        <div class="video-section-title">
          <h2>高科大 - 品牌商店</h2>
        </div>
        <VideoCarousel 
          :videos="videoList" 
          :autoplay="false"
        />
      </section>

      <!-- DK SHOP 宣傳圖片區域 -->
      <section class="dkshop-banner">
        <div class="dkshop-container">
          <img 
            src="/image/dkshop/DKSHOP_GONOW.png" 
            alt="DK SHOP 高科精品" 
            class="dkshop-image"
            @click="openDkShop"
          />
        </div>
      </section>

      <MainFooterComponent waveColor="#fff" backgroundColor="#e3d496" textColor="#534741" />
    </div>
  </div>
</template>

<script setup>
import Carousel from '@/components/Carousel.vue'
import VideoCarousel from '@/components/VideoCarousel.vue'
import MainFooterComponent from '@/components/MainFooterComponent.vue'
import PpcHeader from '@/components/PpcHeader.vue'
import PpcNewsComponents from '@/components/PpcNewsComponents.vue'

const openDkShop = () => {
  window.open('https://dkshop2020.cyberbiz.co/', '_blank')
}

// PPC專用的輪播圖片
const carouselImages = [
  {
    url: '/image/carousels/ppc_1_carousel.png',
    alt: '產品推廣中心 1'
  },
  {
    url: '/image/carousels/ppc_2_carousel.png',
    alt: '產品推廣中心 2'
  }
]

// PPC專用的影片輪播
const videoList = [
  {
    url: '/video/Dkshop_Product_video.mp4',
    title: 'DK SHOP產品介紹影片'
  }
]
</script>

<style scoped>
.ppc-layout {
  width: 100%;
  margin: 0;
  padding: 0;
  background-color: #ffffff;
}

/* 容器樣式 */
.content-wrapper {
  width: 70vw;
  max-width: 100%;
  margin: 0 auto;
}

/* 影片輪播樣式 */
.video-banner {
  width: 100%;
  margin: 3rem 0;
  padding: 2rem 0;
  background-color: #ffffff;
}

.video-section-title {
  width: 70vw;
  max-width: 100%;
  margin: 0 auto 2rem auto;
  text-align: center;
}

.video-section-title h2 {
  font-size: 45pt;
  font-weight: bold;
  color: #534741;
  margin: 0;
  padding: 0;
  letter-spacing: 2px;
}

/* DK SHOP 宣傳圖片樣式 */
.dkshop-banner {
  width: 100%;
  margin: 3rem 0;
  padding: 2rem 0;
  background-color: #ffffff;
}

.dkshop-container {
  width: 70vw;
  max-width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
}

.dkshop-image {
  width: 100%;
  height: 520px;
  object-fit: cover;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
}

.dkshop-image:hover {
  transform: scale(1.02);
  box-shadow: 0 8px 16px rgba(0,0,0,0.2);
}

/* 最新消息區域樣式 */
.news-section {
  width: 100%;
  margin: 3rem 0;
  padding: 2rem 0;
  background-color: #ffffff;
}

/* 響應式設計 */
@media (max-width: 1400px) {
  .dkshop-image {
    width: 100%;
    height: 520px;
  }
}

@media (max-width: 768px) {
  .video-banner {
    margin: 2rem 0;
    padding: 1rem 0;
  }
  
  .video-section-title {
    width: 90vw;
    margin: 0 auto 1.5rem auto;
  }
  
  .video-section-title h2 {
    font-size: 1.8rem;
    letter-spacing: 1px;
  }
  
  .dkshop-banner {
    margin: 2rem 0;
    padding: 1rem 0;
  }
  
  .dkshop-image {
    width: 100%;
    height: 300px;
    border-radius: 4px;
  }
  
  .news-section {
    margin: 2rem 0;
    padding: 1rem 0;
  }
}

/* PPC首頁內容樣式 */
.ppc-home {
  width: 100%;
  margin: 0;
  padding: 0;
}

.banner {
  width: 70vw;
  max-width: 100%;
  margin: 0 auto 6rem auto;
  margin-top: 0;
  padding-top: 0;
}

.no-gap {
  margin-top: 0 !important;
  padding-top: 0 !important;
  border-top: none !important;
}

.ppc-events {
  width: 70vw;
  max-width: 100%;
  margin: 0 auto 2rem auto;
}

.welcome-card {
  margin-bottom: 3rem;
  background: transparent;
}

.section-card {
  margin-bottom: 3rem;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}

.section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.activity-card {
  transition: transform 0.3s ease;
  border-radius: 8px;
  overflow: hidden;
}

.activity-card:hover {
  transform: translateY(-5px);
}

.news-section,
.video-section,
.achievement-section,
.activities-section {
  width: 70vw;
  max-width: 100%;
  margin: 0 auto 3rem auto;
}
</style>

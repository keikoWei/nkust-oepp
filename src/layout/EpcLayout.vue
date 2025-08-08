<template>
  <div class="epc-layout">
    <EpcHeader />

    <!-- 會展中心主要內容區域 -->
    <div class="epc-main">
      <!-- 輪播圖區域 -->
      <section class="banner no-gap">
        <Carousel :images="carouselImages" :interval="10000" :showWatermark="false" />
      </section>

      <!-- 最新消息區域 -->
      <section class="news-section">
        <EpcNewsComponent />
      </section>

      <!-- 底部Footer -->
      <MainFooterComponent waveColor="#fff" backgroundColor="#839e8d" textColor="#ffffff" class="epc-footer" />
    </div>
  </div>
</template>

<script setup>
import EpcHeader from '@/components/EpcHeader.vue'
import Carousel from '@/components/Carousel.vue'
import EpcNewsComponent from '@/components/EpcNewsComponent.vue'
import MainFooterComponent from '@/components/MainFooterComponent.vue'

const carouselImages = [
  {
    url: '/image/carousels/epc_1_carousel.jpg',
    alt: '會展中心活動 1'
  },
  {
    url: '/image/carousels/epc_2_carousel.jpg',
    alt: '會展中心活動 2'
  },
  {
    url: '/image/carousels/epc_3_carousel.jpg',
    alt: '會展中心活動 3'
  },
  {
    url: '/image/carousels/epc_4_carousel.jpg',
    alt: '會展中心活動 4'
  }
]
</script>

<style scoped>
.epc-layout {
  width: 100%;
  margin: 0;
  padding: 0;
  background-color: #ffffff;
  color: #3e3b3a;
}

/* 主要內容區域 */
.epc-main {
  width: 100%;
  margin: 0;
  padding: 0;
}

/* 輪播圖樣式 */
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

/* 最新消息區域樣式 */
.news-section {
  width: 70vw;
  max-width: 100%;
  margin: 0 auto 3rem auto;
}

/* 內容區域樣式 */
.content-section {
  width: 70vw;
  max-width: 100%;
  margin: 0 auto 3rem auto;
  min-height: 400px;
}

/* EPC Footer樣式 */
.epc-footer {
  background-color: #839e8d !important;
}

/* 響應式設計 */
@media (max-width: 768px) {
  .banner,
  .news-section,
  .content-section {
    width: 90vw;
  }
}

@media (max-width: 480px) {
  .banner {
    width: 100%;
    margin: 0 0 4rem 0;
  }

  .news-section,
  .content-section {
    width: 100%;
    margin: 0 0 2rem 0;
    padding: 0 1rem;
  }
}
</style>

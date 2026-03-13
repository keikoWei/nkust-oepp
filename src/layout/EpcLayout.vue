<template>
  <div class="epc-layout">
    <EpcHeader />

    <!-- 會展中心主要內容區域 -->
    <div class="epc-main">
      <!-- 輪播圖區域 -->
      <section class="banner no-gap">
        <Carousel v-if="carouselImages.length" :images="carouselImages" :interval="10000" :showWatermark="false" />
        <div v-else class="carousel-empty">暫無圖片</div>
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
import { ref, onMounted } from 'vue'
import EpcHeader from '@/components/EpcHeader.vue'
import Carousel from '@/components/Carousel.vue'
import EpcNewsComponent from '@/components/EpcNewsComponent.vue'
import MainFooterComponent from '@/components/MainFooterComponent.vue'
import { getPublicCarousels } from '@/api/carousel'

const carouselImages = ref([])

onMounted(async () => {
  try {
    const res = await getPublicCarousels('EXHIBITION_CENTER')
    const list = Array.isArray(res) ? res : (res?.data ?? [])
    carouselImages.value = (list || [])
      .sort((a, b) => (a.sortOrder ?? 0) - (b.sortOrder ?? 0))
      .map(item => ({ url: item.imageUrl ?? item.image_url ?? '', alt: item.title ?? '', clickUrl: item.clickUrl ?? item.click_url ?? '' }))
      .filter(item => item.url)
  } catch {
    carouselImages.value = []
  }
})
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

.carousel-empty {
  width: 100%;
  min-height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #999;
  font-size: 1rem;
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

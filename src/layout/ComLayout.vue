<template>
  <div class="com-layout">
    <ComHeader />

    <div class="com-home">
      <section class="banner no-gap">
        <Carousel v-if="carouselImages.length" :images="carouselImages" :interval="10000" :showWatermark="false" />
        <div v-else class="carousel-empty">暫無圖片</div>
      </section>

      <section class="news-section">
        <ComNewsComponent />
      </section>

      <section class="map-section">
        <MapCompontent />
      </section>

      <MainFooterComponent waveColor="#fff" backgroundColor="#8C776D" textColor="#ffffff" />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import Carousel from '@/components/Carousel.vue'
import MainFooterComponent from '@/components/MainFooterComponent.vue'
import ComHeader from '@/components/ComHeader.vue'
import ComNewsComponent from '@/components/ComNewsComponent.vue'
import MapCompontent from '@/components/MapCompontent.vue'
import { getPublicCarousels } from '@/api/carousel'

/** 後台尚無輪播時使用的 2 張預設圖（使用站內既有圖片） */
const FALLBACK_CAROUSEL = [
  { url: '/image/members/member_top.jpg', alt: '經營管理中心', clickUrl: '' },
  { url: '/image/oepp.png', alt: '教育事業暨產品推廣處', clickUrl: '' }
]

const carouselImages = ref([])

onMounted(async () => {
  try {
    const res = await getPublicCarousels('MANAGEMENT_CENTER')
    const list = Array.isArray(res) ? res : (res?.data ?? [])
    const fromApi = (list || [])
      .sort((a, b) => (a.sortOrder ?? 0) - (b.sortOrder ?? 0))
      .map(item => ({
        url: item.imageUrl ?? item.image_url ?? '',
        alt: item.title ?? '',
        clickUrl: item.clickUrl ?? item.click_url ?? ''
      }))
      .filter(item => item.url)
    carouselImages.value = fromApi.length > 0 ? fromApi : FALLBACK_CAROUSEL
  } catch {
    carouselImages.value = FALLBACK_CAROUSEL
  }
})
</script>

<style scoped>
.com-layout {
  width: 100%;
  margin: 0;
  padding: 0;
  background-color: #ffffff;
}

.com-home {
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

.news-section {
  width: 70vw;
  max-width: 100%;
  margin: 0 auto 3rem auto;
  padding: 2rem 0;
  background-color: #ffffff;
}

.map-section {
  width: 70vw;
  max-width: 100%;
  margin: 0 auto 3rem auto;
  padding: 2rem 0;
  background-color: #ffffff;
}

.carousel-empty {
  width: 100%;
  min-height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #666;
  font-size: 1rem;
}

@media (max-width: 768px) {
  .banner,
  .news-section,
  .map-section {
    width: 90vw;
  }
}

@media (max-width: 480px) {
  .banner {
    width: 100%;
    margin: 0 0 4rem 0;
  }
  .news-section,
  .map-section {
    width: 100%;
    margin: 0 0 2rem 0;
    padding: 0 1rem;
  }
}
</style>

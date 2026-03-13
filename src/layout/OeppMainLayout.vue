<template>
  <div class="home-layout">
    <AppHeader />

    <!-- 首頁內容 -->
    <div class="home">
      <section class="banner no-gap">
        <Carousel v-if="carouselImages.length" :images="carouselImages" :interval="10000" />
        <div v-else class="carousel-empty">暫無圖片</div>
      </section>

      <section class="oepp-events">
        <OeppEventsInformation />
      </section>

      <section class="news-section">
        <OeppNewsComponent />
      </section>

      <section class="achievement-section">
        <EducationalAchievementComponent />
      </section>

      <section class="video-section">
        <VideoPlayComponents />
      </section>

      <MainFooterComponent />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import AppHeader from '@/components/AppHeader.vue'
import Carousel from '@/components/Carousel.vue'
import OeppEventsInformation from '@/components/OeppEventsInformation.vue'
import OeppNewsComponent from '@/components/OeppNewsComponent.vue'
import VideoPlayComponents from '@/components/VideoPlayComponents.vue'
import EducationalAchievementComponent from '@/components/EducationalAchievementComponent.vue'
import MainFooterComponent from '@/components/MainFooterComponent.vue'
import { getPublicCarousels } from '@/api/carousel'

const carouselImages = ref([])

onMounted(async () => {
  try {
    const res = await getPublicCarousels('HEADQUARTERS')
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
.home-layout {
  width: 100%;
  margin: 0;
  padding: 0;
  background-color: #ffffff;
}

/* 首頁內容樣式 */
.home {
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

.carousel-empty {
  width: 100%;
  min-height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #999;
  font-size: 1rem;
}

.oepp-events {
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

/* 手機版樣式 */
@media (max-width: 480px) {
  .banner {
    width: 100%;
    margin: 0 0 4rem 0;
  }

  .oepp-events {
    width: 100%;
    margin: 0 0 2rem 0;
    padding: 0 1rem;
  }

  .news-section,
  .video-section,
  .achievement-section,
  .activities-section {
    width: 100%;
    margin: 0 0 2rem 0;
    padding: 0 1rem;
  }
}
</style> 
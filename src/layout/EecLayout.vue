<template>
  <div class="eec-layout">
    <EecHeader />

    <!-- 教育推廣中心內容 -->
    <div class="eec-home">
      <section class="banner no-gap">
        <EecCarousel v-if="carouselImages.length" :images="carouselImages" :interval="10000" :showWatermark="false" :imageObjectFit="'contain'" />
        <div v-else class="carousel-empty">暫無圖片</div>
      </section>

      <!-- 最新消息區域 -->
      <section class="course-announcement-section">
        <CourseAnnouncementComponent />
      </section>

      <!-- 熱門課程區域 -->
      <section class="hot-courses-section">
        <EecHotCoursesComponent />
      </section>

      <!-- 課程花絮區域 -->
      <section class="course-highlights-section">
        <CourseHighlightsComponent />
      </section>

      <MainFooterComponent waveColor="#fff" backgroundColor="#e3d9cd" textColor="#534741" />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import EecCarousel from '@/components/EecCarousel.vue'
import MainFooterComponent from '@/components/MainFooterComponent.vue'
import EecHeader from '@/components/EecHeader.vue'
import CourseAnnouncementComponent from '@/components/CourseAnnouncementComponent.vue'
import EecHotCoursesComponent from '@/components/EecHotCoursesComponent.vue'
import CourseHighlightsComponent from '@/components/CourseHighlightsComponent.vue'
import { getPublicCarousels } from '@/api/carousel'

const carouselImages = ref([])

onMounted(async () => {
  try {
    const res = await getPublicCarousels('EDUCATION_CENTER')
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
.eec-layout {
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

/* 最新消息區域樣式 */
.course-announcement-section {
  width: 100%;
  margin: 3rem 0;
  padding: 2rem 0;
  background-color: #ffffff;
}

/* 熱門課程區域樣式 */
.hot-courses-section {
  width: 100%;
  margin: 3rem 0;
  padding: 2rem 0;
  background-color: #ffffff;
}

/* 課程花絮區域樣式 */
.course-highlights-section {
  width: 100%;
  margin: 3rem 0;
  padding: 2rem 0;
  background-color: #ffffff;
}

/* EEC首頁內容樣式 */
.eec-home {
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

.course-announcement-section,
.hot-courses-section,
.course-highlights-section {
  width: 70vw;
  max-width: 100%;
  margin: 0 auto 3rem auto;
}

/* 響應式設計 */
@media (max-width: 768px) {
  .course-announcement-section,
  .hot-courses-section,
  .course-highlights-section {
    margin: 2rem 0;
    padding: 1rem 0;
  }
}

/* 手機版樣式 - 參考 OeppMainLayout.vue */
@media (max-width: 480px) {
  .banner {
    width: 100%;
    margin: 0 0 4rem 0;
  }

  .course-announcement-section,
  .hot-courses-section,
  .course-highlights-section {
    width: 100%;
    margin: 0 0 2rem 0;
    padding: 0 1rem;
  }
}
</style>

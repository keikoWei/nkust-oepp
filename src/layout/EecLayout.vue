<template>
  <div class="eec-layout">
    <EecHeader />

    <!-- 教育推廣中心內容 -->
    <div class="eec-home">
      <section class="banner no-gap">
        <Carousel :images="carouselImages" :interval="10000" :showWatermark="false" />
      </section>

      <!-- 課程公告區域 -->
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
import Carousel from '@/components/Carousel.vue'
import MainFooterComponent from '@/components/MainFooterComponent.vue'
import EecHeader from '@/components/EecHeader.vue'
import CourseAnnouncementComponent from '@/components/CourseAnnouncementComponent.vue'
import EecHotCoursesComponent from '@/components/EecHotCoursesComponent.vue'
import CourseHighlightsComponent from '@/components/CourseHighlightsComponent.vue'

// EEC專用的輪播圖片
const carouselImages = [
  {
    url: '/image/carousels/oepp_1_carousel.jpg',
    alt: '教育推廣中心 1'
  },
  {
    url: '/image/carousels/oepp_2_carousel.jpg',
    alt: '教育推廣中心 2'
  },
  {
    url: '/image/carousels/oepp_3_carousel.jpg',
    alt: '教育推廣中心 3'
  }
]
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

/* 課程公告區域樣式 */
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

/* 響應式設計 */
@media (max-width: 768px) {
  .course-announcement-section,
  .hot-courses-section,
  .course-highlights-section {
    margin: 2rem 0;
    padding: 1rem 0;
  }
}
</style>

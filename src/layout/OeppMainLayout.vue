<template>
  <div class="home">
    <section class="banner no-gap">
      <Carousel :images="carouselImages" :interval="10000" />
    </section>

    <section class="oepp-events">
      <OeppEventsInformation />
    </section>

    <section class="news-section">
      <NewsComponents />
    </section>

    <section class="achievement-section">
      <EducationalAchievementComponent />
    </section>

    <section class="video-section">
      <VideoPlayComponents />
    </section>


    <MainFooterComponent />
  </div>
</template>

<script setup>
import Carousel from '@/components/Carousel.vue'
import OeppEventsInformation from '@/components/OeppEventsInformation.vue'
import NewsComponents from '@/components/NewsComponents.vue'
import VideoPlayComponents from '@/components/VideoPlayComponents.vue'
import EducationalAchievementComponent from '@/components/EducationalAchievementComponent.vue'
import MainFooterComponent from '@/components/MainFooterComponent.vue'

const carouselImages = [
  {
    url: '/image/carousels/oepp_1_carousel.jpg',
    alt: '高科大校園 1'
  },
  {
    url: '/image/carousels/oepp_2_carousel.jpg',
    alt: '高科大校園 2'
  },
  {
    url: '/image/carousels/oepp_3_carousel.jpg',
    alt: '高科大校園 3'
  },
  {
    url: '/image/carousels/oepp_4_carousel.jpg',
    alt: '高科大校園 4'
  },
  {
    url: '/image/carousels/oepp_5_carousel.jpg',
    alt: '高科大校園 5'
  }
]
</script>

<style scoped>
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
</style> 
<template>
  <div class="oepp-news-page">
    <AppHeader />
    <section class="top-banner">
      <div class="banner-image">
        <img src="/image/members/member_top.jpg" alt="處本部重要網站頂部圖" class="banner-img" />
        <div class="banner-watermark">
          <h1>重要網站</h1>
        </div>
      </div>
    </section>
    <div class="news-content">
      <div class="content-wrapper">
        <AllOeppNewsComponent />
      </div>
    </div>
    <MainFooterComponent />
  </div>
</template>

<script setup>
import AppHeader from '@/components/AppHeader.vue'
import MainFooterComponent from '@/components/MainFooterComponent.vue'
import AllOeppNewsComponent from '@/components/AllOeppNewsComponent.vue'
</script>

<style scoped>
.oepp-news-page {
  width: 100%;
  min-height: 100vh;
  margin: 0;
  padding: 0;
  background: #fff;
}

.top-banner {
  width: calc(70vw);
  max-width: 100%;
  margin: 0 auto;
  position: relative;
  overflow: hidden;
}

.banner-image {
  width: 100%;
  height: 422px;
  position: relative;
  overflow: hidden;
}

.banner-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.banner-watermark {
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
  background: linear-gradient(135deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0) 70%);
}

.banner-watermark h1 {
  color: #fff;
  font-size: 37pt;
  font-weight: bold;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
  margin: 0;
  letter-spacing: 2px;
}

.news-content {
  width: 100%;
  min-height: 600px;
  padding: 3rem 0;
  background: #fff;
}

.content-wrapper {
  width: 70vw;
  max-width: 100%;
  margin: 0 auto;
  padding: 0 2rem;
}
</style>


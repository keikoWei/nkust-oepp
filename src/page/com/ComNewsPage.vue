<template>
  <div class="com-news-page">
    <ComHeader />
    <section class="com-banner">
      <div class="banner-image">
        <img src="/image/members/member_top.jpg" alt="經營管理中心最新消息" class="banner-img">
        <div class="watermark">最新消息</div>
      </div>
    </section>
    <div class="news-content">
      <div class="content-wrapper">
        <ComNewsComponent />
      </div>
    </div>
    <MainFooterComponent waveColor="#fff" backgroundColor="#8C776D" textColor="#ffffff" />
  </div>
</template>

<script setup>
import ComHeader from '@/components/ComHeader.vue'
import MainFooterComponent from '@/components/MainFooterComponent.vue'
import ComNewsComponent from '@/components/ComNewsComponent.vue'
</script>

<style scoped>
.com-news-page {
  width: 100%;
  margin: 0;
  padding: 0;
  background-color: #ffffff;
  font-family: "GenYoGothic TW", "源樣黑體月", "Microsoft JhengHei", sans-serif;
}

.com-banner {
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
  letter-spacing: 2px;
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

@media (max-width: 768px) {
  .content-wrapper {
    width: 90vw;
    padding: 0 1rem;
  }
  .news-content {
    padding: 2rem 0;
  }
}

@media (max-width: 480px) {
  .com-banner {
    width: 100%;
    margin: 0;
  }
  .banner-image {
    height: 200px;
  }
  .watermark {
    padding: 20px 0 0 30px;
    font-size: 24pt;
  }
}
</style>

<template>
  <div class="epc-news-detail-page">
    <EpcHeader />
    <section class="top-banner">
      <div class="banner-image">
        <img src="/image/epc/epc_introduction_top.jpg" alt="會展及出版中心最新消息頂部圖" class="banner-img" />
        <div class="banner-watermark">
          <h1>最新消息</h1>
        </div>
      </div>
    </section>
    <NewsDetailContent back-path="/publication" back-label="返回會展及出版中心" />
    <MainFooterComponent waveColor="#fff" backgroundColor="#839e8d" textColor="#ffffff" />
  </div>
</template>

<script setup>
import EpcHeader from '@/components/EpcHeader.vue'
import MainFooterComponent from '@/components/MainFooterComponent.vue'
import NewsDetailContent from '@/components/NewsDetailContent.vue'
</script>

<style scoped>
.epc-news-detail-page {
  width: 100%;
  min-height: 100vh;
  margin: 0;
  padding: 0;
  background-color: #ffffff;
  color: #3e3b3a;
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
  color: white;
  font-size: 37pt;
  font-weight: bold;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
  margin: 0;
  letter-spacing: 2px;
  font-family: "GenYoGothic TW", "源樣夜黑體", "Microsoft JhengHei", sans-serif;
}

@media (max-width: 480px) {
  .top-banner {
    width: 100%;
  }
  .banner-image {
    height: 200px;
  }
  .banner-watermark {
    padding: 20px 0 0 20px;
  }
  .banner-watermark h1 {
    font-size: 20pt;
  }
}
</style>

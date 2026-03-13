<template>
  <div class="ppc-news-detail-page">
    <PpcHeader />
    <section class="top-banner">
      <div class="banner-image">
        <img src="/image/dkshop/DKSHOP_LOGO.png" alt="產品推廣中心最新消息頂部圖" class="banner-img" />
        <div class="banner-watermark">
          <h1>最新消息</h1>
        </div>
      </div>
    </section>
    <NewsDetailContent back-path="/productCenter" back-label="返回產品推廣中心" />
    <MainFooterComponent waveColor="#fff" backgroundColor="#e3d496" textColor="#534741" />
  </div>
</template>

<script setup>
import PpcHeader from '@/components/PpcHeader.vue'
import MainFooterComponent from '@/components/MainFooterComponent.vue'
import NewsDetailContent from '@/components/NewsDetailContent.vue'
</script>

<style scoped>
.ppc-news-detail-page {
  width: 100%;
  min-height: 100vh;
  margin: 0;
  padding: 0;
  background-color: #ffffff;
  font-family: "GenYoGothic TW", "源樣黑體月", "Microsoft JhengHei", sans-serif;
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
  color: white;
  font-size: 37pt;
  font-weight: bold;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
  margin: 0;
  letter-spacing: 2px;
}

.banner-watermark h1 {
  color: white;
  font-size: 37pt;
  font-weight: bold;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
  margin: 0;
  letter-spacing: 2px;
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

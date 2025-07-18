<template>
  <div class="center-introduction-page-container">
    <!-- 會展中心導覽欄 -->
    <EpcHeader />

    <!-- 頂部圖片區域 -->
    <section class="page-banner">
      <div class="banner-image">
        <img src="/image/epc/epc_introduction_top.jpg" alt="中心簡介頂部圖片" class="banner-img">
        <div class="banner-watermark">
          <h1>中心簡介</h1>
        </div>
      </div>
    </section>

    <!-- 頁面內容 -->
    <div class="content-container">  
      <div class="content">
        <div class="page-content">
          <h2>會展及出版中心簡介</h2>
          <p>國立高雄科技大學會展及出版中心致力於推動會展產業發展與學術出版服務。</p>
          
          <!-- 待補充內容 -->
          <div class="placeholder-content">
            <p>此頁面內容將於後續開發中完善...</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Footer -->
    <MainFooterComponent waveColor="#fff" backgroundColor="#839e8d" textColor="#ffffff" />
  </div>
</template>

<script setup>
import EpcHeader from '@/components/EpcHeader.vue'
import MainFooterComponent from '@/components/MainFooterComponent.vue'
</script>

<style scoped>
.center-introduction-page-container {
  width: 100%;
  margin: 0;
  padding: 0;
  font-family: "GenYoGothic TW", "源樣夜黑體", "Microsoft JhengHei", sans-serif;
  color: #3e3b3a;
}

/* 頂部圖片區域 */
.page-banner {
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
  background: linear-gradient(135deg, rgba(131, 158, 141, 0.8) 0%, rgba(131, 158, 141, 0) 70%);
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

/* 內容樣式 */
.content-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 3rem 2rem;
}

.content {
  background: #fff;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}

.page-content h2 {
  color: #839e8d;
  font-size: 28pt;
  margin-bottom: 1rem;
  border-bottom: 3px solid #839e8d;
  padding-bottom: 0.5rem;
}

.page-content p {
  font-size: 16pt;
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.placeholder-content {
  background: #f8f9fa;
  padding: 2rem;
  border-radius: 8px;
  text-align: center;
  margin-top: 2rem;
}

.placeholder-content p {
  color: #6c757d;
  font-style: italic;
}

/* 響應式設計 */
@media (max-width: 768px) {
  .page-banner {
    width: 95vw;
  }
  
  .banner-watermark {
    padding: 20px 0 0 30px;
  }
  
  .banner-watermark h1 {
    font-size: 24pt;
  }
  
  .content-container {
    padding: 2rem 1rem;
  }
  
  .page-content h2 {
    font-size: 20pt;
  }
  
  .page-content p {
    font-size: 14pt;
  }
}
</style>

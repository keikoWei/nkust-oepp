<template>
  <div class="seminar-service-page-container">
    <!-- 會展中心導覽欄 -->
    <EpcHeader />

    <!-- 頂部圖片區域 -->
    <section class="page-banner">
      <div class="banner-image">
        <img src="/image/epc/seminar_top.jpg" alt="辦理研討會協助頂部圖片" class="banner-img">
        <div class="banner-watermark">
          <h1>辦理研討會協助</h1>
        </div>
      </div>
    </section>

    <!-- 頁面內容 -->
    <div class="content-container">  
      <div class="content">
        <!-- 頁面標題 -->
        <div class="page-title">
          <h2>服務系統</h2>
        </div>

        <!-- 服務項目區域 -->
        <div class="service-sections">
          <!-- 會議電子化管理系統 -->
          <div class="service-section">
            <div class="service-box">
              <span class="service-text">會議電子化<br>管理系統</span>
            </div>
            <div class="service-list">
              <ol>
                <li>線上報名/投稿/審稿/訂房</li>
                <li>協助線上繳費系統申請(刷卡/匯款)</li>
                <li>現場QR Code報到系統</li>
                <li>會議APP</li>
                <li>E-Poster展示系統</li>
              </ol>
            </div>
          </div>

          <!-- 會議財務管理 -->
          <div class="service-section">
            <div class="service-box">
              <span class="service-text">會議財務管理</span>
            </div>
            <div class="service-list">
              <ol>
                <li>發票、收據寄送</li>
              </ol>
            </div>
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
.seminar-service-page-container {
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
  padding: 3rem 2rem 6rem 2rem;
  display: flex;
  justify-content: center;
}

.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
  width: 100%;
  max-width: 1000px;
}

/* 頁面標題 */
.page-title {
  text-align: center;
  margin-bottom: 40px;
}

.page-title h2 {
  font-size: 30pt;
  color: #3e3b3a;
  margin: 0;
  font-weight: normal;
  font-family: "GenYoGothic TW", "源樣夜黑體", "Microsoft JhengHei", sans-serif;
}

/* 服務區域 */
.service-sections {
  display: flex;
  flex-direction: column;
  gap: 50px;
  width: 100%;
  max-width: 1000px;
}

.service-section {
  display: flex;
  align-items: center;
  gap: 60px;
}

.service-box {
  width: 325px;
  height: 155px;
  background-color: #839e8d;
  border-radius: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
}

.service-text {
  font-size: 25pt;
  color: white;
  font-weight: normal;
  font-family: "GenYoGothic TW", "源樣夜黑體", "Microsoft JhengHei", sans-serif;
  text-align: center;
  line-height: 1.3;
}

.service-list {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.service-list ol {
  margin: 0;
  padding-left: 0;
  list-style: none;
  counter-reset: item;
}

.service-list li {
  font-size: 20pt;
  color: #5d7266;
  margin-bottom: 10px;
  padding-left: 60px;
  position: relative;
  counter-increment: item;
  font-family: "GenYoGothic TW", "源樣夜黑體", "Microsoft JhengHei", sans-serif;
  line-height: 1.2;
}

.service-list li::before {
  content: counter(item) ".";
  position: absolute;
  left: 0;
  width: 50px;
  text-align: right;
  font-weight: bold;
  color: #5d7266;
}

/* 響應式設計 */
@media (max-width: 1024px) {
  .service-section {
    gap: 40px;
  }
  
  .service-box {
    width: 280px;
    height: 140px;
  }
  
  .service-text {
    font-size: 22pt;
  }
  
  .service-list li {
    font-size: 18pt;
    color: #5d7266;
  }
}

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
  
  .page-title h2 {
    font-size: 26pt;
  }
  
  .service-sections {
    gap: 40px;
  }
  
  .service-section {
    flex-direction: column;
    gap: 30px;
    align-items: center;
  }
  
  .service-box {
    width: 300px;
    height: 150px;
  }
  
  .service-text {
    font-size: 20pt;
  }
  
  .service-list {
    padding-top: 0;
    width: 100%;
    max-width: 500px;
  }
  
  .service-list li {
    font-size: 17pt;
    color: #5d7266;
  }
}

@media (max-width: 480px) {
  .banner-watermark h1 {
    font-size: 18pt;
  }
  
  .page-title h2 {
    font-size: 22pt;
  }
  
  .service-box {
    width: 280px;
    height: 140px;
  }
  
  .service-text {
    font-size: 18pt;
  }
  
  .service-list li {
    font-size: 15pt;
    color: #5d7266;
  }
}
</style>

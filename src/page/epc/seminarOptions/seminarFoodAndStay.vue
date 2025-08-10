<template>
  <div class="seminar-food-and-stay-page-container">
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
          <h2>食宿交通進程</h2>
        </div>

        <!-- 服務項目區域 -->
        <div class="service-items">
          <!-- 住宿規劃 -->
          <div class="service-item">
            <div class="service-icon">
              <img src="/image/epc/seminarOptions/foodandstay_住宿規劃.jpg" alt="住宿規劃" class="icon-img">
              <span class="icon-text">住宿規劃</span>
            </div>
            <div class="service-content">
              <div class="service-title-box">
                <span class="service-title">住宿規劃</span>
              </div>
              <div class="service-description">
                <p>餐飲規劃</p>
                <p>詳請請洽#12851-#12853</p>
              </div>
            </div>
          </div>

          <!-- 餐飲規劃 -->
          <div class="service-item">
            <div class="service-icon">
              <img src="/image/epc/seminarOptions/foodandstay_餐飲規劃.jpg" alt="餐飲規劃" class="icon-img">
              <span class="icon-text">餐飲規劃</span>
            </div>
            <div class="service-content">
              <div class="service-title-box">
                <span class="service-title">餐飲規劃</span>
              </div>
              <div class="service-description">
                <p>圖片-大合照</p>
              </div>
            </div>
          </div>

          <!-- 交通規劃 -->
          <div class="service-item">
            <div class="service-icon">
              <img src="/image/epc/seminarOptions/foodandstay_交通規劃.jpg" alt="交通規劃" class="icon-img">
              <span class="icon-text">交通規劃</span>
            </div>
            <div class="service-content">
              <div class="service-title-box">
                <span class="service-title">交通規劃</span>
              </div>
              <div class="service-description">
                <p>9人座/20人座/40人座 接駁規劃</p>
                <p>詳情請洽#12851-12853</p>
              </div>
            </div>
          </div>

          <!-- 文化表演 -->
          <div class="service-item">
            <div class="service-icon">
              <img src="/image/epc/seminarOptions/foodandstay_文化表演.jpg" alt="文化表演" class="icon-img">
              <span class="icon-text">文化表演</span>
            </div>
            <div class="service-content">
              <div class="service-title-box">
                <span class="service-title">文化表演</span>
              </div>
              <div class="service-description">
                <p>影片-達人秀、精華片段</p>
              </div>
            </div>
          </div>

          <!-- 旅遊參訪 -->
          <div class="service-item">
            <div class="service-icon">
              <img src="/image/epc/seminarOptions/foodandstay_旅遊參訪.jpg" alt="旅遊參訪" class="icon-img">
              <span class="icon-text">旅遊參訪</span>
            </div>
            <div class="service-content">
              <div class="service-title-box">
                <span class="service-title">旅遊參訪</span>
              </div>
              <div class="service-description">
                <p>相關案例實績</p>
              </div>
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
.seminar-food-and-stay-page-container {
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

/* 服務項目 */
.service-items {
  display: flex;
  flex-direction: column;
  gap: 40px;
  width: 100%;
}

.service-item {
  display: flex;
  align-items: center;
  gap: 50px;
  justify-content: center;
  margin-left: 100px;
}

/* 圖示區域 */
.service-icon {
  position: relative;
  width: 280px;
  height: 280px;
  flex-shrink: 0;
}

.icon-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
}

.icon-text {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  color: white;
  font-size: 20pt;
  font-weight: bold;
  font-family: "GenYoGothic TW", "源樣夜黑體", "Microsoft JhengHei", sans-serif;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
}

/* 內容區域 */
.service-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-left: 50px;
}

.service-title-box {
  width: 225px;
  height: 55px;
  background-color: #839e8d;
  border-radius: 27.5px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.service-title {
  font-size: 30pt;
  color: white;
  font-weight: normal;
  font-family: "GenYoGothic TW", "源樣夜黑體", "Microsoft JhengHei", sans-serif;
}

.service-description {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-left: 30px;
}

.service-description p {
  font-size: 20pt;
  color: #5d7266;
  margin: 0;
  font-family: "GenYoGothic TW", "源樣夜黑體", "Microsoft JhengHei", sans-serif;
  line-height: 1.3;
}

/* 響應式設計 */
@media (max-width: 1024px) {
  .service-item {
    gap: 40px;
  }
  
  .service-icon {
    width: 250px;
    height: 250px;
  }
  
  .service-title-box {
    width: 200px;
    height: 50px;
  }
  
  .service-title {
    font-size: 26pt;
  }
  
  .service-description p {
    font-size: 18pt;
  }
  
  .icon-text {
    font-size: 18pt;
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
    padding: 2rem 1rem 4rem 1rem;
  }
  
  .page-title h2 {
    font-size: 26pt;
  }
  
  .service-item {
    flex-direction: column;
    gap: 30px;
    align-items: center;
  }
  
  .service-icon {
    width: 220px;
    height: 220px;
  }
  
  .service-title-box {
    width: 180px;
    height: 50px;
  }
  
  .service-title {
    font-size: 24pt;
  }
  
  .service-description {
    text-align: center;
  }
  
  .service-description p {
    font-size: 17pt;
  }
  
  .icon-text {
    font-size: 16pt;
  }
}

@media (max-width: 480px) {
  .page-banner {
    width: 100vw;
    margin: 0;
  }
  
  .banner-image {
    height: 200px;
  }
  
  .banner-watermark h1 {
    font-size: 18pt;
  }
  
  .content-container {
    width: 100%;
    margin: 0;
    padding: 2rem 1rem 4rem 1rem;
  }
  
  .page-title h2 {
    font-size: 22pt;
  }
  
  .service-items {
    gap: 30px;
  }
  
  .service-item {
    margin-left: 0;
    width: 100%;
    flex-direction: column;
    gap: 20px;
    align-items: center;
    text-align: center;
  }
  
  .service-icon {
    width: 180px;
    height: 180px;
  }
  
  .service-title-box {
    width: 160px;
    height: 45px;
  }
  
  .service-title {
    font-size: 20pt;
  }
  
  .service-content {
    margin-left: 0;
    align-items: center;
    text-align: center;
    width: 100%;
  }
  
  .service-description {
    margin-left: 0;
    align-items: center;
    width: 100%;
  }
  
  .service-description p {
    font-size: 15pt;
    text-align: center;
    width: 100%;
  }
  
  .icon-text {
    font-size: 14pt;
  }
}
</style>

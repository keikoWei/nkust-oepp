<template>
  <div class="seminar-venue-page-container">
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
          <h2>會場佈置</h2>
        </div>

        <!-- 場地與硬體規劃 -->
        <div class="venue-section">
          <div class="section-title-box">
            <span class="section-title">場地與硬體規劃</span>
          </div>
          <div class="section-content">
            <div class="service-list">
              <ol>
                <li>地點建議</li>
                <li>場地佈置</li>
                <li>設備租賃 (燈光音響、口譯、視訊等設備)</li>
                <li>動線安排</li>
              </ol>
            </div>
            <div class="image-grid">
              <div class="image-item">
                <img src="/image/epc/seminarOptions/venue_舞台TRUSS搭設.jpg" alt="舞台TRUSS搭設." class="grid-img">
                <p class="image-caption">▲舞台TRUSS搭設</p>
                <p class="image-caption">第三屆高科盃全國商業智慧競賽</p>
              </div>
              <div class="image-item">
                <img src="/image/epc/seminarOptions/venue_LED視訊牆與燈光.jpg" alt="LED視訊牆與燈光" class="grid-img">
                <p class="image-caption">▲LED視訊牆與燈光</p>
                <p class="image-caption">校慶舞台</p>
              </div>
              <div class="image-item">
                <img src="/image/epc/seminarOptions/venue_展間結構規劃.jpg" alt="展間結構規劃" class="grid-img">
                <p class="image-caption">▲展間結構規劃</p>
                <p class="image-caption">2022 亞洲永續供應+循環經濟會展</p>
              </div>
              <div class="image-item">
                <img src="/image/epc/seminarOptions/venue_氣球佈置.jpg" alt="氣球佈置" class="grid-img">
                <p class="image-caption">▲氣球佈置</p>
                <p class="image-caption">第三屆高科盃全國商業智慧競賽</p>
              </div>
              <div class="image-item">
                <img src="/image/epc/seminarOptions/venue_剪綵儀式規劃.jpg" alt="剪綵儀式規劃" class="grid-img">
                <p class="image-caption">▲剪綵儀式規劃</p>
                <p class="image-caption">毅志樓落成啟用典禮</p>
              </div>
              <div class="image-item">
                <img src="/image/epc/seminarOptions/venue_活動手板製作.jpg" alt="活動手板製作" class="grid-img">
                <p class="image-caption">▲活動手板製作</p>
                <p class="image-caption">2022 亞洲永續供應+循環經濟會展</p>
              </div>
            </div>
          </div>
        </div>

        <!-- 分隔線 -->
        <div class="section-divider"></div>

        <!-- 現場控管相關規劃 -->
        <div class="venue-section">
          <div class="section-title-box">
            <span class="section-title">現場控管相關規劃</span>
          </div>
          <div class="section-content">
            <div class="service-list">
              <ol>
                <li>危機處理相關作業</li>
                <li>工作人員招募及訓練</li>
                <li>註冊、報到相關作業</li>
              </ol>
            </div>
            <div class="bottom-images">
              <div class="bottom-image-item">
                <img src="/image/epc/seminarOptions/venue_工作人員招募與訓練.jpg" alt="工作人員招募與訓練" class="bottom-img">
                <p class="image-caption">▲工作人員招募與訓練</p>
                <p class="image-caption">毅志樓落成啟用典禮</p>
              </div>
              <div class="bottom-image-item">
                <img src="/image/epc/seminarOptions/venue_報到動線規劃.jpg" alt="報到動線規劃" class="bottom-img">
                <p class="image-caption">▲報到動線規劃</p>
                <p class="image-caption">校慶報到處</p>
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
.seminar-venue-page-container {
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

/* 會場區塊 */
.venue-section {
  width: 100%;
  margin-bottom: 60px;
}

/* 分隔線 */
.section-divider {
  width: 120%;
  height: 1pt;
  background-color: #839e8d;
  margin: 40px -10%;
}

.section-title-box {
  width: 355px;
  height: 55px;
  background-color: #839e8d;
  border-radius: 27.5px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
}

.section-title {
  font-size: 30pt;
  color: white;
  font-weight: normal;
  font-family: "GenYoGothic TW", "源樣夜黑體", "Microsoft JhengHei", sans-serif;
}

.section-content {
  display: flex;
  flex-direction: column;
  gap: 30px;
}

/* 服務列表 */
.service-list {
  margin-bottom: 20px;
}

.service-list ol {
  margin: 0;
  padding-left: 0;
  list-style: none;
  counter-reset: item;
}

.service-list li {
  font-size: 25pt;
  color: #5d7266;
  margin-bottom: 15px;
  padding-left: 40px;
  position: relative;
  counter-increment: item;
  font-family: "GenYoGothic TW", "源樣夜黑體", "Microsoft JhengHei", sans-serif;
  line-height: 1.3;
}

.service-list li::before {
  content: counter(item) ".";
  position: absolute;
  left: 0;
  width: 30px;
  text-align: right;
  font-weight: bold;
  color: #5d7266;
}

/* 圖片網格 */
.image-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-bottom: 30px;
}

.image-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}

.grid-img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 10px;
}

.image-caption {
  font-size: 10pt;
  color: #5d7266;
  text-align: center;
  margin: 0;
  font-family: "GenYoGothic TW", "源樣夜黑體", "Microsoft JhengHei", sans-serif;
  line-height: 1.3;
}

/* 下方圖片 */
.bottom-images {
  display: flex;
  gap: 30px;
  justify-content: center;
}

.bottom-image-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  flex: 1;
  max-width: 400px;
}

.bottom-img {
  width: 100%;
  height: 250px;
  object-fit: cover;
  border-radius: 10px;
}

/* 響應式設計 */
@media (max-width: 1024px) {
  .section-title-box {
    width: 330px;
    height: 50px;
  }
  
  .section-title {
    font-size: 26pt;
  }
  
  .service-list li {
    font-size: 22pt;
  }
  
  .image-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .bottom-images {
    flex-direction: column;
    align-items: center;
  }
  
  .bottom-image-item {
    max-width: 100%;
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
  
  .section-title-box {
    width: 310px;
    height: 50px;
  }
  
  .section-title {
    font-size: 24pt;
  }
  
  .service-list li {
    font-size: 20pt;
  }
  
  .image-grid {
    grid-template-columns: 1fr;
    gap: 15px;
  }
  
  .grid-img {
    height: 180px;
  }
  
  .bottom-img {
    height: 200px;
  }
  
  .image-caption {
    font-size: 11pt;
  }
}

@media (max-width: 480px) {
  .banner-watermark h1 {
    font-size: 18pt;
  }
  
  .page-title h2 {
    font-size: 22pt;
  }
  
  .section-title-box {
    width: 290px;
    height: 45px;
  }
  
  .section-title {
    font-size: 20pt;
  }
  
  .service-list li {
    font-size: 18pt;
  }
  
  .grid-img {
    height: 150px;
  }
  
  .bottom-img {
    height: 180px;
  }
  
  .image-caption {
    font-size: 10pt;
  }
}
</style>

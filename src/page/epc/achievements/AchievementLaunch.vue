<template>
  <div class="achievement-launch-container">
    <!-- 會展中心導覽欄 -->
    <EpcHeader />

    <!-- 頂部圖片區域 -->
    <section class="page-banner">
      <div class="banner-image">
        <img src="/image/epc/achievement_top.jpg" alt="成果實績頂部圖片" class="banner-img">
        <div class="banner-watermark">
          <h1>成果實績</h1>
        </div>
      </div>
    </section>

    <!-- 頁面內容 -->
    <div class="content-container">  
      <div class="content">
        <!-- 成果導航欄 -->
        <AchievementNavigation />
        
        <!-- 啟動內容區塊 -->
        <div class="launch-content">
          <!-- 毅志樓落成啟用典禮 -->
          <div class="launch-item">
            <div class="launch-card">
              <div class="card-image">
                <img src="/image/epc/achievements/launch_毅志樓落成啟用典禮.jpg" alt="毅志樓落成啟用典禮" class="launch-img">
              </div>
            </div>
            <div class="card-text">
              <h3 class="launch-title">毅志樓落成啟用典禮</h3>
              <div class="bottom-section">
                <div class="title-line"></div>
                <a href="#" class="view-more">點我看更多</a>
              </div>
            </div>
          </div>
          
          <!-- 海岸聚落創生實驗基地設置大會暨海岸聚落研究論壇 -->
          <div class="launch-item">
            <div class="launch-card">
              <div class="card-image">
                <img src="/image/epc/achievements/launch_海岸聚落創生實驗基地設置大會暨海岸聚落研究論壇.jpg" alt="海岸聚落創生實驗基地設置大會暨海岸聚落研究論壇" class="launch-img">
              </div>
            </div>
            <div class="card-text">
              <h3 class="launch-title">海岸聚落創生實驗基地設置大會暨海岸聚落研究論壇</h3>
              <div class="bottom-section">
                <div class="title-line"></div>
                <a href="#" class="view-more">點我看更多</a>
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
import AchievementNavigation from '@/components/AchievementNavigation.vue'
</script>

<style scoped>
.achievement-launch-container {
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
  padding: 2rem;
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

/* 啟動內容樣式 */
.launch-content {
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  gap: 4rem;
  align-items: center;
}

.launch-item {
  position: relative;
  height: 360px;
  width: 100%;
}

.launch-card {
  width: 432pt;
  height: 360px;
  border: 1pt solid #3e3b3a;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #F7DBBF;
  position: absolute;
  left: 0;
  top: 0;
}

.card-image {
  width: 396pt;
  height: 324px;
  overflow: hidden;
  border: 1pt solid #3e3b3a;
  display: flex;
  align-items: center;
  justify-content: center;
}

.launch-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.card-text {
  display: flex;
  flex-direction: column;
  gap: 10px;
  min-width: 500px;
  position: absolute;
  left: 452pt;
  top: 0;
  height: 360px;
  justify-content: space-between;
}

.launch-title {
  font-size: 20pt;
  color: #3e3b3a;
  margin: 0;
  font-weight: 500;
  font-family: "GenYoGothic TW", "源樣夜黑體", "Microsoft JhengHei", sans-serif;
}

.launch-title::before {
  content: "【啟用/揭牌活動】";
  color: #ff8c00;
  margin-right: 8px;
}

.title-line {
  width: 65%;
  height: 1pt;
  background-color: #d3d3d3;
  margin: 10px 0;
}

.bottom-section {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: auto;
  width: 100%;
}

.view-more {
  font-size: 14pt;
  color: #6c757d;
  text-decoration: none;
  transition: color 0.3s ease;
  font-family: "GenYoGothic TW", "源樣夜黑體", "Microsoft JhengHei", sans-serif;
}

.view-more:hover {
  color: #ff8c00;
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
  
  .launch-card {
    width: 95%;
    height: auto;
    flex-direction: column;
    padding: 15px;
  }
  
  .card-image {
    width: 100%;
    height: 200px;
  }
  
  .launch-title {
    font-size: 18pt;
  }
  
  .view-more {
    font-size: 16pt;
  }
}
</style>

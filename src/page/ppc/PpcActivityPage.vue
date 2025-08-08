<template>
  <div class="ppc-activity-page">
    <!-- Header -->
    <PpcHeader />
    
    <!-- 頂部圖片區域 -->
    <section class="member-banner">
      <div class="banner-image">
        <img src="/image/dkshop/DKSHOP_LOGO.png" alt="DK SHOP Logo" class="banner-img">
        <div class="watermark">活動資訊</div>
      </div>
    </section>
    
    <!-- 活動內容區域 -->
    <div class="activity-content">
      <div class="content-wrapper">
        <!-- 活動內容區塊 -->
        <div class="activity-content-section">
          <!-- 七周年校慶活動 -->
          <div class="activity-item">
            <div class="activity-card">
              <div class="card-image">
                <img src="/image/ppc/activitys/activity_七周年校慶.jpg" alt="七周年校慶活動" class="activity-img">
              </div>
            </div>
            <div class="card-text">
              <h3 class="activity-title">七周年校慶活動</h3>
              <div class="activity-date">113.12.8</div>
              <div class="bottom-section">
                <div class="title-line"></div>
                <a href="#" class="view-more">點我看更多</a>
              </div>
            </div>
          </div>
          
          <!-- 校友健走活動 -->
          <div class="activity-item">
            <div class="activity-card">
              <div class="card-image">
                <img src="/image/ppc/activitys/activity_校友健走活動.jpg" alt="校友健走活動" class="activity-img">
              </div>
            </div>
            <div class="card-text">
              <h3 class="activity-title">校友健走活動</h3>
              <div class="activity-date">113.9.28</div>
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
    <MainFooterComponent waveColor="#fff" backgroundColor="#e3d496" textColor="#534741" />
  </div>
</template>

<script setup>
import PpcHeader from '@/components/PpcHeader.vue'
import MainFooterComponent from '@/components/MainFooterComponent.vue'
</script>

<style scoped>
.ppc-activity-page {
  width: 100%;
  margin: 0;
  padding: 0;
  background-color: #ffffff;
  font-family: "GenYoGothic TW", "源樣黑體月", "Microsoft JhengHei", sans-serif;
}

/* 頂部圖片區域 */
.member-banner {
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
  margin: 0;
  letter-spacing: 2px;
  font-family: "GenYoGothic TW", "源樣黑體月", "Microsoft JhengHei", sans-serif;
}

.activity-content {
  width: 100%;
  min-height: 600px;
  padding: 3rem 0;
  background-color: #ffffff;
}

.content-wrapper {
  max-width: 1200px;
  margin: 0 auto;
  padding: 3rem 2rem;
}

/* 活動內容樣式 */
.activity-content-section {
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  gap: 4rem;
  align-items: center;
}

.activity-item {
  position: relative;
  height: 360px;
  width: 100%;
}

.activity-card {
  width: 432pt;
  height: 360px;
  border: 1pt solid #3e3b3a;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f2eacc;
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

.activity-img {
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

.activity-title {
  font-size: 20pt;
  color: #3e3b3a;
  margin: 0;
  font-weight: 500;
  font-family: "GenYoGothic TW", "源樣黑體月", "Microsoft JhengHei", sans-serif;
}

.activity-date {
  font-size: 16pt;
  color: #6c757d;
  margin: 5px 0;
  font-family: "GenYoGothic TW", "源樣黑體月", "Microsoft JhengHei", sans-serif;
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
  font-family: "GenYoGothic TW", "源樣黑體月", "Microsoft JhengHei", sans-serif;
}

.view-more:hover {
  color: #ff8c00;
}



/* 響應式設計 */
@media (max-width: 768px) {
  .content-wrapper {
    padding: 2rem 1rem;
  }
  
  .activity-content {
    padding: 2rem 0;
  }
  
  .activity-item {
    position: relative;
    height: auto;
    width: 100%;
    margin-bottom: 2rem;
  }
  
  .activity-card {
    width: 100%;
    height: auto;
    position: relative;
    padding: 15px;
    border: 1pt solid #3e3b3a;
    background: #f2eacc;
  }
  
  .card-image {
    width: 100%;
    height: 200px;
    border: 1pt solid #3e3b3a;
  }
  
  .card-text {
    position: relative;
    left: auto;
    top: auto;
    min-width: auto;
    height: auto;
    padding: 1rem 0;
    text-align: center;
  }
  
  .activity-title {
    font-size: 18pt;
    text-align: center;
  }
  
  .activity-date {
    font-size: 14pt;
    text-align: center;
  }
  
  .bottom-section {
    justify-content: center;
  }
  
  .view-more {
    font-size: 16pt;
  }
}

/* 手機版樣式 - 參考 OeppDownloadPage.vue */
@media (max-width: 480px) {
  .member-banner {
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

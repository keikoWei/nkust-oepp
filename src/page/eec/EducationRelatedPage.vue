<template>
  <div class="education-related-page-container">

    <!-- 教育推廣中心導覽欄 -->
    <EecHeader />

    <!-- 頂部圖片區域 -->
    <section class="education-banner">
      <div class="banner-image">
        <img src="/image/members/member_top.jpg" alt="教育相關頂部圖片" class="banner-img">
        <div class="banner-watermark">
          <h1>教育相關</h1>
        </div>
      </div>
    </section>

    <!-- 頁面內容 -->
    <div class="content-container">
      <div class="title-container">
        <div class="title">教育相關連結</div>
      </div>
      
      <!-- 外部連結區塊 -->
      <div class="external-links-section">
        <div class="links-container">
          <a 
            href="https://www.edu.tw/Default.aspx" 
            target="_blank" 
            rel="noopener noreferrer" 
            class="link-button"
          >
            教育部全球資訊網
          </a>
          
          <a 
            href="https://city.hcvs.kh.edu.tw/" 
            target="_blank" 
            rel="noopener noreferrer" 
            class="link-button"
          >
            高雄市民學苑
          </a>
          
          <a 
            href="https://lifelonglearn.dgpa.gov.tw/" 
            target="_blank" 
            rel="noopener noreferrer" 
            class="link-button"
          >
            公務員終身學習入口網
          </a>
          
          <a 
            href="https://ojt.wda.gov.tw/" 
            target="_blank" 
            rel="noopener noreferrer" 
            class="link-button"
          >
            在職訓練網
          </a>
          
          <a 
            href="https://elite.taiwanjobs.gov.tw/" 
            target="_blank" 
            rel="noopener noreferrer" 
            class="link-button"
          >
            台灣就業通產業新尖兵計畫網
          </a>
        </div>
      </div>
    </div>

    <!-- Footer -->
    <MainFooterComponent waveColor="#fff" backgroundColor="#e3d9cd" textColor="#534741" />
  </div>
</template>

<script setup>
import EecHeader from '@/components/EecHeader.vue'
import MainFooterComponent from '@/components/MainFooterComponent.vue'
</script>

<style scoped>
.education-related-page-container {
  width: 100%;
  margin: 0;
  padding: 0;
  background-color: #fff;
  min-height: 100vh;
  font-family: "GenYoGothic TW", "源樣夜黑體", "Microsoft JhengHei", sans-serif;
}

/* 頂部圖片區域 */
.education-banner {
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

/* 內容樣式 */
.content-container {
  max-width: 1200px;
  margin: 40px auto;
  padding: 0 20px;
  background-color: #fff;
}

.title-container {
  display: flex;
  justify-content: center;
  margin-bottom: 40px;
}

.title {
  font-size: 45pt;
  color: #534741;
  font-weight: bold;
  text-align: center;
  font-family: "GenYoGothic TW", "源樣黑體", "Microsoft JhengHei", sans-serif;
}

/* 外部連結區塊樣式 */
.external-links-section {
  width: 100%;
  background-color: #fff;
}

.links-container {
  max-width: 900px;
  margin: 0 auto;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  gap: 30px;
  align-items: center;
}

.link-button {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 830px;
  height: 170px;
  background-color: #fff;
  color: #534741;
  text-decoration: none;
  border-radius: 25px;
  text-align: center;
  font-size: 30pt;
  font-weight: 500;
  border: 2px solid #e0e0e0;
  transition: all 0.3s ease;
  font-family: "GenYoGothic TW", "源樣黑體", "Microsoft JhengHei", sans-serif;
  box-sizing: border-box;
}

.link-button:hover {
  background-color: #e3d9cd;
  border-color: #534741;
  transform: translateY(-3px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
}

.link-button:active {
  transform: translateY(0);
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1);
}

/* 響應式設計 */
@media (max-width: 1024px) {
  .banner-watermark {
    padding: 27px 0 0 40px;
  }
  
  .banner-watermark h1 {
    font-size: 30pt;
  }

  .title {
    font-size: 35pt;
  }
  
  .link-button {
    width: 700px;
    height: 140px;
    font-size: 26pt;
  }
}

@media (max-width: 768px) {
  .banner-watermark {
    padding: 20px 0 0 27px;
  }
  
  .banner-watermark h1 {
    font-size: 23pt;
  }

  .title {
    font-size: 28pt;
  }
  
  .links-container {
    max-width: 95%;
  }
  
  .link-button {
    width: 100%;
    max-width: 600px;
    height: 120px;
    font-size: 22pt;
  }
}

@media (max-width: 480px) {
  .title {
    font-size: 22pt;
  }
  
  .links-container {
    max-width: 95%;
    gap: 20px;
  }
  
  .link-button {
    width: 100%;
    max-width: 400px;
    height: 100px;
    font-size: 18pt;
    border-radius: 15px;
  }
}
</style>

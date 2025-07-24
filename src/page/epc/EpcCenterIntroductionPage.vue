<template>
  <div class="center-introduction-page-container">
    <!-- 會展中心導覽欄 -->
    <EpcHeader />

    <!-- 頂部圖片區域 -->
    <section class="page-banner">
      <div class="banner-image">
        <img 
          src="/image/epc/epc_introduction_top.jpg" 
          alt="中心簡介頂部圖片" 
          class="banner-img"
        >
        <div class="banner-watermark">
          <h1>中心簡介</h1>
        </div>
      </div>
    </section>

    <!-- 頁面內容 -->
    <div class="content-container">  
      <div class="content">
        <!-- 頁面標題 -->
        <div class="page-title">
          <h2>會展及出版中心介紹</h2>
        </div>

        <!-- 1pt直線段 -->
        <div class="title-line"></div>

        <!-- 主要內容區域 -->
        <div class="main-content">
          <!-- 整張圖片 -->
          <div class="image-container">
            <img 
              src="/public/image/epc/中心簡介封面圖.jpg" 
              alt="會展及出版中心封面圖" 
              class="main-img"
            >
          </div>

          <!-- 下載區域 -->
          <div class="download-section">
            <a 
              href="/public/file/epc/中心簡介-簡報.pdf" 
              download
              class="download-link"
            >
              <span class="finger-icon">👉</span>
              <span class="download-text">會展及出版中心 簡介下載</span>
            </a>
          </div>
        </div>
      </div>
    </div>

    <!-- Footer -->
    <MainFooterComponent 
      waveColor="#fff" 
      backgroundColor="#839e8d" 
      textColor="#ffffff" 
    />
  </div>
</template>

<script setup>
import EpcHeader from '@/components/EpcHeader.vue'
import MainFooterComponent from '@/components/MainFooterComponent.vue'
</script>

<style scoped>
/* ===== 基礎設定 ===== */
.center-introduction-page-container {
  width: 100%;
  margin: 0;
  padding: 0;
  font-family: "GenYoGothic TW", "源樣夜黑體", "Microsoft JhengHei", sans-serif;
  color: #3e3b3a;
}

/* ===== 頂部圖片區域 ===== */
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

/* ===== 內容樣式 ===== */
.content-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 6rem 2rem 6rem 2rem;
  display: flex;
  justify-content: center;
}

.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  width: 100%;
  max-width: 1200px;
}

/* ===== 頁面標題 ===== */
.page-title {
  width: 100%;
  text-align: left;
  margin-bottom: 20px;
}

.page-title h2 {
  font-size: 35pt;
  color: #3e3b3a;
  margin: 0;
  font-weight: normal;
  font-family: "GenYoGothic TW", "源樣夜黑體", "Microsoft JhengHei", sans-serif;
  line-height: 2pt;
}

/* ===== 1pt直線段 ===== */
.title-line {
  width: 100%;
  height: 1pt;
  background-color: #839e8d;
  margin-bottom: 40px;
}

/* ===== 主要內容區域 ===== */
.main-content {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
}

/* ===== 圖片容器 ===== */
.image-container {
  width: 100%;
  display: flex;
  justify-content: center;
}

.main-img {
  width: 100%;
  max-width: 1080px;
  height: auto;
  display: block;
  border-radius: 10px;
}

/* ===== 下載區域 ===== */
.download-section {
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.download-link {
  display: flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
  color: #3e3b3a;
  transition: all 0.3s ease;
  cursor: pointer;
}

.download-link:hover {
  color: #3e3b3a;
  transform: translateX(5px);
}

.download-text {
  font-size: 16pt;
  font-family: "GenYoGothic TW", "源樣夜黑體", "Microsoft JhengHei", sans-serif;
}

.finger-icon {
  font-size: 18pt;
}

/* ===== 響應式設計 ===== */
@media (max-width: 1024px) {
  .page-title h2 {
    font-size: 30pt;
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
  
  .download-text {
    font-size: 14pt;
  }
  
  .finger-icon {
    font-size: 16pt;
  }
}

@media (max-width: 480px) {
  .banner-watermark h1 {
    font-size: 18pt;
  }
  
  .page-title h2 {
    font-size: 22pt;
  }
  
  .download-text {
    font-size: 12pt;
  }
  
  .finger-icon {
    font-size: 14pt;
  }
}
</style>

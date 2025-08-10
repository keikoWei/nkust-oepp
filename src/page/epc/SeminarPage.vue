<template>
  <div class="seminar-page-container">
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
        <!-- 辦理研討會選項標題 -->
        <div class="seminar-title">
          <h2>辦理研討會選項</h2>
        </div>
        
        <!-- 導航欄 -->
        <div class="navigation-bar">
          <div class="nav-item active">
            <span>簡易流程圖</span>
          </div>
          <div class="nav-divider">|</div>
          <div class="nav-item" @click="goToSeminarOption">
            <span>辦理研討會選項</span>
          </div>
        </div>

        <!-- 連結區塊 -->
        <div class="link-section">
          <a href="https://online.fliphtml5.com/tbmmm/jwdf/index.html" target="_blank" class="external-link">
            <span class="link-icon">🔗</span>
            <span class="link-text">協助辦理研討會簡易流程圖</span>
          </a>
        </div>

        <!-- 線上電子書閱讀器 -->
        <div class="ebook-container">
          <div class="ebook-wrapper">
            <iframe 
              class="ebook-iframe"
              src="https://online.fliphtml5.com/tbmmm/jwdf/" 
              seamless="seamless" 
              scrolling="no" 
              frameborder="0" 
              allowtransparency="true" 
              allowfullscreen="true">
            </iframe>
          </div>
        </div>
      </div>
    </div>

    <!-- Footer -->
    <MainFooterComponent waveColor="#fff" backgroundColor="#839e8d" textColor="#ffffff" />
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import EpcHeader from '@/components/EpcHeader.vue'
import MainFooterComponent from '@/components/MainFooterComponent.vue'

const router = useRouter()

const goToSeminarOption = () => {
  router.push({ name: 'epc-seminar-option' })
}
</script>

<style scoped>
.seminar-page-container {
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
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
}

/* 辦理研討會選項標題樣式 */
.seminar-title {
  text-align: center;
}

.seminar-title h2 {
  font-size: 35pt;
  color: #3e3b3a;
  margin: 0;
  font-weight: normal;
  font-family: "GenYoGothic TW", "源樣夜黑體", "Microsoft JhengHei", sans-serif;
}

/* 導航欄樣式 */
.navigation-bar {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px 30px;
  background-color: #fff;
  gap: 20px;
  margin-top: -35px;
}

.nav-item {
  cursor: pointer;
  transition: color 0.3s ease;
}

.nav-item.active {
  font-weight: bold;
}

.nav-item span {
  font-size: 21pt;  /* 32pt * 0.67 */
  color: inherit;
}

.nav-divider {
  font-size: 21pt;  /* 32pt * 0.67 */
  color: #ccc;
}

/* 連結區塊樣式 */
.link-section {
  width: 100%;
  display: flex;
  justify-content: flex-start;
  padding: 20px 0;
}

.external-link {
  display: flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
  color: #333;
  transition: color 0.3s ease;
}

.external-link:hover {
  color: #ff8c00;
}

.link-icon {
  font-size: 21pt;  /* 32pt * 0.67 */
}

.link-text {
  font-size: 21pt;  /* 32pt * 0.67 */
  font-family: "GenYoGothic TW", "源樣夜黑體", "Microsoft JhengHei", sans-serif;
}

/* 電子書容器樣式 */
.ebook-container {
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 20px 0;
}

.ebook-wrapper {
  position: relative;
  width: 100%;
  max-width: 1080px;
  height: 800px;
  margin: 0 auto;
  background-color: #fff;
  overflow: hidden;
}

.ebook-iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: none;
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
  
  .seminar-title h2 {
    font-size: 30pt;  /* 45pt * 0.67 */
  }
  
  .navigation-bar {
    padding: 10px 20px;
    gap: 15px;
  }
  
  .nav-item span {
    font-size: 14pt;  /* 21pt * 0.67 */
  }
  
  .nav-divider {
    font-size: 14pt;  /* 21pt * 0.67 */
  }
  
  .link-icon {
    font-size: 14pt;  /* 21pt * 0.67 */
  }
  
  .link-text {
    font-size: 14pt;  /* 21pt * 0.67 */
  }
  
  .ebook-wrapper {
    width: 95vw;
    height: 500px;
  }
}

/* 手機版樣式 - 參考 OeppMemberPage.vue */
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
  
  .seminar-title h2 {
    font-size: 24pt;  /* 45pt * 0.53 */
  }
  
  .navigation-bar {
    padding: 8px 15px;
    gap: 10px;
  }
  
  .nav-item span {
    font-size: 11pt;  /* 16pt * 0.67 */
  }
  
  .nav-divider {
    font-size: 11pt;  /* 16pt * 0.67 */
  }
  
  .link-icon {
    font-size: 11pt;  /* 16pt * 0.67 */
  }
  
  .link-text {
    font-size: 11pt;  /* 16pt * 0.67 */
  }
  
  .ebook-wrapper {
    width: 100vw;
    height: 400px;
  }
}
</style>

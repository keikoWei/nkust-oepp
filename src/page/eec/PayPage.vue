<template>
  <div class="pay-page-container">

    <!-- 教育推廣中心導覽欄 -->
    <EecHeader />

    <!-- 頂部圖片區域 -->
    <section class="pay-banner">
      <div class="banner-image">
        <img src="/image/members/member_top.jpg" alt="繳費流程頂部圖片" class="banner-img">
        <div class="banner-watermark">
          <h1>繳費流程</h1>
        </div>
      </div>
    </section>
    
    <!-- Footer -->
    <MainFooterComponent waveColor="#fff" backgroundColor="#e3d9cd" textColor="#534741" />
  </div>
</template>

<script setup>
import EecHeader from '@/components/EecHeader.vue'
import MainFooterComponent from '@/components/MainFooterComponent.vue'
</script>

<style scoped>
.pay-page-container {
  width: 100%;
  margin: 0;
  padding: 0;
  font-family: "GenYoGothic TW", "源樣夜黑體", "Microsoft JhengHei", sans-serif;
}

/* 頂部圖片區域 */
.pay-banner {
  width: calc(70vw);
  max-width: 100%;
  margin: 0 auto;
  position: relative;
  overflow: hidden;
}

.banner-image {
  width: 100%;
  height: 422px;  /* 原本 630px * 0.67 */
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
  padding: 34px 0 0 54px;  /* 原本 50px 0 0 80px * 0.67 */
  background: linear-gradient(135deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0) 70%);
}

.banner-watermark h1 {
  color: white;
  font-size: 37pt;  /* 原本 55pt * 0.67 */
  font-weight: bold;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
  margin: 0;
  letter-spacing: 2px;  /* 原本 3px * 0.67 */
  font-family: "GenYoGothic TW", "源樣夜黑體", "Microsoft JhengHei", sans-serif;
}

/* 頁面內容區域 */
.pay-content {
  width: 100%;
  background-color: #e3d9cd;
  min-height: 60vh;
  padding: 3rem 0;
}

.content-wrapper {
  width: 70vw;
  max-width: 100%;
  margin: 0 auto;
  padding: 0 2rem;
}

.page-title {
  font-size: 45pt;
  font-weight: bold;
  color: #534741;
  text-align: center;
  margin-bottom: 3rem;
  letter-spacing: 2px;
}

.content-section {
  background-color: #ffffff;
  border-radius: 20px;
  padding: 3rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

.intro-text {
  font-size: 18pt;
  color: #534741;
  line-height: 1.8;
  text-align: center;
  margin-bottom: 3rem;
}

.payment-process-content h2 {
  font-size: 32pt;
  font-weight: bold;
  color: #534741;
  text-align: center;
  margin-bottom: 2rem;
}

.step-list {
  display: grid;
  gap: 2rem;
  max-width: 800px;
  margin: 0 auto;
}

.step-item {
  display: flex;
  align-items: center;
  background-color: #f2ede8;
  border-radius: 15px;
  padding: 2rem;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.step-item:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 25px rgba(83, 71, 65, 0.15);
}

.step-number {
  width: 60px;
  height: 60px;
  background-color: #534741;
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24pt;
  font-weight: bold;
  margin-right: 2rem;
  flex-shrink: 0;
}

.step-content h3 {
  font-size: 20pt;
  font-weight: bold;
  color: #534741;
  margin-bottom: 0.5rem;
}

.step-content p {
  font-size: 16pt;
  color: #666;
  line-height: 1.6;
  margin: 0;
}

/* 響應式設計 */
@media (max-width: 1024px) {
  .content-wrapper {
    width: 85vw;
    padding: 0 1.5rem;
  }
  
  .page-title {
    font-size: 36pt;
  }
  
  .content-section {
    padding: 2rem;
  }
  
  .payment-process-content h2 {
    font-size: 28pt;
  }
  
  .banner-watermark {
    padding: 27px 0 0 40px;  /* 原本 40px 0 0 60px * 0.67 */
  }
  
  .banner-watermark h1 {
    font-size: 30pt;  /* 原本 45pt * 0.67 */
  }
}

@media (max-width: 768px) {
  .content-wrapper {
    width: 95vw;
    padding: 0 1rem;
  }
  
  .page-title {
    font-size: 28pt;
  }
  
  .content-section {
    padding: 1.5rem;
  }
  
  .step-item {
    flex-direction: column;
    text-align: center;
    padding: 1.5rem;
  }
  
  .step-number {
    margin-right: 0;
    margin-bottom: 1rem;
  }
  
  .payment-process-content h2 {
    font-size: 24pt;
  }
  
  .step-content h3 {
    font-size: 18pt;
  }
  
  .step-content p {
    font-size: 14pt;
  }
  
  .banner-watermark {
    padding: 20px 0 0 27px;  /* 原本 30px 0 0 40px * 0.67 */
  }
  
  .banner-watermark h1 {
    font-size: 23pt;  /* 原本 35pt * 0.67 */
  }
}

@media (max-width: 480px) {
  .page-title {
    font-size: 24pt;
  }
  
  .content-section {
    padding: 1rem;
  }
  
  .intro-text {
    font-size: 16pt;
  }
  
  .payment-process-content h2 {
    font-size: 20pt;
  }
  
  .step-number {
    width: 50px;
    height: 50px;
    font-size: 20pt;
  }
  
  .step-content h3 {
    font-size: 16pt;
  }
  
  .step-content p {
    font-size: 12pt;
  }
}
</style>

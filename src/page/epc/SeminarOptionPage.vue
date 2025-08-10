<template>
  <div class="seminar-option-page-container">
    <!-- 會展中心導覽欄 -->
    <EpcHeader />

    <!-- 頂部圖片區域 -->
    <section class="page-banner">
      <div class="banner-image">
        <img src="/image/epc/seminar_top.jpg" alt="辦理研討會選項頂部圖片" class="banner-img">
        <div class="banner-watermark">
          <h1>辦理研討會選項</h1>
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
          <div class="nav-item" @click="goToSeminar">
            <span>簡易流程圖</span>
          </div>
          <div class="nav-divider">|</div>
          <div class="nav-item active">
            <span>辦理研討會選項</span>
          </div>
        </div>

        <!-- 辦理研討會選項內容 -->
        <div class="options-grid">
          <div class="option-card" @click="goToPreparation">
            <div class="option-image">
              <img src="/image/epc/seminarOptions/籌備及行政聯繫.jpg" alt="籌備及行政聯繫" class="option-img">
            </div>
          </div>

          <div class="option-card" @click="goToMarketing">
            <div class="option-image">
              <img src="/image/epc/seminarOptions/行銷廣宣.jpg" alt="行銷廣宣" class="option-img">
            </div>
          </div>

          <div class="option-card" @click="goToService">
            <div class="option-image">
              <img src="/image/epc/seminarOptions/服務系統.jpg" alt="服務系統" class="option-img">
            </div>
          </div>

          <div class="option-card" @click="goToVenue">
            <div class="option-image">
              <img src="/image/epc/seminarOptions/會場佈置.jpg" alt="會場佈置" class="option-img">
            </div>
          </div>

          <div class="option-card" @click="goToFoodAndStay">
            <div class="option-image">
              <img src="/image/epc/seminarOptions/食宿交通遊程.jpg" alt="食宿交通遊程" class="option-img">
            </div>
          </div>

          <div class="option-card" @click="goToModel">
            <div class="option-image">
              <img src="/image/epc/seminarOptions/會議辦理模式.jpg" alt="會議辦理模式" class="option-img">
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
import { useRouter } from 'vue-router'
import EpcHeader from '@/components/EpcHeader.vue'
import MainFooterComponent from '@/components/MainFooterComponent.vue'

const router = useRouter()

const goToSeminar = () => {
  router.push({ name: 'epc-seminar' })
}

const goToPreparation = () => {
  router.push({ name: 'epc-seminar-preparation' })
}

const goToMarketing = () => {
  router.push({ name: 'epc-seminar-marketing' })
}

const goToService = () => {
  router.push({ name: 'epc-seminar-service' })
}

const goToVenue = () => {
  router.push({ name: 'epc-seminar-venue' })
}

const goToFoodAndStay = () => {
  router.push({ name: 'epc-seminar-food-and-stay' })
}

const goToModel = () => {
  router.push({ name: 'epc-seminar-model' })
}
</script>

<style scoped>
.seminar-option-page-container {
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
  font-size: 21pt;
  color: inherit;
}

.nav-divider {
  font-size: 21pt;
  color: #ccc;
}

/* 選項內容樣式 */
.options-grid {
  width: 100%;
  max-width: 1200px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-top: 40px;
}

.option-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  transition: transform 0.3s ease;
}

.option-card:hover {
  transform: translateY(-5px);
}

.option-image {
  width: 300px;
  height: 300px;
  margin-bottom: 20px;
  overflow: hidden;
  border-radius: 20px;
}

.option-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.option-card:hover .option-img {
  transform: scale(1.05);
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
    font-size: 30pt;  /* 35pt * 0.86 */
  }
  
  .navigation-bar {
    padding: 10px 20px;
    gap: 15px;
  }
  
  .nav-item span {
    font-size: 18pt;  /* 21pt * 0.86 */
  }
  
  .nav-divider {
    font-size: 18pt;  /* 21pt * 0.86 */
  }
  
  .options-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 15px;
  }
  
  .option-image {
    width: 250px;
    height: 250px;
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
    font-size: 24pt;  /* 35pt * 0.69 */
  }
  
  .navigation-bar {
    padding: 8px 15px;
    gap: 10px;
  }
  
  .nav-item span {
    font-size: 14pt;  /* 21pt * 0.67 */
  }
  
  .nav-divider {
    font-size: 14pt;  /* 21pt * 0.67 */
  }
  
  .options-grid {
    grid-template-columns: 1fr;
    gap: 10px;
  }
  
  .option-image {
    width: 200px;
    height: 200px;
  }
}
</style>

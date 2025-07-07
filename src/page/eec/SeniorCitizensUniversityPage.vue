<template>
  <div class="senior-citizens-university-page-container">

    <!-- 教育推廣中心導覽欄 -->
    <EecHeader />

    <!-- 頂部圖片區域 -->
    <section class="senior-citizens-banner">
      <div class="banner-image">
        <img src="/image/members/member_top.jpg" alt="樂齡大學頂部圖片" class="banner-img">
        <div class="banner-watermark">
          <h1>樂齡大學</h1>
        </div>
      </div>
    </section>

    <!-- 頁面內容 -->
    <div class="content-container">
      <!-- 主標題 -->
      <div class="main-title">
        國立高雄科技大學 樂齡大學專區
      </div>
      
      <!-- 功能按鈕區 -->
      <div class="function-buttons">
        <button class="function-btn introduction-btn" @click="openIntroduction">
        </button>
        <button class="function-btn admission-btn" @click="openAdmission">
        </button>
      </div>
      
      <!-- 校區資訊卡片 -->
      <div class="campus-cards">
        <div class="campus-card">
          <div class="campus-info">
            <div class="campus-name">建工校區</div>
            <div class="campus-action">簡章下載</div>
          </div>
          <div class="class-types">
            <div class="class-type">自費班</div>
          </div>
        </div>
        
        <div class="campus-card">
          <div class="campus-info">
            <div class="campus-name">楠梓校區</div>
            <div class="campus-action">簡章下載</div>
          </div>
          <div class="class-types">
            <div class="class-type">自費班</div>
            <div class="class-type">補助班</div>
          </div>
        </div>
        
        <div class="campus-card">
          <div class="campus-info">
            <div class="campus-name">第一校區</div>
            <div class="campus-action">簡章下載</div>
          </div>
          <div class="class-types">
            <div class="class-type">自費班</div>
            <div class="class-type">補助班</div>
          </div>
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

const openIntroduction = () => {
  // 這裡可以添加開啟樂齡簡介的邏輯
  console.log('開啟樂齡簡介')
}

const openAdmission = () => {
  // 這裡可以添加開啟招生對象的邏輯
  console.log('開啟招生對象')
}
</script>

<style scoped>
.senior-citizens-university-page-container {
  width: 100%;
  margin: 0;
  padding: 0;
  font-family: "GenYoGothic TW", "源樣夜黑體", "Microsoft JhengHei", sans-serif;
}

/* 頂部圖片區域 */
.senior-citizens-banner {
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
  text-align: center;
}

/* 主標題 */
.main-title {
  font-size: 45pt;
  color: #534741;
  font-weight: bold;
  margin-bottom: 60px;
  text-align: center;
  font-family: "GenYoGothic TW", "源樣黑體", "Microsoft JhengHei", sans-serif;
}

/* 功能按鈕區 */
.function-buttons {
  display: flex;
  justify-content: center;
  gap: 40px;
  margin-bottom: 80px;
}

.function-btn {
  width: 400px;
  height: 120px;
  border: none;
  border-radius: 0;
  cursor: pointer;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  outline: none;
  background-color: transparent;
  padding: 0;
  display: inline-block;
}



.introduction-btn {
  background-image: url('/image/seniorCitizensUniversity/樂齡簡介.png');
}

.admission-btn {
  background-image: url('/image/seniorCitizensUniversity/招生對象.png');
}

/* 校區卡片區 */
.campus-cards {
  display: flex;
  flex-direction: column;
  gap: 30px;
  max-width: 900px;
  margin: 0 auto;
}

.campus-card {
  background-color: #ffffff;
  border: 2px solid #e3d9cd;
  border-radius: 20px;
  padding: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.campus-info {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
}

.campus-name {
  font-size: 28pt;
  color: #534741;
  font-weight: bold;
  font-family: "GenYoGothic TW", "源樣黑體", "Microsoft JhengHei", sans-serif;
}

.campus-action {
  font-size: 28pt;
  color: #534741;
  font-family: "GenYoGothic TW", "源樣黑體", "Microsoft JhengHei", sans-serif;
}

.class-types {
  display: flex;
  gap: 20px;
}

.class-type {
  font-size: 22pt;
  color: #534741;
  background-color: #f2ede8;
  padding: 10px 25px;
  border-radius: 12px;
  font-family: "GenYoGothic TW", "源樣黑體", "Microsoft JhengHei", sans-serif;
}

/* 響應式設計 */
@media (max-width: 1024px) {
  .banner-watermark {
    padding: 27px 0 0 40px;
  }
  
  .banner-watermark h1 {
    font-size: 30pt;
  }

  .main-title {
    font-size: 38pt;
  }
  
  .function-btn {
    width: 320px;
    height: 100px;
  }
  
  .campus-name {
    font-size: 24pt;
  }
  
  .campus-action {
    font-size: 24pt;
  }
  
  .class-type {
    font-size: 18pt;
    padding: 8px 20px;
  }
}

@media (max-width: 768px) {
  .banner-watermark {
    padding: 20px 0 0 27px;
  }
  
  .banner-watermark h1 {
    font-size: 23pt;
  }

  .main-title {
    font-size: 30pt;
    margin-bottom: 40px;
  }
  
  .function-buttons {
    flex-direction: column;
    align-items: center;
    gap: 20px;
    margin-bottom: 60px;
  }
  
  .function-btn {
    width: 280px;
    height: 90px;
  }
  
  .campus-card {
    flex-direction: column;
    gap: 20px;
    padding: 30px;
    text-align: center;
  }
  
  .campus-info {
    align-items: center;
    gap: 15px;
  }
  
  .campus-name {
    font-size: 20pt;
  }
  
  .campus-action {
    font-size: 20pt;
  }
  
  .class-types {
    justify-content: center;
    flex-wrap: wrap;
  }
  
  .class-type {
    font-size: 16pt;
    padding: 6px 15px;
  }
}

@media (max-width: 480px) {
  .main-title {
    font-size: 24pt;
    margin-bottom: 30px;
  }
  
  .function-btn {
    width: 240px;
    height: 80px;
  }
  
  .campus-name {
    font-size: 18pt;
  }
  
  .campus-action {
    font-size: 18pt;
  }
  
  .class-type {
    font-size: 14pt;
    padding: 5px 12px;
  }
  
  .campus-card {
    padding: 20px;
  }
}
</style> 
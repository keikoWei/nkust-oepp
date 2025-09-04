<template>
  <div class="oceom-introduction-page-container">
    <!-- Header區域 -->
    <AppHeader />

    <!-- 頂部圖片區域 -->
    <section class="oceom-banner">
      <div class="banner-image">
        <img src="/image/members/member_top.jpg" alt="教育推廣與經營管理處簡介頂部圖片" class="banner-img">
        <div class="banner-watermark">
          <h1>處室簡介</h1>
        </div>
      </div>
    </section>

    <!-- 頁面內容 -->
    <div class="content-container">  
      <div class="content">
        <!-- 簡介區塊 -->
        <div class="introduction-section">
          <h2 class="section-title">教育推廣與經營管理處簡介</h2>
          <div class="introduction-content">
            <p>為能統籌規劃及共同推展本校教育事業、教師研發產品對外推廣、出版品製作、活動辦理與資產開發、營運空間與項目活化相關事宜，自2025年8月1日起，「教育事業暨產品推廣處」及「經營管理處」整併更名為「教育推廣與經營管理處」(簡稱教推經管處)。</p>
          </div>
        </div>

        <!-- 組織架構區塊 -->
        <div class="organization-section">
          <h2 class="section-title">組織架構</h2>
          <div class="organization-content">
            <p>教推經管處目前下設4個中心，分別為教育推廣中心、產品推廣中心、會展及出版中心與經營管理中心。</p>
          </div>
        </div>

        <!-- 辦公位址區塊 -->
        <div class="office-location-section">
          <h2 class="section-title">處本部及各中心辦公位址</h2>
          <div class="location-content">
            <div class="campus-section">
              <h3 class="campus-title">建工校區</h3>
              <div class="location-items">
                <div class="location-item">
                  <span class="location-label">處本部</span>
                  <span class="location-address">→ 行政大樓六樓608辦公室</span>
                </div>
                <div class="location-item">
                  <span class="location-label">教育推廣中心、會展及出版中心</span>
                  <span class="location-address">→ 行政大樓六樓606、607辦公室</span>
                </div>
                <div class="location-item">
                  <span class="location-label">產品推廣中心</span>
                  <span class="location-address">→ 行政大樓一樓DK/Shop</span>
                </div>
              </div>
            </div>
            
            <div class="campus-section">
              <h3 class="campus-title">楠梓校區</h3>
              <div class="location-items">
                <div class="location-item">
                  <span class="location-label">經營管理中心</span>
                  <span class="location-address">→ 行政大樓三樓1309、1310辦公室</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Footer -->
    <MainFooterComponent />
  </div>
</template>

<script setup>
import AppHeader from '@/components/AppHeader.vue'
import MainFooterComponent from '@/components/MainFooterComponent.vue'
</script>

<style scoped>
.oceom-introduction-page-container {
  width: 100%;
  margin: 0;
  padding: 0;
  font-family: "GenYoGothic TW", "源樣夜黑體", "Microsoft JhengHei", sans-serif;
  background-color: #ffffff;
}

/* 頂部圖片區域 */
.oceom-banner {
  width: calc(70vw);
  max-width: 100%;
  margin: 0 auto;
  position: relative;
  overflow: hidden;
  margin-top: 0;
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
  margin: 80px auto;
  padding: 0 20px;
  background-color: #ffffff;
}

.content {
  font-size: 20pt;
  color: #534741;
  line-height: 1.6;
  font-family: "GenYoGothic TW", "源樣黑體", "Microsoft JhengHei", sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 800px;
  margin: 0 auto;
}

/* 區塊樣式 */
.introduction-section,
.organization-section,
.office-location-section {
  width: 100%;
  margin-bottom: 60px;
  padding: 0;
  background-color: transparent;
}

.section-title {
  font-size: 28pt;
  color: #534741;
  text-align: center;
  margin-bottom: 30px;
  font-family: "GenYoGothic TW", "源樣黑體", "Microsoft JhengHei", sans-serif;
  font-weight: bold;
  padding-bottom: 15px;
  border-bottom: 3px solid #86a8ab;
}

.introduction-content p,
.organization-content p {
  font-size: 18pt;
  color: #534741;
  line-height: 1.8;
  margin: 0;
  text-align: justify;
  font-family: "GenYoGothic TW", "源樣黑體", "Microsoft JhengHei", sans-serif;
}

/* 辦公位址樣式 */
.location-content {
  width: 100%;
}

.campus-section {
  margin-bottom: 40px;
}

.campus-title {
  font-size: 22pt;
  color: #534741;
  margin-bottom: 20px;
  font-family: "GenYoGothic TW", "源樣黑體", "Microsoft JhengHei", sans-serif;
  font-weight: bold;
  padding: 10px 20px;
  background-color: #f8f6f3;
  border-radius: 8px;
  text-align: center;
  border: 1px solid #86a8ab;
}

.location-items {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.location-item {
  display: flex;
  align-items: center;
  padding: 15px 20px;
  background-color: #ffffff;
  border-radius: 8px;
  border-left: 4px solid #86a8ab;
  border: 1px solid #e8e8e8;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
}

.location-label {
  font-size: 16pt;
  color: #534741;
  font-weight: bold;
  min-width: 200px;
  font-family: "GenYoGothic TW", "源樣黑體", "Microsoft JhengHei", sans-serif;
}

.location-address {
  font-size: 16pt;
  color: #534741;
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

  .introduction-section,
  .organization-section,
  .office-location-section {
    margin-bottom: 50px;
    padding: 0;
  }

  .section-title {
    font-size: 24pt;
    margin-bottom: 25px;
  }

  .introduction-content p,
  .organization-content p {
    font-size: 16pt;
  }

  .campus-title {
    font-size: 20pt;
    margin-bottom: 18px;
  }

  .location-label,
  .location-address {
    font-size: 15pt;
  }
}

@media (max-width: 768px) {
  .banner-watermark {
    padding: 20px 0 0 27px;
  }
  
  .banner-watermark h1 {
    font-size: 23pt;
  }

  .introduction-section,
  .organization-section,
  .office-location-section {
    margin-bottom: 40px;
    padding: 0;
  }

  .section-title {
    font-size: 20pt;
    margin-bottom: 20px;
  }

  .introduction-content p,
  .organization-content p {
    font-size: 14pt;
  }

  .campus-title {
    font-size: 18pt;
    margin-bottom: 15px;
  }

  .location-item {
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
  }

  .location-label {
    font-size: 14pt;
    min-width: auto;
  }

  .location-address {
    font-size: 14pt;
  }
}

@media (max-width: 480px) {
  .oceom-banner {
    width: 100vw;
    margin: 0;
    margin-top: 0;
  }
  
  .banner-image {
    height: 200px;
    width: 100%;
  }
  
  .banner-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
  
  .banner-watermark {
    padding: 20px 0 0 20px;
  }
  
  .banner-watermark h1 {
    font-size: 20pt;
  }
  
  .content-container {
    width: 100vw;
    margin: 60px 0;
    padding: 1rem;
  }
  
  .content {
    width: 100%;
  }
  
  .introduction-section,
  .organization-section,
  .office-location-section {
    margin-bottom: 30px;
    padding: 0;
  }

  .section-title {
    font-size: 18pt;
    margin-bottom: 15px;
  }

  .introduction-content p,
  .organization-content p {
    font-size: 12pt;
  }

  .campus-title {
    font-size: 16pt;
    margin-bottom: 12px;
  }

  .location-item {
    padding: 12px 15px;
  }

  .location-label {
    font-size: 12pt;
  }

  .location-address {
    font-size: 12pt;
  }
}
</style>

<template>
  <div class="seminar-preparation-page-container">
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
        <!-- 內容區域 -->
        <div class="content-area">
          <!-- 頁面標題 -->
          <div class="page-title">
            <h2>籌備與行政聯繫</h2>
          </div>

          <!-- 服務項目列表 -->
          <div class="service-sections">
            <!-- 協助召集會議 -->
            <div class="service-section">
              <div class="service-icon">
                <img src="/image/epc/seminarOptions/preparation_協助召集會議.jpg" alt="協助召集會議" class="icon-img">
              </div>
              <div class="service-content">
                <h3 class="service-title">協助召集會議</h3>
                <ol class="service-list">
                  <li>召開籌備小組工作會議</li>
                  <li>提交工作月報</li>
                  <li>提交期中/期末報告</li>
                </ol>
              </div>
            </div>

            <!-- 大會議程協助排定及行政聯繫 -->
            <div class="service-section">
              <div class="service-icon">
                <img src="/image/epc/seminarOptions/preparation_大會議程協助排定及行政聯繫.jpg" alt="大會議程協助排定及行政聯繫" class="icon-img">
              </div>
              <div class="service-content">
                <h3 class="service-title">大會議程協助<br>排定及行政聯繫</h3>
                <ol class="service-list">
                  <li>專題演講演講者邀請及確認</li>
                  <li>分組座談主持人邀約及確認</li>
                  <li>大會主持人(司儀)</li>
                  <li>講者簡介資料蒐集及邀約確認</li>
                </ol>
              </div>
            </div>

            <!-- 國內外重要貴賓邀請作業規則 -->
            <div class="service-section">
              <div class="service-icon">
                <img src="/image/epc/seminarOptions/preparation_國內外重要貴賓邀請.jpg" alt="國內外重要貴賓邀請作業規則" class="icon-img">
              </div>
              <div class="service-content">
                <h3 class="service-title">國內外重要貴賓<br>邀請作業規則</h3>
                <ol class="service-list">
                  <li>政府單位</li>
                  <li>企業贊助(學術單位)</li>
                </ol>
              </div>
            </div>

            <!-- 國(內)外與會者聯繫作業 -->
            <div class="service-section">
              <div class="service-icon">
                <img src="/image/epc/seminarOptions/preparation_國內外與會者聯繫.jpg" alt="國(內)外與會者聯繫作業" class="icon-img">
              </div>
              <div class="service-content">
                <h3 class="service-title">國(內)外與會者<br>聯繫作業</h3>
                <ol class="service-list">
                  <li>國際(內)貴賓</li>
                  <li>政府機關首長等</li>
                </ol>
              </div>
            </div>

            <!-- 協助申請經費作業 -->
            <div class="service-section">
              <div class="service-icon">
                <img src="/image/epc/seminarOptions/preparation_協助申請經費作業.jpg" alt="協助申請經費作業" class="icon-img">
              </div>
              <div class="service-content">
                <h3 class="service-title">協助申請經費</h3>
                <ol class="service-list">
                  <li>政府單位</li>
                  <li>企業贊助(學術單位)</li>
                </ol>
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
.seminar-preparation-page-container {
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

.content-area {
  width: 100%;
  min-height: 400px;
}

/* 頁面標題樣式 */
.page-title {
  text-align: center;
  margin-bottom: 50px;
}

.page-title h2 {
  font-size: 45pt;
  color: #3e3b3a;
  margin: 0;
  font-weight: normal;
  font-family: "GenYoGothic TW", "源樣夜黑體", "Microsoft JhengHei", sans-serif;
}

/* 服務項目樣式 */
.service-sections {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 40px;
}

.service-section {
  display: flex;
  align-items: center;
  gap: 50px;
}

.service-icon {
  flex-shrink: 0;
  width: 210px;
  height: 210px;
  border-radius: 50%;
  overflow: hidden;
  background-color: #f5f5f5;
}

.icon-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.service-content {
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 50px;
}

.service-title {
  font-size: 30pt;
  color: #5d7266;
  margin: 0;
  font-weight: normal;
  font-family: "GenYoGothic TW", "源樣夜黑體", "Microsoft JhengHei", sans-serif;
  line-height: 1.2;
  flex-shrink: 0;
  min-width: 300px;
}

.service-list {
  font-size: 20pt;
  color: #5d7266;
  margin: 0;
  padding-left: 0;
  line-height: 1.6;
  font-family: "GenYoGothic TW", "源樣夜黑體", "Microsoft JhengHei", sans-serif;
  flex: 1;
  margin-left: 80px;
  min-width: 450px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  list-style: none;
  counter-reset: item;
}

.service-list li {
  margin-bottom: 10px;
  width: 100%;
  text-align: left;
  padding-left: 40px;
  position: relative;
  counter-increment: item;
}

.service-list li::before {
  content: counter(item) ".";
  position: absolute;
  left: 0;
  width: 30px;
  text-align: right;
  font-weight: bold;
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
  
  .page-title h2 {
    font-size: 39pt;  /* 45pt * 0.86 */
  }
  
  .service-sections {
    gap: 30px;
  }
  
  .service-section {
    gap: 40px;
  }
  
  .service-content {
    gap: 40px;
  }
  
  .service-icon {
    width: 180px;
    height: 180px;
  }
  
  .service-title {
    font-size: 26pt;  /* 30pt * 0.86 */
    min-width: 250px;
  }
  
  .service-list {
    font-size: 17pt;  /* 20pt * 0.86 */
    margin-left: 60px;
    min-width: 400px;
  }
}

@media (max-width: 480px) {
  .banner-watermark h1 {
    font-size: 18pt;
  }
  
  .page-title h2 {
    font-size: 31pt;  /* 45pt * 0.69 */
  }
  
  .service-sections {
    gap: 20px;
  }
  
  .service-section {
    gap: 30px;
  }
  
  .service-content {
    gap: 30px;
  }
  
  .service-icon {
    width: 150px;
    height: 150px;
  }
  
  .service-title {
    font-size: 21pt;  /* 30pt * 0.69 */
    min-width: 200px;
  }
  
  .service-list {
    font-size: 14pt;  /* 20pt * 0.69 */
    margin-left: 40px;
    min-width: 350px;
  }
}
</style>

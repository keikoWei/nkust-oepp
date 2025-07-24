<template>
  <div class="seminar-model-page-container">
    <!-- 會展中心導覽欄 -->
    <EpcHeader />

    <!-- 頂部圖片區域 -->
    <section class="page-banner">
      <div class="banner-image">
        <img 
          src="/image/epc/seminar_top.jpg" 
          alt="辦理研討會協助頂部圖片" 
          class="banner-img"
        >
        <div class="banner-watermark">
          <h1>辦理研討會協助</h1>
        </div>
      </div>
    </section>

    <!-- 頁面內容 -->
    <div class="content-container">  
      <div class="content">
        <!-- 頁面標題 -->
        <div class="page-title">
          <h2>會議辦理模式</h2>
        </div>

        <!-- 活動企劃 -->
        <div class="model-section">
          <div class="section-header">
            <img 
              src="/public/image/epc/seminarOptions/model_活動企劃.jpg" 
              alt="活動企劃背景" 
              class="header-bg"
            >
            <span class="header-text">活動企劃</span>
          </div>
          <div class="section-content">
            <div class="service-list">
              <ol>
                <li>政府活動標案執行</li>
                <li>活動規劃執行統包</li>
                <li>文宣設計印刷輸出</li>
                <li>硬體搭建設計規劃</li>
                <li>禮品設計採購統包</li>
                <li>任何活動相關企劃皆可討論客製化專屬流程</li>
              </ol>
            </div>
            <div class="contact-info">
              <p>➲詳請請洽#12851~#12853</p>
            </div>
          </div>
        </div>

        <!-- 虛擬會議平台規劃設計 -->
        <div class="model-section">
          <div class="section-header">
            <img 
              src="/public/image/epc/seminarOptions/model_虛擬會議平台規劃設計.jpg" 
              alt="虛擬會議平台背景" 
              class="header-bg"
            >
            <span class="header-text">虛擬會議平台規劃設計</span>
          </div>
          <div class="section-content">
            <div class="virtual-platform">
              <img 
                src="/public/image/epc/seminarOptions/model_閉幕大合照.png" 
                alt="閉幕大合照" 
                class="platform-img"
              >
              <div class="platform-description">
                <p>▲2021臺灣海洋治理國際研討會 閉幕大合照</p>
                <p>臺灣國際海洋治理會議2021</p>
              </div>
            </div>
          </div>
        </div>

        <!-- 線上直播/現場直播 -->
        <div class="model-section">
          <div class="section-header">
            <img 
              src="/public/image/epc/seminarOptions/model_線上直播現場直播.jpg" 
              alt="直播背景" 
              class="header-bg"
            >
            <span class="header-text">線上直播/現場直播</span>
          </div>
          <div class="section-content">
            <div class="live-stream">
              <div class="video-container">
                <iframe 
                  src="https://www.youtube.com/embed/1kehqCLudyg" 
                  title="國立高雄科技大學 五週年校慶慶祝大會 線上直播"
                  frameborder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowfullscreen
                  class="stream-video"
                />
              </div>
              <div class="platform-description">
                <p>▲五週年校慶大會慶祝大會 現場直播</p>
              </div>
            </div>
          </div>
        </div>

        <!-- 動畫製作、影片剪輯 -->
        <div class="model-section">
          <div class="section-header">
            <img 
              src="/public/image/epc/seminarOptions/model_動畫製作、影片剪輯.jpg" 
              alt="動畫製作背景" 
              class="header-bg"
            >
            <span class="header-text">動畫製作、影片剪輯</span>
          </div>
          <div class="section-content">
            <div class="video-editing">
              <div class="video-container">
                <iframe 
                  src="https://www.youtube.com/embed/1kehqCLudyg" 
                  title="動畫製作、影片剪輯展示"
                  frameborder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowfullscreen
                  class="editing-video"
                />
              </div>
              <div class="platform-description">
                <p>▲2021年 高科達人秀 校慶歌唱比賽2D選秀影片</p>
              </div>
            </div>
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
.seminar-model-page-container {
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
  padding: 3rem 2rem 6rem 2rem;
  display: flex;
  justify-content: center;
}

.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
  width: 100%;
  max-width: 1000px;
}

/* ===== 頁面標題 ===== */
.page-title {
  text-align: center;
  margin-bottom: 40px;
}

.page-title h2 {
  font-size: 30pt;
  color: #3e3b3a;
  margin: 0;
  font-weight: normal;
  font-family: "GenYoGothic TW", "源樣夜黑體", "Microsoft JhengHei", sans-serif;
}

/* ===== 模式區塊 ===== */
.model-section {
  width: 100%;
  margin-bottom: 60px;
}

.section-header {
  position: relative;
  width: 100%;
  height: 90px;
  border-radius: 15px;
  overflow: hidden;
  margin-bottom: 30px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}

.header-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.header-text {
  position: relative;
  z-index: 2;
  color: white;
  font-size: 30pt;
  font-weight: bold;
  font-family: "GenYoGothic TW", "源樣夜黑體", "Microsoft JhengHei", sans-serif;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
  margin-left: 30px;
}

.section-content {
  padding: 0 20px;
}

/* ===== 服務列表 ===== */
.service-list {
  margin-bottom: 20px;
}

.service-list ol {
  margin: 0;
  padding-left: 0;
  list-style: none;
  counter-reset: item;
}

.service-list li {
  font-size: 20pt;
  color: #5d7266;
  margin-bottom: 15px;
  padding-left: 40px;
  position: relative;
  counter-increment: item;
  font-family: "GenYoGothic TW", "源樣夜黑體", "Microsoft JhengHei", sans-serif;
  line-height: 1.3;
}

.service-list li::before {
  content: counter(item) ".";
  position: absolute;
  left: 0;
  width: 30px;
  text-align: right;
  font-weight: bold;
  color: #5d7266;
}

.contact-info {
  margin-top: 20px;
}

.contact-info p {
  font-size: 20pt;
  color: #5d7266;
  margin: 0;
  font-family: "GenYoGothic TW", "源樣夜黑體", "Microsoft JhengHei", sans-serif;
}

/* ===== 虛擬會議平台 ===== */
.virtual-platform {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px 0;
}

.platform-img {
  width: 800px;
  max-width: 100%;
  height: auto;
  border-radius: 10px;
}

.platform-description {
  text-align: center;
  margin-top: 15px;
}

.platform-description p {
  font-size: 10pt;
  color: #5d7266;
  margin: 5px 0;
  font-family: "GenYoGothic TW", "源樣夜黑體", "Microsoft JhengHei", sans-serif;
}

/* ===== 影片容器 ===== */
.video-container {
  width: 800px;
  max-width: 100%;
  position: relative;
  border-radius: 10px;
  overflow: hidden;
}

.video-container::before {
  content: "";
  display: block;
  padding-top: 56.25%; /* 16:9 比例 */
}

.stream-video,
.editing-video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: none;
  border-radius: 10px;
}

/* ===== 直播區域 ===== */
.live-stream {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  margin: 20px 0;
}

.stream-info {
  font-size: 20pt;
  color: #5d7266;
  margin: 0;
  font-family: "GenYoGothic TW", "源樣夜黑體", "Microsoft JhengHei", sans-serif;
}

.youtube-logo {
  width: 120px;
  height: auto;
}

/* ===== 影片剪輯 ===== */
.video-editing {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px 0;
}

/* ===== 響應式設計 ===== */
@media (max-width: 1024px) {
  .header-text {
    font-size: 26pt;
  }
  
  .service-list li {
    font-size: 17pt;
  }
  
  .contact-info p {
    font-size: 17pt;
  }
  
  .platform-img,
  .video-container {
    width: 100%;
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
  
  .section-header {
    height: 70px;
  }
  
  .header-text {
    font-size: 24pt;
  }
  
  .service-list li {
    font-size: 17pt;
  }
  
  .contact-info p {
    font-size: 17pt;
  }
  
  .stream-info {
    font-size: 18pt;
  }
  
  .youtube-logo {
    width: 100px;
  }
}

@media (max-width: 480px) {
  .banner-watermark h1 {
    font-size: 18pt;
  }
  
  .page-title h2 {
    font-size: 22pt;
  }
  
  .section-header {
    height: 60px;
  }
  
  .header-text {
    font-size: 20pt;
  }
  
  .service-list li {
    font-size: 15pt;
  }
  
  .contact-info p {
    font-size: 15pt;
  }
  
  .stream-info {
    font-size: 16pt;
  }
  
  .youtube-logo {
    width: 80px;
  }
}
</style>

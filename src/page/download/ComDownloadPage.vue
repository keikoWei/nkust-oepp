<template>
  <AppHeader />
  
  <!-- 頂部圖片區域 -->
  <section class="download-banner">
    <div class="banner-image">
      <img src="/image/members/member_top.jpg" alt="經管中心下載專區頂部圖片" class="banner-img">
    </div>
  </section>
  
  <div class="download-page">
    <DownloadHeader activeTab="com" />

    <div class="download-content">
      <div class="download-files">
        <div class="file-item" v-for="file in downloadFiles" :key="file.name">
          <div class="category-box">
            <div class="category-text">
              <div>經營管理</div>
              <div>相關表單</div>
            </div>
          </div>
          <div class="file-info">
            <h3 class="file-title">{{ file.name }}</h3>
            <div class="title-download-container">
              <span></span>
              <a :href="file.url" target="_blank" rel="noopener noreferrer" class="download-text">
                前往連結
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  <!-- Footer -->
  <MainFooterComponent waveColor="#d9d9d9" />
</template>

<script setup>
import AppHeader from '@/components/AppHeader.vue'
import DownloadHeader from '@/components/download/DownloadHeader.vue'
import MainFooterComponent from '@/components/MainFooterComponent.vue'

const downloadFiles = [
  {
    name: '民間參與公共建設案件民間投資金額試算表',
    url: 'https://ppp.mof.gov.tw/WWW/ref4.aspx?mid=8CDC76A1657676D2&oid=3EF82971BC6158C0'
  }
]
</script>

<style scoped>
/* 頂部圖片區域 */
.download-banner {
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

.download-page {
  width: 70vw;
  max-width: 100%;
  margin: 0 auto;
  padding: 1.3rem 0.7rem 67px 0.7rem;  /* 原本 2rem 1rem 100px 1rem * 0.67 */
  font-family: "GenYoGothic TW", "源樣黑體月", "Microsoft JhengHei", sans-serif;
  background-color: #d9d9d9;
  min-height: 60vh;
}

.download-content {
  margin-top: 1.3rem;  /* 原本 2rem * 0.67 */
  padding: 1.3rem 0;  /* 原本 2rem * 0.67 */
}

.download-files {
  display: flex;
  flex-direction: column;
  gap: 15px;
  align-items: center;
}

.file-item {
  display: flex;
  align-items: stretch;
  gap: 20px;
  width: 100%;
  max-width: 800px;
  background-color: #d9d9d9;
  border-radius: 8px;
  padding: 15px 20px;
  min-height: 95px;
}

.category-box {
  width: 180px;
  height: 65px;
  background-color: #6B574F;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.category-text {
  font-size: 12pt;
  color: #fff;
  font-weight: normal;
  text-align: center;
  line-height: 1.1;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.file-info {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  position: relative;
}

.title-download-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid #6B574F;
  padding-bottom: 5px;
  margin-left: -200px;
  padding-left: 200px;
  position: absolute;
  top: 34px;
  left: 0;
  right: 0;
}

.file-title {
  font-size: 18pt;
  color: #333;
  margin: 0;
  font-weight: normal;
  line-height: 1.2;
  margin-top: 20px;
  margin-bottom: 40px;
}

.download-text {
  font-size: 12pt;
  color: #666;
  text-decoration: none;
  align-self: flex-end;
  transition: color 0.3s ease;
}

.download-text:hover {
  color: #6B574F;
}

@media (max-width: 768px) {
  .file-item {
    flex-direction: column;
    text-align: center;
    gap: 15px;
    padding: 12px 15px;
    min-height: 85px;
  }

  .category-box {
    width: 160px;
    height: 55px;
  }

  .category-text {
    font-size: 11pt;
  }

  .file-title {
    font-size: 13pt;
  }

  .download-text {
    font-size: 11pt;
  }

  .title-download-container {
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 8px;
    margin-left: -180px;
    padding-left: 180px;
    position: absolute;
    top: 40px;
  }

  .file-info {
    justify-content: flex-start;
    position: relative;
  }

  .file-title {
    margin-top: 15px;
    margin-bottom: 10px;
    text-align: left;
  }
}

@media (max-width: 480px) {
  .category-box {
    width: 140px;
    height: 50px;
  }

  .category-text {
    font-size: 9pt;
  }

  .file-title {
    font-size: 12pt;
  }

  .download-text {
    font-size: 9pt;
  }

  .file-item {
    padding: 10px 12px;
    min-height: 80px;
  }

  .download-banner {
    width: 100%;
    margin: 0;
  }

  .banner-image {
    height: 200px;
  }

  .download-page {
    width: 100%;
    margin: 0 auto;
    padding: 1rem;
    background-color: #d9d9d9;
  }

  .download-content {
    width: 100%;
    margin-top: 1rem;
    padding: 1rem 0;
  }

  .download-files {
    max-width: 100%;
    width: 100%;
  }

  .file-item {
    max-width: 100%;
    margin: 0 auto 1rem auto;
  }

  .title-download-container {
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 8px;
    margin-left: 0;
    padding-left: 0;
    position: static;
    border-bottom: 2px solid #6B574F;
    padding-bottom: 8px;
    margin-bottom: 1rem;
  }

  .file-info {
    justify-content: flex-start;
    position: relative;
  }

  .file-title {
    margin-top: 12px;
    margin-bottom: 10px;
    text-align: left;
  }
}
</style>

<template>
  <div class="com-links-page">
    <ComHeader />
    <section class="com-banner">
      <div class="banner-image">
        <img src="/image/members/member_top.jpg" alt="相關連結" class="banner-img">
        <div class="watermark">相關連結</div>
      </div>
    </section>
    <!-- 內容區塊，排版參考教育推廣中心 /educationCenter/faq/educationRelated -->
    <div class="links-content">
      <div class="content-container">
        <div class="title-container">
          <div class="title">相關連結</div>
        </div>

        <div class="external-links-section">
          <div class="links-container">
            <a
              v-for="item in links"
              :key="item.label"
              class="link-button"
              :href="item.url"
              target="_blank"
              rel="noopener noreferrer"
            >
              {{ item.label }}
            </a>
          </div>
        </div>
      </div>
    </div>
    <MainFooterComponent waveColor="#fff" backgroundColor="#8C776D" textColor="#ffffff" />
  </div>
</template>

<script setup>
import ComHeader from '@/components/ComHeader.vue'
import MainFooterComponent from '@/components/MainFooterComponent.vue'

const links = [
  {
    label: '政府促進民間參與公共建設資訊網',
    url: 'https://ppp.mof.gov.tw/'
  },
  {
    label: 'Google',
    url: 'https://www.google.com/'
  },
  {
    label: 'Youtube',
    url: 'https://www.youtube.com/'
  }
]
</script>

<style scoped>
.com-links-page {
  width: 100%;
  min-height: 100vh;
  margin: 0;
  padding: 0;
  background-color: #fff;
  font-family: "GenYoGothic TW", "源樣黑體月", "Microsoft JhengHei", sans-serif;
}

.com-banner {
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

.watermark {
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
  color: white;
  font-size: 37pt;
  font-weight: bold;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
  letter-spacing: 2px;
}

.links-content {
  width: 100%;
  padding: 4rem 0 5rem;
}

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
  color: #3d3229;
  font-weight: bold;
  text-align: center;
  letter-spacing: 2px;
}

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
  color: #3d3229;
  text-decoration: none;
  border-radius: 25px;
  text-align: center;
  font-size: 30pt;
  font-weight: 500;
  border: 2px solid #8c776d;
  transition: all 0.3s ease;
  font-family: "GenYoGothic TW", "源樣黑體", "Microsoft JhengHei", sans-serif;
  box-sizing: border-box;
}

.link-button:hover {
  background-color: #f7f2ec;
  border-color: #3d3229;
  transform: translateY(-3px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
}

.link-button:active {
  transform: translateY(0);
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1);
}

@media (max-width: 480px) {
  .com-banner {
    width: 100%;
  }
  .banner-image {
    height: 200px;
  }
  .watermark {
    font-size: 24pt;
    padding: 20px 0 0 20px;
  }
  .content-wrapper {
    width: 100%;
    padding: 0 1rem;
  }
}
</style>

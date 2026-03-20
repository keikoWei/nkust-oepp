<template>
  <div class="com-contact-page">
    <ComHeader />
    <section class="com-banner">
      <div class="banner-image">
        <img src="/image/members/member_top.jpg" alt="聯絡我們" class="banner-img">
        <div class="watermark">聯絡我們</div>
      </div>
    </section>
    <div class="contact-content">
      <div class="content-container">
        <div class="title-container">
          <div class="title">聯絡我們</div>
        </div>

        <div class="cards-container">
          <!-- 經營管理中心總體資訊 -->
          <div class="contact-card">
            <div class="card-header">國立高雄科技大學經營管理中心</div>
            <div class="card-body">
              <p>校區位置：楠梓校區 行政大樓三樓1309、1310</p>
              <p>地址：811213 高雄市楠梓區海專路142號</p>
              <p>電話：07-3617141 分機 22101、22114</p>
              <p>信箱：eroffice01@nkust.edu.tw</p>
            </div>
          </div>

          <!-- 規劃評估組 -->
          <div class="contact-card">
            <div class="card-header">規劃評估組</div>
            <div class="card-body">
              <p>電話：</p>
              <p>電子郵件：</p>
            </div>
          </div>

          <!-- 開發活化組 -->
          <div class="contact-card">
            <div class="card-header">開發活化組</div>
            <div class="card-body">
              <p>電話：</p>
              <p>電子郵件：</p>
            </div>
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
</script>

<style scoped>
.com-contact-page {
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

.contact-content {
  width: 100%;
  padding: 4rem 0 5rem;
}

.content-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.title-container {
  display: flex;
  justify-content: center;
  margin-bottom: 40px;
}

.title {
  font-size: 32pt;
  color: #3d3229;
  font-weight: bold;
  text-align: center;
  letter-spacing: 2px;
}

.cards-container {
  display: flex;
  flex-direction: column;
  gap: 32px;
  max-width: 900px;
  margin: 0 auto;
}

.contact-card {
  border: 2px solid #8c776d;
  border-radius: 24px;
  padding: 20px 28px 24px 28px;
  background-color: #fff;
  box-sizing: border-box;
}

.card-header {
  font-size: 16pt;
  font-weight: 600;
  color: #3d3229;
  padding-bottom: 12px;
  margin-bottom: 16px;
  border-bottom: 1px solid #8c776d;
}

.card-body p {
  margin: 0 0 6px 0;
  font-size: 13pt;
  color: #3d3229;
  line-height: 1.7;
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

  .title {
    font-size: 22pt;
  }

  .cards-container {
    gap: 24px;
  }

  .contact-card {
    padding: 16px 18px 20px 18px;
    border-radius: 20px;
  }

  .card-header {
    font-size: 14pt;
    margin-bottom: 12px;
  }

  .card-body p {
    font-size: 12pt;
  }
}
</style>

<template>
  <div class="com-intro-page">
    <ComHeader />
    <section class="com-banner">
      <div class="banner-image">
        <img src="/image/members/member_top.jpg" alt="經營管理中心簡介" class="banner-img">
        <div class="watermark">中心簡介</div>
      </div>
    </section>
    <div class="intro-content">
      <div class="content-wrapper">
        <h2 class="section-title">關於本中心</h2>

        <div class="intro-card">
          <div class="intro-inner">
            <p class="intro-paragraph">
              「經營管理中心」之核心職責與具體如下：
            </p>
            <p class="intro-paragraph">
              1. 核心職責：協助提升本校之經營管理效能。
            </p>
            <p class="intro-paragraph">
              2. 具體內容：掌理本校重大工程之前評估與規劃設計、資產開發及場域經營規劃等相關事宜，
              作為營運空間與專案活化之推動單位。
            </p>
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
.com-intro-page {
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

.intro-content {
  width: 100%;
  padding: 6rem 0 7rem;
}

.content-wrapper {
  width: 70vw;
  max-width: 100%;
  margin: 0 auto;
  padding: 0 2rem;
}

.section-title {
  font-size: 26pt;
  color: #3d3229;
  margin-bottom: 2rem;
  font-weight: bold;
  text-align: center;
  letter-spacing: 2px;
}

/* 雙層圓角框 + 偏移線條：外層與內層線條粗細、顏色相同，內層向右下偏移產生左下/右上交錯弧線 */
.intro-card {
  --frame-color: #8c776d;
  --frame-width: 2px;
  --frame-radius: 34px;
  --frame-offset: 10px;
  position: relative;
  width: 100%;
  max-width: 960px;
  margin: 0 auto;
  padding: 40px 40px 48px 40px;
  box-sizing: border-box;
  /* 不設 border，由 pseudo 繪製兩層框 */
}

/* 外層圓角框：貼齊卡片四邊 */
.intro-card::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border: var(--frame-width) solid var(--frame-color);
  border-radius: var(--frame-radius);
  pointer-events: none;
  background: transparent;
}

/* 內層圓角框：向右下偏移，與外層等粗等色，形成交錯弧線感 */
.intro-card::after {
  content: "";
  position: absolute;
  top: var(--frame-offset);
  left: var(--frame-offset);
  right: calc(-1 * var(--frame-offset));
  bottom: calc(-1 * var(--frame-offset));
  border: var(--frame-width) solid var(--frame-color);
  border-radius: var(--frame-radius);
  pointer-events: none;
  background: transparent;
}

.intro-inner {
  position: relative;
  z-index: 1;
  padding: 28px 0 28px 0;
  font-size: 14pt;
  color: #3d3229;
  line-height: 1.9;
}

.intro-paragraph {
  margin: 0 0 1.1rem 0;
}

.intro-paragraph:last-child {
  margin-bottom: 0;
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

  .intro-card {
    --frame-radius: 24px;
    --frame-offset: 8px;
    padding: 28px 20px 32px 20px;
  }

  .intro-inner {
    padding: 20px 0 20px 0;
    font-size: 12pt;
  }
}
</style>

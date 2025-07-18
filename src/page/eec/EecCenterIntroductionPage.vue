<template>
  <div class="center-introduction-page-container">

    <!-- 教育推廣中心導覽欄 -->
    <EecHeader />

    <!-- 頂部圖片區域 -->
    <section class="center-banner">
      <div class="banner-image">
        <img src="/image/eec/eec_top.png" alt="教育推廣中心簡介頂部圖片" class="banner-img">
        <div class="banner-watermark">
          <h1>中心簡介</h1>
        </div>
      </div>
    </section>

    <!-- 頁面內容 -->
    <div class="content-container">  
      <div class="content">
        <!-- 願景區塊 -->
        <div class="vision-mission-item">
          <div class="circle-icon vision-icon">
          </div>
          <div class="description">
            <p>提供卓越教育品質<br>成為專業成長終身學習的第一品牌</p>
          </div>
        </div>
        
        <!-- 使命區塊 -->
        <div class="vision-mission-item">
          <div class="circle-icon mission-icon">
          </div>
          <div class="description">
            <p>終身學習 投資自己<br>儲備能量 創造未來</p>
          </div>
        </div>
      </div>
    </div>

    <!-- 訓練發展政策區塊 -->
    <div class="training-policy-section">
      <div class="policy-container">
        <h2 class="policy-title">訓練發展政策</h2>
        <div class="policy-content">
          <div class="policy-item">
            <span class="policy-number">1.</span>
            <p>開發符合社會需求之課程，建立學員就業市場需求接軌的訓練機制。</p>
          </div>
          <div class="policy-item">
            <span class="policy-number">2.</span>
            <p>與企業結盟，提升師資及訓用合一，結合教授學術素養與企業高階主管實務經驗協同教學，達成訓練效果。</p>
          </div>
          <div class="policy-item">
            <span class="policy-number">3.</span>
            <p>鼓勵各開辦單位規劃具有特色並符合時代潮流之推廣教育班，並針對企業屬性，規劃符合需求之進修課程。</p>
          </div>
          <div class="policy-item">
            <span class="policy-number">4.</span>
            <p>創造學以致用、學以就業，持續開拓學員就業技能。</p>
          </div>
          <div class="policy-item">
            <span class="policy-number">5.</span>
            <p>多角化經營教學策略，滿足學員需求，結合社區資源，開發多元化、多樣化教育類別，經營上更具競爭力。</p>
          </div>
          <div class="policy-item">
            <span class="policy-number">6.</span>
            <p>系統資訊化及各項優惠措施。</p>
          </div>
        </div>
      </div>
    </div>

    <!-- 訓練承諾區塊 -->
    <div class="training-commitment-section">
      <div class="commitment-container">
        <h2 class="commitment-title">訓練承諾</h2>
        <div class="commitment-content">
          <div class="commitment-item">
            <span class="commitment-number">1.</span>
            <p>本中心秉持TQS持續改善精神，致力規劃提升相關專業訓練及輔導協助，提供學員多元課程及滿意的服務，以培育優秀專業人才，進而提升學員個人競爭力。</p>
          </div>
          <div class="commitment-item">
            <span class="commitment-number">2.</span>
            <p>全力提供學員學習所需設備及資源，創造學以致用、學以就業的環境，讓學員獲得更具專業性知識，持續開拓學員就業技能。</p>
          </div>
          <div class="commitment-item">
            <span class="commitment-number">3.</span>
            <p>提供適當的資源及訓練環境，確保學員能獲得有系統與專業性的課程訓練。</p>
          </div>
          <div class="commitment-item">
            <span class="commitment-number">4.</span>
            <p>學員能獲得有系統與專業性的課程訓練。</p>
          </div>
          <div class="commitment-item">
            <span class="commitment-number">5.</span>
            <p>資訊化報名系統及學費優惠，學員可以在網路上下載招生簡章報名，並結合政府機關、私人機構策略聯盟整併享有學費優待措施。</p>
          </div>
        </div>
      </div>
    </div>

    <!-- 經營目標區塊 -->
    <div class="business-goals-section">
      <div class="goals-container">
        <div class="goals-title-wrapper">
          <h2 class="goals-title">經營目標</h2>
        </div>
        
        <div class="goals-content">
          <div class="goal-item">
            <div class="goal-number">01</div>
            <div class="goal-text">推動終身教育</div>
          </div>
          
          <div class="goal-item">
            <div class="goal-number">02</div>
            <div class="goal-text">強化產學合作</div>
          </div>
          
          <div class="goal-item">
            <div class="goal-number">03</div>
            <div class="goal-text">提升行政服務</div>
          </div>
          
          <div class="goal-item">
            <div class="goal-number">04</div>
            <div class="goal-text">成為南部地區<br>最優質的專業成長<br>與終身學習園地</div>
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
</script>

<style scoped>
.center-introduction-page-container {
  width: 100%;
  margin: 0;
  padding: 0;
  font-family: "GenYoGothic TW", "源樣夜黑體", "Microsoft JhengHei", sans-serif;
}

/* 頂部圖片區域 */
.center-banner {
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

/* 願景使命區塊 */
.vision-mission-item {
  display: flex;
  align-items: center;
  gap: 60px;
  margin-bottom: 90px;
  padding: 30px 40px;
  width: 100%;
}

.circle-icon {
  width: 240px;
  height: 240px;
  border-radius: 50%;
  flex-shrink: 0;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
}

.vision-icon {
  background-image: url('/image/centerIntroduction/wish.png');
}

.mission-icon {
  background-image: url('/image/centerIntroduction/misson.png');
}

.description {
  flex: 1;
}

.description p {
  font-size: 20pt;
  color: #534741;
  line-height: 1.8;
  margin: 0;
  font-family: "GenYoGothic TW", "源樣黑體", "Microsoft JhengHei", sans-serif;
}

/* 訓練發展政策區塊 */
.training-policy-section {
  background-color: #e3d9cd;
  padding: 60px 0;
  margin-top: 40px;
  width: 70vw;
  max-width: 100%;
  margin-left: auto;
  margin-right: auto;
}

.policy-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.policy-title {
  font-size: 32pt;
  color: #534741;
  text-align: center;
  margin-bottom: 40px;
  font-family: "GenYoGothic TW", "源樣黑體", "Microsoft JhengHei", sans-serif;
  font-weight: bold;
}

.policy-content {
  width: 100%;
  max-width: 700px;
}

.policy-item {
  display: flex;
  align-items: flex-start;
  margin-bottom: 30px;
  gap: 15px;
}

.policy-number {
  font-size: 20pt;
  color: #534741;
  font-weight: bold;
  flex-shrink: 0;
  font-family: "GenYoGothic TW", "源樣黑體", "Microsoft JhengHei", sans-serif;
}

.policy-item p {
  font-size: 18pt;
  color: #534741;
  line-height: 1.8;
  margin: 0;
  font-family: "GenYoGothic TW", "源樣黑體", "Microsoft JhengHei", sans-serif;
}

/* 訓練承諾區塊 */
.training-commitment-section {
  background-color: #ffffff;
  padding: 60px 0;
  width: 70vw;
  max-width: 100%;
  margin-left: auto;
  margin-right: auto;
}

.commitment-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.commitment-title {
  font-size: 32pt;
  color: #534741;
  text-align: center;
  margin-bottom: 40px;
  font-family: "GenYoGothic TW", "源樣黑體", "Microsoft JhengHei", sans-serif;
  font-weight: bold;
}

.commitment-content {
  width: 100%;
  max-width: 700px;
}

.commitment-item {
  display: flex;
  align-items: flex-start;
  margin-bottom: 30px;
  gap: 15px;
}

.commitment-number {
  font-size: 20pt;
  color: #534741;
  font-weight: bold;
  flex-shrink: 0;
  font-family: "GenYoGothic TW", "源樣黑體", "Microsoft JhengHei", sans-serif;
}

.commitment-item p {
  font-size: 18pt;
  color: #534741;
  line-height: 1.8;
  margin: 0;
  font-family: "GenYoGothic TW", "源樣黑體", "Microsoft JhengHei", sans-serif;
}

/* 經營目標區塊 */
.business-goals-section {
  background-color: #ffffff;
  padding: 60px 0;
  width: 70vw;
  max-width: 100%;
  margin-left: auto;
  margin-right: auto;
}

.goals-container {
  max-width: 900px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.goals-title-wrapper {
  margin-bottom: 50px;
}

.goals-title {
  font-size: 28pt;
  color: #534741;
  text-align: center;
  margin: 0;
  padding: 8px 80px;
  background-color: #e3d9cd;
  border-radius: 30px;
  font-family: "GenYoGothic TW", "源樣黑體", "Microsoft JhengHei", sans-serif;
  font-weight: bold;
}

.goals-content {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 50px;
  width: 100%;
  max-width: 800px;
}

.goal-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 20px;
}

.goal-number {
  font-size: 72pt;
  font-weight: bold;
  color: #d4c4a8;
  line-height: 1;
  font-family: "GenYoGothic TW", "源樣黑體", "Microsoft JhengHei", sans-serif;
}

.goal-text {
  font-size: 24pt;
  color: #534741;
  font-weight: bold;
  line-height: 1.4;
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

  .vision-mission-item {
    gap: 45px;
    margin-bottom: 75px;
    padding: 23px 30px;
  }
  
  .circle-icon {
    width: 200px;
    height: 200px;
  }
  
  .description p {
    font-size: 17pt;
  }

  .training-policy-section {
    padding: 50px 0;
  }

  .policy-title {
    font-size: 28pt;
    margin-bottom: 35px;
  }

  .policy-item {
    margin-bottom: 25px;
  }

  .policy-number {
    font-size: 18pt;
  }

  .policy-item p {
    font-size: 16pt;
  }

  .training-commitment-section {
    padding: 50px 0;
  }

  .commitment-title {
    font-size: 28pt;
    margin-bottom: 35px;
  }

  .commitment-item {
    margin-bottom: 25px;
  }

  .commitment-number {
    font-size: 18pt;
  }

  .commitment-item p {
    font-size: 16pt;
  }

  .business-goals-section {
    padding: 50px 0;
  }

  .goals-title {
    font-size: 24pt;
    padding: 6px 60px;
  }

  .goals-content {
    gap: 40px;
  }

  .goal-item {
    gap: 15px;
  }

  .goal-number {
    font-size: 60pt;
  }

  .goal-text {
    font-size: 20pt;
  }
}

@media (max-width: 768px) {
  .banner-watermark {
    padding: 20px 0 0 27px;
  }
  
  .banner-watermark h1 {
    font-size: 23pt;
  }

  .vision-mission-item {
    gap: 30px;
    margin-bottom: 60px;
    padding: 30px 20px;
  }
  
  .circle-icon {
    width: 160px;
    height: 160px;
  }
  
  .description p {
    font-size: 14pt;
  }

  .training-policy-section {
    padding: 40px 0;
  }

  .policy-container {
    padding: 0 15px;
  }

  .policy-title {
    font-size: 22pt;
    margin-bottom: 30px;
  }

  .policy-item {
    margin-bottom: 20px;
    gap: 10px;
  }

  .policy-number {
    font-size: 16pt;
  }

  .policy-item p {
    font-size: 14pt;
  }

  .training-commitment-section {
    padding: 40px 0;
  }

  .commitment-container {
    padding: 0 15px;
  }

  .commitment-title {
    font-size: 22pt;
    margin-bottom: 30px;
  }

  .commitment-item {
    margin-bottom: 20px;
    gap: 10px;
  }

  .commitment-number {
    font-size: 16pt;
  }

  .commitment-item p {
    font-size: 14pt;
  }

  .business-goals-section {
    padding: 40px 0;
  }

  .goals-container {
    padding: 0 15px;
  }

  .goals-title-wrapper {
    margin-bottom: 40px;
  }

  .goals-title {
    font-size: 20pt;
    padding: 5px 50px;
  }

  .goals-content {
    grid-template-columns: 1fr;
    gap: 30px;
  }

  .goal-item {
    gap: 12px;
  }

  .goal-number {
    font-size: 48pt;
  }

  .goal-text {
    font-size: 18pt;
  }
}

@media (max-width: 480px) {
  .vision-mission-item {
    gap: 23px;
    margin-bottom: 45px;
    padding: 23px 15px;
  }
  
  .circle-icon {
    width: 140px;
    height: 140px;
  }
  
  .description p {
    font-size: 12pt;
  }

  .training-policy-section {
    padding: 30px 0;
  }

  .policy-container {
    padding: 0 10px;
  }

  .policy-title {
    font-size: 18pt;
    margin-bottom: 25px;
  }

  .policy-item {
    margin-bottom: 15px;
    gap: 8px;
  }

  .policy-number {
    font-size: 14pt;
  }

  .policy-item p {
    font-size: 12pt;
  }

  .training-commitment-section {
    padding: 30px 0;
  }

  .commitment-container {
    padding: 0 10px;
  }

  .commitment-title {
    font-size: 18pt;
    margin-bottom: 25px;
  }

  .commitment-item {
    margin-bottom: 15px;
    gap: 8px;
  }

  .commitment-number {
    font-size: 14pt;
  }

  .commitment-item p {
    font-size: 12pt;
  }

  .business-goals-section {
    padding: 30px 0;
  }

  .goals-container {
    padding: 0 10px;
  }

  .goals-title-wrapper {
    margin-bottom: 30px;
  }

  .goals-title {
    font-size: 16pt;
    padding: 4px 40px;
  }

  .goals-content {
    gap: 25px;
  }

  .goal-item {
    gap: 10px;
  }

  .goal-number {
    font-size: 36pt;
  }

  .goal-text {
    font-size: 14pt;
  }
}
</style>

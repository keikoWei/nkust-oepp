<template>
  <div class="pay-page-container">

    <!-- 教育推廣中心導覽欄 -->
    <EecHeader />

    <!-- 頂部圖片區域 -->
    <section class="pay-banner">
      <div class="banner-image">
        <img src="/image/eec/eec_top.png" alt="教育推廣中心繳費流程頂部圖片" class="banner-img">
        <div class="banner-watermark">
          <h1>繳費流程</h1>
        </div>
      </div>
    </section>

    <!-- 繳費流程內容 -->
    <div class="content-container">
      <div class="title-container">
        <div class="title">『繳費流程』</div>
      </div>
      
      <div class="content">
        <div class="payment-method">
          <h3>台企銀代收服務網</h3>
          <p>請點選任一繳費方式,進入查看如何操作繳費,</p>
          <p>再點選台企銀學雜費代收網進入繳費。</p>
          <p class="website-link">https://newsch.tbb.com.tw/cpb1/index.aspx?lk=2</p>
        </div>

        <div class="payment-steps">
          <div class="step-section">
            <p class="step-number">(1)</p>
            <p class="step-content">選擇「學生查詢登入」選擇學校:國立高雄科技大學、學號和通行識別證皆輸入身分證字號</p>
          </div>

          <div class="step-section step-section-complex">
            <div class="step-header">
              <p class="step-number">(2)</p>
              <p class="step-content">請點選課程明細,檢視學員姓名及課程資料無誤,即可選擇:</p>
            </div>
            <div class="step-options">
              <p>1.列印繳款單至超商或臨櫃</p>
              <p>2.網路ATM繳款</p>
              <p>3.網銀繳款</p>
              <p>4.信用卡繳款等方式繳費。</p>
            </div>
          </div>

          <div class="step-section">
            <p class="step-number">(3)</p>
            <p class="step-content">繳費成功後可列印證明,待入帳 2-3天後可自行列印收據。</p>
          </div>
        </div>

        <div class="alternative-methods">
          <h3>繳費提供共四種方式:</h3>
          <p>1.信用卡刷卡</p>
          <p>2.網路ATM</p>
          <p>3.台企銀網路銀行</p>
          <p>4.臨櫃繳費或超商繳費</p>
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
.pay-page-container {
  width: 100%;
  margin: 0;
  padding: 0;
  font-family: "GenYoGothic TW", "源樣夜黑體", "Microsoft JhengHei", sans-serif;
}

/* 頂部圖片區域 */
.pay-banner {
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
  padding: 34px 0 0 54px;  /* 原本 50px 0 0 80px * 0.67 */
  background: linear-gradient(135deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0) 70%);
}

.banner-watermark h1 {
  color: white;
  font-size: 37pt;  /* 原本 55pt * 0.67 */
  font-weight: bold;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
  margin: 0;
  letter-spacing: 2px;  /* 原本 3px * 0.67 */
  font-family: "GenYoGothic TW", "源樣夜黑體", "Microsoft JhengHei", sans-serif;
}

/* 頁面內容區域 */
.pay-content {
  width: 100%;
  background-color: #e3d9cd;
  min-height: 60vh;
  padding: 3rem 0;
}

.content-wrapper {
  width: 70vw;
  max-width: 100%;
  margin: 0 auto;
  padding: 0 2rem;
}

.page-title {
  font-size: 45pt;
  font-weight: bold;
  color: #534741;
  text-align: center;
  margin-bottom: 3rem;
  letter-spacing: 2px;
}

.content-section {
  background-color: #ffffff;
  border-radius: 20px;
  padding: 3rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

.intro-text {
  font-size: 18pt;
  color: #534741;
  line-height: 1.8;
  text-align: center;
  margin-bottom: 3rem;
}

.payment-process-content h2 {
  font-size: 32pt;
  font-weight: bold;
  color: #534741;
  text-align: center;
  margin-bottom: 2rem;
}

.step-list {
  display: grid;
  gap: 2rem;
  max-width: 800px;
  margin: 0 auto;
}

.step-item {
  display: flex;
  align-items: center;
  background-color: #f2ede8;
  border-radius: 15px;
  padding: 2rem;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.step-item:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 25px rgba(83, 71, 65, 0.15);
}



.step-content h3 {
  font-size: 20pt;
  font-weight: bold;
  color: #534741;
  margin-bottom: 0.5rem;
}

.step-content p {
  font-size: 16pt;
  color: #534741;
  line-height: 1.6;
}



/* 繳費流程內容樣式 */
.content-container {
  max-width: 1200px;
  margin: 40px auto;
  padding: 0 20px;
}

.title-container {
  display: flex;
  justify-content: flex-start;
  margin-bottom: 40px;
}

.title {
  font-size: 26pt;
  padding: 10px 40px;
  border: 3px solid #534741;
  border-radius: 15px;
  color: #534741;
  background-color: #e3d9cd;
  width: 280px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "GenYoGothic TW", "源樣黑體", "Microsoft JhengHei", sans-serif;
}

.content {
  font-size: 20pt;
  color: #534741;
  line-height: 1.6;
  font-family: "GenYoGothic TW", "源樣黑體", "Microsoft JhengHei", sans-serif;
}

.payment-method {
  margin-bottom: 40px;
}

.payment-method h3 {
  font-size: 20pt;
  color: #534741;
  margin-bottom: 20px;
  font-weight: bold;
}

.payment-method p {
  margin-bottom: 10px;
}

.website-link {
  color: #0066cc;
  text-decoration: underline;
  word-break: break-all;
}

.payment-steps {
  margin-bottom: 40px;
}

.step-section {
  margin-bottom: 30px;
  display: flex;
  gap: 15px;
  align-items: flex-start;
}

.step-section-complex {
  flex-direction: column;
  gap: 0;
}

.step-header {
  display: flex;
  gap: 15px;
  align-items: flex-start;
}

.step-options {
  margin-left: 55px;
  margin-top: 8px;
}

.step-options p {
  margin-bottom: 8px;
  font-size: 20pt;
  color: #534741;
  line-height: 1.6;
}

.step-options p:last-child {
  margin-bottom: 0;
}

.step-content {
  flex: 1;
}

.step-content p {
  margin-bottom: 8px;
}

.step-content p:first-child {
  margin-bottom: 12px;
}

.step-content p:last-child {
  margin-bottom: 0;
}

.alternative-methods h3 {
  font-size: 20pt;
  color: #534741;
  margin-bottom: 20px;
  font-weight: bold;
}

.alternative-methods p {
  margin-bottom: 15px;
}

/* 響應式設計 */
@media (max-width: 1024px) {
  .content-wrapper {
    width: 85vw;
    padding: 0 1.5rem;
  }
  
  .page-title {
    font-size: 36pt;
  }
  
  .content-section {
    padding: 2rem;
  }
  
  .payment-process-content h2 {
    font-size: 28pt;
  }
  
  .banner-watermark {
    padding: 27px 0 0 40px;  /* 原本 40px 0 0 60px * 0.67 */
  }
  
  .banner-watermark h1 {
    font-size: 30pt;  /* 原本 45pt * 0.67 */
  }

  .title {
    font-size: 22pt;
    width: 245px;
    height: 70px;
  }
  
  .content {
    font-size: 17pt;
  }
  
  .step-options p {
    font-size: 17pt;
  }
  
  .payment-method h3, .alternative-methods h3 {
    font-size: 17pt;
  }

}

@media (max-width: 768px) {
  .content-wrapper {
    width: 95vw;
    padding: 0 1rem;
  }
  
  .page-title {
    font-size: 28pt;
  }
  
  .content-section {
    padding: 1.5rem;
  }
  
  .step-item {
    flex-direction: column;
    text-align: center;
    padding: 1.5rem;
  }
  

  
  .payment-process-content h2 {
    font-size: 24pt;
  }
  
  .step-content h3 {
    font-size: 18pt;
  }
  
  .step-content p {
    font-size: 14pt;
    margin-bottom: 6px;
  }

  .step-content p:first-child {
    margin-bottom: 10px;
  }
  
  .banner-watermark {
    padding: 20px 0 0 27px;  /* 原本 30px 0 0 40px * 0.67 */
  }
  
  .banner-watermark h1 {
    font-size: 23pt;  /* 原本 35pt * 0.67 */
  }

  .title {
    font-size: 18pt;
    width: 210px;
    height: 60px;
  }
  
  .content {
    font-size: 14pt;
  }
  
  .step-options {
    margin-left: 45px;
  }
  
  .step-options p {
    font-size: 14pt;
  }
  
  .payment-method h3, .alternative-methods h3 {
    font-size: 14pt;
  }

}

@media (max-width: 480px) {
  .page-title {
    font-size: 24pt;
  }
  
  .content-section {
    padding: 1rem;
  }
  
  .intro-text {
    font-size: 16pt;
  }
  
  .payment-process-content h2 {
    font-size: 20pt;
  }
  

  
  .step-content h3 {
    font-size: 16pt;
  }
  
  .step-content p {
    font-size: 12pt;
    margin-bottom: 5px;
  }

  .step-content p:first-child {
    margin-bottom: 8px;
  }

  .title {
    font-size: 16pt;
    width: 175px;
    height: 50px;
  }
  
  .content {
    font-size: 12pt;
  }
  
  .step-options {
    margin-left: 35px;
  }
  
  .step-options p {
    font-size: 12pt;
  }
  
  .payment-method h3, .alternative-methods h3 {
    font-size: 12pt;
  }

}
</style>

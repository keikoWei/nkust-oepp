<template>
  <div class="refund-page-container">

    <!-- 教育推廣中心導覽欄 -->
    <EecHeader />
    
    <!-- 頂部圖片區域 -->
    <section class="refund-banner">
      <div class="banner-image">
        <img src="/image/members/member_top.jpg" alt="退費規定頂部圖片" class="banner-img">
        <div class="banner-watermark">
          <h1>退費規定</h1>
        </div>
      </div>
    </section>
    

    <div class="content-container">
      <div class="title-container">
        <div class="title">退費規定</div>
      </div>
      
      <div class="content">
        <h3>推廣教育中心 退費規定說明：</h3>
        <p class="note">※委訓計畫之退費規定另依其辦理，其餘之推廣教育班學員完成報名繳費後，因故申請退費，則依下列方式辦理：</p>
        
        <div class="rule-section">
          <p class="rule-title">一、</p>
          <p>學員自報名繳費後至開班上課日前申請退費者，退還已繳學分費或學費之九折。</p>
        </div>
        
        <div class="rule-section">
          <p>自開班上課之日起算未逾全期三分之一申請退費者，退還已繳學分費或學費之五折。</p>
        </div>
        
        <div class="rule-section">
          <p>開班上課時間已逾全期三分之一始申請退費者，不予退還。</p>
        </div>
        
        <div class="rule-section">
          <p class="rule-title">二、</p>
          <p>已繳代辦費應全額退還。但已購置成品者，發給成品。</p>
        </div>
        
        <div class="rule-section">
          <p class="rule-title">三、</p>
          <p>開班單位因故未能開班上課，應全額退還已繳費用。</p>
        </div>

        <div class="special-section">
          <h3>產投業人才投資計畫(委訓計畫) 退費規定</h3>
          <p>學員如已繳費，因個人因素(包含不符補助參訓資格)退訓者，學分班依教育部退費標準規定辦理。非學分班者，於開訓日前退訓者，訓練單位最多得收取核定訓練費用之50%；已開訓但未逾訓練課程總時數三分之一者，訓練單位應退還核定訓練費用50%；於已逾訓練課程總時數三分之一時退訓，不予退費。需匯款退費者，學員應自行負擔匯款手續費用，或於退款金額中扣除。</p>
        </div>
      </div>
    </div>
  </div>

  <!-- Footer -->
  <MainFooterComponent waveColor="#fff" backgroundColor="#e3d9cd" textColor="#534741" />
</template>

<script setup>
import EecHeader from '@/components/EecHeader.vue'
import MainFooterComponent from '@/components/MainFooterComponent.vue'
</script>

<style scoped>
.refund-page-container {
  width: 100%;
  margin: 0;
  padding: 0;
  font-family: "GenYoGothic TW", "源樣夜黑體", "Microsoft JhengHei", sans-serif;
}

/* 頂部圖片區域 */
.refund-banner {
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
.refund-content {
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

.refund-rules-content h2 {
  font-size: 32pt;
  font-weight: bold;
  color: #534741;
  text-align: center;
  margin-bottom: 3rem;
}

.rules-list {
  display: grid;
  gap: 2rem;
  max-width: 900px;
  margin: 0 auto;
}

.rule-item {
  background-color: #f2ede8;
  border-radius: 15px;
  padding: 2rem;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.rule-item:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 25px rgba(83, 71, 65, 0.15);
}

.rule-item.important {
  background-color: #fff3cd;
  border-left: 5px solid #ffc107;
}

.rule-item h3 {
  font-size: 22pt;
  font-weight: bold;
  color: #534741;
  margin-bottom: 1rem;
  border-bottom: 2px solid #e3d9cd;
  padding-bottom: 0.5rem;
}

.rule-details {
  margin-top: 1rem;
}

.rule-details p {
  font-size: 16pt;
  color: #666;
  line-height: 1.8;
  margin: 0.8rem 0;
  padding-left: 1rem;
}

.rule-item.important .rule-details p {
  color: #856404;
  font-weight: 500;
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
  
  .refund-rules-content h2 {
    font-size: 28pt;
  }
  
  .banner-watermark {
    padding: 27px 0 0 40px;  /* 原本 40px 0 0 60px * 0.67 */
  }
  
  .banner-watermark h1 {
    font-size: 30pt;  /* 原本 45pt * 0.67 */
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
  
  .refund-rules-content h2 {
    font-size: 24pt;
  }
  
  .rule-item {
    padding: 1.5rem;
  }
  
  .rule-item h3 {
    font-size: 20pt;
  }
  
  .rule-details p {
    font-size: 14pt;
    padding-left: 0.5rem;
  }
  
  .banner-watermark {
    padding: 20px 0 0 27px;  /* 原本 30px 0 0 40px * 0.67 */
  }
  
  .banner-watermark h1 {
    font-size: 23pt;  /* 原本 35pt * 0.67 */
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
  
  .refund-rules-content h2 {
    font-size: 20pt;
  }
  
  .rule-item {
    padding: 1rem;
  }
  
  .rule-item h3 {
    font-size: 18pt;
  }
  
  .rule-details p {
    font-size: 12pt;
  }
}

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
  font-size: 40pt;
  padding: 10px 40px;
  border: 3px solid #534741;
  border-radius: 15px;
  color: #534741;
  background-color: #e3d9cd;
  width: 240px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.content {
  font-size: 30pt;
  color: #534741;
  line-height: 1.6;
}

h3 {
  font-size: 30pt;
  color: #534741;
  margin-bottom: 20px;
}

.note {
  margin-bottom: 30px;
}

.rule-section {
  margin-bottom: 20px;
  display: flex;
  gap: 10px;
}

.rule-title {
  min-width: 60px;
}

.special-section {
  margin-top: 40px;
  padding-top: 40px;
  border-top: 2px solid #e3d9cd;
}

@media (max-width: 1024px) {
  .title {
    font-size: 35pt;
  }
  
  .content {
    font-size: 25pt;
  }
  
  h3 {
    font-size: 25pt;
  }
}

@media (max-width: 768px) {
  .title {
    font-size: 30pt;
    width: 200px;
    height: 70px;
  }
  
  .content {
    font-size: 20pt;
  }
  
  h3 {
    font-size: 20pt;
  }
}
</style>

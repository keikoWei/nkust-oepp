<template>
  <div class="ppc-activity-page">
    <!-- Header -->
    <PpcHeader />
    
    <!-- 活動內容區域 -->
    <div class="activity-content">
      <div class="content-wrapper">
        <div class="page-header">
          <h1>活動資訊</h1>
        </div>
        
        <div class="activity-section">
          <div class="activity-placeholder">
            <h2>產品推廣中心活動資訊</h2>
            <p>活動內容將在此處顯示...</p>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Footer -->
    <MainFooterComponent waveColor="#fff" backgroundColor="#e3d496" textColor="#534741" />
  </div>
</template>

<script setup>
import PpcHeader from '@/components/PpcHeader.vue'
import MainFooterComponent from '@/components/MainFooterComponent.vue'
</script>

<style scoped>
.ppc-activity-page {
  width: 100%;
  margin: 0;
  padding: 0;
  background-color: #ffffff;
  font-family: "GenYoGothic TW", "源樣黑體月", "Microsoft JhengHei", sans-serif;
}

.activity-content {
  width: 100%;
  min-height: 600px;
  padding: 3rem 0;
  background-color: #ffffff;
}

.content-wrapper {
  width: 70vw;
  max-width: 100%;
  margin: 0 auto;
  padding: 0 2rem;
}

.page-header {
  text-align: center;
  margin-bottom: 3rem;
}

.page-header h1 {
  font-size: 45pt;
  color: #534741;
  margin: 0;
  font-weight: normal;
}

.activity-section {
  background-color: #f9f9f9;
  border-radius: 8px;
  padding: 3rem 2rem;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}

.activity-placeholder {
  text-align: center;
}

.activity-placeholder h2 {
  font-size: 32pt;
  color: #534741;
  margin: 0 0 2rem 0;
  font-weight: normal;
}

.activity-placeholder p {
  font-size: 18pt;
  color: #666;
  margin: 0;
  line-height: 1.6;
}

/* 響應式設計 */
@media (max-width: 768px) {
  .content-wrapper {
    width: 90vw;
    padding: 0 1rem;
  }
  
  .activity-content {
    padding: 2rem 0;
  }
  
  .page-header h1 {
    font-size: 2.5rem;
  }
  
  .activity-placeholder h2 {
    font-size: 1.8rem;
  }
  
  .activity-placeholder p {
    font-size: 1rem;
  }
  
  .activity-section {
    padding: 2rem 1rem;
  }
}
</style>

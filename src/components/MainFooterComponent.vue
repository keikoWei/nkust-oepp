<template>
  <footer class="main-footer">
    <!-- 波浪形頂部裝飾 -->
    <div class="wave-decoration">
      <svg width="100%" height="100" viewBox="0 0 1200 100" preserveAspectRatio="none">
        <path d="M0,40 C90,40 90,80 180,80 C270,80 270,40 360,40 C450,40 450,80 540,80 C630,80 630,40 720,40 C810,40 810,80 900,80 C990,80 990,40 1080,40 C1140,40 1140,80 1200,80 L1200,0 L0,0 Z" 
              :fill="waveColor" 
              stroke="none"/>
      </svg>
    </div>
    
    <!-- 主要內容區域 -->
    <div class="footer-content">
      <div class="container">
        <!-- 標題 -->
        <div class="footer-title">
          <h2>聯絡我們 CONTACT US</h2>
        </div>
        
        <!-- 聯絡資訊網格 -->
        <div class="contact-grid">
          <!-- 第一排 -->
          <div class="contact-row">
            <div class="contact-item">
              <h3>處本部(建工)</h3>
              <p>07-3814526#12861-12862</p>
              <p>ieoffice01@nkust.edu.tw</p>
            </div>
            <div class="contact-item">
              <h3>教育推廣中心(建工)</h3>
              <p>07-3814526#12841-12847</p>
              <p>ifoffice01@nkust.edu.tw</p>
            </div>
            <div class="contact-item">
              <h3>教育推廣中心(楠梓)</h3>
              <p>07-3814526#22867-22868</p>
              <p>ifoffice01@nkust.edu.tw</p>
            </div>
          </div>
          
          <!-- 第二排 -->
          <div class="contact-row">
            <div class="contact-item">
              <h3>教育推廣中心(第一)</h3>
              <p>07-3814526#31462-31463</p>
              <p>ifoffice01@nkust.edu.tw</p>
            </div>
            <div class="contact-item">
              <h3>產品推廣中心(建工)</h3>
              <p>07-3814526#12855-12859</p>
              <p>igoffice01@nkust.edu.tw</p>
            </div>
            <div class="contact-item">
              <h3>會展及出版中心(建工)</h3>
              <p>07-3814526#12850-12854</p>
              <p>ihoffice01@nkust.edu.tw</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
// 定義props，允許自定義波浪顏色、背景色和文字顏色
const props = defineProps({
  waveColor: {
    type: String,
    default: '#fff' // 默認白色，保持首頁原有效果
  },
  backgroundColor: {
    type: String,
    default: '#4d4d4d' // 默認深灰色
  },
  textColor: {
    type: String,
    default: 'white' // 默認白色文字
  }
})
</script>

<style scoped>
.main-footer {
  width: 70vw;
  max-width: 100%;
  margin: 0 auto;
  background-color: v-bind(backgroundColor);
  color: v-bind(textColor);
  margin-top: 0;
  position: relative;
}

.wave-decoration {
  width: 100%;
  height: 67px;
  background: transparent;
  margin-bottom: -3px;
  margin-top: -23px;
}

.footer-content {
  padding: 4rem 0 2.7rem 0;
  background-color: transparent;
  position: relative;
}

.container {
  width: 100%;
  margin: 0 auto;
  padding: 0 0.7rem 0 9.4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}

/* 標題樣式 */
.footer-title {
  text-align: left;
  margin-bottom: 2rem;
  padding-left: 0;
  width: 100%;
}

.footer-title h2 {
  font-size: 19pt;
  font-weight: bold;
  margin: 0;
  letter-spacing: 1.3px;
  color: v-bind(textColor);
  font-family: "GenYoGothic TW", "源樣黑體月", "Microsoft JhengHei", sans-serif;
}

/* 聯絡資訊網格 */
.contact-grid {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 100%;
}

.contact-row {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2.7rem;
  justify-items: flex-start;
}

.contact-item {
  text-align: left;
  padding: 0;
  width: 100%;
  max-width: 268px;
}

.contact-item h3 {
  font-size: 15.5pt;
  font-weight: bold;
  margin: 0 0 0.5rem 0;
  color: v-bind(textColor);
  font-family: "GenYoGothic TW", "源樣黑體月", "Microsoft JhengHei", sans-serif;
}

.contact-item p {
  font-size: 15.5pt;
  margin: 0.2rem 0;
  color: v-bind(textColor);
  line-height: 1.3;
  font-family: "GenYoGothic TW", "源樣黑體月", "Microsoft JhengHei", sans-serif;
}

/* 響應式設計 */
@media (max-width: 1024px) {
  .footer-title h2 {
    font-size: 16pt;
  }
  
  .contact-item h3 {
    font-size: 13.5pt;
  }
  
  .contact-item p {
    font-size: 12pt;
  }
  
  .container {
    padding: 0 0.7rem 0 6rem;
  }
}

@media (max-width: 768px) {
  .contact-row {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
  
  .footer-title h2 {
    font-size: 15pt;
  }
  
  .contact-item h3 {
    font-size: 12pt;
  }
  
  .contact-item p {
    font-size: 11pt;
  }
  
  .footer-content {
    padding: 1.3rem 0 2rem 0;
  }
  
  .contact-grid {
    gap: 1rem;
  }
  
  .wave-decoration {
    height: 40px;
  }
}

@media (max-width: 480px) {
  .footer-title h2 {
    font-size: 13.5pt;
    letter-spacing: 0.7px;
  }
  
  .contact-item h3 {
    font-size: 11pt;
  }
  
  .contact-item p {
    font-size: 9.5pt;
  }
  
  .container {
    padding: 0 0.3rem 0 3rem;
  }
  
  .contact-item {
    padding: 0.3rem;
  }
  
  .wave-decoration {
    height: 27px;
  }
}
</style> 
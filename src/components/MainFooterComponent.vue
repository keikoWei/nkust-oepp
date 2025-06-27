<template>
  <footer class="main-footer">
    <!-- 波浪形頂部裝飾 -->
    <div class="wave-decoration">
      <svg width="100%" height="100" viewBox="0 0 1200 100" preserveAspectRatio="none">
        <path d="M0,35 C90,35 90,85 180,85 C270,85 270,35 360,35 C450,35 450,85 540,85 C630,85 630,35 720,35 C810,35 810,85 900,85 C990,85 990,35 1080,35 C1140,35 1140,85 1200,85 L1200,0 L0,0 Z" 
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
// 定義props，允許自定義波浪顏色
const props = defineProps({
  waveColor: {
    type: String,
    default: '#fff' // 默認白色，保持首頁原有效果
  }
})
</script>

<style scoped>
.main-footer {
  width: 100%;
  background-color: #4d4d4d;
  color: white;
  margin-top: 0;
  position: relative;
}

.wave-decoration {
  width: 100%;
  height: 100px;
  background: transparent;
  margin-bottom: -5px;
  margin-top: -35px;
}

.footer-content {
  padding: 3rem 0 4rem 0;
  background-color: transparent;
  position: relative;
}

.container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}

/* 標題樣式 */
.footer-title {
  text-align: left;
  margin-bottom: 3rem;
  padding-left: 0;
  width: 100%;
  max-width: 70vw;
}

.footer-title h2 {
  font-size: 28pt;
  font-weight: bold;
  margin: 0;
  letter-spacing: 2px;
  font-family: "GenYoGothic TW", "源樣黑體月", "Microsoft JhengHei", sans-serif;
}

/* 聯絡資訊網格 */
.contact-grid {
  display: flex;
  flex-direction: column;
  gap: 3rem;
  width: 100%;
  max-width: 70vw;
}

.contact-row {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 4rem;
  justify-items: flex-start;
}

.contact-item {
  text-align: left;
  padding: 0;
  width: 100%;
  max-width: 400px;
}

.contact-item h3 {
  font-size: 23pt;
  font-weight: bold;
  margin: 0 0 0.8rem 0;
  color: white;
  font-family: "GenYoGothic TW", "源樣黑體月", "Microsoft JhengHei", sans-serif;
}

.contact-item p {
  font-size: 23pt;
  margin: 0.3rem 0;
  color: white;
  line-height: 1.3;
  font-family: "GenYoGothic TW", "源樣黑體月", "Microsoft JhengHei", sans-serif;
}

/* 響應式設計 */
@media (max-width: 1024px) {
  .footer-title h2 {
    font-size: 24pt;
  }
  
  .contact-item h3 {
    font-size: 20pt;
  }
  
  .contact-item p {
    font-size: 18pt;
  }
  
  .container {
    padding: 0 1.5rem;
  }
}

@media (max-width: 768px) {
  .contact-row {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  
  .footer-title h2 {
    font-size: 22pt;
  }
  
  .contact-item h3 {
    font-size: 18pt;
  }
  
  .contact-item p {
    font-size: 16pt;
  }
  
  .footer-content {
    padding: 2rem 0 3rem 0;
  }
  
  .contact-grid {
    gap: 1.5rem;
  }
  
  .wave-decoration {
    height: 60px;
  }
}

@media (max-width: 480px) {
  .footer-title h2 {
    font-size: 20pt;
    letter-spacing: 1px;
  }
  
  .contact-item h3 {
    font-size: 16pt;
  }
  
  .contact-item p {
    font-size: 14pt;
  }
  
  .container {
    padding: 0 1rem;
  }
  
  .contact-item {
    padding: 0.5rem;
  }
  
  .wave-decoration {
    height: 40px;
  }
}
</style> 
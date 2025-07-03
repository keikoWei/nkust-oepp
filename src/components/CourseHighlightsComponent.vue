<template>
  <div class="course-highlights-container">
    <!-- 標題 -->
    <div class="highlights-title">
      <h2>課程花絮</h2>
    </div>
    
    <!-- 九格內容區域 -->
    <div class="highlights-grid">
      <!-- 第一排 -->
      <div class="highlight-card card-1">
        <div class="card-content">
          <div class="card-text">
            <h3>教育推廣中心</h3>
            <p>追蹤粉絲專頁</p>
          </div>
          <div class="card-badge">追蹤</div>
          <div class="card-icons">
            <span class="icon">📊</span>
            <span class="icon">💭</span>
          </div>
        </div>
      </div>
      
      <div class="highlight-card card-2">
        <div class="card-content">
          <div class="card-text">
            <h3>樂齡大學</h3>
            <p class="subtitle">(楠梓校區)</p>
            <p class="main-text">FACEBOOK 粉絲專頁</p>
          </div>
          <div class="card-stars">✨</div>
        </div>
      </div>
      
      <div class="highlight-card card-3">
        <div class="card-content">
          <div class="card-text">
            <p class="year-text">109學年度第二學期期上課花絮</p>
            <h3>樂齡大學(楠梓校區)</h3>
            <p class="date-text">【110學年度預計5.6月招生】</p>
          </div>
        </div>
      </div>
      
      <!-- 第二排 -->
      <div class="highlight-card card-4">
        <div class="card-content">
          <div class="card-text">
            <p class="year-text">108學年度第二學期上課花絮</p>
            <h3>樂齡大學(楠梓校區)</h3>
            <p class="date-text">【109學年度預計5.6月招生】</p>
          </div>
        </div>
      </div>
      
      <div class="highlight-card card-5">
        <div class="card-content">
          <div class="alert-badge">!</div>
          <div class="card-text">
            <h3>109-1 開學典禮</h3>
            <p class="subtitle">樂齡大學 (楠梓校區)</p>
          </div>
          <div class="card-balloons">🎈🎈🎈</div>
        </div>
      </div>
      
      <div class="highlight-card card-6">
        <div class="card-content">
          <div class="alert-badge">!</div>
          <div class="card-text">
            <h3>108-1期末同歡會</h3>
            <p class="subtitle">樂齡大學 (楠梓校區)</p>
          </div>
          <div class="card-balloons">🎈🎈🎈</div>
        </div>
      </div>
      
      <!-- 第三排 -->
      <div class="highlight-card card-7">
        <div class="card-content">
          <div class="card-text">
            <h3>楠梓校區</h3>
            <p class="main-text">市民學苑、非學分班</p>
          </div>
          <div class="card-badge-special">
            <span>歡迎報名</span>
            <span>一同來學習!</span>
          </div>
        </div>
      </div>
      
      <div class="highlight-card card-8">
        <div class="card-content">
          <div class="card-text">
            <h3>樂齡大學</h3>
            <p class="subtitle">(楠梓校區)</p>
            <p class="main-text">FACEBOOK 粉絲專頁</p>
          </div>
          <div class="card-stars">✨</div>
        </div>
      </div>
      
      <div class="highlight-card card-9">
        <div class="card-content">
          <div class="card-text">
            <h3>楠梓校區【課程精選】</h3>
            <div class="course-tags">
              <span class="tag">非學分班</span>
              <span class="tag">市民學苑</span>
              <span class="tag">樂齡大學</span>
            </div>
            <div class="arrow-buttons">
              <span class="arrow">▶</span>
              <span class="course-text">豐富課程任一闖來看名</span>
              <span class="arrow">◀</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <!-- 了解更多按鈕區域 -->
    <div class="more-info-section">
        <div class="button-with-lines">
          <div class="line left-line"></div>
          <q-btn 
            rounded 
            class="more-btn"
            label="了解更多" 
            no-caps 
            @click="handleMoreInfo"
          />
          <div class="line right-line"></div>
        </div>
      </div>
  </div>
</template>

<script setup>
const handleMoreInfo = () => {
  // 導向課程列表或相關頁面
  window.open('https://cec.nkust.edu.tw/CurriculumList.aspx', '_blank')
}
</script>

<style scoped>
.course-highlights-container {
  width: 100%;
  margin: 3rem 0;
  padding: 2rem 0;
  font-family: "GenYoGothic TW", "源樣夜黑體", "Microsoft JhengHei", sans-serif;
  background-color: #ffffff;
}

/* 標題樣式 */
.highlights-title {
  text-align: center;
  margin-bottom: 3rem;
}

.highlights-title h2 {
  font-size: 45pt;
  font-weight: bold;
  color: #534741;
  margin: 0;
  letter-spacing: 2px;
}

/* 九格佈局 */
.highlights-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.highlight-card {
  height: 200px;
  border-radius: 20px;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
}

.highlight-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 25px rgba(0,0,0,0.15);
}

.card-content {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  position: relative;
}

/* 各卡片的顏色配置 */
.card-1 {
  background: linear-gradient(135deg, #4ECDC4, #44A08D);
}

.card-2 {
  background: linear-gradient(135deg, #FFB74D, #FF9800);
}

.card-3 {
  background: linear-gradient(135deg, #64B5F6, #2196F3);
}

.card-4 {
  background: linear-gradient(135deg, #81C784, #4CAF50);
}

.card-5 {
  background: linear-gradient(135deg, #FFD54F, #FFC107);
}

.card-6 {
  background: linear-gradient(135deg, #FF8A65, #FF5722);
}

.card-7 {
  background: linear-gradient(135deg, #F48FB1, #E91E63);
}

.card-8 {
  background: linear-gradient(135deg, #A5D6A7, #66BB6A);
}

.card-9 {
  background: linear-gradient(135deg, #BCAAA4, #8D6E63);
}

/* 卡片文字樣式 */
.card-text h3 {
  font-size: 18pt;
  font-weight: bold;
  color: white;
  margin: 0 0 8px 0;
  text-shadow: 1px 1px 2px rgba(0,0,0,0.3);
}

.card-text p {
  font-size: 14pt;
  color: white;
  margin: 4px 0;
  text-shadow: 1px 1px 2px rgba(0,0,0,0.3);
}

.year-text {
  font-size: 12pt !important;
  opacity: 0.9;
}

.date-text {
  font-size: 11pt !important;
  opacity: 0.8;
}

.subtitle {
  font-size: 12pt !important;
  opacity: 0.9;
}

.main-text {
  font-size: 16pt !important;
  font-weight: bold;
}

/* 特殊元素樣式 */
.card-badge {
  position: absolute;
  top: 15px;
  right: 15px;
  background: rgba(255,255,255,0.9);
  color: #333;
  padding: 4px 12px;
  border-radius: 15px;
  font-size: 12pt;
  font-weight: bold;
}

.card-icons {
  position: absolute;
  bottom: 15px;
  left: 15px;
}

.icon {
  font-size: 20pt;
  margin-right: 8px;
}

.card-stars {
  position: absolute;
  top: 15px;
  right: 15px;
  font-size: 18pt;
}

.alert-badge {
  position: absolute;
  top: 15px;
  left: 15px;
  background: rgba(255,255,255,0.9);
  color: #FF5722;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16pt;
  font-weight: bold;
}

.card-balloons {
  position: absolute;
  bottom: 15px;
  right: 15px;
  font-size: 16pt;
}

.card-badge-special {
  position: absolute;
  top: 15px;
  right: 15px;
  background: rgba(255,255,255,0.9);
  color: #E91E63;
  padding: 6px 10px;
  border-radius: 15px;
  font-size: 10pt;
  font-weight: bold;
  text-align: center;
}

.card-badge-special span {
  display: block;
  line-height: 1.2;
}

.course-tags {
  margin: 10px 0;
}

.tag {
  background: rgba(255,255,255,0.2);
  padding: 3px 8px;
  border-radius: 10px;
  font-size: 10pt;
  margin: 0 2px;
  display: inline-block;
}

.arrow-buttons {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin-top: 10px;
}

.arrow {
  font-size: 12pt;
  color: white;
}

.course-text {
  font-size: 10pt;
  color: white;
}

/* 了解更多按鈕區域 */
.more-info-section {
  text-align: center;
  margin: 30px 0;
}

.button-with-lines {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  max-width: 800px;
  margin: 0 auto;
}

.line {
  flex: 1;
  height: 3px;
  background-color: #e3d9cd;
}

.left-line,
.right-line {
  min-width: 100px;
}

.more-btn {
  background-color: #e3d9cd !important;
  color: #534741 !important;
  padding: 8px 30px;
  font-size: 16pt;
  font-weight: bold;
  min-width: 120px;
  border: none;
  flex-shrink: 0;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.more-btn:hover {
  background-color: #d4c7bb !important;
}

/* 響應式設計 */
@media (max-width: 1024px) {
  .highlights-grid {
    max-width: 800px;
    gap: 15px;
  }
  
  .highlights-title h2 {
    font-size: 36pt;
  }
  
  .card-text h3 {
    font-size: 16pt;
  }
  
  .card-text p {
    font-size: 12pt;
  }
}

@media (max-width: 768px) {
  .highlights-grid {
    grid-template-columns: repeat(2, 1fr);
    max-width: 600px;
    gap: 12px;
    padding: 0 1rem;
  }
  
  .highlights-title h2 {
    font-size: 28pt;
  }
  
  .highlight-card {
    padding: 15px;
    height: 180px;
  }
  
  .card-text h3 {
    font-size: 14pt;
  }
  
  .card-text p {
    font-size: 11pt;
  }
  
  .more-btn {
    font-size: 16pt;
    padding: 10px 30px;
  }
  
  .button-with-lines {
    gap: 15px;
    max-width: 400px;
  }
  
  .line {
    min-width: 50px;
    height: 2px;
  }
}

@media (max-width: 480px) {
  .highlights-grid {
    grid-template-columns: 1fr;
    max-width: 400px;
    gap: 10px;
  }
  
  .highlights-title h2 {
    font-size: 24pt;
  }
  
  .highlight-card {
    padding: 12px;
    height: 160px;
  }
  
  .card-text h3 {
    font-size: 12pt;
  }
  
  .card-text p {
    font-size: 10pt;
  }
  
  .more-btn {
    font-size: 14pt;
    padding: 8px 25px;
    min-width: 100px;
  }
  
  .button-with-lines {
    gap: 10px;
    max-width: 300px;
  }
  
  .line {
    min-width: 30px;
    height: 2px;
  }
}
</style> 
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
  margin: 2rem 0;
  padding: 1.3rem 0;
  font-family: "GenYoGothic TW", "源樣夜黑體", "Microsoft JhengHei", sans-serif;
  background-color: #ffffff;
}

/* 標題樣式 */
.highlights-title {
  text-align: center;
  margin-bottom: 2rem;
}

.highlights-title h2 {
  font-size: 30pt;
  font-weight: bold;
  color: #534741;
  margin: 0;
  letter-spacing: 1.3px;
}

/* 九格佈局 */
.highlights-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 13px;
  max-width: 804px;
  margin: 0 auto;
  padding: 0 1.3rem;
}

.highlight-card {
  height: 134px;
  border-radius: 13px;
  padding: 13px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
}

.highlight-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 5px 17px rgba(0,0,0,0.15);
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
  font-size: 12pt;
  font-weight: bold;
  color: white;
  margin: 0 0 5px 0;
  text-shadow: 0.7px 0.7px 1.3px rgba(0,0,0,0.3);
}

.card-text p {
  font-size: 9.5pt;
  color: white;
  margin: 3px 0;
  text-shadow: 0.7px 0.7px 1.3px rgba(0,0,0,0.3);
}

.year-text {
  font-size: 8pt !important;
  opacity: 0.9;
}

.date-text {
  font-size: 7.5pt !important;
  opacity: 0.8;
}

.subtitle {
  font-size: 8pt !important;
  opacity: 0.9;
}

.main-text {
  font-size: 11pt !important;
  font-weight: bold;
}

/* 特殊元素樣式 */
.card-badge {
  position: absolute;
  top: 10px;
  right: 10px;
  background: rgba(255,255,255,0.9);
  color: #333;
  padding: 3px 8px;
  border-radius: 10px;
  font-size: 8pt;
  font-weight: bold;
}

.card-icons {
  position: absolute;
  bottom: 10px;
  left: 10px;
}

.icon {
  font-size: 13.5pt;
  margin-right: 5px;
}

.card-stars {
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 12pt;
}

.alert-badge {
  position: absolute;
  top: 10px;
  left: 10px;
  background: rgba(255,255,255,0.9);
  color: #FF5722;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 11pt;
  font-weight: bold;
}

.card-balloons {
  position: absolute;
  bottom: 10px;
  right: 10px;
  font-size: 11pt;
}

.card-badge-special {
  position: absolute;
  top: 10px;
  right: 10px;
  background: rgba(255,255,255,0.9);
  color: #E91E63;
  padding: 4px 7px;
  border-radius: 10px;
  font-size: 7pt;
  font-weight: bold;
  text-align: center;
}

.card-badge-special span {
  display: block;
  line-height: 1.2;
}

.course-tags {
  margin: 7px 0;
}

.tag {
  background: rgba(255,255,255,0.2);
  padding: 2px 5px;
  border-radius: 7px;
  font-size: 7pt;
  margin: 0 1px;
  display: inline-block;
}

.arrow-buttons {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  margin-top: 7px;
}

.arrow {
  font-size: 8pt;
  color: white;
}

.course-text {
  font-size: 7pt;
  color: white;
}

/* 了解更多按鈕區域 */
.more-info-section {
  text-align: center;
  margin: 20px 0;
}

.button-with-lines {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 13px;
  max-width: 536px;
  margin: 0 auto;
}

.line {
  flex: 1;
  height: 2px;
  background-color: #e3d9cd;
}

.left-line,
.right-line {
  min-width: 67px;
}

.more-btn {
  background-color: #e3d9cd !important;
  color: #534741 !important;
  padding: 5px 20px;
  font-size: 11pt;
  font-weight: bold;
  min-width: 80px;
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
    max-width: 536px;
    gap: 10px;
  }
  
  .highlights-title h2 {
    font-size: 24pt;
  }
  
  .card-text h3 {
    font-size: 11pt;
  }
  
  .card-text p {
    font-size: 8pt;
  }
}

@media (max-width: 768px) {
  .highlights-grid {
    grid-template-columns: repeat(2, 1fr);
    max-width: 402px;
    gap: 8px;
    padding: 0 0.7rem;
  }
  
  .highlights-title h2 {
    font-size: 19pt;
  }
  
  .highlight-card {
    padding: 10px;
    height: 121px;
  }
  
  .card-text h3 {
    font-size: 9.5pt;
  }
  
  .card-text p {
    font-size: 7.5pt;
  }
  
  .more-btn {
    font-size: 11pt;
    padding: 7px 20px;
  }
  
  .button-with-lines {
    gap: 10px;
    max-width: 268px;
  }
  
  .line {
    min-width: 34px;
    height: 1.3px;
  }
}

@media (max-width: 480px) {
  .highlights-grid {
    grid-template-columns: 1fr;
    max-width: 268px;
    gap: 7px;
  }
  
  .highlights-title h2 {
    font-size: 16pt;
  }
  
  .highlight-card {
    padding: 8px;
  }
}
</style> 
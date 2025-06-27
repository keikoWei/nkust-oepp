<template>
  <div class="oepp-events-container">
    <!-- 主要容器 -->
    <div class="events-wrapper">
      <!-- 標題區域 -->
      <div class="title-section">
        <h2 class="title-text">教推處活動消息</h2>
      </div>
      
      <!-- 4格圖片區域 -->
      <div class="events-grid">
        <!-- 左上：中華花藝 -->
        <div class="event-card">
          <div class="image-container">
            <img src="/image/example.png" alt="中華花藝" class="event-image" />
          </div>
        </div>
        
        <!-- 右上：PMP實務班 -->
        <div class="event-card">
          <div class="image-container">
            <img src="/image/example.png" alt="專案經理PMP實務班" class="event-image" />
          </div>
        </div>
        
        <!-- 左下：水域技能培訓班 -->
        <div class="event-card">
          <div class="image-container">
            <img src="/image/example.png" alt="水肺潛水暖水域技能培訓班" class="event-image" />
          </div>
        </div>
        
        <!-- 右下：手作時光 -->
        <div class="event-card">
          <div class="image-container">
            <img src="/image/example.png" alt="手作時光" class="event-image" />
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
  </div>
</template>

<script setup>
const handleMoreInfo = () => {
  // 處理了解更多的邏輯
  console.log('了解更多被點擊')
}
</script>

<style scoped>
.oepp-events-container {
  width: 100%;
  margin: 2rem 0;
  font-family: "GenYoGothic TW", "源樣黑體月", "Microsoft JhengHei", sans-serif;
}

.events-wrapper {
  position: relative;
  background: #fff;
  padding: 0 20px 30px 20px;
}

/* 標題區域 */
.title-section {
  text-align: center;
  margin-bottom: 30px;
  position: relative;
}

.title-text {
  color: #333;
  font-size: 45pt;
  font-weight: bold;
  margin: 20px 0;
  letter-spacing: 1px;
}

/* 4格圖片佈局 */
.events-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px;
  margin-bottom: 40px;
  max-width: 1575px;
  margin-left: auto;
  margin-right: auto;
  justify-items: center;
  padding: 20px 0;
}

.event-card {
  background: #f5f5f5;
  border-radius: 25px;
  padding: 18px;
  transition: transform 0.3s ease;
  width: 765px;
  height: 502px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.event-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
}

.image-container {
  width: 100%;
  height: 85%;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}

.event-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
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
  background-color: #86a8ab;
}

.left-line,
.right-line {
  min-width: 100px;
}

.more-btn {
  background-color: #3f5963 !important;
  color: white !important;
  padding: 8px 30px;
  font-size: 16pt;
  font-weight: bold;
  min-width: 120px;
  border: none;
  flex-shrink: 0;
}

.more-btn:hover {
  background-color: #2d404a !important;
}

/* 響應式設計 */
@media (max-width: 1100px) {
  .events-grid {
    max-width: 900px;
    gap: 40px;
    padding: 15px 0;
  }
  
  .event-card {
    width: 600px;
    height: 390px;
    padding: 15px;
    border-radius: 20px;
  }
}

@media (max-width: 768px) {
  .events-grid {
    grid-template-columns: 1fr;
    gap: 35px;
    max-width: 600px;
    padding: 15px 0;
  }
  
  .event-card {
    width: 600px;
    height: 390px;
    padding: 15px;
    border-radius: 18px;
  }
  
  .image-container {
    width: 100%;
    height: 80%;
  }
  
  .title-text {
    font-size: 16pt;
  }
  
  .events-wrapper {
    padding: 0 15px 25px 15px;
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
  .events-grid {
    max-width: 480px;
    gap: 30px;
    padding: 10px 0;
  }
  
  .event-card {
    width: 450px;
    height: 300px;
    padding: 12px;
    border-radius: 15px;
  }
  
  .image-container {
    width: 100%;
    height: 75%;
  }
  
  .more-btn {
    padding: 6px 25px;
    font-size: 14pt;
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
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
  margin: 1.3rem 0;
  font-family: "GenYoGothic TW", "源樣黑體月", "Microsoft JhengHei", sans-serif;
}

.events-wrapper {
  position: relative;
  background: #fff;
  padding: 0 13px 20px 13px;
}

/* 標題區域 */
.title-section {
  text-align: center;
  margin-bottom: 20px;
  position: relative;
}

.title-text {
  color: #333;
  font-size: 30pt;
  font-weight: bold;
  margin: 13px 0;
  letter-spacing: 0.7px;
}

/* 4格圖片佈局 */
.events-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 34px;
  margin-bottom: 27px;
  max-width: 1055px;
  margin-left: auto;
  margin-right: auto;
  justify-items: center;
  padding: 13px 0;
}

.event-card {
  background: #f5f5f5;
  border-radius: 17px;
  padding: 12px;
  transition: transform 0.3s ease;
  width: 512px;
  height: 336px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.event-card:hover {
  transform: translateY(-1.5px);
  box-shadow: 0 2.5px 8px rgba(0,0,0,0.15);
}

.image-container {
  width: 100%;
  height: 85%;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 1.5px 5.5px rgba(0,0,0,0.1);
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
  background-color: #86a8ab;
}

.left-line,
.right-line {
  min-width: 67px;
}

.more-btn {
  background-color: #3f5963 !important;
  color: white !important;
  padding: 5px 20px;
  font-size: 11pt;
  font-weight: bold;
  min-width: 80px;
  border: none;
  flex-shrink: 0;
}

.more-btn:hover {
  background-color: #2d404a !important;
}

/* 響應式設計 */
@media (max-width: 1100px) {
  .events-grid {
    max-width: 603px;
    gap: 27px;
    padding: 10px 0;
  }
  
  .event-card {
    width: 402px;
    height: 261px;
    padding: 10px;
    border-radius: 13px;
  }
}

@media (max-width: 768px) {
  .events-grid {
    grid-template-columns: 1fr;
    gap: 23px;
    max-width: 402px;
    padding: 10px 0;
  }
  
  .event-card {
    width: 402px;
    height: 261px;
    padding: 10px;
    border-radius: 12px;
  }
  
  .image-container {
    width: 100%;
    height: 80%;
  }
  
  .title-text {
    font-size: 11pt;
  }
  
  .events-wrapper {
    padding: 0 10px 17px 10px;
  }
  
  .button-with-lines {
    gap: 10px;
    max-width: 268px;
  }
  
  .line {
    min-width: 34px;
    height: 1.5px;
  }
}

@media (max-width: 480px) {
  .oepp-events-container {
    margin: 0;
    padding: 0;
  }

  .events-wrapper {
    padding: 0 1rem 20px 1rem;
  }

  .events-grid {
    max-width: 100%;
    gap: 15px;
    padding: 7px 0;
  }
  
  .event-card {
    width: 100%;
    max-width: 350px;
    height: 201px;
    padding: 8px;
    border-radius: 10px;
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
    max-width: 100%;
  }
  
  .line {
    min-width: 30px;
    height: 2px;
  }
}
</style> 
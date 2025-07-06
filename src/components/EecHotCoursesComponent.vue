<template>
  <div class="eec-courses-container">
    <!-- 主要容器 -->
    <div class="courses-wrapper">
      <!-- 標題區域 -->
      <div class="title-section">
        <h2 class="title-text">教育推廣中心 - 熱門課程</h2>
      </div>
      
      <!-- 4格圖片區域 -->
      <div class="courses-grid">
        <!-- 左上：中華花藝 -->
        <div class="course-card">
          <div class="image-container">
            <img src="/image/example.png" alt="中華花藝" class="course-image" />
          </div>
        </div>
        
        <!-- 右上：PMP實務班 -->
        <div class="course-card">
          <div class="image-container">
            <img src="/image/example.png" alt="專案經理PMP實務班" class="course-image" />
          </div>
        </div>
        
        <!-- 左下：水域技能培訓班 -->
        <div class="course-card">
          <div class="image-container">
            <img src="/image/example.png" alt="水肺潛水暖水域技能培訓班" class="course-image" />
          </div>
        </div>
        
        <!-- 右下：手作時光 -->
        <div class="course-card">
          <div class="image-container">
            <img src="/image/example.png" alt="手作時光" class="course-image" />
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
  // 導向課程列表頁面
  window.open('https://cec.nkust.edu.tw/CurriculumList.aspx', '_blank')
}
</script>

<style scoped>
.eec-courses-container {
  width: 100%;
  margin: 1.3rem 0;
  font-family: "GenYoGothic TW", "源樣黑體月", "Microsoft JhengHei", sans-serif;
}

.courses-wrapper {
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
  color: #534741;
  font-size: 30pt;
  font-weight: bold;
  margin: 13px 0;
  letter-spacing: 0.7px;
}

/* 4格圖片佈局 */
.courses-grid {
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

.course-card {
  background: #f2ede8;
  border-radius: 17px;
  padding: 12px;
  transition: transform 0.3s ease;
  width: 512px;
  height: 336px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.course-card:hover {
  transform: translateY(-1.3px);
  box-shadow: 0 3px 8px rgba(83, 71, 65, 0.15);
}

.image-container {
  width: 100%;
  height: 85%;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 1.3px 5px rgba(0,0,0,0.1);
}

.course-image {
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
}

.more-btn:hover {
  background-color: #d4c7bb !important;
}

/* 響應式設計 */
@media (max-width: 1100px) {
  .courses-grid {
    max-width: 603px;
    gap: 27px;
    padding: 10px 0;
  }
  
  .course-card {
    width: 402px;
    height: 261px;
    padding: 10px;
    border-radius: 13px;
  }
}

@media (max-width: 768px) {
  .courses-grid {
    grid-template-columns: 1fr;
    gap: 23px;
    max-width: 402px;
    padding: 10px 0;
  }
  
  .course-card {
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
    font-size: 21.5pt;
  }
  
  .courses-wrapper {
    padding: 0 10px 17px 10px;
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
  .courses-grid {
    max-width: 322px;
    gap: 20px;
    padding: 7px 0;
  }
  
  .course-card {
    width: 302px;
    height: 201px;
    padding: 8px;
    border-radius: 10px;
  }
  
  .image-container {
    width: 100%;
    height: 75%;
  }
  
  .title-text {
    font-size: 16pt;
  }
  
  .more-btn {
    padding: 4px 17px;
    font-size: 9.5pt;
    min-width: 67px;
  }
  
  .button-with-lines {
    gap: 7px;
    max-width: 201px;
  }
  
  .line {
    min-width: 20px;
    height: 1.3px;
  }
}
</style> 
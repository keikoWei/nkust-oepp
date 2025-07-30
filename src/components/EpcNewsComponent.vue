<template>
  <div class="news-container">
    <!-- 標題 -->
    <div class="news-title">
      <h2>最新消息/訊息公告</h2>
    </div>
    
    <!-- 新聞內容區域 -->
    <div class="news-content">
      <!-- 新聞項目 -->
      <div class="news-item" v-for="(news, index) in newsList" :key="index">
        <div class="news-date">{{ news.date }}</div>
        <div class="news-text" :class="{ 'two-line': news.title.length > 35 }">{{ news.title }}</div>
      </div>
      
      <!-- 展開更多按鈕 -->
      <div class="expand-more">
        <button class="expand-btn" @click="toggleExpand">
          <svg width="40" height="25" viewBox="0 0 40 25" fill="none">
            <path d="M2 2L20 20L38 2" stroke="#839e8d" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const expanded = ref(false)

const newsList = ref([
  {
    date: '2025.02.27',
    title: '會展中心【2025年春季會展活動】招展開始，歡迎各界踴躍參與'
  },
  {
    date: '2025.02.15',
    title: '【出版服務】學術期刊與專業書籍出版申請開放中'
  },
  {
    date: '2025.02.10',
    title: '【研討會協助】協助辦理學術研討會暨國際交流活動'
  },
  {
    date: '2025.01.28',
    title: '【委辦活動】企業研習活動場地租借優惠方案實施中'
  },
  {
    date: '2025.01.20',
    title: '【成果發表】2024年度會展中心活動成果報告書發布'
  },
  {
    date: '2025.01.15',
    title: '【法規更新】會展及出版中心業務相關法規修正公告'
  }
])

const toggleExpand = () => {
  expanded.value = !expanded.value
}
</script>

<style scoped>
.news-container {
  width: 100%;
  margin: 2rem 0;
  font-family: "GenYoGothic TW", "源樣黑體月", "Microsoft JhengHei", sans-serif;
}

/* 標題樣式 */
.news-title {
  text-align: center;
  margin-bottom: 1.7rem;
}

.news-title h2 {
  font-size: 30pt;
  font-weight: bold;
  color: #3e3b3a;
  margin: 0;
  letter-spacing: 1px;
}

/* 新聞內容區域 - 整體大框 */
.news-content {
  width: 910px;
  height: 808px;
  max-width: 100%;
  margin: 0 auto;
  background: #839e8d;
  border-radius: 26px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 30px;
  box-sizing: border-box;
}

/* 內框 */
.news-content::before {
  content: '';
  position: absolute;
  top: 30px;
  left: 30px;
  right: 30px;
  bottom: 30px;
  width: 850px;
  height: 763px;
  background: #fff;
  border-radius: 17px;
  z-index: 1;
}

/* 確保內容在內框之上 */
.news-item,
.expand-more {
  position: relative;
  z-index: 2;
}

.news-content > * {
  position: relative;
  z-index: 2;
}

/* 新聞項目樣式 */
.news-item {
  display: flex;
  align-items: center;
  gap: 0px;
  width: 100%;
  max-width: 765px;
  padding: 13px 43px 21px 43px;
  min-height: 68px;
  margin-bottom: 13px;
  position: relative;
}

/* 底線貼合標籤底部 */
.news-item::after {
  content: '';
  position: absolute;
  bottom: 21px;
  left: 43px;
  right: 43px;
  height: 1px;
  background-color: #839e8d;
}

.news-item:first-child {
  margin-top: 77px;
}

.news-item:last-child {
  margin-bottom: 0;
  min-height: 85px;
}

.news-item:last-child::after {
  display: none;
}

.news-date {
  background-color: #839e8d;
  color: white;
  padding: 9px 10px;
  font-size: 12pt;
  font-weight: bold;
  min-width: 77px;
  text-align: center;
  flex-shrink: 0;
  position: relative;
  margin-right: 17px;
  height: 34px;
  display: flex;
  align-items: center;
  justify-content: center;
  clip-path: polygon(0 0, calc(100% - 9px) 0, 100% 100%, 0 100%);
}

.news-text {
  font-size: 14pt;
  color: #3e3b3a;
  line-height: 1.2;
  flex: 1;
}

/* 字數超過35時的兩行文字樣式 */
.news-text.two-line {
  transform: translateY(-5pt);
}

/* 超過兩行時的底線樣式 */
.news-item:has(.news-text.two-line)::after {
  transform: translateY(-3pt);
}

/* 展開更多按鈕 */
.expand-more {
  display: flex;
  justify-content: center;
  margin-top: auto;
  padding-bottom: 34px;
}

.expand-btn {
  width: 82px;
  height: 82px;
  border: 2px solid #839e8d;
  border-radius: 50%;
  background: #fff;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
}

.expand-btn:hover {
  background: #f0f8f5;
  transform: translateY(-2px);
}

/* 響應式設計 */
@media (max-width: 1200px) {
  .news-content {
    width: 90%;
    padding: 51px 34px;
  }
  
  .news-title h2 {
    font-size: 31pt;
  }
}

@media (max-width: 768px) {
  .news-content {
    width: 95%;
    padding: 34px 17px;
    border-radius: 17px;
  }
  
  .news-title h2 {
    font-size: 24pt;
  }
  
  .news-item {
    flex-direction: column;
    gap: 7px;
  }
  
  .news-date {
    align-self: flex-start;
    min-width: auto;
  }
  
  .news-text {
    font-size: 12pt;
  }
  
  .expand-btn {
    width: 60px;
    height: 60px;
  }
  
  .expand-btn svg {
    width: 26px;
    height: 15px;
  }
}

@media (max-width: 480px) {
  .news-title h2 {
    font-size: 20pt;
  }
  
  .news-content {
    padding: 26px 13px;
  }
  
  .news-text {
    font-size: 10pt;
  }
}
</style> 
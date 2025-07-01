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
        <div class="news-text">{{ news.title }}</div>
      </div>
      
      <!-- 展開更多按鈕 -->
      <div class="expand-more">
        <button class="expand-btn" @click="toggleExpand">
          <svg width="40" height="25" viewBox="0 0 40 25" fill="none">
            <path d="M2 2L20 20L38 2" stroke="#86a8ab" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
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
    title: '114年上半年度【高科大×產業新生代】15-20歲的你，免費學習！+8000元獎學金'
  },
  {
    date: '2025.02.03',
    title: '【114上半年 產證課程】專案經理PMP實務班第01期'
  },
  {
    date: '2025.01.29',
    title: '【113-2】全工手作精緻園藝 & 打包溫暖精神的體驗，轉念便成!'
  },
  {
    date: '2025.01.24',
    title: '【公告】113-2 臺數大學徵時代工程/環保衛浴業 及 正能量運動課程'
  },
  {
    date: '2025.01.16',
    title: '【114上半年 產證課程】水師法水研究技師證培訓課程'
  },
  {
    date: '2025.01.14',
    title: '【緊急通知】臺數大學學第01月14日15歲班服務，因應疫情暫時調整至16歲01分並請配發票務'
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
  margin-bottom: 2rem;
}

.news-title h2 {
  font-size: 45pt;
  font-weight: normal;
  color: #333;
  margin: 0;
  letter-spacing: 1px;
}

/* 新聞內容區域 - 整體大框 */
.news-content {
  width: 1070px;
  height: 950px;
  max-width: 100%;
  margin: 0 auto;
  background: #3f5963;
  border-radius: 30px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 35px;
  box-sizing: border-box;
}

/* 內框 */
.news-content::before {
  content: '';
  position: absolute;
  top: 35px;
  left: 35px;
  right: 35px;
  bottom: 35px;
  width: 1000px;
  height: 898px;
  background: #fff;
  border-radius: 20px;
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
  max-width: 900px;
  padding: 15px 50px 25px 50px;
  min-height: 80px;
  margin-bottom: 15px;
  position: relative;
}

/* 底線貼合標籤底部 */
.news-item::after {
  content: '';
  position: absolute;
  bottom: 25px;
  left: 50px;
  right: 50px;
  height: 1px;
  background-color: #86a8ab;
}

.news-item:first-child {
  margin-top: 90px;
}

.news-item:last-child {
  margin-bottom: 0;
  min-height: 100px;
}

.news-item:last-child::after {
  display: none;
}

.news-date {
  background-color: #3f5963;
  color: white;
  padding: 10px 12px;
  font-size: 14pt;
  font-weight: bold;
  min-width: 90px;
  text-align: center;
  flex-shrink: 0;
  position: relative;
  margin-right: 20px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  clip-path: polygon(0 0, calc(100% - 10px) 0, 100% 100%, 0 100%);
}

.news-text {
  font-size: 16pt;
  color: #333;
  line-height: 1.5;
  flex: 1;
}

/* 展開更多按鈕 */
.expand-more {
  display: flex;
  justify-content: center;
  margin-top: auto;
  padding-bottom: 40px;
}

.expand-btn {
  width: 96px;
  height: 96px;
  border: 2px solid #86a8ab;
  border-radius: 50%;
  background: #fff;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
}

.expand-btn:hover {
  background: #f0f5f5;
  transform: translateY(-2px);
}

/* 響應式設計 */
@media (max-width: 1200px) {
  .news-content {
    width: 90%;
    padding: 60px 40px;
  }
  
  .news-title h2 {
    font-size: 36pt;
  }
}

@media (max-width: 768px) {
  .news-content {
    width: 95%;
    padding: 40px 20px;
    border-radius: 20px;
  }
  
  .news-title h2 {
    font-size: 28pt;
  }
  
  .news-item {
    flex-direction: column;
    gap: 8px;
  }
  
  .news-date {
    align-self: flex-start;
    min-width: auto;
  }
  
  .news-text {
    font-size: 14pt;
  }
  
  .expand-btn {
    width: 70px;
    height: 70px;
  }
  
  .expand-btn svg {
    width: 30px;
    height: 18px;
  }
}

@media (max-width: 480px) {
  .news-title h2 {
    font-size: 24pt;
  }
  
  .news-content {
    padding: 30px 15px;
  }
  
  .news-text {
    font-size: 12pt;
  }
}
</style> 
<template>
  <div class="news-container">
    <!-- 標題 -->
    <div class="news-title">
      <h2>最新消息</h2>
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
            <path d="M2 2L20 20L38 2" stroke="#f2eacc" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
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
    date: '2025.02.24',
    title: '有關114年上半年本校招募條擬或校園紀念品製作廠或銷售申請等於114年3月1日(六)至3月31日(一)止，敬邀師生踴躍參與！'
  },
  {
    date: '2024.12.05',
    title: '🍰🍰 2024 DK SHOP 週年慶🍰🍰多項產品優惠等等您來選購😍'
  },
  {
    date: '2024.09.16',
    title: '💰💰中秋佳節活動期間08/28~10/11 ✨✨常溫「實主」消費滿5000贈茶好韋旅行袋🍰🍰生鮮「實主」消費滿5000贈保冰袋之品'
  },
  {
    date: '2024.07.01',
    title: '113年度學生創意及行銷提案發話競賽之獲獎通知'
  },
  {
    date: '2024.04.12',
    title: 'DK SHOP 4月 檜櫻預告 歡慶母親節💐💐💐💐'
  },
  {
    date: '2024.04.12',
    title: '🍰想要去順優咱咱啥 但想不到什麼好優購👌'
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
  color: #534741;
  margin: 0;
  letter-spacing: 1px;
}

/* 新聞內容區域 - 整體大框 */
.news-content {
  width: 910px;
  height: 808px;
  max-width: 100%;
  margin: 0 auto;
  background: #e3d496;
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
  background-color: #f2eacc;
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
  background-color: #e3d496;
  color: #534741;
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
  color: #534741;
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
  border: 2px solid #f2eacc;
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
  .news-container {
    width: 100%;
    margin: 0;
    padding: 0 1rem;
  }

  .news-title h2 {
    font-size: 12pt; /* 30pt * 0.4 = 12pt */
    margin-bottom: 0.8rem;
  }
  
  .news-content {
    width: 100%;
    height: auto;
    min-height: 323px; /* 808px * 0.4 = 323px */
    padding: 12px; /* 30px * 0.4 = 12px */
    border-radius: 10.4px; /* 26px * 0.4 = 10.4px */
  }

  .news-content::before {
    top: 12px; /* 30px * 0.4 = 12px */
    left: 12px; /* 30px * 0.4 = 12px */
    right: 12px; /* 30px * 0.4 = 12px */
    bottom: 12px; /* 30px * 0.4 = 12px */
    width: calc(100% - 24px); /* 850px proportional */
    height: calc(100% - 24px); /* 763px proportional */
    border-radius: 6.8px; /* 17px * 0.4 = 6.8px */
  }

  .news-item {
    padding: 5.2px 17.2px 8.4px 17.2px; /* 13px 43px 21px 43px * 0.4 */
    min-height: 27.2px; /* 68px * 0.4 = 27.2px */
    margin-bottom: 5.2px; /* 13px * 0.4 = 5.2px */
    max-width: 306px; /* 765px * 0.4 = 306px */
  }

  .news-item::after {
    bottom: 8.4px; /* 21px * 0.4 = 8.4px */
    left: 17.2px; /* 43px * 0.4 = 17.2px */
    right: 17.2px; /* 43px * 0.4 = 17.2px */
    height: 0.4px; /* 1px * 0.4 = 0.4px */
  }

  .news-item:first-child {
    margin-top: 30.8px; /* 77px * 0.4 = 30.8px */
  }

  .news-item:last-child {
    min-height: 34px; /* 85px * 0.4 = 34px */
  }

  .news-date {
    padding: 3.6px 4px; /* 9px 10px * 0.4 */
    font-size: 8pt; /* 調整為可讀大小 */
    min-width: 30.8px; /* 77px * 0.4 = 30.8px */
    height: 13.6px; /* 34px * 0.4 = 13.6px */
    margin-right: 6.8px; /* 17px * 0.4 = 6.8px */
  }
  
  .news-text {
    font-size: 9pt; /* 調整為可讀大小 */
    line-height: 1.2;
  }

  .news-text.two-line {
    transform: translateY(-2pt); /* 5pt * 0.4 = 2pt */
  }

  .news-item:has(.news-text.two-line)::after {
    transform: translateY(-1.2pt); /* 3pt * 0.4 = 1.2pt */
  }

  .expand-btn {
    width: 32.8px; /* 82px * 0.4 = 32.8px */
    height: 32.8px; /* 82px * 0.4 = 32.8px */
    border-width: 0.8px; /* 2px * 0.4 = 0.8px */
  }

  .expand-btn svg {
    width: 16px; /* 40px * 0.4 = 16px */
    height: 10px; /* 25px * 0.4 = 10px */
  }

  .expand-more {
    padding-bottom: 13.6px; /* 34px * 0.4 = 13.6px */
  }
}
</style> 
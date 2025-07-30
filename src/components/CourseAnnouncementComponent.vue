<template>
  <div class="announcement-container">
    <!-- 標題 -->
    <div class="announcement-title">
      <h2>課程公告</h2>
    </div>
    
    <!-- 公告內容區域 -->
    <div class="announcement-content">
      <!-- 公告項目 -->
      <div class="announcement-item" v-for="(announcement, index) in announcementList" :key="index">
        <div class="announcement-date">{{ announcement.date }}</div>
        <div class="announcement-text" :class="{ 'two-line': announcement.title.length > 35 }">{{ announcement.title }}</div>
      </div>
      
      <!-- 展開更多按鈕 -->
      <div class="expand-more">
        <button class="expand-btn" @click="toggleExpand">
          <svg width="40" height="25" viewBox="0 0 40 25" fill="none">
            <path d="M2 2L20 20L38 2" stroke="#e3d9cd" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const expanded = ref(false)

const announcementList = ref([
  {
    date: '2025.02.27',
    title: '🔥 114年上半年度【高科大 x 產業新尖兵】：15-29歲的你~免費參訓＋8000元獎勵金💰 報名截止中!'
  },
  {
    date: '2025.02.03',
    title: '【114上半年-產投課程】專案經理PMP實務班第01期'
  },
  {
    date: '2025.01.29',
    title: '【113-2】金工手作限額開放 🔥 打造專屬你的飾品 💎 報名從速!'
  },
  {
    date: '2025.01.24',
    title: '【公告】113-2 樂齡大學新時代 正取/備取名單 及 正取報到時間'
  },
  {
    date: '2025.01.16',
    title: '【114上半年-產投課程】水肺潛水極限挑戰訓練班'
  },
  {
    date: '2025.01.14',
    title: '【緊急通知】樂齡大學原訂1月14日10點開放報名，因網路問題調整至10點15分重新開放報名。'
  }
])

const toggleExpand = () => {
  expanded.value = !expanded.value
}
</script>

<style scoped>
.announcement-container {
  width: 100%;
  margin: 1.3rem 0;
  font-family: "GenYoGothic TW", "源樣黑體月", "Microsoft JhengHei", sans-serif;
}

/* 標題樣式 */
.announcement-title {
  text-align: center;
  margin-bottom: 1.7rem;
}

.announcement-title h2 {
  font-size: 30pt;
  font-weight: bold;
  color: #534741;
  margin: 0;
  letter-spacing: 1px;
}

/* 公告內容區域 - 整體大框 */
.announcement-content {
  width: 910px;
  height: 808px;
  max-width: 100%;
  margin: 0 auto;
  background: #e3d9cd;
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
.announcement-content::before {
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
.announcement-item,
.expand-more {
  position: relative;
  z-index: 2;
}

.announcement-content > * {
  position: relative;
  z-index: 2;
}

/* 公告項目樣式 */
.announcement-item {
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
.announcement-item::after {
  content: '';
  position: absolute;
  bottom: 21px;
  left: 43px;
  right: 43px;
  height: 1px;
  background-color: #f2ede8;
}

.announcement-item:first-child {
  margin-top: 77px;
}

.announcement-item:last-child {
  margin-bottom: 0;
  min-height: 85px;
}

.announcement-item:last-child::after {
  display: none;
}

.announcement-date {
  background-color: #e3d9cd;
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

.announcement-text {
  font-size: 14pt;
  color: #534741;
  line-height: 1.2;
  flex: 1;
}

/* 字數超過35時的兩行文字樣式 */
.announcement-text.two-line {
  transform: translateY(-5pt);
}

/* 超過兩行時的底線樣式 */
.announcement-item:has(.announcement-text.two-line)::after {
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
  border: 2px solid #e3d9cd;
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

.expand-btn svg {
  width: 27px;
  height: 17px;
}

/* 響應式設計 */
@media (max-width: 1200px) {
  .announcement-content {
    width: 90%;
    padding: 51px 34px;
  }
  
  .announcement-title h2 {
    font-size: 31pt;
  }
}

@media (max-width: 768px) {
  .announcement-content {
    width: 95%;
    padding: 34px 17px;
    border-radius: 17px;
  }
  
  .announcement-title h2 {
    font-size: 24pt;
  }
  
  .announcement-item {
    flex-direction: column;
    gap: 7px;
  }
  
  .announcement-date {
    align-self: flex-start;
    min-width: auto;
  }
  
  .announcement-text {
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
  .announcement-title h2 {
    font-size: 20pt;
  }
  
  .announcement-content {
    padding: 26px 13px;
  }
  
  .announcement-text {
    font-size: 10pt;
  }
}
</style> 
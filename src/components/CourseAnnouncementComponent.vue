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
        <div class="announcement-text">{{ announcement.title }}</div>
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
  margin-bottom: 1.3rem;
}

.announcement-title h2 {
  font-size: 30pt;
  font-weight: normal;
  color: #534741;
  margin: 0;
  letter-spacing: 0.7px;
}

/* 公告內容區域 - 整體大框 */
.announcement-content {
  width: 717px;
  height: 637px;
  max-width: 100%;
  margin: 0 auto;
  background: #e3d9cd;
  border-radius: 20px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 23px;
  box-sizing: border-box;
}

/* 內框 */
.announcement-content::before {
  content: '';
  position: absolute;
  top: 23px;
  left: 23px;
  right: 23px;
  bottom: 23px;
  width: 670px;
  height: 602px;
  background: #fff;
  border-radius: 13px;
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
  max-width: 603px;
  padding: 10px 34px 17px 34px;
  min-height: 54px;
  margin-bottom: 10px;
  position: relative;
}

/* 底線貼合標籤底部 */
.announcement-item::after {
  content: '';
  position: absolute;
  bottom: 17px;
  left: 34px;
  right: 34px;
  height: 1px;
  background-color: #f2ede8;
}

.announcement-item:first-child {
  margin-top: 60px;
}

.announcement-item:last-child {
  margin-bottom: 0;
  min-height: 67px;
}

.announcement-item:last-child::after {
  display: none;
}

.announcement-date {
  background-color: #e3d9cd;
  color: #534741;
  padding: 7px 8px;
  font-size: 9.5pt;
  font-weight: bold;
  min-width: 60px;
  text-align: center;
  flex-shrink: 0;
  position: relative;
  margin-right: 13px;
  height: 27px;
  display: flex;
  align-items: center;
  justify-content: center;
  clip-path: polygon(0 0, calc(100% - 7px) 0, 100% 100%, 0 100%);
}

.announcement-text {
  font-size: 11pt;
  color: #534741;
  line-height: 1.5;
  flex: 1;
}

/* 展開更多按鈕 */
.expand-more {
  display: flex;
  justify-content: center;
  margin-top: auto;
  padding-bottom: 27px;
}

.expand-btn {
  width: 64px;
  height: 64px;
  border: 1.3px solid #e3d9cd;
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
    padding: 40px 27px;
  }
  
  .announcement-title h2 {
    font-size: 24pt;
  }
}

@media (max-width: 768px) {
  .announcement-content {
    width: 95%;
    padding: 27px 13px;
    border-radius: 13px;
  }
  
  .announcement-title h2 {
    font-size: 19pt;
  }
  
  .announcement-item {
    flex-direction: column;
    gap: 5px;
  }
  
  .announcement-date {
    align-self: flex-start;
    min-width: auto;
  }
  
  .announcement-text {
    font-size: 9.5pt;
  }
  
  .expand-btn {
    width: 47px;
    height: 47px;
  }
  
  .expand-btn svg {
    width: 20px;
    height: 12px;
  }
}

@media (max-width: 480px) {
  .announcement-title h2 {
    font-size: 16pt;
  }
  
  .announcement-content {
    padding: 20px 10px;
  }
  
  .announcement-text {
    font-size: 8pt;
  }
}
</style> 
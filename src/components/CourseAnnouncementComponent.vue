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
  margin: 2rem 0;
  font-family: "GenYoGothic TW", "源樣黑體月", "Microsoft JhengHei", sans-serif;
}

/* 標題樣式 */
.announcement-title {
  text-align: center;
  margin-bottom: 2rem;
}

.announcement-title h2 {
  font-size: 45pt;
  font-weight: normal;
  color: #534741;
  margin: 0;
  letter-spacing: 1px;
}

/* 公告內容區域 - 整體大框 */
.announcement-content {
  width: 1070px;
  height: 950px;
  max-width: 100%;
  margin: 0 auto;
  background: #e3d9cd;
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
.announcement-content::before {
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
  max-width: 900px;
  padding: 15px 50px 25px 50px;
  min-height: 80px;
  margin-bottom: 15px;
  position: relative;
}

/* 底線貼合標籤底部 */
.announcement-item::after {
  content: '';
  position: absolute;
  bottom: 25px;
  left: 50px;
  right: 50px;
  height: 1px;
  background-color: #f2ede8;
}

.announcement-item:first-child {
  margin-top: 90px;
}

.announcement-item:last-child {
  margin-bottom: 0;
  min-height: 100px;
}

.announcement-item:last-child::after {
  display: none;
}

.announcement-date {
  background-color: #e3d9cd;
  color: #534741;
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

.announcement-text {
  font-size: 16pt;
  color: #534741;
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

/* 響應式設計 */
@media (max-width: 1200px) {
  .announcement-content {
    width: 90%;
    padding: 60px 40px;
  }
  
  .announcement-title h2 {
    font-size: 36pt;
  }
}

@media (max-width: 768px) {
  .announcement-content {
    width: 95%;
    padding: 40px 20px;
    border-radius: 20px;
  }
  
  .announcement-title h2 {
    font-size: 28pt;
  }
  
  .announcement-item {
    flex-direction: column;
    gap: 8px;
  }
  
  .announcement-date {
    align-self: flex-start;
    min-width: auto;
  }
  
  .announcement-text {
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
  .announcement-title h2 {
    font-size: 24pt;
  }
  
  .announcement-content {
    padding: 30px 15px;
  }
  
  .announcement-text {
    font-size: 12pt;
  }
}
</style> 
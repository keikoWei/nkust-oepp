<template>
  <div class="announcement-container">
    <!-- 標題 -->
    <div class="announcement-title">
      <h2>課程公告</h2>
    </div>
    
    <!-- 公告內容區域 -->
    <div class="announcement-content">
      <!-- 公告項目 -->
      <div class="announcement-item" v-for="(announcement, index) in paginatedAnnouncements" :key="announcement.id">
        <div class="announcement-date">{{ announcement.date }}</div>
        <div class="announcement-text" :class="{ 'two-line': announcement.title.length > 35 }" @click.stop="goToDetail(announcement.id)">{{ announcement.title }}</div>
      </div>
      
      <!-- 分頁控制 -->
      <div class="pagination-controls">
        <button 
          class="page-btn" 
          :class="{ 'active': currentPage === page }"
          v-for="page in totalPages" 
          :key="page"
          @click="goToPage(page)"
        >
          {{ page }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const currentPage = ref(1)
const itemsPerPage = 10

const announcementList = ref([
  {
    id: 47,
    date: '2025.12.12',
    title: '🎉 114學年度第2學期 樂齡新時代 招生簡章'
  },
  {
    id: 46,
    date: '2025.11.21',
    title: '114學年度第2學期推廣教育碩士學分班招生簡章'
  },
  {
    id: 45,
    date: '2025.10.29',
    title: '1 1 4 年 度 職 業 訓 練 課 程-Python 人工智慧應用系統 第01期 公 告 錄 訓 名 單'
  },
  {
    id: 44,
    date: '2025.10.01',
    title: '🔥【職前訓練】Python人工智慧應用系統 第01期 開放報名中！'
  },
  {
    id: 43,
    date: '2025.09.15',
    title: '🎉 【114學年度】樂齡新時代 (建工校區自費班)熱烈招生中！'
  },
  {
    id: 42,
    date: '2025.09.12',
    title: '🔥【職前訓練】AI Agent應用實務 第02期 開放報名中！🔥'
  },
  {
    id: 41,
    date: '2025.09.05',
    title: '【AI會計應用系統實戰課程】帶你用 AI 工具升級財會效率！'
  },
  {
    id: 40,
    date: '2025.09.01',
    title: '💎 組織溫室氣體盤查實務班第01期 💎勞動部產業人才投資方案📩在職勞工【最高補助100_】'
  },
  {
    id: 39,
    date: '2025.08.18',
    title: '🦾【AI Agent應用實務】延後開課，開放報名中！'
  },
  {
    id: 38,
    date: '2025.07.31',
    title: '🦾【職前訓練】 AI Agent應用實務 熱烈報名中!'
  },
  {
    id: 37,
    date: '2025.07.22',
    title: '🎉【公告】114-1 樂齡新時代 正取備取名單 及 正取報到時間'
  },
  {
    id: 36,
    date: '2025.07.18',
    title: '🎉 114學年度樂齡大學補助班(楠梓校區)熱烈招生中！'
  },
  {
    id: 35,
    date: '2025.07.14',
    title: '【公告】國立高雄科技大學114學年度第1學期教育推廣中心學分班熱烈招生中'
  },
  {
    id: 34,
    date: '2025.07.10',
    title: '💎 以GRI準則ESG永續報告書實務班第02期 💎勞動部產業人才投資方案📩在職勞工【最高補助100_】'
  },
  {
    id: 33,
    date: '2025.07.04',
    title: '🌈【夏日創作營–mini仿真黏土  奇幻熱縮片】🎨 這個夏天，讓孩子的創意發光發熱！'
  },
  {
    id: 32,
    date: '2025.07.02',
    title: '0709AI智慧製造產業人才培訓據點 課程說明會'
  },
  {
    id: 31,
    date: '2025.07.01',
    title: '🔥【產業新尖兵】 ESG 淨零人才專案管理師培訓班第一梯次﹝15-29歲的你~免費參訓＋16000元獎勵金﹞熱烈報名中!'
  },
  {
    id: 30,
    date: '2025.06.26',
    title: '🌿 【 AI量化投資分析碩士學分專班 】招生中！'
  },
  {
    id: 29,
    date: '2025.06.23',
    title: '🔥 114年下半年度【高科大 X 產業新尖兵】﹝15-29歲的你~免費參訓＋8000元獎勵金﹞◢ 熱烈報名中!'
  },
  {
    id: 28,
    date: '2025.06.09',
    title: '🎉粽情肆意 飄香端午🎉 DK SHOP推出好禮優惠，滿額送端午限定禮品🎁'
  },
  {
    id: 27,
    date: '2025.05.28',
    title: '▶ 產投－Python程式設計與MySQL資料庫應用實務班第01期'
  },
  {
    id: 26,
    date: '2025.05.28',
    title: '▶114年 三菱FX.Q系列'
  },
  {
    id: 25,
    date: '2025.05.28',
    title: '產投－ AI行銷與社群增粉實戰班第01期'
  },
  {
    id: 24,
    date: '2025.05.28',
    title: '💻 Python程式設計與MySQL資料庫應用實務班第01期！勞動部產業人才投資方案📩在職勞工【最高補助100_】'
  },
  {
    id: 23,
    date: '2025.05.28',
    title: '📱 AI行銷與社群增粉實戰班第01期！勞動部產業人才投資方案📩在職勞工【最高補助100_】'
  },
  {
    id: 22,
    date: '2025.05.27',
    title: '114年高科大 第一校區限定 🏊‍♂️ 兒童游泳加強班'
  },
  {
    id: 21,
    date: '2025.05.12',
    title: '114學年度第1學期推廣教育碩士學分班招生簡章 (以入學大學同等學力認定標準第七條資格報名者適用)'
  },
  {
    id: 20,
    date: '2025.05.09',
    title: '🪐三菱Q系列課程，我們滿足你！勞動部產業人才投資方案📩在職勞工【最高補助100_】'
  },
  {
    id: 19,
    date: '2025.05.02',
    title: '114年高科大 🏊‍♂️ 游你真棒 🏸 羽你同樂 暑期兒童開班啦 😍'
  },
  {
    id: 18,
    date: '2025.04.29',
    title: '🔥【產業新尖兵】 淨零綠建築資訊模型(BIM)工程實務班第一梯次﹝15-29歲的你~免費參訓＋16000元獎勵金﹞熱烈報名中!'
  },
  {
    id: 17,
    date: '2025.04.08',
    title: '✦免費參加✦114年產業新尖兵計畫-課程招生說明會【五校區】熱烈報名中'
  },
  {
    id: 16,
    date: '2025.02.27',
    title: '🔥 114年上半年度【高科大 X 產業新尖兵】﹝15-29歲的你~免費參訓＋8000元獎勵金﹞◢ 熱烈報名中!'
  },
  {
    id: 15,
    date: '2025.02.25',
    title: '【113-2】手作時光 ✦ 波西米亞風編織手機包 ✨'
  },
  {
    id: 14,
    date: '2025.02.24',
    title: '【113-2】❤️ 找回內在平衡，釋放壓力，擁抱健康生活 🔹 第一校區 x 健康瑜珈班 🔹 招生中！'
  },
  {
    id: 13,
    date: '2025.02.22',
    title: '【113-2】雙手締造永恆｜打造專屬你的雙環銀戒 💍 【金工手作體驗－雙環之美】限額開放！'
  },
  {
    id: 12,
    date: '2025.02.11',
    title: '【113-2】🔥 燃燒 🔥 每一滴汗水 💦 飛輪、體適能精彩四班齊聚，快來燃燒卡路里，讓你達到理想の體態 😍'
  },
  {
    id: 11,
    date: '2025.02.03',
    title: '【114上半年-產投課程】專案經理PMP實務班第01期'
  },
  {
    id: 10,
    date: '2025.01.29',
    title: '【113-2】 金工手作限額開放 🔥 打造專屬你的銀戒 💍 報名從速！'
  },
  {
    id: 9,
    date: '2025.01.24',
    title: '【公告】113-2樂齡大學新時代正取、備取名單及正取報到時間'
  },
  {
    id: 8,
    date: '2025.01.16',
    title: '【114上半年-產投課程】水肺潛水暨水域技能培訓班'
  },
  {
    id: 7,
    date: '2025.01.14',
    title: '【緊急通知】樂齡大學原為01月14日 10點開放報名，因網路問題將延至10點15分重新開放報名。'
  },
  {
    id: 6,
    date: '2025.01.13',
    title: '【公告】國立高雄科技大學113學年度第2學期教育推廣中心學分班熱烈招生中'
  },
  {
    id: 5,
    date: '2025.01.13',
    title: '🎉 更新【113學年度第2學期】樂齡大學新時代 (建工校區)熱烈招生中！'
  },
  {
    id: 4,
    date: '2025.01.13',
    title: '【公告】國立高雄科技大學113學年度第2學期教育推廣中心學分班於1140113(一)公告招生'
  },
  {
    id: 3,
    date: '2025.01.10',
    title: '【重要通知】樂齡大學於114年01月14日(星期二) 上午10時 開放報名 ！'
  },
  {
    id: 2,
    date: '2025.01.08',
    title: '【113-2】中華花藝 👉 花不語 — 但花懂你 🌹'
  },
  {
    id: 1,
    date: '2025.01.02',
    title: '🎉 114年高雄市管線挖掘工程管理人員認證訓練班熱烈招生中'
  },
])

// 按照 id 降序排列（id 大的在前，日期由新到舊）
const sortedAnnouncementList = computed(() => {
  return [...announcementList.value].sort((a, b) => b.id - a.id)
})

// 計算總頁數
const totalPages = computed(() => {
  return Math.ceil(sortedAnnouncementList.value.length / itemsPerPage)
})

// 當前頁顯示的公告
const paginatedAnnouncements = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage
  const end = start + itemsPerPage
  return sortedAnnouncementList.value.slice(start, end)
})

// 跳轉到指定頁
const goToPage = (page) => {
  currentPage.value = page
  // 滾動到頂部
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

// 跳轉到詳情頁
const goToDetail = (id) => {
  if (id) {
    router.push(`/announcement-detail/${id}`)
  }
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
  min-height: 808px;
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
  min-height: 763px;
  height: auto;
  background: #fff;
  border-radius: 17px;
  z-index: 1;
}

/* 確保內容在內框之上 */
.announcement-item,
.pagination-controls {
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
  margin-bottom: 13px;
  min-height: 68px;
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
  cursor: pointer;
  transition: color 0.3s ease;
}

.announcement-text:hover {
  color: #8B4513;
  text-decoration: underline;
}

/* 字數超過35時的兩行文字樣式 */
.announcement-text.two-line {
  transform: translateY(-5pt);
}

/* 超過兩行時的底線樣式 */
.announcement-item:has(.announcement-text.two-line)::after {
  transform: translateY(-3pt);
}

/* 分頁控制區域 */
.pagination-controls {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  margin-top: auto;
  padding: 34px 0;
  flex-wrap: wrap;
}

.page-btn {
  width: 48px;
  height: 48px;
  border: 2px solid #e3d9cd;
  border-radius: 50%;
  background: #fff;
  color: #534741;
  font-size: 16pt;
  font-weight: bold;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  font-family: "GenYoGothic TW", "源樣黑體月", "Microsoft JhengHei", sans-serif;
}

.page-btn:hover {
  background: #e3d9cd;
  color: #534741;
  transform: translateY(-2px);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.page-btn.active {
  background: #534741;
  color: #fff;
  border-color: #534741;
}

.page-btn.active:hover {
  background: #534741;
  color: #fff;
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

  .announcement-content::before {
    width: calc(100% - 68px);
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

  .announcement-content::before {
    top: 34px;
    left: 17px;
    right: 17px;
    bottom: 34px;
    width: calc(100% - 34px);
    border-radius: 17px;
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
  
  .page-btn {
    width: 40px;
    height: 40px;
    font-size: 14pt;
  }

  .pagination-controls {
    gap: 0.4rem;
    padding: 24px 0;
  }
}

@media (max-width: 480px) {
  .announcement-container {
    margin: 0;
    padding: 0 1rem;
  }

  .announcement-title h2 {
    font-size: 12pt;
    margin-bottom: 0.8rem;
  }
  
  .announcement-content {
    width: 100%;
    min-height: 323px;
    padding: 12px;
    border-radius: 10.4px;
  }

  .announcement-content::before {
    top: 12px;
    left: 12px;
    right: 12px;
    bottom: 12px;
    width: calc(100% - 24px);
    min-height: auto;
    border-radius: 6.8px;
  }

  .announcement-item {
    padding: 5.2px 17.2px 8.4px 17.2px;
    min-height: 27.2px;
    margin-bottom: 5.2px;
    max-width: 306px;
  }

  .announcement-item::after {
    bottom: 8.4px;
    left: 17.2px;
    right: 17.2px;
    height: 0.4px;
  }

  .announcement-item:first-child {
    margin-top: 30.8px;
  }

  .announcement-item:last-child {
    min-height: 27.2px;
    margin-bottom: 5.2px;
  }

  .announcement-date {
    padding: 3.6px 4px;
    font-size: 8pt;
    min-width: 30.8px;
    height: 13.6px;
    margin-right: 6.8px;
  }
  
  .announcement-text {
    font-size: 9pt;
    line-height: 1.2;
  }

  .announcement-text.two-line {
    transform: translateY(-2pt);
  }

  .announcement-item:has(.announcement-text.two-line)::after {
    transform: translateY(-1.2pt);
  }

  .page-btn {
    width: 32px;
    height: 32px;
    font-size: 11pt;
    border-width: 1.5px;
  }

  .pagination-controls {
    gap: 0.3rem;
    padding: 13.6px 0;
  }
}
</style>


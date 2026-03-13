<template>
  <div class="announcement-container">
    <!-- 標題 -->
    <div class="announcement-title">
      <h2>最新消息</h2>
    </div>
    
    <!-- 公告內容區域 -->
    <div class="announcement-content">
      <template v-if="loading">載入中...</template>
      <template v-else-if="!announcementList.length">
        <p class="announcement-empty">尚未有資料</p>
      </template>
      <template v-else>
      <!-- 公告項目 -->
      <div class="announcement-item" v-for="(announcement, index) in sortedAnnouncementList" :key="announcement.id">
        <div class="announcement-date">{{ announcement.date }}</div>
        <div class="announcement-text" :class="{ 'two-line': announcement.title.length > 35 }" @click.stop="goToDetail(announcement)">{{ announcement.title }}</div>
      </div>
      
      <!-- 展開更多按鈕 -->
      <div class="expand-more">
        <button class="expand-btn" @click="toggleExpand">
          <svg width="40" height="25" viewBox="0 0 40 25" fill="none">
            <path d="M2 2L20 20L38 2" stroke="#e3d9cd" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
      </div>
      </template>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { getPublicNews } from '@/api/news'

const router = useRouter()
const loading = ref(true)
const announcementList = ref([])

function formatNewsDate(isoStr) {
  if (!isoStr) return ''
  const d = new Date(isoStr)
  const y = d.getFullYear()
  const m = String(d.getMonth() + 1).padStart(2, '0')
  const day = String(d.getDate()).padStart(2, '0')
  return `${y}.${m}.${day}`
}

onMounted(async () => {
  try {
    const list = await getPublicNews('EDUCATION_CENTER')
    announcementList.value = (list || []).map(item => ({
      ...item,
      date: formatNewsDate(item.publishTime)
    })).sort((a, b) => (b.id ?? 0) - (a.id ?? 0))
  } catch {
    announcementList.value = []
  } finally {
    loading.value = false
  }
})

// 按照 id 降序排列（id 大的在前）
const sortedAnnouncementList = computed(() => {
  return [...announcementList.value].sort((a, b) => (b.id ?? 0) - (a.id ?? 0))
})

const toggleExpand = () => {
  router.push('/educationCenter/courseAnnouncement')
}

const goToDetail = (announcement) => {
  if (announcement?.id != null) {
    router.push({ path: `/announcement-detail/${announcement.id}`, state: { news: announcement } })
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

.announcement-empty {
  margin: 0;
  padding: 2rem;
  text-align: center;
  font-size: 14px;
  color: #999;
  position: relative;
  z-index: 2;
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
  .announcement-container {
    margin: 0;
    padding: 0 1rem;
  }

  .announcement-title h2 {
    font-size: 12pt; /* 30pt * 0.4 = 12pt */
    margin-bottom: 0.8rem;
  }
  
  .announcement-content {
    width: 100%;
    height: auto;
    min-height: 323px; /* 808px * 0.4 = 323px */
    padding: 12px; /* 30px * 0.4 = 12px */
    border-radius: 10.4px; /* 26px * 0.4 = 10.4px */
  }

  .announcement-content::before {
    top: 12px; /* 30px * 0.4 = 12px */
    left: 12px; /* 30px * 0.4 = 12px */
    right: 12px; /* 30px * 0.4 = 12px */
    bottom: 12px; /* 30px * 0.4 = 12px */
    width: calc(100% - 24px); /* 850px proportional */
    height: calc(100% - 24px); /* 763px proportional */
    border-radius: 6.8px; /* 17px * 0.4 = 6.8px */
  }

  .announcement-item {
    padding: 5.2px 17.2px 8.4px 17.2px; /* 13px 43px 21px 43px * 0.4 */
    min-height: 27.2px; /* 68px * 0.4 = 27.2px */
    margin-bottom: 5.2px; /* 13px * 0.4 = 5.2px */
    max-width: 306px; /* 765px * 0.4 = 306px */
  }

  .announcement-item::after {
    bottom: 8.4px; /* 21px * 0.4 = 8.4px */
    left: 17.2px; /* 43px * 0.4 = 17.2px */
    right: 17.2px; /* 43px * 0.4 = 17.2px */
    height: 0.4px; /* 1px * 0.4 = 0.4px */
  }

  .announcement-item:first-child {
    margin-top: 30.8px; /* 77px * 0.4 = 30.8px */
  }

  .announcement-item:last-child {
    min-height: 34px; /* 85px * 0.4 = 34px */
  }

  .announcement-date {
    padding: 3.6px 4px; /* 9px 10px * 0.4 */
    font-size: 8pt; /* 調整為可讀大小 */
    min-width: 30.8px; /* 77px * 0.4 = 30.8px */
    height: 13.6px; /* 34px * 0.4 = 13.6px */
    margin-right: 6.8px; /* 17px * 0.4 = 6.8px */
  }
  
  .announcement-text {
    font-size: 9pt; /* 調整為可讀大小 */
    line-height: 1.2;
  }

  .announcement-text.two-line {
    transform: translateY(-2pt); /* 5pt * 0.4 = 2pt */
  }

  .announcement-item:has(.announcement-text.two-line)::after {
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
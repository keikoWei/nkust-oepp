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
      <div class="announcement-item" v-for="(announcement, index) in paginatedAnnouncements" :key="announcement.id">
        <div class="announcement-date">{{ announcement.date }}</div>
        <div class="announcement-text" :class="{ 'two-line': announcement.title.length > 35 }" @click.stop="goToDetail(announcement)">{{ announcement.title }}</div>
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
      </template>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { getPublicNews } from '@/api/news'

const router = useRouter()
const currentPage = ref(1)
const itemsPerPage = 10
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

// 按照 id 降序排列（id 大的在前，日期由新到舊）
const sortedAnnouncementList = computed(() => {
  return [...announcementList.value].sort((a, b) => (b.id ?? 0) - (a.id ?? 0))
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

// 跳轉到詳情頁（傳遞 state 供 API 消息詳情使用）
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


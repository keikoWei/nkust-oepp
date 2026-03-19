<template>
  <div class="news-container">
    <div class="news-title">
      <h2>最新消息</h2>
    </div>
    <div class="news-content">
      <template v-if="loading">載入中...</template>
      <template v-else-if="!newsList.length">
        <p class="news-empty">尚未有資料</p>
      </template>
      <template v-else>
        <div
          class="news-item"
          v-for="(news, index) in displayList"
          :key="news.id"
          @click="goToDetail(news)"
        >
          <div class="news-date">{{ news.date }}</div>
          <div class="news-text" :class="{ 'two-line': news.title.length > 35 }">{{ news.title }}</div>
        </div>
        <div class="expand-more">
          <button class="expand-btn" @click="goToNewsList">
            <svg width="40" height="25" viewBox="0 0 40 25" fill="none">
              <path d="M2 2L20 20L38 2" stroke="#8C776D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
        </div>
      </template>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import { useRouter } from 'vue-router'
import { getPublicNews } from '@/api/news'

const router = useRouter()
const loading = ref(true)
const newsList = ref([])

/** 後台尚無資料時使用的 6 筆假資料 */
const MOCK_NEWS = [
  { id: 'mock-1', title: '經營管理中心 113 學年度業務說明會', publishTime: '2025-03-10T09:00:00' },
  { id: 'mock-2', title: '校園重大工程規劃與資產活化專案進度公告', publishTime: '2025-03-05T14:00:00' },
  { id: 'mock-3', title: '營運空間與專案活化相關辦法修正說明', publishTime: '2025-02-28T10:00:00' },
  { id: 'mock-4', title: '本校經營管理效能提升計畫成果分享', publishTime: '2025-02-20T11:00:00' },
  { id: 'mock-5', title: '工程先期評估與規劃設計作業流程公告', publishTime: '2025-02-15T08:00:00' },
  { id: 'mock-6', title: '經營管理中心聯絡窗口與服務時間異動', publishTime: '2025-02-01T09:00:00' }
]

function formatNewsDate(isoStr) {
  if (!isoStr) return ''
  if (typeof isoStr === 'string') {
    const m = isoStr.trim().match(/^(\d{4})-(\d{2})-(\d{2})/)
    if (m) return `${m[1]}.${m[2]}.${m[3]}`
  }
  const d = new Date(isoStr)
  const y = d.getFullYear()
  const m = String(d.getMonth() + 1).padStart(2, '0')
  const day = String(d.getDate()).padStart(2, '0')
  return Number.isNaN(d.getTime()) ? '' : `${y}.${m}.${day}`
}

onMounted(async () => {
  try {
    const list = await getPublicNews('MANAGEMENT_CENTER')
    const raw = (list || [])
      .map(item => ({
        ...item,
        date: formatNewsDate(item.publishTime)
      }))
      .sort((a, b) => new Date(b.publishTime) - new Date(a.publishTime))
    if (raw.length > 0) {
      newsList.value = raw
    } else {
      newsList.value = MOCK_NEWS.map(item => ({
        ...item,
        date: formatNewsDate(item.publishTime)
      }))
    }
  } catch {
    newsList.value = MOCK_NEWS.map(item => ({
      ...item,
      date: formatNewsDate(item.publishTime)
    }))
  } finally {
    loading.value = false
  }
})

const displayList = computed(() => newsList.value.slice(0, 6))

const goToDetail = (news) => {
  router.push({ path: `/managementCenter/news-detail/${news.id}`, state: { news } })
}

const goToNewsList = () => {
  router.push('/managementCenter/news')
}
</script>

<style scoped>
/* 與其他中心相同結構與尺寸，僅配色為經營管理中心 */
.news-container {
  width: 100%;
  margin: 2rem 0;
  font-family: "GenYoGothic TW", "源樣黑體月", "Microsoft JhengHei", sans-serif;
}

.news-title {
  text-align: center;
  margin-bottom: 1.7rem;
}

.news-title h2 {
  font-size: 30pt;
  font-weight: bold;
  color: #3d3229;
  margin: 0;
  letter-spacing: 1px;
}

.news-empty {
  margin: 0;
  padding: 2rem;
  text-align: center;
  font-size: 14px;
  color: #999;
  position: relative;
  z-index: 2;
}

.news-content {
  width: 910px;
  height: 808px;
  max-width: 100%;
  margin: 0 auto;
  background: #e0d9cc;
  border-radius: 26px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 30px;
  box-sizing: border-box;
}

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

.news-item,
.expand-more {
  position: relative;
  z-index: 2;
}

.news-content > * {
  position: relative;
  z-index: 2;
}

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
  cursor: pointer;
}

.news-item::after {
  content: '';
  position: absolute;
  bottom: 21px;
  left: 43px;
  right: 43px;
  height: 1px;
  background-color: #8C776D;
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
  background-color: #e0d9cc;
  color: #3d3229;
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
  color: #3d3229;
  line-height: 1.2;
  flex: 1;
}

.news-text.two-line {
  transform: translateY(-5pt);
}

.news-item:has(.news-text.two-line)::after {
  transform: translateY(-3pt);
}

.expand-more {
  display: flex;
  justify-content: center;
  margin-top: auto;
  padding-bottom: 34px;
}

.expand-btn {
  width: 82px;
  height: 82px;
  border: 2px solid #8C776D;
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
    font-size: 12pt;
    margin-bottom: 0.8rem;
  }
  .news-content {
    width: 100%;
    height: auto;
    min-height: 323px;
    padding: 12px;
    border-radius: 10.4px;
  }
  .news-content::before {
    top: 12px;
    left: 12px;
    right: 12px;
    bottom: 12px;
    width: calc(100% - 24px);
    height: calc(100% - 24px);
    border-radius: 6.8px;
  }
  .news-item {
    padding: 5.2px 17.2px 8.4px 17.2px;
    min-height: 27.2px;
    margin-bottom: 5.2px;
    max-width: 306px;
  }
  .news-item::after {
    bottom: 8.4px;
    left: 17.2px;
    right: 17.2px;
    height: 0.4px;
  }
  .news-item:first-child {
    margin-top: 30.8px;
  }
  .news-item:last-child {
    min-height: 34px;
  }
  .news-date {
    padding: 3.6px 4px;
    font-size: 8pt;
    min-width: 30.8px;
    height: 13.6px;
    margin-right: 6.8px;
  }
  .news-text {
    font-size: 9pt;
    line-height: 1.2;
  }
  .news-text.two-line {
    transform: translateY(-2pt);
  }
  .news-item:has(.news-text.two-line)::after {
    transform: translateY(-1.2pt);
  }
  .expand-btn {
    width: 32.8px;
    height: 32.8px;
    border-width: 0.8px;
  }
  .expand-btn svg {
    width: 16px;
    height: 10px;
  }
  .expand-more {
    padding-bottom: 13.6px;
  }
}
</style>

<template>
  <div class="announcement-container">
    <div class="announcement-title"><h2>最新消息</h2></div>
    <div class="announcement-content">
      <template v-if="loading">載入中...</template>
      <template v-else-if="!announcementList.length"><p class="announcement-empty">尚未有資料</p></template>
      <template v-else>
        <div class="announcement-item" v-for="announcement in paginatedAnnouncements" :key="announcement.id">
          <div class="announcement-date">{{ announcement.date }}</div>
          <div class="announcement-text" :class="{ 'two-line': announcement.title.length > 35 }" @click.stop="goToDetail(announcement)">{{ announcement.title }}</div>
        </div>
        <div class="pagination-controls">
          <button class="page-btn" :class="{ active: currentPage === page }" v-for="page in totalPages" :key="page" @click="goToPage(page)">{{ page }}</button>
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
  if (typeof isoStr === 'string') {
    const m = isoStr.trim().match(/^(\d{4})-(\d{2})-(\d{2})/)
    if (m) return `${m[1]}.${m[2]}.${m[3]}`
  }
  const d = new Date(isoStr)
  if (Number.isNaN(d.getTime())) return ''
  return `${d.getFullYear()}.${String(d.getMonth() + 1).padStart(2, '0')}.${String(d.getDate()).padStart(2, '0')}`
}
onMounted(async () => {
  try {
    const list = await getPublicNews('PRODUCT_CENTER')
    announcementList.value = (list || []).map(item => ({ ...item, date: formatNewsDate(item.publishTime) })).sort((a, b) => (b.id ?? 0) - (a.id ?? 0))
  } catch { announcementList.value = [] } finally { loading.value = false }
})
const sortedAnnouncementList = computed(() => [...announcementList.value].sort((a, b) => (b.id ?? 0) - (a.id ?? 0)))
const totalPages = computed(() => Math.ceil(sortedAnnouncementList.value.length / itemsPerPage))
const paginatedAnnouncements = computed(() => sortedAnnouncementList.value.slice((currentPage.value - 1) * itemsPerPage, currentPage.value * itemsPerPage))
const goToPage = (page) => { currentPage.value = page; window.scrollTo({ top: 0, behavior: 'smooth' }) }
const goToDetail = (announcement) => { if (announcement?.id != null) router.push({ path: `/productCenter/news-detail/${announcement.id}`, state: { news: announcement } }) }
</script>

<style scoped>
.announcement-container {
  width: 100%;
  margin: 1.3rem 0;
  font-family: "GenYoGothic TW", "源樣黑體月", "Microsoft JhengHei", sans-serif;
}

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

.announcement-content {
  width: 910px;
  min-height: 808px;
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

.announcement-item,
.pagination-controls {
  position: relative;
  z-index: 2;
}

.announcement-content > * {
  position: relative;
  z-index: 2;
}

.announcement-item {
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 765px;
  padding: 13px 43px 21px;
  min-height: 68px;
  margin-bottom: 13px;
  position: relative;
}

.announcement-item::after {
  content: '';
  position: absolute;
  bottom: 21px;
  left: 43px;
  right: 43px;
  height: 1px;
  background-color: #f2eacc;
}

.announcement-item:first-child {
  margin-top: 77px;
}

.announcement-date {
  background-color: #e3d496;
  color: #534741;
  padding: 9px 10px;
  font-size: 12pt;
  font-weight: bold;
  min-width: 77px;
  text-align: center;
  flex-shrink: 0;
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

.announcement-text.two-line {
  transform: translateY(-5pt);
}

.announcement-item:has(.announcement-text.two-line)::after {
  transform: translateY(-3pt);
}

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
  border: 2px solid #e3d496;
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
}

.page-btn:hover {
  background: #e3d496;
  color: #534741;
  transform: translateY(-2px);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.page-btn.active {
  background: #534741;
  color: #fff;
  border-color: #534741;
}
</style>


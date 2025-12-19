<template>
  <div class="dashboard-page">
    <DashboardSidebar />
    <div class="dashboard-main">
      <DashboardNavbar
        :tabs="navbarTabs"
        :active-tab="activeTab"
        :search-placeholder="searchPlaceholder"
        :show-add-button="showAddButton"
        :add-button-text="addButtonText"
        @tab-change="handleTabChange"
        @search="handleSearch"
        @add="handleAdd"
      />
      <div class="dashboard-content">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import DashboardSidebar from '@/components/dashboard/DashboardSidebar.vue'
import DashboardNavbar from '@/components/dashboard/DashboardNavbar.vue'

const route = useRoute()
const router = useRouter()

// 根據當前路由決定導覽欄內容
const activeTab = ref('carousel')

// 從路由中取得當前標籤
const updateActiveTabFromRoute = () => {
  const pathParts = route.path.split('/')
  const tab = pathParts[3] // /dashboard/center/tab
  const validTabs = ['carousel', 'news', 'hot-courses', 'training-plan', 'publication']
  if (validTabs.includes(tab)) {
    activeTab.value = tab
  } else {
    activeTab.value = 'carousel'
  }
}

// 初始化時設定標籤
updateActiveTabFromRoute()

// 監聽路由變化
watch(() => route.path, () => {
  updateActiveTabFromRoute()
})

const navbarTabs = computed(() => {
  const center = route.path.split('/')[2] // 取得中心名稱 (oceom, eec, epc, ppc, com)
  
  // 基本標籤（所有中心都有）
  const baseTabs = [
    { key: 'carousel', label: '輪播圖' },
    { key: 'news', label: '消息管理' }
  ]
  
  // 根據不同中心添加特定標籤
  if (center === 'eec') {
    // 教育推廣中心
    return [
      ...baseTabs,
      { key: 'hot-courses', label: '熱門課程' },
      { key: 'training-plan', label: '委訓計畫' }
    ]
  } else if (center === 'epc') {
    // 會展中心
    return [
      ...baseTabs,
      { key: 'publication', label: '出版品管理' }
    ]
  }
  
  // 其他中心使用基本標籤
  return baseTabs
})

const searchPlaceholder = computed(() => {
  const placeholders = {
    'carousel': '搜尋輪播圖標題',
    'news': '搜尋消息標題、內容',
    'hot-courses': '搜尋熱門課程',
    'training-plan': '搜尋委訓計畫',
    'publication': '搜尋出版品'
  }
  return placeholders[activeTab.value] || '搜尋...'
})

const showAddButton = computed(() => {
  // 兩個標籤都可以新增
  return true
})

const addButtonText = computed(() => {
  const buttonTexts = {
    'carousel': '新增輪播圖',
    'news': '新增消息',
    'hot-courses': '新增熱門課程',
    'training-plan': '新增委訓計畫',
    'publication': '新增出版品'
  }
  return buttonTexts[activeTab.value] || '新增'
})

const handleTabChange = (tabKey) => {
  activeTab.value = tabKey
  
  // 根據標籤切換路由
  const center = route.path.split('/')[2] // 取得中心名稱
  const newPath = `/dashboard/${center}/${tabKey}`
  router.push(newPath)
}

const searchQuery = ref('')

const handleSearch = (query) => {
  // 處理搜尋邏輯
  searchQuery.value = query
  // 透過事件傳遞給子組件
  const eventMap = {
    'carousel': 'carousel-search',
    'news': 'news-search',
    'hot-courses': 'hot-courses-search',
    'training-plan': 'training-plan-search',
    'publication': 'publication-search'
  }
  const eventName = eventMap[activeTab.value]
  if (eventName) {
    window.dispatchEvent(new CustomEvent(eventName, { detail: query }))
  }
}

const handleAdd = () => {
  // 處理新增邏輯
  const eventMap = {
    'carousel': 'open-carousel-modal',
    'news': 'open-news-modal',
    'hot-courses': 'open-hot-courses-modal',
    'training-plan': 'open-training-plan-modal',
    'publication': 'open-publication-modal'
  }
  const eventName = eventMap[activeTab.value]
  if (eventName) {
    window.dispatchEvent(new CustomEvent(eventName))
  }
}
</script>

<style scoped>
.dashboard-page {
  display: flex;
  min-height: 100vh;
  background-color: #f5f5f5;
}

.dashboard-main {
  margin-left: 250px;
  flex: 1;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.dashboard-content {
  flex: 1;
  padding: 20px;
  background-color: #fff;
  margin: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}
</style>


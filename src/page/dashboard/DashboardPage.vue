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
  if (tab === 'carousel' || tab === 'news') {
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
  
  // 所有中心都顯示相同的標籤
  return [
    { key: 'carousel', label: '輪播圖' },
    { key: 'news', label: '消息管理' }
  ]
})

const searchPlaceholder = computed(() => {
  if (activeTab.value === 'news') {
    return '搜尋消息標題、內容'
  }
  if (activeTab.value === 'carousel') {
    return '搜尋輪播圖標題'
  }
  return '搜尋...'
})

const showAddButton = computed(() => {
  // 兩個標籤都可以新增
  return true
})

const addButtonText = computed(() => {
  if (activeTab.value === 'carousel') {
    return '新增輪播圖'
  }
  if (activeTab.value === 'news') {
    return '新增消息'
  }
  return '新增'
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
  if (activeTab.value === 'carousel') {
    window.dispatchEvent(new CustomEvent('carousel-search', { detail: query }))
  } else if (activeTab.value === 'news') {
    window.dispatchEvent(new CustomEvent('news-search', { detail: query }))
  }
}

const handleAdd = () => {
  // 處理新增邏輯
  if (activeTab.value === 'carousel') {
    // 透過事件觸發輪播圖管理頁面的新增功能
    window.dispatchEvent(new CustomEvent('open-carousel-modal'))
  } else if (activeTab.value === 'news') {
    console.log('新增消息')
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


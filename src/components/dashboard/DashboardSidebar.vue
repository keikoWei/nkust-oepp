<template>
  <div class="dashboard-sidebar">
    <div class="sidebar-header">
      <h2>教推處管理後台</h2>
    </div>
    <nav class="sidebar-nav">
      <RouterLink
        v-for="center in centers"
        :key="center.path"
        :to="center.path"
        class="nav-item"
        :class="{ active: isActive(center.path) }"
      >
        <span class="nav-icon">{{ center.icon }}</span>
        <span class="nav-text">{{ center.name }}</span>
      </RouterLink>
    </nav>
    <div class="sidebar-footer">
      <button class="logout-btn" @click="handleLogout" :disabled="loggingOut">
        <span class="nav-icon">🔓</span>
        <span class="nav-text">{{ loggingOut ? '登出中...' : '登出' }}</span>
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { logout, getCurrentUser } from '@/api/auth'

const route = useRoute()
const router = useRouter()
const loggingOut = ref(false)

// 所有中心選項
const allCenters = [
  { name: '處本部', path: '/dashboard/oceom/carousel', icon: '🏛️', role: 'HEADQUARTERS' },
  { name: '教育推廣中心', path: '/dashboard/eec/carousel', icon: '📚', role: 'EDUCATION_CENTER' },
  { name: '會展及出版中心', path: '/dashboard/epc/carousel', icon: '📖', role: 'EXHIBITION_CENTER' },
  { name: '產品推廣中心', path: '/dashboard/ppc/carousel', icon: '🛍️', role: 'PRODUCT_CENTER' },
  { name: '經營管理處', path: '/dashboard/com/carousel', icon: '🏢', role: 'MANAGEMENT_CENTER' }
]

// 根據用戶角色過濾顯示的中心選項
const centers = computed(() => {
  const user = getCurrentUser()
  if (!user) return []
  
  // 超級管理員可以看到所有中心
  if (user.role === 'SUPER_ADMIN') {
    return allCenters
  }
  
  // 其他角色只能看到自己對應的中心
  return allCenters.filter(center => center.role === user.role)
})

const isActive = (path) => {
  // 檢查路徑是否匹配（例如 /dashboard/oceom/carousel 或 /dashboard/oceom/news）
  const basePath = path.replace('/carousel', '')
  return route.path.startsWith(basePath)
}

const handleLogout = async () => {
  if (!confirm('確定要登出嗎？')) {
    return
  }

  loggingOut.value = true
  
  try {
    await logout()
    // 登出成功，跳轉到登入頁
    router.push('/login')
  } catch (error) {
    console.error('登出錯誤:', error)
    // 即使 API 失敗，也清除本地儲存並跳轉
    router.push('/login')
  } finally {
    loggingOut.value = false
  }
}
</script>

<style scoped>
.dashboard-sidebar {
  width: 250px;
  height: 100vh;
  background-color: #534741;
  color: white;
  display: flex;
  flex-direction: column;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 100;
}

.sidebar-header {
  padding: 20px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.sidebar-header h2 {
  margin: 0;
  font-size: 20px;
  font-weight: bold;
  font-family: "GenYoGothic TW", "Microsoft JhengHei", sans-serif;
}

.sidebar-nav {
  flex: 1;
  padding: 20px 0;
  overflow-y: auto;
}

.nav-item {
  display: flex;
  align-items: center;
  padding: 15px 20px;
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  transition: all 0.3s;
  border-left: 3px solid transparent;
  font-family: "GenYoGothic TW", "Microsoft JhengHei", sans-serif;
}

.nav-item:hover {
  background-color: rgba(255, 255, 255, 0.1);
  color: white;
}

.nav-item.active {
  background-color: rgba(255, 255, 255, 0.15);
  border-left-color: #e3d9cd;
  color: white;
  font-weight: bold;
}

.nav-icon {
  font-size: 20px;
  margin-right: 12px;
  width: 24px;
  text-align: center;
}

.nav-text {
  font-size: 16px;
}

.sidebar-footer {
  padding: 20px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  margin-top: auto;
}

.logout-btn {
  width: 100%;
  display: flex;
  align-items: center;
  padding: 15px 20px;
  background-color: transparent;
  color: rgba(255, 255, 255, 0.8);
  border: none;
  border-left: 3px solid transparent;
  cursor: pointer;
  transition: all 0.3s;
  font-family: "GenYoGothic TW", "Microsoft JhengHei", sans-serif;
  font-size: 16px;
  text-align: left;
}

.logout-btn:hover:not(:disabled) {
  background-color: rgba(255, 255, 255, 0.1);
  color: white;
}

.logout-btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}
</style>


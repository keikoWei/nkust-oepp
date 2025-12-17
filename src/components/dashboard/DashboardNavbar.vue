<template>
  <div class="dashboard-navbar">
    <div class="navbar-tabs">
      <button
        v-for="tab in tabs"
        :key="tab.key"
        class="tab-btn"
        :class="{ active: activeTab === tab.key }"
        @click="handleTabClick(tab.key)"
      >
        {{ tab.label }}
      </button>
    </div>
    <div class="navbar-actions">
      <div class="search-box">
        <input
          v-model="searchQuery"
          type="text"
          :placeholder="searchPlaceholder"
          class="search-input"
        />
      </div>
      <button v-if="showAddButton" class="add-btn" @click="handleAdd">
        {{ addButtonText }}
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import { useRouter } from 'vue-router'

const props = defineProps({
  tabs: {
    type: Array,
    default: () => []
  },
  activeTab: {
    type: String,
    default: ''
  },
  searchPlaceholder: {
    type: String,
    default: '搜尋...'
  },
  showAddButton: {
    type: Boolean,
    default: false
  },
  addButtonText: {
    type: String,
    default: '新增'
  }
})

const emit = defineEmits(['tab-change', 'search', 'add'])

const router = useRouter()
const searchQuery = ref('')

const handleTabClick = (tabKey) => {
  emit('tab-change', tabKey)
}

const handleAdd = () => {
  emit('add')
}

// 監聽搜尋輸入
watch(searchQuery, (newVal) => {
  emit('search', newVal)
})
</script>

<style scoped>
.dashboard-navbar {
  background-color: #fff;
  border-bottom: 2px solid #e3d9cd;
  padding: 15px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
}

.navbar-tabs {
  display: flex;
  gap: 10px;
}

.tab-btn {
  padding: 10px 20px;
  background-color: #f5f5f5;
  border: none;
  border-radius: 8px 8px 0 0;
  cursor: pointer;
  font-size: 14px;
  color: #666;
  transition: all 0.3s;
  font-family: "GenYoGothic TW", "Microsoft JhengHei", sans-serif;
}

.tab-btn:hover {
  background-color: #e8e8e8;
}

.tab-btn.active {
  background-color: #fff;
  color: #534741;
  font-weight: bold;
  border-bottom: 3px solid #534741;
}

.navbar-actions {
  display: flex;
  align-items: center;
  gap: 15px;
}

.search-box {
  position: relative;
}

.search-input {
  padding: 8px 15px;
  border: 2px solid #e3d9cd;
  border-radius: 20px;
  font-size: 14px;
  width: 250px;
  transition: border-color 0.3s;
  font-family: "GenYoGothic TW", "Microsoft JhengHei", sans-serif;
}

.search-input:focus {
  outline: none;
  border-color: #534741;
}

.add-btn {
  padding: 8px 20px;
  background-color: #2196F3;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  transition: background-color 0.3s;
  font-family: "GenYoGothic TW", "Microsoft JhengHei", sans-serif;
}

.add-btn:hover {
  background-color: #1976D2;
}
</style>


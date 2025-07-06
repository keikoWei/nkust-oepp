<template>
    <div>
      <!-- 法規彙編標題 -->
      <div class="page-header">
        <h1>法規彙編</h1>
        <div class="department-nav">
          <router-link to="/regulations/oepp" :class="['nav-item', { active: activeTab === 'oepp' }]">
            處本部
          </router-link>
          <span class="nav-separator">|</span>
          <router-link to="/regulations/eec" :class="['nav-item', { active: activeTab === 'eec' }]">
            教育推廣中心
          </router-link>
          <span class="nav-separator">|</span>
          <router-link to="/regulations/ppc" :class="['nav-item', { active: activeTab === 'ppc' }]">
            產品推廣中心
          </router-link>
          <span class="nav-separator">|</span>
          <router-link to="/regulations/epc" :class="['nav-item', { active: activeTab === 'epc' }]">
            會展及出版中心
          </router-link>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  defineProps({
    activeTab: {
      type: String,
      required: true,
      validator: (value) => ['oepp', 'eec', 'ppc', 'epc'].includes(value)
    }
  })
  </script>
  
  <style scoped>
  /* 頁面標題區域 */
  .page-header {
    text-align: center;
    margin-bottom: 2rem;
  }
  
  .page-header h1 {
    font-size: 30pt;
    color: #333;
    margin: 0 0 1.3rem 0;
    font-weight: normal;
  }
  
  .department-nav {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.7rem;
    background: #ffffff;
    padding: 0.3rem;
  }
  
  .nav-item {
    padding: 0.5rem 0.7rem;
    text-decoration: none;
    color: #666;
    font-size: 21.5pt;
    font-family: "GenYoGothic TW", "源樣黑體月", "Microsoft JhengHei", sans-serif;
    font-weight: normal;
    transition: all 0.3s ease;
  }
  
  .nav-item.active {
    color: #333;
    font-family: "GenYoGothic TW", "源樣黑體月", "Microsoft JhengHei", sans-serif;
    font-weight: 900;
    letter-spacing: 0.3px;
  }
  
  .nav-item:not(.active):hover {
    color: #3f5963;
  }
  
  .nav-separator {
    color: #000000;
    font-size: 11pt;
    font-weight: normal;
  }
  
  /* 移除頂部圖片樣式，圖片現在獨立在頁面中 */
  </style> 
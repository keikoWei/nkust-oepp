<template>
  <!-- Header區域 -->
  <header class="custom-header">
    <div class="header-top">
      <div class="content-wrapper">
        <div class="logo">
          <RouterLink to="/" custom v-slot="{ navigate }">
            <img src="/image/oepp.png" alt="高科大教推處" @click="navigate" style="cursor: pointer;" />
          </RouterLink>
        </div>
        <div class="right-section">
          <button class="school-home-btn" @click="openSchoolHome">
            學校首頁
          </button>
        </div>
      </div>
    </div>
    <div class="nav-container">
      <div class="content-wrapper">
        <nav class="custom-nav-bg">
          <div class="navigation-group">
            <div class="nav-dropdown" @mouseenter="showDropdown = true" @mouseleave="showDropdown = false">
              <button class="nav-btn dropdown-btn" @click="goToProductCenter">
                產品推廣中心
                <span class="dropdown-arrow">▼</span>
              </button>
              <div class="dropdown-menu" v-show="showDropdown">
                <RouterLink to="/about/members/ppc" @click="closeDropdown">
                  <div class="dropdown-item">人事介紹</div>
                </RouterLink>
              </div>
            </div>
            
            <a href="https://dkshop2020.cyberbiz.co/" target="_blank" class="nav-btn">
              DK/SHOP 高科精品
            </a>
            
            <RouterLink to="/productCenter/news" class="nav-btn">
              最新消息
            </RouterLink>
            
            <RouterLink to="/productCenter/activity" class="nav-btn">
              活動資訊
            </RouterLink>
            
            <RouterLink to="/download/ppc" class="nav-btn">
              下載專區
            </RouterLink>
            
            <RouterLink to="/regulations/ppc" class="nav-btn">
              法規
            </RouterLink>
            
            <a href="https://souvenir.nkust.edu.tw/" target="_blank" class="nav-btn">
              請領系統
            </a>
        
          </div>
        </nav>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'
import { RouterLink, useRouter } from 'vue-router'

// 下拉選單狀態
const showDropdown = ref(false)
const router = useRouter()

const closeDropdown = () => {
  showDropdown.value = false
}

const goToProductCenter = () => {
  router.push('/productCenter')
}

const openSchoolHome = () => {
  window.open('https://www.nkust.edu.tw/', '_blank')
}
</script>

<style scoped>
/* Header 樣式 */
.custom-header {
  background-color: transparent;
  position: relative;
  z-index: 2000;
  margin-bottom: 0;
  padding: 0;
}

/* 頂部樣式 */
.header-top {
  background-color: #fff;
  padding: 10px 0;
  margin-bottom: 0;
}

.header-top .content-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo img {
  height: 120px;
}

/* 學校首頁按鈕樣式 */
.school-home-btn {
  font-size: 26pt;
  font-family: "GenYoGothic TW", "源樣夜黑體", "Microsoft JhengHei", sans-serif;
  font-weight: normal;
  background: none;
  border: none;
  color: black;
  cursor: pointer;
  text-decoration: none;
}

/* 導航欄容器 */
.nav-container {
  background-color: #ffffff;
  margin-bottom: 0;
  margin-top: 0;
  display: flex;
  justify-content: center;
  width: 100%;
}

/* PPC專用導航欄樣式 - 基礎顏色：#f2eacc */
.custom-nav-bg {
  background-color: #f2eacc;
  width: 100vw;
  max-width: 100%;
  margin: 0 auto;
}

.navigation-group {
  width: 70vw;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
}

.nav-btn {
  color: #333;
  font-size: 26pt;
  padding: 23px 10px;
  margin: 0 5px;
  text-decoration: none;
  background: none;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s;
  font-family: "GenYoGothic TW", "源樣夜黑體", "Microsoft JhengHei", sans-serif;
  font-weight: normal;
  display: flex;
  align-items: center;
}

/* PPC導航欄hover效果 - hover顏色：#e3d496 */
.nav-btn:hover,
.nav-btn.router-link-active {
  background-color: #e3d496;
}

/* 下拉選單樣式 */
.nav-dropdown {
  position: relative;
}

.dropdown-btn {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.dropdown-arrow {
  font-size: 14pt;
  transition: transform 0.3s;
}

.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  background-color: #e3d496;
  min-width: 200px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.2);
  z-index: 3000;
}

.dropdown-menu a {
  text-decoration: none !important;
}

.dropdown-item {
  color: #333;
  font-size: 24pt;
  padding: 15px 20px;
  font-family: "GenYoGothic TW", "源樣夜黑體", "Microsoft JhengHei", sans-serif;
  cursor: pointer;
  transition: background-color 0.3s;
  text-decoration: none !important;
  text-align: center;
  white-space: nowrap;
}

.dropdown-item:hover {
  background-color: rgba(0, 0, 0, 0.1);
}

/* 下拉選單hover效果 */
.nav-dropdown:hover .nav-btn,
.nav-dropdown:hover .dropdown-menu {
  background-color: #e3d496;
}

/* 容器樣式 */
.content-wrapper {
  width: 70vw;
  max-width: 100%;
  margin: 0 auto;
}

.nav-container .content-wrapper {
  width: 70vw;
  max-width: 100%;
  margin: 0;
}
</style> 
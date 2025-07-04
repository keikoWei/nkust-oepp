<template>
  <header class="app-header">
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
            <div class="nav-dropdown">
              <button class="nav-btn dropdown-btn" @click="toggleDropdown">
                關於我們
                <span class="dropdown-arrow">▼</span>
              </button>
              <div class="dropdown-menu" v-show="showDropdown">
                <RouterLink to="/about/intro" @click="closeDropdown">
                  <div class="dropdown-item">中心簡介</div>
                </RouterLink>
                <RouterLink to="/about/members/oepp" @click="closeDropdown">
                  <div class="dropdown-item">人事介紹</div>
                </RouterLink>
              </div>
            </div>
            
            <RouterLink to="/educationCenter" class="nav-btn">
              教育推廣中心
            </RouterLink>
            
            <RouterLink to="/productCenter" class="nav-btn">
              產品推廣中心
            </RouterLink>
            
            <RouterLink to="/publication" class="nav-btn">
              會展及出版中心
            </RouterLink>
            
            <RouterLink to="/regulations/oepp" class="nav-btn">
              法規彙編
            </RouterLink>
            
            <RouterLink to="/download/oepp" class="nav-btn">
              下載專區
            </RouterLink>
          </div>
        </nav>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

// 下拉選單狀態
const showDropdown = ref(false)

const toggleDropdown = () => {
  showDropdown.value = !showDropdown.value
}

const closeDropdown = () => {
  showDropdown.value = false
}

const openSchoolHome = () => {
  window.open('https://www.nkust.edu.tw/', '_blank')
}
</script>

<style scoped>
.app-header {
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
  height: 80px;
}

/* 學校首頁按鈕樣式 */
.school-home-btn {
  font-size: 17.5pt;
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

/* 導航欄樣式 */
.custom-nav-bg {
  background-color: #3f5963;
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
  color: #fff;
  font-size: 17.5pt;
  padding: 15px 7px;
  margin: 0 3px;
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

.nav-btn:hover,
.nav-btn.router-link-active {
  background-color: rgba(0, 0, 0, 0.2);
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
  font-size: 9.5pt;
  transition: transform 0.3s;
}

.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
  background-color: #86a8ab;
  min-width: 134px;
  box-shadow: 0 1.5px 5.5px rgba(0,0,0,0.2);
  z-index: 3000;
}

.dropdown-menu a {
  text-decoration: none !important;
}

.dropdown-item {
  color: #fff;
  font-size: 16pt;
  padding: 10px 13.5px;
  font-family: "GenYoGothic TW", "源樣夜黑體", "Microsoft JhengHei", sans-serif;
  cursor: pointer;
  transition: background-color 0.3s;
  text-decoration: none !important;
}

.dropdown-item:hover {
  background-color: rgba(255, 255, 255, 0.1);
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
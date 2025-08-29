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
          <!-- 手機版漢堡選單按鈕 -->
          <button class="mobile-menu-btn" @click="toggleMobileMenu">
            <span class="hamburger-line"></span>
            <span class="hamburger-line"></span>
            <span class="hamburger-line"></span>
          </button>
          <!-- 桌面版學校首頁按鈕 -->
          <button class="school-home-btn desktop-only" @click="openSchoolHome">
            學校首頁
          </button>
        </div>
      </div>
    </div>
    
    <!-- 手機版下拉選單 -->
    <div class="mobile-nav-overlay" v-show="showMobileMenu" @click="closeMobileMenu">
      <div class="mobile-nav-menu" @click.stop>
        <div class="mobile-nav-header">
          <button class="mobile-nav-close" @click="closeMobileMenu">×</button>
        </div>
        <nav class="mobile-nav-content">
          <div class="mobile-nav-item">
            <button class="mobile-nav-btn" @click="toggleMobileDropdown">
              關於我們
              <span class="mobile-dropdown-arrow" :class="{ 'open': showMobileDropdown }">▼</span>
            </button>
            <div class="mobile-dropdown-menu" v-show="showMobileDropdown">
              <RouterLink to="/about/intro" @click="closeMobileMenu" class="mobile-dropdown-item">
                中心簡介
              </RouterLink>
              <RouterLink to="/about/members/oepp" @click="closeMobileMenu" class="mobile-dropdown-item">
                人事介紹
              </RouterLink>
            </div>
          </div>
          
          <RouterLink to="/educationCenter" class="mobile-nav-btn" @click="closeMobileMenu">
            教育推廣中心
          </RouterLink>
          
          <RouterLink to="/productCenter" class="mobile-nav-btn" @click="closeMobileMenu">
            產品推廣中心
          </RouterLink>
          
          <RouterLink to="/publication" class="mobile-nav-btn" @click="closeMobileMenu">
            會展及出版中心
          </RouterLink>
          
          <a href="https://oom.nkust.edu.tw/" target="_blank" class="mobile-nav-btn">
            經營管理中心
          </a>
          
          <RouterLink to="/regulations/oepp" class="mobile-nav-btn" @click="closeMobileMenu">
            法規彙編
          </RouterLink>
          
          <RouterLink to="/download/oepp" class="mobile-nav-btn" @click="closeMobileMenu">
            下載專區
          </RouterLink>
          
          <button class="mobile-nav-btn mobile-school-btn" @click="openSchoolHome">
            學校首頁
          </button>
        </nav>
      </div>
    </div>
    
    <!-- 桌面版導航 -->
    <div class="nav-container desktop-only">
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
            
            <a href="https://oom.nkust.edu.tw/" target="_blank" class="nav-btn">
              經營管理中心
            </a>
            
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

// 桌面版下拉選單狀態
const showDropdown = ref(false)

// 手機版選單狀態
const showMobileMenu = ref(false)
const showMobileDropdown = ref(false)

const toggleDropdown = () => {
  showDropdown.value = !showDropdown.value
}

const closeDropdown = () => {
  showDropdown.value = false
}

const toggleMobileMenu = () => {
  showMobileMenu.value = !showMobileMenu.value
  // 關閉手機版選單時，同時關閉下拉選單
  if (!showMobileMenu.value) {
    showMobileDropdown.value = false
  }
}

const closeMobileMenu = () => {
  showMobileMenu.value = false
  showMobileDropdown.value = false
}

const toggleMobileDropdown = () => {
  showMobileDropdown.value = !showMobileDropdown.value
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

/* 手機版漢堡選單按鈕 */
.mobile-menu-btn {
  display: none;
  flex-direction: column;
  justify-content: space-around;
  width: 30px;
  height: 25px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
}

.hamburger-line {
  display: block;
  height: 3px;
  width: 100%;
  background-color: #3f5963;
  border-radius: 1.5px;
  transition: all 0.3s ease;
}

/* 手機版選單覆蓋層 */
.mobile-nav-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 9999;
  display: none;
}

.mobile-nav-menu {
  position: fixed;
  top: 0;
  right: 0;
  width: 280px;
  height: 100%;
  background: #3f5963;
  box-shadow: -2px 0 10px rgba(0, 0, 0, 0.1);
  transform: translateX(100%);
  animation: slideIn 0.3s ease forwards;
}

@keyframes slideIn {
  to {
    transform: translateX(0);
  }
}

.mobile-nav-header {
  display: flex;
  justify-content: flex-end;
  padding: 1rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
}

.mobile-nav-close {
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: #fff;
}

.mobile-nav-content {
  padding: 1rem 0;
}

.mobile-nav-item {
  margin-bottom: 0.5rem;
}

.mobile-nav-btn {
  display: block;
  width: 100%;
  padding: 12px 20px;
  text-align: left;
  background: none;
  border: none;
  color: #fff;
  font-size: 16px;
  text-decoration: none;
  cursor: pointer;
  transition: background-color 0.3s;
  font-family: "GenYoGothic TW", "源樣夜黑體", "Microsoft JhengHei", sans-serif;
}

.mobile-nav-btn:hover {
  background-color: rgba(255, 255, 255, 0.1);
}

.mobile-dropdown-arrow {
  float: right;
  transition: transform 0.3s;
}

.mobile-dropdown-arrow.open {
  transform: rotate(180deg);
}

.mobile-dropdown-menu {
  background-color: rgba(255, 255, 255, 0.1);
}

.mobile-dropdown-item {
  display: block;
  padding: 10px 30px;
  color: #fff;
  text-decoration: none;
  font-size: 14px;
  border-left: 3px solid transparent;
  transition: all 0.3s;
}

.mobile-dropdown-item:hover {
  background-color: rgba(255, 255, 255, 0.2);
  border-left-color: #fff;
}

.mobile-school-btn {
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  margin-top: 1rem;
  color: #fff;
  font-weight: bold;
}

/* 手機版樣式 */
@media (max-width: 480px) {
  .content-wrapper {
    width: 100%;
    padding: 0 1rem;
  }
  
  .header-top .content-wrapper {
    padding: 0 1rem;
  }

  .logo img {
    height: 35px;
  }

  .mobile-menu-btn {
    display: flex;
  }

  .desktop-only {
    display: none !important;
  }

  .mobile-nav-overlay {
    display: block;
  }
}
</style> 
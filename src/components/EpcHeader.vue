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
              會展及出版中心
              <span class="mobile-dropdown-arrow" :class="{ 'open': showMobileDropdown }">▼</span>
            </button>
            <div class="mobile-dropdown-menu" v-show="showMobileDropdown">
              <RouterLink to="/exhibitionCenter/introduction" @click="closeMobileMenu" class="mobile-dropdown-item">
                中心簡介
              </RouterLink>
              <RouterLink to="/about/members/epc" @click="closeMobileMenu" class="mobile-dropdown-item">
                人員介紹
              </RouterLink>
            </div>
          </div>
          
          <RouterLink to="/exhibitionCenter/seminar" class="mobile-nav-btn" @click="closeMobileMenu">
            辦理研討會協助
          </RouterLink>
          
          <RouterLink to="/exhibitionCenter/activity" class="mobile-nav-btn" @click="closeMobileMenu">
            委辦活動申請
          </RouterLink>
          
          <RouterLink to="/exhibitionCenter/achievement/university-ceremony" class="mobile-nav-btn" @click="closeMobileMenu">
            成果實績
          </RouterLink>
          
          <RouterLink to="/exhibitionCenter/publications" class="mobile-nav-btn" @click="closeMobileMenu">
            相關出版品
          </RouterLink>
          
          <RouterLink to="/regulations/epc" class="mobile-nav-btn" @click="closeMobileMenu">
            法規
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
            <div class="nav-dropdown" @mouseenter="showDropdown = true" @mouseleave="showDropdown = false">
              <button class="nav-btn dropdown-btn" @click="goToExhibitionCenter">
                會展及出版中心
                <span class="dropdown-arrow">▼</span>
              </button>
              <div class="dropdown-menu" v-show="showDropdown">
                <RouterLink to="/exhibitionCenter/introduction" @click="closeDropdown">
                  <div class="dropdown-item">中心簡介</div>
                </RouterLink>
                <RouterLink to="/about/members/epc" @click="closeDropdown">
                  <div class="dropdown-item">人員介紹</div>
                </RouterLink>
              </div>
            </div>
            
            <RouterLink to="/exhibitionCenter/seminar" class="nav-btn">
              辦理研討會協助
            </RouterLink>
            
            <RouterLink to="/exhibitionCenter/activity" class="nav-btn">
              委辦活動申請
            </RouterLink>
            
            <RouterLink to="/exhibitionCenter/achievement/university-ceremony" class="nav-btn">
              成果實績
            </RouterLink>
            
            <RouterLink to="/exhibitionCenter/publications" class="nav-btn">
              相關出版品
            </RouterLink>
            
            <RouterLink to="/regulations/epc" class="nav-btn">
              法規
            </RouterLink>
        
          </div>
        </nav>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'
import { RouterLink, useRouter } from 'vue-router'

// 桌面版下拉選單狀態
const showDropdown = ref(false)
const router = useRouter()

// 手機版選單狀態
const showMobileMenu = ref(false)
const showMobileDropdown = ref(false)

const closeDropdown = () => {
  showDropdown.value = false
}

const toggleMobileMenu = () => {
  showMobileMenu.value = !showMobileMenu.value
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

const goToExhibitionCenter = () => {
  router.push('/publication')
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

.content-wrapper {
  width: 70vw;
  max-width: 100%;
  margin: 0 auto;
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
  color: #3e3b3a;
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

/* EPC專用導航欄樣式 - 基礎顏色：#aebeba (深綠色) */
.custom-nav-bg {
  background-color: #aebeba;
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
  color: #3e3b3a;
  font-size: clamp(13.33px, calc(13.33px + (100vw - 700px) * 10 / 1200), 23.33px);
  padding: 15px 10px;
  margin: 0 4px;
  text-decoration: none;
  background: none;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s;
  font-family: "GenYoGothic TW", "源樣夜黑體", "Microsoft JhengHei", sans-serif;
  font-weight: normal;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 120px;
}

/* EPC導航欄hover效果 - hover顏色：#839e8d */
.nav-btn:hover,
.nav-btn.router-link-active {
  background-color: #839e8d;
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
  color: #3e3b3a;
}

.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  background-color: #839e8d;
  min-width: 134px;
  box-shadow: 0 2.5px 8px rgba(0,0,0,0.15);
  z-index: 3000;
  overflow: hidden;
  border: 1px solid #6d8a76;
}

.dropdown-menu a {
  text-decoration: none !important;
}

.dropdown-item {
  padding: 8px 13px;
  color: #3e3b3a;
  font-size: clamp(12px, calc(12px + (100vw - 700px) * 2.67 / 1200), 14.67px);
  cursor: pointer;
  transition: background-color 0.3s;
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);
  text-align: center;
  display: block;
  font-weight: normal;
}

.dropdown-item:last-child {
  border-bottom: none;
}

.dropdown-item:hover {
  background-color: #aebeba;
  color: #3e3b3a;
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
  background-color: #3e3b3a;
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
  background: #839e8d;
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
  border-bottom: 1px solid rgba(62, 59, 58, 0.2);
}

.mobile-nav-close {
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: #3e3b3a;
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
  color: #3e3b3a;
  font-size: 16px;
  text-decoration: none;
  cursor: pointer;
  transition: background-color 0.3s;
  font-family: "GenYoGothic TW", "源樣夜黑體", "Microsoft JhengHei", sans-serif;
}

.mobile-nav-btn:hover {
  background-color: rgba(62, 59, 58, 0.1);
}

.mobile-dropdown-arrow {
  float: right;
  transition: transform 0.3s;
}

.mobile-dropdown-arrow.open {
  transform: rotate(180deg);
}

.mobile-dropdown-menu {
  background-color: rgba(62, 59, 58, 0.1);
}

.mobile-dropdown-item {
  display: block;
  padding: 10px 30px;
  color: #3e3b3a;
  text-decoration: none;
  font-size: 14px;
  border-left: 3px solid transparent;
  transition: all 0.3s;
}

.mobile-dropdown-item:hover {
  background-color: rgba(62, 59, 58, 0.2);
  border-left-color: #3e3b3a;
}

.mobile-school-btn {
  border-top: 1px solid rgba(62, 59, 58, 0.2);
  margin-top: 1rem;
  color: #3e3b3a;
  font-weight: bold;
}

/* 響應式設計 */
@media (max-width: 1200px) {
  .navigation-group {
    width: 90vw;
    padding: 0 0.7rem;
  }
  
  .nav-btn {
    font-size: 13.5pt;
    padding: 13px 5px;
    margin: 0 1px;
  }
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
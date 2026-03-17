<template>
  <header class="com-header">
    <div class="header-top">
      <div class="content-wrapper">
        <div class="logo">
          <RouterLink to="/" custom v-slot="{ navigate }">
            <img src="/image/oepp.png" alt="高科大教推處" @click="navigate" style="cursor: pointer;" />
          </RouterLink>
        </div>
        <div class="right-section">
          <button class="mobile-menu-btn" @click="toggleMobileMenu" aria-label="選單">
            <span class="hamburger-line"></span>
            <span class="hamburger-line"></span>
            <span class="hamburger-line"></span>
          </button>
          <button class="school-home-btn desktop-only" @click="openSchoolHome">
            學校首頁
          </button>
        </div>
      </div>
    </div>

    <!-- 手機版選單 -->
    <div class="mobile-nav-overlay" v-show="showMobileMenu" @click="closeMobileMenu">
      <div class="mobile-nav-menu" @click.stop>
        <div class="mobile-nav-header">
          <button class="mobile-nav-close" @click="closeMobileMenu">×</button>
        </div>
        <nav class="mobile-nav-content">
          <div class="mobile-nav-item">
            <button class="mobile-nav-btn" @click="toggleMobileDropdown('center')">
              經營管理中心
              <span class="mobile-dropdown-arrow" :class="{ open: openMobileDropdown === 'center' }">▼</span>
            </button>
            <div class="mobile-dropdown-menu" v-show="openMobileDropdown === 'center'">
              <RouterLink to="/managementCenter/introduction" @click="closeMobileMenu" class="mobile-dropdown-item">中心簡介</RouterLink>
              <RouterLink to="/about/members/com" @click="closeMobileMenu" class="mobile-dropdown-item">人事介紹</RouterLink>
            </div>
          </div>
          <RouterLink to="/managementCenter/news" class="mobile-nav-btn" @click="closeMobileMenu">最新消息</RouterLink>
          <div class="mobile-nav-item">
            <button class="mobile-nav-btn" @click="toggleMobileDropdown('regulation')">
              主管法規
              <span class="mobile-dropdown-arrow" :class="{ open: openMobileDropdown === 'regulation' }">▼</span>
            </button>
            <div class="mobile-dropdown-menu" v-show="openMobileDropdown === 'regulation'">
              <RouterLink to="/regulations/com" @click="closeMobileMenu" class="mobile-dropdown-item">外部提供</RouterLink>
              <RouterLink to="/regulations/com" @click="closeMobileMenu" class="mobile-dropdown-item">校內規定</RouterLink>
            </div>
          </div>
          <div class="mobile-nav-item">
            <button class="mobile-nav-btn" @click="toggleMobileDropdown('download')">
              下載專區
              <span class="mobile-dropdown-arrow" :class="{ open: openMobileDropdown === 'download' }">▼</span>
            </button>
            <div class="mobile-dropdown-menu" v-show="openMobileDropdown === 'download'">
              <RouterLink to="/download/com" @click="closeMobileMenu" class="mobile-dropdown-item">表格下載</RouterLink>
            </div>
          </div>
          <RouterLink to="/managementCenter/links" class="mobile-nav-btn" @click="closeMobileMenu">相關連結</RouterLink>
          <RouterLink to="/managementCenter/contact" class="mobile-nav-btn" @click="closeMobileMenu">聯絡我們</RouterLink>
          <button class="mobile-nav-btn mobile-school-btn" @click="openSchoolHome">學校首頁</button>
        </nav>
      </div>
    </div>

    <!-- 桌面版導航：深棕色主列 #6B574F、子選單淺棕 #8C776D、文字白色 -->
    <div class="nav-container desktop-only">
      <div class="content-wrapper">
        <nav class="com-nav-bg">
          <div class="navigation-group">
            <div class="nav-dropdown" @mouseenter="showDropdown = 'center'" @mouseleave="showDropdown = null">
              <button class="nav-btn dropdown-btn" @click="goToManagementCenter">
                經營管理中心
                <span class="dropdown-arrow">▼</span>
              </button>
              <div class="dropdown-menu" v-show="showDropdown === 'center'">
                <RouterLink to="/managementCenter/introduction" @click="closeDropdown">
                  <div class="dropdown-item">中心簡介</div>
                </RouterLink>
                <RouterLink to="/about/members/com" @click="closeDropdown">
                  <div class="dropdown-item">人事介紹</div>
                </RouterLink>
              </div>
            </div>
            <RouterLink to="/managementCenter/news" class="nav-btn">最新消息</RouterLink>
            <div class="nav-dropdown" @mouseenter="showDropdown = 'regulation'" @mouseleave="showDropdown = null">
              <button class="nav-btn dropdown-btn">主管法規 <span class="dropdown-arrow">▼</span></button>
              <div class="dropdown-menu" v-show="showDropdown === 'regulation'">
                <RouterLink to="/regulations/com" @click="closeDropdown">
                  <div class="dropdown-item">外部提供</div>
                </RouterLink>
                <RouterLink to="/regulations/com" @click="closeDropdown">
                  <div class="dropdown-item">校內規定</div>
                </RouterLink>
              </div>
            </div>
            <div class="nav-dropdown" @mouseenter="showDropdown = 'download'" @mouseleave="showDropdown = null">
              <button class="nav-btn dropdown-btn">下載專區 <span class="dropdown-arrow">▼</span></button>
              <div class="dropdown-menu" v-show="showDropdown === 'download'">
                <RouterLink to="/download/com" @click="closeDropdown">
                  <div class="dropdown-item">表格下載</div>
                </RouterLink>
              </div>
            </div>
            <RouterLink to="/managementCenter/links" class="nav-btn">相關連結</RouterLink>
            <RouterLink to="/managementCenter/contact" class="nav-btn">聯絡我們</RouterLink>
          </div>
        </nav>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'
import { RouterLink, useRouter } from 'vue-router'

const router = useRouter()
const showDropdown = ref(null)
const showMobileMenu = ref(false)
const openMobileDropdown = ref(null)

const closeDropdown = () => {
  showDropdown.value = null
}

function toggleMobileDropdown(key) {
  openMobileDropdown.value = openMobileDropdown.value === key ? null : key
}

const toggleMobileMenu = () => {
  showMobileMenu.value = !showMobileMenu.value
  if (!showMobileMenu.value) openMobileDropdown.value = null
}

const closeMobileMenu = () => {
  showMobileMenu.value = false
  openMobileDropdown.value = null
}

const goToManagementCenter = () => {
  router.push('/managementCenter')
}

const openSchoolHome = () => {
  window.open('https://www.nkust.edu.tw/', '_blank')
}
</script>

<style scoped>
.com-header {
  background-color: transparent;
  position: relative;
  z-index: 2000;
  margin-bottom: 0;
  padding: 0;
}

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

.school-home-btn {
  font-size: 17.5pt;
  font-family: "GenYoGothic TW", "源樣夜黑體", "Microsoft JhengHei", sans-serif;
  font-weight: normal;
  background: none;
  border: none;
  color: #333;
  cursor: pointer;
}

.nav-container {
  background-color: #fff;
  margin-bottom: 0;
  margin-top: 0;
  display: flex;
  justify-content: center;
  width: 100%;
}

/* 經營管理中心主導航：深棕色 #6B574F、文字白色 */
.com-nav-bg {
  background-color: #6B574F;
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
  font-size: clamp(13.33px, calc(13.33px + (100vw - 700px) * 10 / 1200), 23.33px);
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
  background-color: rgba(255, 255, 255, 0.15);
}

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
  color: #fff;
}

/* 子選單：淺棕色 #8C776D、文字白色 */
.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  background-color: #8C776D;
  min-width: 134px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  z-index: 3000;
}

.dropdown-menu a {
  text-decoration: none !important;
}

.dropdown-item {
  color: #fff;
  font-size: clamp(13.33px, calc(13.33px + (100vw - 700px) * 8 / 1200), 21.33px);
  padding: 10px 13.5px;
  font-family: "GenYoGothic TW", "源樣夜黑體", "Microsoft JhengHei", sans-serif;
  cursor: pointer;
  transition: background-color 0.3s;
  text-decoration: none !important;
  text-align: center;
  white-space: nowrap;
}

.dropdown-item:hover {
  background-color: rgba(255, 255, 255, 0.15);
}

/* 手機版 */
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
  background-color: #333;
  border-radius: 1.5px;
}

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
  background: #6B574F;
  box-shadow: -2px 0 10px rgba(0, 0, 0, 0.2);
  transform: translateX(100%);
  animation: comSlideIn 0.3s ease forwards;
}

@keyframes comSlideIn {
  to { transform: translateX(0); }
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
  background-color: #8C776D;
}

.mobile-dropdown-item {
  display: block;
  padding: 10px 30px;
  color: #fff;
  text-decoration: none;
  font-size: 14px;
}

.mobile-dropdown-item:hover {
  background-color: rgba(255, 255, 255, 0.15);
}

.mobile-school-btn {
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  margin-top: 1rem;
  font-weight: bold;
}

.nav-container .content-wrapper {
  width: 70vw;
  max-width: 100%;
  margin: 0;
}

@media (max-width: 480px) {
  .content-wrapper {
    width: 100%;
    padding: 0 1rem;
  }
  .header-top .content-wrapper {
    padding: 0 1rem;
    width: 100%;
    margin: 0;
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

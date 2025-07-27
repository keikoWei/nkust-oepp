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
              <button class="nav-btn dropdown-btn" @click="goToExhibitionCenter">
                會展及出版中心
                <span class="dropdown-arrow">▼</span>
              </button>
              <div class="dropdown-menu" v-show="showDropdown">
                <RouterLink to="/exhibitionCenter/introduction" @click="closeDropdown">
                  <div class="dropdown-item">中心簡介</div>
                </RouterLink>
                <RouterLink to="/about/members/epc" @click="closeDropdown">
                  <div class="dropdown-item">人事介紹</div>
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

// 下拉選單狀態
const showDropdown = ref(false)
const router = useRouter()

const closeDropdown = () => {
  showDropdown.value = false
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
  font-size: 11pt;
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

@media (max-width: 768px) {
  .header-top .content-wrapper {
    width: 95vw;
  }
  
  .logo img {
    height: 54px;
  }
  
  .school-home-btn {
    font-size: 12pt;
  }
  
  .navigation-group {
    flex-direction: column;
    gap: 5px;
    padding: 0.7rem;
    width: 100%;
  }
  
  .nav-btn {
    font-size: 11pt;
    padding: 8px 11px;
    width: 100%;
    text-align: center;
    justify-content: center;
  }
  
  .nav-dropdown {
    width: 100%;
  }
  
  .dropdown-btn {
    width: 100%;
    justify-content: center;
  }
  
  .dropdown-menu {
    position: static;
    transform: none;
    width: 100%;
    margin-top: 5px;
  }
  
  .dropdown-item {
    font-size: 9.5pt;
    padding: 7px 11px;
  }
}
</style> 
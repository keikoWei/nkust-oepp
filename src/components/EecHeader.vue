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
              <button class="nav-btn dropdown-btn" @click="goToEducationCenter">
                教育推廣中心
                <span class="dropdown-arrow">▼</span>
              </button>
              <div class="dropdown-menu" v-show="showDropdown">
                <RouterLink to="/educationCenter/introduction" @click="closeDropdown">
                  <div class="dropdown-item">中心簡介</div>
                </RouterLink>
                <RouterLink to="/about/members/eec" @click="closeDropdown">
                  <div class="dropdown-item">人事介紹</div>
                </RouterLink>
                <a href="https://lin.ee/8VXsGdK" target="_blank" @click="closeDropdown">
                  <div class="dropdown-item">線上客服</div>
                </a>
              </div>
            </div>
            
            <a href="https://cec.nkust.edu.tw/CurriculumList.aspx" target="_blank" class="nav-btn">
              線上報名
            </a>
            
            <RouterLink to="/educationCenter/courseAnnouncement" class="nav-btn">
              課程公告
            </RouterLink>
            
            <div class="nav-dropdown" @mouseenter="showPaymentDropdown = true" @mouseleave="showPaymentDropdown = false">
              <button class="nav-btn dropdown-btn">
                繳費專區
                <span class="dropdown-arrow">▼</span>
              </button>
              <div class="dropdown-menu" v-show="showPaymentDropdown">
                <a href="https://newsch.tbb.com.tw/cpb1/index.aspx" target="_blank" @click="closeDropdown">
                  <div class="dropdown-item bank-payment">台企銀代收繳費網</div>
                </a>
                <RouterLink to="/educationCenter/payment/process" @click="closeDropdown">
                  <div class="dropdown-item">繳費流程</div>
                </RouterLink>
                <RouterLink to="/educationCenter/payment/refund" @click="closeDropdown">
                  <div class="dropdown-item">退費規定</div>
                </RouterLink>
              </div>
            </div>
            
            <RouterLink to="/educationCenter/seniorCitizensUniversity" class="nav-btn">
              樂齡大學
            </RouterLink>
            
            <div class="nav-dropdown" @mouseenter="showDownloadDropdown = true" @mouseleave="showDownloadDropdown = false">
              <button class="nav-btn dropdown-btn">
                下載專區
                <span class="dropdown-arrow">▼</span>
              </button>
              <div class="dropdown-menu" v-show="showDownloadDropdown">
                <RouterLink to="/download/eec" @click="closeDropdown">
                  <div class="dropdown-item">章則下載</div>
                </RouterLink>
                <RouterLink to="/download/eec" @click="closeDropdown">
                  <div class="dropdown-item">表單下載</div>
                </RouterLink>
              </div>
            </div>
            
            <div class="nav-dropdown" @mouseenter="showFaqDropdown = true" @mouseleave="showFaqDropdown = false">
              <button class="nav-btn dropdown-btn">
                常見問題
                <span class="dropdown-arrow">▼</span>
              </button>
              <div class="dropdown-menu" v-show="showFaqDropdown">
                <RouterLink to="/educationCenter/faq/training" @click="closeDropdown">
                  <div class="dropdown-item">委訓計畫</div>
                </RouterLink>
                <RouterLink to="/educationCenter/faq/educationRelated" @click="closeDropdown">
                  <div class="dropdown-item">教育相關</div>
                </RouterLink>
              </div>
            </div>
        
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
const showPaymentDropdown = ref(false)
const showDownloadDropdown = ref(false)
const showFaqDropdown = ref(false)
const router = useRouter()

const closeDropdown = () => {
  showDropdown.value = false
  showPaymentDropdown.value = false
  showDownloadDropdown.value = false
  showFaqDropdown.value = false
}

const goToEducationCenter = () => {
  router.push('/educationCenter')
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
  color: #534741;
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

/* EEC專用導航欄樣式 - 基礎顏色：#f2ede8 */
.custom-nav-bg {
  background-color: #f2ede8;
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
  color: #534741;
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

/* EEC導航欄hover效果 - hover顏色：#e3d9cd */
.nav-btn:hover,
.nav-btn.router-link-active {
  background-color: #e3d9cd;
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
  color: #534741;
}

.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  background-color: #e3d9cd;
  min-width: 134px;
  box-shadow: 0 2.5px 8px rgba(0,0,0,0.15);
  z-index: 3000;
  overflow: hidden;
  border: 1px solid #d4c7bb;
}

.dropdown-menu a {
  text-decoration: none !important;
}

.dropdown-item {
  padding: 8px 13px;
  color: #534741;
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
  background-color: #d4c7bb;
  color: #534741;
}

/* 台企銀代收繳費網特殊樣式 - 縮小字體以單排顯示 */
.dropdown-item.bank-payment {
  font-size: 9.5pt;
  letter-spacing: -0.3px;
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
  
  .dropdown-item.bank-payment {
    font-size: 8pt;
    letter-spacing: -0.2px;
  }
}
</style> 
<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated class="custom-header" fixed>
      <div class="header-top">
        <div class="content-wrapper">
          <div class="logo">
            <RouterLink to="/" custom v-slot="{ navigate }">
              <img src="/image/oepp.png" alt="高科大教推處" @click="navigate" style="cursor: pointer;" />
            </RouterLink>
          </div>
          <div class="right-section">
            <q-btn flat no-caps color="black" label="學校首頁" 
                   href="https://www.nkust.edu.tw/" 
                   target="_blank" 
                   class="school-home-btn"
                   style="border: none; background: none; text-decoration: none;" />
          </div>
        </div>
      </div>
      <div class="nav-container">
        <div class="content-wrapper">
          <q-toolbar class="bg-primary custom-nav-bg">
            <q-btn-group flat class="navigation-group">
              <q-btn-dropdown flat no-caps label="關於我們" class="custom-dropdown">
                <q-list class="custom-dropdown-list">
                  <RouterLink to="/about/intro" custom v-slot="{ navigate }">
                    <q-item clickable @click="navigate">
                      <q-item-section>中心簡介</q-item-section>
                    </q-item>
                  </RouterLink>
                  <RouterLink to="/about/members/oepp" custom v-slot="{ navigate }">
                    <q-item clickable @click="navigate">
                      <q-item-section>人事介紹</q-item-section>
                    </q-item>
                  </RouterLink>
                </q-list>
              </q-btn-dropdown>
              
              <RouterLink to="/education" custom v-slot="{ navigate, isActive }">
                <q-btn flat no-caps 
                       :class="isActive ? 'router-link-active' : ''" 
                       @click="navigate" 
                       label="教育推廣中心" />
              </RouterLink>
              
              <RouterLink to="/products" custom v-slot="{ navigate, isActive }">
                <q-btn flat no-caps 
                       :class="isActive ? 'router-link-active' : ''" 
                       @click="navigate" 
                       label="產品推廣中心" />
              </RouterLink>
              
              <RouterLink to="/publication" custom v-slot="{ navigate, isActive }">
                <q-btn flat no-caps 
                       :class="isActive ? 'router-link-active' : ''" 
                       @click="navigate" 
                       label="會展及出版中心" />
              </RouterLink>
              
              <RouterLink to="/regulations/oepp" custom v-slot="{ navigate, isActive }">
                <q-btn flat no-caps 
                       :class="isActive ? 'router-link-active' : ''" 
                       @click="navigate" 
                       label="法規彙編" />
              </RouterLink>
              
              <RouterLink to="/download/oepp" custom v-slot="{ navigate, isActive }">
                <q-btn flat no-caps 
                       :class="isActive ? 'router-link-active' : ''" 
                       @click="navigate" 
                       label="下載專區" />
              </RouterLink>
            </q-btn-group>
          </q-toolbar>
        </div>
      </div>
    </q-header>

    <q-page-container>
      <q-page class="main-content">
        <div class="content-wrapper">
          <RouterView />
        </div>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<style>
/* 載入源樣黑體字體 */
@font-face {
  font-family: 'GenYoGothic TW';
  src: url('/fonts/GenYoGothic2TW-R.otf') format('opentype'),
       url('/fonts/GenYoGothicTW-Regular.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'GenYoGothic TW';
  src: url('/fonts/GenYoGothic2TW-M.otf') format('opentype'),
       url('/fonts/GenYoGothic2TW-M.ttf') format('truetype');
  font-weight: bold;
  font-style: normal;
  font-display: swap;
}

/* 重置默認樣式 */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: "GenYoGothic TW", "源樣黑體月", "Microsoft JhengHei", sans-serif;
  line-height: 1.6;
  background-color: #ffffff;
}

/* 移除 Quasar 組件的默認邊框和陰影 */
.q-header, .q-toolbar, .q-page-container, .q-page {
  border: none !important;
  box-shadow: none !important;
  margin: 0 !important;
  padding: 0 !important;
}

.q-layout {
  background-color: #ffffff !important;
}

/* 強制移除 q-page-container 的默認內邊距 */
.q-page-container {
  padding-top: 0 !important;
}

/* 確保主內容區域沒有間隔 */
.q-page {
  padding: 0 !important;
  margin: 0 !important;
}

/* 容器樣式 */
.content-wrapper {
  width: 70vw;
  max-width: 100%;
  margin: 0 auto;
}

/* 導航欄內的 content-wrapper */
.nav-container .content-wrapper {
  width: 70vw;
  max-width: 100%;
  margin: 0;
}

/* 導航欄容器 */
.nav-container {
  background-color: #ffffff;
  border: none;
  box-shadow: none;
  margin-bottom: 0;
  display: flex;
  justify-content: center;
  width: 100%;
}

/* 自定義 Header 樣式 */
.custom-header {
  background-color: transparent !important;
  box-shadow: none !important;
  position: relative !important;
  z-index: 2000 !important;
  border: none !important;
  margin-bottom: 0 !important;
}

/* 頂部樣式 */
.header-top {
  background-color: #fff;
  padding: 10px 0;
  border-bottom: none;
  border: none;
  box-shadow: none;
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
  font-size: 26pt !important;
  font-family: "GenYoGothic TW", "源樣夜黑體", "Microsoft JhengHei", sans-serif !important;
  font-weight: normal !important;
}

/* 導航欄樣式 */
.custom-nav-bg {
  background-color: #3f5963 !important;
  border: none !important;
  box-shadow: none !important;
  margin: 0 auto !important;
  width: 100vw !important;
  max-width: 100% !important;
}

.navigation-group {
  width: 70vw;
  margin: 0 auto;
  justify-content: space-between;
  padding: 0 2rem;
}

.navigation-group .q-btn {
  color: #fff;
  font-size: 26pt;
  padding: 23px 10px;
  margin: 0 5px;
  transition: background-color 0.3s;
  font-family: "GenYoGothic TW", "源樣夜黑體", "Microsoft JhengHei", sans-serif !important;
  font-weight: normal !important;
}

.navigation-group .q-btn:hover,
.navigation-group .q-btn.router-link-active {
  background-color: rgba(0, 0, 0, 0.2);
}

/* 下拉選項樣式 */
.custom-dropdown-list {
  background-color: #86a8ab !important;
}

.custom-dropdown-list .q-item {
  color: #fff;
  font-size: 24pt;
  font-family: "GenYoGothic TW", "源樣夜黑體", "Microsoft JhengHei", sans-serif;
}

.custom-dropdown-list .q-item:hover {
  background-color: rgba(255, 255, 255, 0.1) !important;
}

.full-width {
  width: 100%;
}

/* 主要內容區域樣式 */
.main-content {
  min-height: calc(100vh - 150px);
  padding: 0 !important;
  margin: 0 !important;
  background-color: #ffffff;
}

/* 強制移除所有可能的間隔 */
.q-layout__section--marginal {
  margin: 0 !important;
}

/* 確保內容包裝器沒有額外間隔 */
.content-wrapper {
  padding-top: 0 !important;
  margin-top: 0 !important;
}
</style>


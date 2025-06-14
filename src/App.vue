<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="app-container">
    <header>
      <div class="header-top">
        <div class="content-wrapper">
          <div class="logo">
            <img src="/image/oepp.png" alt="高科大教推處" />
          </div>
          <div class="right-section">
            <a href="/學校首頁">學校首頁</a>
          </div>
        </div>
      </div>
      <nav class="content-wrapper">
        <RouterLink to="/">首頁</RouterLink>
        <div class="dropdown">
          <RouterLink to="/about">關於我們</RouterLink>
          <div class="dropdown-content">
            <RouterLink to="/about/intro">中心簡介</RouterLink>
            <RouterLink to="/about/members">人事介紹</RouterLink>
          </div>
        </div>
        <RouterLink to="/education">教育推廣中心</RouterLink>
        <RouterLink to="/products">產品推廣中心</RouterLink>
        <RouterLink to="/publication">會展及出版中心</RouterLink>
        <RouterLink to="/regulations">法規彙編</RouterLink>
        <RouterLink to="/download">下載專區</RouterLink>
      </nav>
    </header>

    <main>
      <div class="content-wrapper">
        <RouterView />
      </div>
    </main>
  </div>
</template>

<style>
/* 重置默認樣式 */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: "Microsoft JhengHei", sans-serif;
  line-height: 1.6;
  background-color: #f5f5f5;
}

/* 容器樣式 */
.content-wrapper {
  width: 70%;
  margin: 0 auto;
  max-width: 1400px;
}

/* 頂部樣式 */
.header-top {
  background-color: #fff;
  padding: 10px 0;
  border-bottom: 1px solid #eee;
}

.header-top .content-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo img {
  height: 60px;
}

.right-section a {
  color: #666;
  text-decoration: none;
  font-size: 0.9rem;
}

/* 導航欄樣式 */
nav {
  background-color: #004098;
  padding: 0;
  display: flex;
  justify-content: space-between;
}

nav a {
  color: #fff;
  text-decoration: none;
  padding: 15px 20px;
  font-size: 1.1rem;
  transition: background-color 0.3s;
}

nav a:hover,
nav a.router-link-active {
  background-color: #002c6a;
}

/* 下拉選單樣式 */
.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #fff;
  min-width: 160px;
  box-shadow: 0 8px 16px rgba(0,0,0,0.1);
  z-index: 1;
}

.dropdown-content a {
  color: #333;
  padding: 12px 16px;
  display: block;
  background-color: #fff;
}

.dropdown:hover .dropdown-content {
  display: block;
}

/* 主要內容區域樣式 */
main {
  min-height: calc(100vh - 150px);
  padding: 20px 0;
}
</style>

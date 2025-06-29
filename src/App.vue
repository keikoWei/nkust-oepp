<script setup>
import { RouterView } from 'vue-router'
</script>

<template>
  <div id="app">
    <RouterView />
  </div>
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

#app {
  width: 100%;
  min-height: 100vh;
  background-color: #ffffff;
}
</style>


<template>
  <div class="achievement-navigation">
    <div class="nav-container">
      <router-link 
        to="/exhibitionCenter/achievement/university-ceremony" 
        class="nav-item"
        active-class="active"
      >
        校級典禮
      </router-link>
      <span class="separator">|</span>
      <router-link 
        to="/exhibitionCenter/achievement/seminar" 
        class="nav-item"
        active-class="active"
      >
        研討會
      </router-link>
      <span class="separator">|</span>
      <router-link 
        to="/exhibitionCenter/achievement/launch" 
        class="nav-item"
        active-class="active"
      >
        啟用/揭牌活動
      </router-link>
      <span class="separator">|</span>
      <router-link 
        to="/exhibitionCenter/achievement/livestream" 
        class="nav-item"
        active-class="active"
      >
        線上直播
      </router-link>
      <span class="separator">|</span>
      <router-link 
        to="/exhibitionCenter/achievement/other" 
        class="nav-item"
        active-class="active"
      >
        其他活動
      </router-link>
    </div>
  </div>
</template>

<script setup>
// 組件邏輯
</script>

<style scoped>
.achievement-navigation {
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 2rem 0;
}

.nav-container {
  display: flex;
  align-items: center;
  padding: 1rem 2rem;
  position: relative;
}



.nav-item {
  text-decoration: none;
  color: #ff8c00;
  font-size: 22pt;
  font-weight: 500;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  border: 2px solid transparent;
  font-family: "GenYoGothic TW", "源樣夜黑體", "Microsoft JhengHei", sans-serif;
}

.nav-item:hover {
  background-color: #fff3e0;
  color: #ff8c00;
  border: 2px solid #ff8c00;
}

.nav-item.active {
  font-weight: bold;
}

.separator {
  color: #ff8c00;
  font-size: 18pt;
  font-weight: bold;
  margin: 0 0.5rem;
  user-select: none;
}

/* 響應式設計 */
@media (max-width: 768px) {
  .nav-container {
    flex-direction: column;
    padding: 1rem;
    gap: 0.5rem;
  }
  
  .separator {
    display: none;
  }
  
  .nav-item {
    font-size: 14pt;
    padding: 0.3rem 0.8rem;
  }
  

}

@media (max-width: 480px) {
  .nav-container {
    padding: 0.8rem;
  }
  
  .nav-item {
    font-size: 12pt;
    padding: 0.2rem 0.6rem;
  }
}
</style> 
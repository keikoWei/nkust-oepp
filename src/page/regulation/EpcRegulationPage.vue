<template>
  <AppHeader />
  
  <!-- 頂部圖片區域 -->
  <section class="regulation-banner">
    <div class="banner-image">
      <img src="/image/members/member_top.jpg" alt="法規相關頂部圖片" class="banner-img">
    </div>
  </section>
  
  <div class="regulation-page">
    <RegulationHeader activeTab="epc" />
    
    <!-- 法規內容區域 -->
    <div class="regulation-content">
      
      <!-- 法規分類列表 -->
      <div class="regulation-categories">
        <!-- 出版相關法規 -->
        <div class="category-section">
          <div class="category-header">
            <span class="category-title">出版相關法規</span>
          </div>
          <div class="file-list">
            <div class="file-item" v-for="file in publicationRegulations" :key="file.name">
              <span class="file-bullet">📄</span>
              <a :href="file.path" :download="file.name" class="file-link">
                {{ file.title }}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  <!-- Footer -->
  <MainFooterComponent />
</template>

<script setup>
import AppHeader from '@/components/AppHeader.vue'
import RegulationHeader from '@/components/regulation/RegulationHeader.vue'
import MainFooterComponent from '@/components/MainFooterComponent.vue'

// 出版相關法規
const publicationRegulations = [
  {
    name: '國立高雄科技大學出版委員會設置辦法.pdf',
    title: '國立高雄科技大學出版委員會設置辦法',
    path: '/file/regulations/epc/國立高雄科技大學出版委員會設置辦法.pdf'
  }
]
</script>

<style scoped>
/* 頂部圖片區域 */
.regulation-banner {
  width: calc(70vw);
  max-width: 100%;
  margin: 0 auto;
  position: relative;
  overflow: hidden;
}

.banner-image {
  width: 100%;
  height: 422px;  /* 原本 630px * 0.67 */
  position: relative;
  overflow: hidden;
}

.banner-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.regulation-page {
  width: 70vw;
  max-width: 100%;
  margin: 0 auto;
  padding: 1.3rem 0.7rem 67px 0.7rem;  /* 原本 2rem 1rem 100px 1rem * 0.67 */
  font-family: "GenYoGothic TW", "源樣黑體月", "Microsoft JhengHei", sans-serif;
  background-color: white;
  min-height: 60vh;
}

.regulation-content {
  margin-top: 1.3rem;  /* 原本 2rem * 0.67 */
  padding: 1.3rem 0;  /* 原本 2rem * 0.67 */
}

/* 法規分類樣式 */
.regulation-categories {
  display: flex;
  flex-direction: column;
  gap: 60px;
  max-width: 800px;
  margin: 0 auto;
}

.category-section {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.category-header {
  height: 52px;
  background-color: #3C1810;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 20px;
  width: fit-content;
  min-width: 300px;
}

.category-title {
  font-size: 21pt;  /* 32pt * 0.67 */
  color: white;
  font-weight: normal;
  white-space: nowrap;
}

.file-list {
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding-left: 20px;
}

.file-item {
  display: flex;
  align-items: center;
  gap: 10px;
}

.file-bullet {
  font-size: 17pt;  /* 26pt * 0.67 */
  color: #666;
  min-width: 20px;
}

.file-link {
  font-size: 17pt;  /* 26pt * 0.67 */
  color: #333;
  text-decoration: none;
  line-height: 1.4;
  transition: color 0.3s ease;
}

.file-link:hover {
  color: #839e8d;
  text-decoration: underline;
}

/* 響應式設計 */
@media (max-width: 768px) {
  .category-title {
    font-size: 16pt;  /* 24pt * 0.67 */
  }
  
  .category-header {
    height: 45px;
    min-width: 250px;
  }
  
  .file-link {
    font-size: 13pt;  /* 20pt * 0.67 */
  }
  
  .file-bullet {
    font-size: 13pt;  /* 20pt * 0.67 */
  }
}

@media (max-width: 480px) {
  .category-title {
    font-size: 12pt;  /* 18pt * 0.67 */
  }
  
  .category-header {
    height: 40px;
    min-width: 200px;
    padding: 0 15px;
  }
  
  .file-link {
    font-size: 11pt;  /* 16pt * 0.67 */
  }
  
  .file-bullet {
    font-size: 11pt;  /* 16pt * 0.67 */
  }
  
  .file-list {
    padding-left: 15px;
  }
}
</style> 
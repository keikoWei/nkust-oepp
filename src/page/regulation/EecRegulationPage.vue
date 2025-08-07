<template>
  <AppHeader />
  
  <!-- 頂部圖片區域 -->
  <section class="regulation-banner">
    <div class="banner-image">
      <img src="/image/members/member_top.jpg" alt="法規相關頂部圖片" class="banner-img">
    </div>
  </section>
  
  <div class="regulation-page">
    <RegulationHeader activeTab="eec" />
    
    <!-- 法規內容區域 -->
    <div class="regulation-content">
      
      <!-- 法規分類列表 -->
      <div class="regulation-categories">
        <!-- 推廣教育相關法規 -->
        <div class="category-section">
          <div class="category-header">
            <span class="category-title">推廣教育相關法規</span>
          </div>
          <div class="file-list">
            <div class="file-item" v-for="file in educationRegulations" :key="file.name">
              <span class="file-bullet">📄</span>
              <a :href="file.path" :download="file.name" class="file-link">
                {{ file.title }}
              </a>
            </div>
          </div>
        </div>

        <!-- 教育部推廣教育相關法規 -->
        <div class="category-section">
          <div class="category-header">
            <span class="category-title">教育部推廣教育相關法規</span>
          </div>
          <div class="file-list">
            <div class="file-item" v-for="file in qualificationRegulations" :key="file.name">
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

// 推廣教育相關法規
const educationRegulations = [
  {
    name: '國立高雄科技大學推廣教育實施辦法.pdf',
    title: '國立高雄科技大學推廣教育實施辦法',
    path: '/file/regulations/eec/國立高雄科技大學推廣教育實施辦法.pdf'
  },
  {
    name: '國立高雄科技大學推廣教育優惠要點.pdf',
    title: '國立高雄科技大學推廣教育優惠要點',
    path: '/file/regulations/eec/國立高雄科技大學推廣教育優惠要點.pdf'
  },
  {
    name: '國立高雄科技大學推廣教育收支管理要點.pdf',
    title: '國立高雄科技大學推廣教育收支管理要點',
    path: '/file/regulations/eec/國立高雄科技大學推廣教育收支管理要點.pdf'
  },
  {
    name: '國立高雄科技大學推廣教育班退費辦法.pdf',
    title: '國立高雄科技大學推廣教育班退費辦法',
    path: '/file/regulations/eec/國立高雄科技大學推廣教育班退費辦法.pdf'
  },
  {
    name: '國立高雄科技大學隨班附讀作業要點.pdf',
    title: '國立高雄科技大學隨班附讀作業要點',
    path: '/file/regulations/eec/國立高雄科技大學隨班附讀作業要點.pdf'
  }
]

// 學歷認定相關法規
const qualificationRegulations = [
  {
    name: '專科以上學校推廣教育實施辦法.pdf',
    title: '專科以上學校推廣教育實施辦法',
    path: '/file/regulations/eec/專科以上學校推廣教育實施辦法.pdf'
  },
  {
    name: '專科以上學校推廣教育實施辦法.pdf',
    title: '專科以上學校推廣教育實施辦法',
    path: '/file/regulations/eec/專科以上學校推廣教育實施辦法.pdf'
  },
  {
    name: '大學辦理國外學歷採認辦法.pdf',
    title: '大學辦理國外學歷採認辦法',
    path: '/file/regulations/eec/大學辦理國外學歷採認辦法.pdf'
  },
  {
    name: '入學大學同等學力認定標準.pdf',
    title: '入學大學同等學力認定標準',
    path: '/file/regulations/eec/入學大學同等學力認定標準.pdf'
  }
]

// 教師相關法規
const teacherRegulations = [
  {
    name: '公立大專校院兼任教師鐘點費支給基準表（核定本）.pdf',
    title: '公立大專校院兼任教師鐘點費支給基準表',
    path: '/file/regulations/eec/公立大專校院兼任教師鐘點費支給基準表（核定本）.pdf'
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
  background-color: #534741;
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
  color: #534741;
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
  .regulation-banner {
    width: 100vw;
    margin: 0;
  }
  
  .banner-image {
    height: 200px;  /* 手機版縮小高度 */
  }
  
  .regulation-page {
    width: 100vw;
    margin: 0;
    padding: 1rem 1rem 50px 1rem;
  }
  
  .regulation-categories {
    max-width: 100%;
    width: 100%;
  }
  
  .category-title {
    font-size: 12pt;  /* 18pt * 0.67 */
  }
  
  .category-header {
    height: 40px;
    min-width: 200px;
    padding: 0 15px;
    width: 100%;
    max-width: none;
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
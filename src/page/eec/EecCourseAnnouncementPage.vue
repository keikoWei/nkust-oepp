<template>
  <div class="course-announcement-page-container">

    <!-- 教育推廣中心導覽欄 -->
    <EecHeader />

    <!-- 頂部圖片區域 -->
    <section class="course-banner">
      <div class="banner-image">
        <img src="/image/eec/eec_top.png" alt="教育推廣中心課程公告頂部圖片" class="banner-img">
        <div class="banner-watermark">
          <h1>課程公告</h1>
        </div>
      </div>
    </section>

    <!-- 頁面內容 -->
    <div class="content-container">
      
      <CourseAnnouncementComponent />
    </div>

    <!-- Footer -->
    <MainFooterComponent waveColor="#fff" backgroundColor="#e3d9cd" textColor="#534741" />
  </div>
</template>

<script setup>
import EecHeader from '@/components/EecHeader.vue'
import MainFooterComponent from '@/components/MainFooterComponent.vue'
import CourseAnnouncementComponent from '@/components/CourseAnnouncementComponent.vue'
</script>

<style scoped>
.course-announcement-page-container {
  width: 100%;
  margin: 0;
  padding: 0;
  font-family: "GenYoGothic TW", "源樣夜黑體", "Microsoft JhengHei", sans-serif;
}

/* 頂部圖片區域 */
.course-banner {
  width: calc(70vw);
  max-width: 100%;
  margin: 0 auto;
  position: relative;
  overflow: hidden;
}

.banner-image {
  width: 100%;
  height: 422px;
  position: relative;
  overflow: hidden;
}

.banner-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.banner-watermark {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  z-index: 2;
  padding: 34px 0 0 54px;
  background: linear-gradient(135deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0) 70%);
}

.banner-watermark h1 {
  color: white;
  font-size: 37pt;
  font-weight: bold;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
  margin: 0;
  letter-spacing: 2px;
  font-family: "GenYoGothic TW", "源樣夜黑體", "Microsoft JhengHei", sans-serif;
}

/* 內容樣式 */
.content-container {
  max-width: 1200px;
  margin: 40px auto;
  padding: 0 20px;
}

.title-container {
  display: flex;
  justify-content: flex-start;
  margin-bottom: 40px;
}

.title {
  font-size: 26pt;
  padding: 10px 40px;
  border: 3px solid #534741;
  border-radius: 15px;
  color: #534741;
  background-color: #e3d9cd;
  width: 280px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "GenYoGothic TW", "源樣黑體", "Microsoft JhengHei", sans-serif;
}

.content {
  font-size: 20pt;
  color: #534741;
  line-height: 1.6;
  font-family: "GenYoGothic TW", "源樣黑體", "Microsoft JhengHei", sans-serif;
}

h3 {
  font-size: 20pt;
  color: #534741;
  margin-bottom: 20px;
  font-weight: bold;
}

/* 響應式設計 */
@media (max-width: 1024px) {
  .banner-watermark {
    padding: 27px 0 0 40px;
  }
  
  .banner-watermark h1 {
    font-size: 30pt;
  }

  .title {
    font-size: 22pt;
    width: 245px;
    height: 70px;
  }
  
  .content {
    font-size: 17pt;
  }
  
  h3 {
    font-size: 17pt;
  }
}

@media (max-width: 768px) {
  .banner-watermark {
    padding: 20px 0 0 27px;
  }
  
  .banner-watermark h1 {
    font-size: 23pt;
  }

  .title {
    font-size: 18pt;
    width: 210px;
    height: 60px;
  }
  
  .content {
    font-size: 14pt;
  }
  
  h3 {
    font-size: 14pt;
  }
}

@media (max-width: 480px) {
  .course-banner {
    width: 100vw;
    margin: 0;
  }
  
  .banner-image {
    height: 200px;
    width: 100%;
  }
  
  .banner-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
  
  .banner-watermark {
    padding: 20px 0 0 20px;
  }
  
  .banner-watermark h1 {
    font-size: 20pt;
  }
  
  .title {
    font-size: 16pt;
    width: 175px;
    height: 50px;
  }
  
  .content {
    font-size: 12pt;
  }
  
  h3 {
    font-size: 12pt;
  }
}
</style>

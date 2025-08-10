<template>
  <div class="commissioned-activities-page-container">
    <!-- 會展中心導覽欄 -->
    <EpcHeader />

    <!-- 頂部圖片區域 -->
    <section class="page-banner">
      <div class="banner-image">
        <img src="/image/epc/commissioned_activities_top.jpg" alt="委辦活動申請頂部圖片" class="banner-img">
        <div class="banner-watermark">
          <h1>委辦活動申請</h1>
        </div>
      </div>
    </section>

    <!-- 頁面內容 -->
    <div class="content-container">  
      <div class="content">
        <div class="page-content">
          <!-- 主標題 -->
          <div class="main-title">
            會展 - 委辦活動申請
          </div>
          
          <!-- 流程圖區域 -->
          <div class="flowchart-section">
            <div class="flowchart-image">
              <img src="/file/exhibitionCenter/接受委託辦理活動作業流程圖.jpg" alt="委託辦理活動作業流程圖" class="flowchart-img">
            </div>
          </div>
          
                     <!-- 下載檔案區域 -->
           <div class="download-section">
             <div class="download-files">
               <a href="/file/exhibitionCenter/接受委託辦理活動作業流程圖.pdf" download class="download-file-link">
                 接受委託辦理活動作業流程圖
               </a>
               <a href="/file/exhibitionCenter/會展及出版中心接受委託辦理活動作業申請表.pdf" download class="download-file-link">
                 會展及出版中心接受委託辦理活動作業申請表.pdf
               </a>
               <a href="/file/exhibitionCenter/會展及出版中心接受委託辦理活動作業申請表.docx" download class="download-file-link">
                 會展及出版中心接受委託辦理活動作業申請表.docx
               </a>
             </div>
           </div>
        </div>
      </div>
    </div>

    <!-- Footer -->
    <MainFooterComponent waveColor="#fff" backgroundColor="#839e8d" textColor="#ffffff" />
  </div>
</template>

<script setup>
import EpcHeader from '@/components/EpcHeader.vue'
import MainFooterComponent from '@/components/MainFooterComponent.vue'
</script>

<style scoped>
.commissioned-activities-page-container {
  width: 100%;
  margin: 0;
  padding: 0;
  font-family: "GenYoGothic TW", "源樣夜黑體", "Microsoft JhengHei", sans-serif;
  color: #3e3b3a;
}

/* 頂部圖片區域 */
.page-banner {
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
  background: linear-gradient(135deg, rgba(131, 158, 141, 0.8) 0%, rgba(131, 158, 141, 0) 70%);
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
  margin: 0 auto;
  padding: 3rem 2rem;
}

.content {
  padding: 2rem;
}

/* 主標題樣式 */
.main-title {
  font-size: 35pt;
  color: #3e3b3a;
  text-align: center;
  margin-bottom: 2rem;
  font-weight: bold;
  font-family: "GenYoGothic TW", "源樣夜黑體", "Microsoft JhengHei", sans-serif;
}

/* 流程圖區域樣式 */
.flowchart-section {
  margin-bottom: 3rem;
  text-align: center;
}

.flowchart-title {
  font-size: 26pt;
  color: #3e3b3a;
  margin-bottom: 1.5rem;
  font-weight: normal;
  font-family: "GenYoGothic TW", "源樣夜黑體", "Microsoft JhengHei", sans-serif;
}

.flowchart-image {
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
}

.flowchart-img {
  width: 1080px;
  max-width: 100%;
  height: auto;
  border: 2px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

/* 下載區域樣式 */
.download-section {
  margin-top: 2rem;
}

.download-files {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;
  margin-left: 0;
}

.download-file-link {
  font-size: 16pt;
  color: #3e3b3a;
  text-decoration: none;
  font-family: "GenYoGothic TW", "源樣夜黑體", "Microsoft JhengHei", sans-serif;
  transition: color 0.3s ease;
  cursor: pointer;
}

.download-file-link:hover {
  color: #839e8d;
  text-decoration: none;
}

/* 響應式設計 */
@media (max-width: 1200px) {
  .flowchart-img {
    width: 90vw;
  }
}

@media (max-width: 768px) {
  .page-banner {
    width: 95vw;
  }
  
  .banner-watermark {
    padding: 20px 0 0 30px;
  }
  
  .banner-watermark h1 {
    font-size: 24pt;
  }
  
  .content-container {
    padding: 2rem 1rem;
  }
  
  .main-title {
    font-size: 32pt;
  }
  
  .flowchart-title {
    font-size: 20pt;
  }
  
  .download-file-link {
    font-size: 14pt;
  }
}

/* 手機版樣式 - 參考 OeppMemberPage.vue */
@media (max-width: 480px) {
  .page-banner {
    width: 100vw;
    margin: 0;
  }
  
  .banner-image {
    height: 200px;
  }
  
  .banner-watermark h1 {
    font-size: 18pt;
  }
  
  .main-title {
    font-size: 24pt;
  }
  
  .flowchart-title {
    font-size: 16pt;
  }
  
  .download-file-link {
    font-size: 12pt;
  }
}
</style>

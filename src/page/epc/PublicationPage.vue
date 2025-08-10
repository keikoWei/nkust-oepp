<template>
  <div class="publication-page-container">
    <!-- 會展中心導覽欄 -->
    <EpcHeader />

    <!-- 頂部圖片區域 -->
    <section class="page-banner">
      <div class="banner-image">
        <img src="/image/epc/publication_top.jpg" alt="相關出版品頂部圖片" class="banner-img">
        <div class="banner-watermark">
          <h1>相關出版品</h1>
        </div>
      </div>
    </section>

    <!-- 頁面內容 -->
    <div class="content-container">  
      <div class="content">
        <div class="page-content">
          
          
          <!-- 出版品展示區域 -->
          <div class="publications-grid">
            <div class="publication-item" v-for="(publication, index) in publications" :key="index">
              <div class="publication-image" @click="openEbook(index)">
                <img :src="publication.image" :alt="publication.title" class="publication-img">
                <div class="overlay">
                  <div class="overlay-content">
                    <i class="fas fa-book-open"></i>
                    <span>點擊查看電子書</span>
                  </div>
                </div>
              </div>
              <div class="publication-info">
                <div class="publication-date">Date: 2025/05/08(四)</div>
                <div class="publication-title">{{ publication.title }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 電子書模態框 -->
    <div class="ebook-modal" v-if="showEbook" @click="closeEbook">
      <div class="ebook-container" @click.stop>
        <div class="ebook-header">
          <h3>{{ currentPublication.title }}</h3>
          <button class="close-btn" @click="closeEbook">
            <i class="fas fa-times"></i>
          </button>
        </div>
        <div class="ebook-content">
          <div class="ebook-iframe-container">
            <iframe 
              :src="currentPublication.iframeSrc" 
              style="position:absolute;border:none;width:100%;height:100%;left:0;top:0;" 
              seamless="seamless" 
              scrolling="no" 
              frameborder="0" 
              allowtransparency="true" 
              allowfullscreen="true">
            </iframe>
          </div>
        </div>
      </div>
    </div>

    <!-- Footer -->
    <MainFooterComponent waveColor="#fff" backgroundColor="#839e8d" textColor="#ffffff" />
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import EpcHeader from '@/components/EpcHeader.vue'
import MainFooterComponent from '@/components/MainFooterComponent.vue'

// 出版品資料
const publications = ref([
  {
    title: '第一屆 青年藝術家典藏獎',
    image: '/image/epc/publications/publication_第一屆青藝獎.jpg',
    iframeSrc: 'https://online.fliphtml5.com/tbmmm/acmg/'
  },
  {
    title: '第二屆 青年藝術家典藏獎',
    image: '/image/epc/publications/publication_第二屆青藝獎.jpg',
    iframeSrc: 'https://online.fliphtml5.com/tbmmm/kxwg/'
  },
  {
    title: '第三屆 青年藝術家典藏獎',
    image: '/image/epc/publications/publication_第三屆青藝獎.jpg',
    iframeSrc: 'https://online.fliphtml5.com/tbmmm/fkpn/'
  },
  {
    title: '第四屆 青年藝術家典藏獎',
    image: '/image/epc/publications/publication_第四屆青藝獎.jpg',
    iframeSrc: 'https://online.fliphtml5.com/tbmmm/iohi/'
  },
  {
    title: '第五屆 青年藝術家典藏獎',
    image: '/image/epc/publications/publication_第五屆青藝獎.jpg',
    iframeSrc: 'https://online.fliphtml5.com/tbmmm/hmuj/'
  }
])

// 電子書狀態
const showEbook = ref(false)
const currentPublicationIndex = ref(0)

// 當前出版品
const currentPublication = computed(() => {
  return publications.value[currentPublicationIndex.value]
})

// 鍵盤事件處理
const handleKeydown = (event) => {
  if (!showEbook.value) return
  
  if (event.key === 'Escape') {
    event.preventDefault()
    closeEbook()
  }
}

// 開啟電子書
const openEbook = (index) => {
  currentPublicationIndex.value = index
  showEbook.value = true
}

// 關閉電子書
const closeEbook = () => {
  showEbook.value = false
}

// 生命週期鉤子
onMounted(() => {
  document.addEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
  document.removeEventListener('keydown', handleKeydown)
})
</script>

<style scoped>
.publication-page-container {
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
  background: transparent;
  box-shadow: none;
  border: none;
}

.page-content h2 {
  color: #839e8d;
  font-size: 28pt;
  margin-bottom: 1rem;
  border-bottom: 3px solid #839e8d;
  padding-bottom: 0.5rem;
}

.page-content p {
  font-size: 16pt;
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

/* 出版品網格 */
.publications-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 3rem;
  margin-top: 2rem;
}

.publication-item {
  background: transparent;
  border-radius: 0;
  overflow: hidden;
  box-shadow: none;
  transition: none;
  border: none;
}

.publication-item:hover {
  transform: none;
  box-shadow: none;
}

.publication-image {
  position: relative;
  width: 100%;
  height: 500px;
  overflow: hidden;
  cursor: pointer;
}

.publication-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.publication-item:hover .publication-img {
  transform: scale(1.05);
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(131, 158, 141, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.publication-item:hover .overlay {
  opacity: 1;
}

.overlay-content {
  text-align: center;
  color: white;
}

.overlay-content i {
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
  display: block;
}

.overlay-content span {
  font-size: 1.2rem;
  font-weight: bold;
}

.publication-info {
  padding: 2rem;
}

.publication-date {
  font-size: 20pt;
  color: #666;
  margin-bottom: 0.5rem;
}

.publication-title {
  font-size: 26pt;
  font-weight: bold;
  color: #3e3b3a;
  line-height: 1.3;
}

/* 電子書模態框 */
.ebook-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.ebook-container {
  background: white;
  border-radius: 12px;
  width: 90%;
  max-width: 900px;
  max-height: 90vh;
  overflow: hidden;
  position: relative;
}

.ebook-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background: #839e8d;
  color: white;
}

.ebook-header h3 {
  margin: 0;
  font-size: 1.5rem;
  font-weight: bold;
}

.close-btn {
  background: none;
  border: none;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 50%;
  transition: background-color 0.3s ease;
}

.close-btn:hover {
  background: rgba(255, 255, 255, 0.2);
}

.ebook-content {
  padding: 0;
  height: 600px;
  position: relative;
}

.ebook-iframe-container {
  position: relative;
  width: 100%;
  height: 100%;
  padding-top: 0;
}

/* 響應式設計 */
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
  
  .page-content h2 {
    font-size: 20pt;
  }
  
  .page-content p {
    font-size: 14pt;
  }
  
  .publications-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  .publication-image {
    height: 350px;
  }
  
  .publication-date {
    font-size: 18pt;
  }
  
  .publication-title {
    font-size: 22pt;
  }
  
  .publication-info {
    padding: 1.5rem;
  }
  
  .overlay-content i {
    font-size: 2rem;
  }
  
  .overlay-content span {
    font-size: 1rem;
  }
  
  .ebook-container {
    width: 95%;
    max-height: 95vh;
  }
  
  .ebook-header {
    padding: 1rem;
  }
  
  .ebook-content {
    height: 400px;
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
}
</style>

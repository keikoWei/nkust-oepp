<template>
  <div class="product-carousel-container">
      
    <!-- 產品輪播區域 -->
    <div class="product-carousel">
      <div class="product-display">
        <!-- 左側圖片區域 -->
        <div class="product-image-section">
          <div class="image-carousel-wrapper" :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
            <div 
              v-for="(product, index) in products" 
              :key="index"
              class="image-slide"
            >
              <div class="product-image-container">
                <img 
                  :src="product.image" 
                  :alt="product.name"
                  class="product-image"
                />
              </div>
            </div>
          </div>
        </div>
        
        <!-- 右側文字區域 -->
        <div class="product-info-section">
          <transition name="fade" mode="out-in">
            <div :key="currentIndex" class="product-info-content">
              <h3 class="product-name">{{ products[currentIndex].name }}</h3>
              <p class="product-description">{{ products[currentIndex].description }}</p>
              <button class="buy-now-btn" @click="buyNow">立即購買</button>
            </div>
          </transition>
        </div>
      </div>
      

      
      <!-- 指示器 -->
      <div class="carousel-indicators">
        <button
          v-for="(product, index) in products"
          :key="index"
          class="indicator"
          :class="{ active: currentIndex === index }"
          @click="goToSlide(index)"
        ></button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const currentIndex = ref(0)
const autoplayInterval = ref(null)

// 產品資料
const products = ref([
  {
    name: '潔顏洗面乳',
    image: '/image/dkshop/商品圖-HiDR玻尿酸賦活保濕精華液.png',
    description: '高科大師生研發產品'
  },
  {
    name: 'DHA魚油+葉黃素膠囊',
    image: '/image/dkshop/商品圖-DHA魚油+葉黃素膠囊.png',
    description: '高科大師生研發產品'
  },
  {
    name: '績優骨',
    image: '/image/dkshop/商品圖_績優骨.png',
    description: '高科大師生研發產品'
  },
  {
    name: '潔淨小丸子洗衣膠囊',
    image: '/image/dkshop/商品圖-潔淨小丸子洗衣膠囊.png',
    description: '高科大師生研發產品'
  },
  {
    name: '幸福平安禮盒(魚鬆+蛋捲)',
    image: '/image/dkshop/商品圖-幸福平安禮盒(魚鬆+蛋捲).png',
    description: '高科大師生研發產品'
  }
])

// 輪播控制方法
const nextSlide = () => {
  if (currentIndex.value < products.value.length - 1) {
    currentIndex.value++
  }
}

const prevSlide = () => {
  if (currentIndex.value > 0) {
    currentIndex.value--
  }
}

const goToSlide = (index) => {
  currentIndex.value = index
}

const buyNow = () => {
  window.open('https://dkshop2020.cyberbiz.co/', '_blank')
}

// 自動播放
const startAutoplay = () => {
  autoplayInterval.value = setInterval(() => {
    if (currentIndex.value < products.value.length - 1) {
      currentIndex.value++
    } else {
      currentIndex.value = 0
    }
  }, 5000)
}

const stopAutoplay = () => {
  if (autoplayInterval.value) {
    clearInterval(autoplayInterval.value)
    autoplayInterval.value = null
  }
}

onMounted(() => {
  startAutoplay()
})

onUnmounted(() => {
  stopAutoplay()
})
</script>

<style scoped>
.product-carousel-container {
  width: 100%;
  margin: 3rem 0;
  padding: 2rem 0;
  background-color: #ffffff;
  font-family: "GenYoGothic TW", "源樣黑體月", "Microsoft JhengHei", sans-serif;
  position: relative;
}



/* 輪播容器 */
.product-carousel {
  width: 100%;
  max-width: 1500px;
  margin: 0 auto;
  position: relative;
  display: flex;
  justify-content: center;
}

.product-display {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  justify-content: center;
}

/* 左側圖片區域 */
.product-image-section {
  width: 900px;
  height: 900px;
  position: relative;
  overflow: hidden;
  flex-shrink: 0;
  flex-grow: 0;
}

.image-carousel-wrapper {
  display: flex;
  height: 100%;
  transition: transform 0.5s ease-in-out;
}

.image-slide {
  width: 100%;
  height: 100%;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.product-image-container {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 60px 40px;
  box-sizing: border-box;
}

.product-image {
  max-width: 600px;
  max-height: 750px;
  object-fit: contain;
}

/* 右側文字區域 */
.product-info-section {
  width: 500px;
  height: 900px;
  padding: 60px 40px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background: #ffffff;
  flex-shrink: 0;
  flex-grow: 0;
  box-sizing: border-box;
}

.product-info-content {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.product-name {
  font-size: 42pt;
  font-weight: normal;
  color: #534741;
  margin: 0 0 1rem 0;
  line-height: 1.2;
}

.product-description {
  font-size: 16pt;
  color: #999;
  margin: 0 0 4rem 0;
  line-height: 1.4;
}

.buy-now-btn {
  background: transparent;
  border: none;
  color: #534741;
  font-size: 16pt;
  font-weight: normal;
  padding: 8px 0;
  cursor: pointer;
  transition: all 0.3s ease;
  font-family: "GenYoGothic TW", "源樣黑體月", "Microsoft JhengHei", sans-serif;
  position: relative;
  padding-left: 200px;
}

.buy-now-btn::before {
  content: "";
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 180px;
  height: 1px;
  background-color: #534741;
  transition: all 0.3s ease;
}

.buy-now-btn:hover::before {
  width: 200px;
  height: 2px;
}

/* 淡入淡出動畫 */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from, .fade-leave-to {
  opacity: 0;
}



/* 指示器 */
.carousel-indicators {
  position: absolute;
  bottom: -60px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 12px;
}

.indicator {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  border: none;
  background: #d0d0d0;
  cursor: pointer;
  transition: background 0.3s ease;
}

.indicator.active {
  background: #e3d496;
}

.indicator:hover {
  background: #e3d496;
}

/* 響應式設計 */
@media (max-width: 1200px) {
  .product-carousel {
    width: 100%;
    max-width: 1300px;
  }
  
  .product-image-section {
    width: 750px;
    height: 750px;
  }
  
  .product-info-section {
    width: 450px;
    height: 750px;
  }
  
  .product-name {
    font-size: 32pt;
  }
  
  .product-description {
    font-size: 14pt;
  }
  
  .buy-now-btn {
    font-size: 14pt;
    padding: 8px 0;
    padding-left: 180px;
  }
  
  .buy-now-btn::before {
    width: 160px;
  }
  
  .buy-now-btn:hover::before {
    width: 180px;
  }
}

@media (max-width: 768px) {
  .product-display {
    flex-direction: column;
    gap: 0;
    width: 100%;
  }
  
  .product-image-section {
    width: 100%;
    height: 675px;
    max-width: 900px;
    margin: 0 auto;
  }
  
  .product-info-section {
    width: 100%;
    height: auto;
    min-height: 400px;
    padding: 40px 30px;
  }
  
  .product-info-content {
    height: auto;
  }
  
  .product-name {
    font-size: 28pt;
  }
  
  .product-description {
    font-size: 14pt;
    margin: 0 0 2rem 0;
  }
  
  .buy-now-btn {
    font-size: 14pt;
    padding: 6px 0;
    padding-left: 160px;
  }
  
  .buy-now-btn::before {
    width: 140px;
  }
  
  .buy-now-btn:hover::before {
    width: 160px;
  }
}

@media (max-width: 480px) {
  .product-carousel {
    width: 100%;
    padding: 0 20px;
    box-sizing: border-box;
  }
  
  .product-image-section {
    height: 600px;
  }
  
  .product-info-section {
    min-height: 350px;
    padding: 30px 20px;
  }
  
  .product-name {
    font-size: 24pt;
  }
  
  .product-description {
    font-size: 12pt;
    margin: 0 0 1.5rem 0;
  }
  
  .buy-now-btn {
    font-size: 12pt;
    padding: 6px 0;
    padding-left: 140px;
  }
  
  .buy-now-btn::before {
    width: 120px;
  }
  
  .buy-now-btn:hover::before {
    width: 140px;
  }
}
</style> 
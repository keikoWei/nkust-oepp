<script setup>
import { ref, onMounted, onUnmounted, computed, nextTick } from 'vue'

const props = defineProps({
  images: {
    type: Array,
    required: true
  },
  interval: {
    type: Number,
    default: 5000
  }
})

const currentIndex = ref(0)
const timer = ref(null)
const isTransitioning = ref(false)
const trackPosition = ref(1) // 實際的軌道位置

// 創建無限循環的圖片陣列（前後各加一張）
const extendedImages = computed(() => {
  if (props.images.length === 0) return []
  const lastImage = props.images[props.images.length - 1]
  const firstImage = props.images[0]
  return [lastImage, ...props.images, firstImage]
})

const next = () => {
  if (isTransitioning.value) return
  
  isTransitioning.value = true
  
  // 移動到下一個位置
  trackPosition.value++
  
  // 如果移動到了複製的第一張圖片位置（最後位置）
  if (trackPosition.value === extendedImages.value.length - 1) {
    setTimeout(async () => {
      // 關閉動畫效果
      const track = document.querySelector('.carousel-track')
      if (track) {
        track.style.transition = 'none'
        // 瞬間跳到實際的第一張位置
        trackPosition.value = 1
        
        await nextTick()
        setTimeout(() => {
          // 重新開啟動畫
          track.style.transition = 'transform 0.6s ease-in-out'
          isTransitioning.value = false
        }, 10)
      }
    }, 600)
  } else {
    setTimeout(() => {
      isTransitioning.value = false
    }, 600)
  }
  
  // 更新邏輯索引
  currentIndex.value = (currentIndex.value + 1) % props.images.length
}

const prev = () => {
  if (isTransitioning.value) return
  
  isTransitioning.value = true
  
  // 移動到上一個位置
  trackPosition.value--
  
  // 如果移動到了複製的最後一張圖片位置（第一個位置）
  if (trackPosition.value === 0) {
    setTimeout(async () => {
      // 關閉動畫效果
      const track = document.querySelector('.carousel-track')
      if (track) {
        track.style.transition = 'none'
        // 瞬間跳到實際的最後一張位置
        trackPosition.value = props.images.length
        
        await nextTick()
        setTimeout(() => {
          // 重新開啟動畫
          track.style.transition = 'transform 0.6s ease-in-out'
          isTransitioning.value = false
        }, 10)
      }
    }, 600)
  } else {
    setTimeout(() => {
      isTransitioning.value = false
    }, 600)
  }
  
  // 更新邏輯索引
  currentIndex.value = currentIndex.value === 0 
    ? props.images.length - 1 
    : currentIndex.value - 1
}

const goToSlide = (index) => {
  if (isTransitioning.value) return
  
  isTransitioning.value = true
  currentIndex.value = index
  trackPosition.value = index + 1 // 考慮前面加的一張圖片
  
  setTimeout(() => {
    isTransitioning.value = false
  }, 600)
}

const startTimer = () => {
  timer.value = setInterval(() => {
    next()
  }, props.interval)
}

const stopTimer = () => {
  if (timer.value) {
    clearInterval(timer.value)
    timer.value = null
  }
}

onMounted(() => {
  // 初始位置設為第一張實際圖片（索引1）
  trackPosition.value = 1
  startTimer()
})

onUnmounted(() => {
  stopTimer()
})
</script>

<template>
  <div class="carousel-container" 
       @mouseenter="stopTimer" 
       @mouseleave="startTimer">
    <div class="carousel">
      <div class="carousel-track" 
           :style="{ transform: `translateX(-${trackPosition * 100}%)` }">
        <img v-for="(image, index) in extendedImages" 
             :key="index"
             :src="image.url"
             :alt="image.alt"
             class="carousel-image">
      </div>
      
      <!-- 浮水印文字 -->
      <div class="watermark-overlay">
        <div class="watermark-text">
          <h1 class="watermark-title">教育事業暨產品推廣處</h1>
          <p class="watermark-subtitle">Office of Educational and Product Promotion</p>
        </div>
      </div>
      
      <button class="carousel-button prev" @click="prev">
        &#10094;
      </button>
      <button class="carousel-button next" @click="next">
        &#10095;
      </button>
      
      <div class="carousel-dots">
        <span v-for="(_, index) in images" 
              :key="index"
              :class="['dot', { active: currentIndex === index }]"
              @click="goToSlide(index)">
        </span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.carousel-container {
  width: 70vw;
  max-width: 100%;
  margin: 0 auto;
  position: relative;
  overflow: hidden;
  margin-top: 0;
  padding-top: 0;
}

.carousel {
  width: 100%;
  height: 750px;
  position: relative;
  overflow: hidden;
}

.carousel-track {
  display: flex;
  width: 100%;
  height: 100%;
  transition: transform 0.6s ease-in-out;
}

.carousel-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  flex-shrink: 0;
}

.carousel-button {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.5);
  color: white;
  padding: 16px;
  border: none;
  cursor: pointer;
  z-index: 2;
}

.prev {
  left: 10px;
}

.next {
  right: 10px;
}

.carousel-dots {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 8px;
}

.dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.5);
  cursor: pointer;
}

.dot.active {
  background: white;
}

/* 浮水印樣式 */
.watermark-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  background: transparent;
  z-index: 1;
  pointer-events: none;
  padding-left: 5%;
  padding-top: 8%;
}

.watermark-text {
  text-align: left;
  color: white;
  text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.7);
}

.watermark-title {
  font-size: 55pt;
  font-weight: 500;
  margin: 0;
  line-height: 1.2;
  font-family: "GenYoGothic TW", "源樣黑體月", "Microsoft JhengHei", sans-serif;
  letter-spacing: 2px;
}

.watermark-subtitle {
  font-size: 18pt;
  font-weight: 400;
  margin: 10px 0 0 0;
  line-height: 1.3;
  font-family: "GenYoGothic TW", "源樣黑體月", "Microsoft JhengHei", sans-serif;
  letter-spacing: 1px;
}

/* 響應式設計 */
@media (max-width: 1024px) {
  .watermark-title {
    font-size: 48pt;
  }
  
  .watermark-subtitle {
    font-size: 16pt;
  }
  
  .watermark-overlay {
    padding-left: 3%;
  }
}

@media (max-width: 768px) {
  .watermark-title {
    font-size: 36pt;
  }
  
  .watermark-subtitle {
    font-size: 14pt;
  }
  
  .watermark-overlay {
    padding-left: 2%;
  }
}

@media (max-width: 480px) {
  .watermark-title {
    font-size: 28pt;
  }
  
  .watermark-subtitle {
    font-size: 12pt;
  }
}


</style> 
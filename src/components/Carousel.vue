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
  },
  showWatermark: {
    type: Boolean,
    default: true
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
      <div v-if="showWatermark" class="watermark-overlay">
        <div class="watermark-text">
          <h1 class="watermark-title">教育推廣與經營管理處</h1>
          <p class="watermark-subtitle">Office of Continuing Education and Operations Management</p>
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
  height: 637px;  /* 原本 950px * 0.67 ≈ 637px */
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
  padding: 11px;  /* 原本 16px * 0.67 ≈ 11px */
  border: none;
  cursor: pointer;
  z-index: 2;
  font-size: 14px;  /* 新增字體大小控制 */
}

.prev {
  left: 7px;  /* 原本 10px * 0.67 ≈ 7px */
}

.next {
  right: 7px;  /* 原本 10px * 0.67 ≈ 7px */
}

.carousel-dots {
  position: absolute;
  bottom: 13px;  /* 原本 20px * 0.67 ≈ 13px */
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 5px;  /* 原本 8px * 0.67 ≈ 5px */
}

.dot {
  width: 8px;  /* 原本 12px * 0.67 ≈ 8px */
  height: 8px;  /* 原本 12px * 0.67 ≈ 8px */
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
  background: linear-gradient(to right, rgba(0, 0, 0, 0.5), transparent 50%);
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 159px 0 0 54px;  /* 637px * 1/4 ≈ 159px */
  color: white;
  z-index: 1;
}

.watermark-text {
  text-align: left;
}

.watermark-title {
  font-size: 37pt;
  margin: 0;
  font-weight: normal;
  line-height: 1.2;
}

.watermark-subtitle {
  font-size: 20pt;
  margin: 7px 0 0;
  font-weight: normal;
}

@media (max-width: 1024px) {
  .watermark-overlay {
    padding: 118px 0 0 40px;  /* 470px * 1/4 ≈ 118px */
  }
  
  .watermark-title {
    font-size: 30pt;
  }
  
  .watermark-subtitle {
    font-size: 17pt;
  }
}

@media (max-width: 768px) {
  .carousel {
    height: 470px;
  }
  
  .watermark-overlay {
    padding: 118px 0 0 27px;  /* 470px * 1/4 ≈ 118px */
  }
  
  .watermark-title {
    font-size: 23pt;
  }
  
  .watermark-subtitle {
    font-size: 12pt;
  }
}

/* 手機版樣式 */
@media (max-width: 480px) {
  .carousel-container {
    width: 100%;
    margin: 0;
  }

  .carousel {
    height: 250px;
  }

  .watermark-overlay {
    padding: 60px 0 0 20px;
    background: linear-gradient(to right, rgba(0, 0, 0, 0.6), transparent 60%);
  }
  
  .watermark-title {
    font-size: 18pt;
    line-height: 1.1;
  }
  
  .watermark-subtitle {
    font-size: 10pt;
    margin: 5px 0 0;
  }

  .carousel-button {
    padding: 8px;
    font-size: 12px;
  }

  .prev {
    left: 5px;
  }

  .next {
    right: 5px;
  }

  .carousel-dots {
    bottom: 8px;
    gap: 3px;
  }

  .dot {
    width: 6px;
    height: 6px;
  }
}


</style> 
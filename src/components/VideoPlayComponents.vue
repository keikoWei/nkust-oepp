<template>
  <div class="video-container">
    <!-- 標題 -->
    <div class="video-title">
      <h2>精彩花絮</h2>
    </div>
    
    <!-- 影片播放區域 -->
    <div class="video-player-wrapper">
      <!-- 左側切換按鈕 -->
      <button class="nav-btn prev-btn" @click="prevVideo" :disabled="currentIndex === 0">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M15 18L9 12L15 6" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>
      
      <!-- 影片框架 -->
      <div class="video-frame">
        <iframe 
          :src="currentVideoUrl"
          width="100%" 
          height="100%" 
          frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowfullscreen>
        </iframe>
      </div>
      
      <!-- 右側切換按鈕 -->
      <button class="nav-btn next-btn" @click="nextVideo" :disabled="currentIndex === videoList.length - 1">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M9 18L15 12L9 6" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>
    </div>
    
    <!-- 影片指示點 -->
    <div class="video-dots">
      <span 
        v-for="(video, index) in videoList" 
        :key="index"
        :class="['dot', { active: currentIndex === index }]"
        @click="goToVideo(index)">
      </span>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const currentIndex = ref(0)

// YouTube 影片列表 (可以添加更多影片)
const videoList = ref([
  {
    id: 'eNt78mQJavY',
    title: '精彩花絮 1'
  },
  // 可以添加更多影片
  {
    id: 'dQw4w9WgXcQ', // 示例影片ID
    title: '精彩花絮 2'
  },
  {
    id: 'jNQXAC9IVRw', // 示例影片ID
    title: '精彩花絮 3'
  }
])

// 計算當前影片的嵌入URL
const currentVideoUrl = computed(() => {
  const videoId = videoList.value[currentIndex.value].id
  return `https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1`
})

// 切換到上一個影片
const prevVideo = () => {
  if (currentIndex.value > 0) {
    currentIndex.value--
  }
}

// 切換到下一個影片
const nextVideo = () => {
  if (currentIndex.value < videoList.value.length - 1) {
    currentIndex.value++
  }
}

// 直接跳轉到指定影片
const goToVideo = (index) => {
  currentIndex.value = index
}
</script>

<style scoped>
.video-container {
  width: 100%;
  margin: 1.3rem 0;
  font-family: "GenYoGothic TW", "源樣黑體月", "Microsoft JhengHei", sans-serif;
}

/* 標題樣式 */
.video-title {
  text-align: center;
  margin-bottom: 1.3rem;
}

.video-title h2 {
  font-size: 30pt;
  font-weight: bold;
  color: #333;
  margin: 0;
  letter-spacing: 0.7px;
}

/* 影片播放區域 */
.video-player-wrapper {
  width: 1029px;
  height: 587px;
  max-width: 100%;
  margin: 0 auto;
  background: #e5e5e5;
  border-radius: 13px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 13px;
  box-sizing: border-box;
}

/* 影片框架 */
.video-frame {
  width: 868px;
  height: 488px;
  background: #000;
  border-radius: 8px;
  overflow: hidden;
  position: relative;
}

/* 導航按鈕 */
.nav-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 34px;
  height: 34px;
  background: rgba(0, 0, 0, 0.6);
  border: none;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  z-index: 10;
}

.nav-btn:hover {
  background: rgba(0, 0, 0, 0.8);
  transform: translateY(-50%) scale(1.1);
}

.nav-btn:disabled {
  background: rgba(0, 0, 0, 0.3);
  cursor: not-allowed;
  transform: translateY(-50%) scale(1);
}

.nav-btn:disabled svg path {
  stroke: rgba(255, 255, 255, 0.5);
}

.prev-btn {
  left: 20px;
}

.next-btn {
  right: 20px;
}

/* 影片指示點 */
.video-dots {
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-top: 13px;
}

.dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: rgba(63, 89, 99, 0.3);
  cursor: pointer;
  transition: all 0.3s ease;
}

.dot.active {
  background: #3f5963;
  transform: scale(1.2);
}

.dot:hover {
  background: rgba(63, 89, 99, 0.6);
}

/* 響應式設計 */
@media (max-width: 1600px) {
  .video-player-wrapper {
    width: 95%;
    height: auto;
    aspect-ratio: 1536 / 876;
  }
  
  .video-frame {
    width: 95%;
    aspect-ratio: 16 / 9;
    height: auto;
  }
}

@media (max-width: 768px) {
  .video-title h2 {
    font-size: 21.5pt;
  }
  
  .video-player-wrapper {
    padding: 10px;
    border-radius: 10px;
  }
  
  .video-frame {
    width: 95%;
    border-radius: 5px;
  }
  
  .nav-btn {
    width: 27px;
    height: 27px;
  }
  
  .prev-btn {
    left: 13px;
  }
  
  .next-btn {
    right: 13px;
  }
  
  .nav-btn svg {
    width: 13px;
    height: 13px;
  }
}

@media (max-width: 480px) {
  .video-container {
    margin: 0;
    padding: 0 1rem;
  }

  .video-title h2 {
    font-size: 19pt;
  }
  
  .video-player-wrapper {
    width: 100%;
    padding: 7px;
  }
  
  .nav-btn {
    width: 23px;
    height: 23px;
  }
  
  .prev-btn {
    left: 10px;
  }
  
  .next-btn {
    right: 10px;
  }
  
  .nav-btn svg {
    width: 12px;
    height: 12px;
  }
  
  .dot {
    width: 7px;
    height: 7px;
  }
}
</style> 
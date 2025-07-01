<template>
  <div class="video-carousel-container">
    <div class="video-carousel">
      <div class="video-track" 
           :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
        <div v-for="(video, index) in videos" 
             :key="index"
             class="video-slide">
          <video 
            :ref="el => videoRefs[index] = el"
            class="carousel-video"
            :poster="video.poster"
            controls
            preload="metadata"
            @loadedmetadata="onVideoLoaded"
            @ended="next">
            <source :src="video.url" type="video/mp4">
            您的瀏覽器不支援影片播放。
          </video>
        </div>
      </div>
      
      <!-- 控制按鈕 -->
      <button class="carousel-button prev" @click="prev" v-if="videos.length > 1">
        &#10094;
      </button>
      <button class="carousel-button next" @click="next" v-if="videos.length > 1">
        &#10095;
      </button>
      
      <!-- 指示點 -->
      <div class="carousel-dots" v-if="videos.length > 1">
        <span v-for="(_, index) in videos" 
              :key="index"
              :class="['dot', { active: currentIndex === index }]"
              @click="goToSlide(index)">
        </span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const props = defineProps({
  videos: {
    type: Array,
    required: true
  },
  autoplay: {
    type: Boolean,
    default: false
  }
})

const currentIndex = ref(0)
const videoRefs = ref([])
const isTransitioning = ref(false)

const next = () => {
  if (isTransitioning.value || props.videos.length <= 1) return
  
  isTransitioning.value = true
  
  // 暫停當前影片
  pauseCurrentVideo()
  
  currentIndex.value = (currentIndex.value + 1) % props.videos.length
  
  setTimeout(() => {
    isTransitioning.value = false
    if (props.autoplay) {
      playCurrentVideo()
    }
  }, 600)
}

const prev = () => {
  if (isTransitioning.value || props.videos.length <= 1) return
  
  isTransitioning.value = true
  
  // 暫停當前影片
  pauseCurrentVideo()
  
  currentIndex.value = currentIndex.value === 0 
    ? props.videos.length - 1 
    : currentIndex.value - 1
  
  setTimeout(() => {
    isTransitioning.value = false
    if (props.autoplay) {
      playCurrentVideo()
    }
  }, 600)
}

const goToSlide = (index) => {
  if (isTransitioning.value || index === currentIndex.value) return
  
  isTransitioning.value = true
  
  // 暫停當前影片
  pauseCurrentVideo()
  
  currentIndex.value = index
  
  setTimeout(() => {
    isTransitioning.value = false
    if (props.autoplay) {
      playCurrentVideo()
    }
  }, 600)
}

const pauseCurrentVideo = () => {
  const currentVideo = videoRefs.value[currentIndex.value]
  if (currentVideo) {
    currentVideo.pause()
  }
}

const playCurrentVideo = () => {
  const currentVideo = videoRefs.value[currentIndex.value]
  if (currentVideo) {
    currentVideo.play().catch(() => {
      // 自動播放可能被瀏覽器阻止，這是正常的
    })
  }
}

const onVideoLoaded = () => {
  // 影片載入完成時的處理
}

onMounted(() => {
  if (props.autoplay) {
    // 延遲一點時間再自動播放，讓頁面完全載入
    setTimeout(() => {
      playCurrentVideo()
    }, 1000)
  }
})

onUnmounted(() => {
  // 清理所有影片
  videoRefs.value.forEach(video => {
    if (video) {
      video.pause()
    }
  })
})
</script>

<style scoped>
.video-carousel-container {
  width: 55vw;
  max-width: 100%;
  margin: 0 auto;
  position: relative;
  overflow: hidden;
  margin-top: 0;
  padding-top: 0;
}

.video-carousel {
  width: 100%;
  aspect-ratio: 16/9;
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
}

.video-track {
  display: flex;
  width: 100%;
  height: 100%;
  transition: transform 0.6s ease-in-out;
}

.video-slide {
  width: 100%;
  height: 100%;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.carousel-video {
  width: 100%;
  height: 100%;
  object-fit: contain;
  background-color: #000;
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
  font-size: 18px;
  border-radius: 4px;
  transition: background-color 0.3s;
}

.carousel-button:hover {
  background: rgba(0, 0, 0, 0.7);
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
  z-index: 2;
}

.dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.5);
  cursor: pointer;
  transition: background-color 0.3s;
}

.dot.active {
  background: white;
}

.dot:hover {
  background: rgba(255, 255, 255, 0.8);
}

/* 響應式設計 */
@media (max-width: 768px) {
  .video-carousel-container {
    width: 90vw;
  }
  
  .carousel-button {
    padding: 12px;
    font-size: 16px;
  }
  
  .prev {
    left: 5px;
  }
  
  .next {
    right: 5px;
  }
}
</style> 
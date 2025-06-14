<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

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

const next = () => {
  currentIndex.value = (currentIndex.value + 1) % props.images.length
}

const prev = () => {
  currentIndex.value = currentIndex.value === 0 
    ? props.images.length - 1 
    : currentIndex.value - 1
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
      <transition-group name="fade">
        <img v-for="(image, index) in images" 
             :key="index"
             :src="image.url"
             :alt="image.alt"
             v-show="currentIndex === index"
             class="carousel-image">
      </transition-group>
      
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
              @click="currentIndex = index">
        </span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.carousel-container {
  width: 100%;
  position: relative;
  overflow: hidden;
}

.carousel {
  width: 100%;
  height: 400px;
  position: relative;
}

.carousel-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
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

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style> 
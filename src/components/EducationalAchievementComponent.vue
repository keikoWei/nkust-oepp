<template>
  <div class="educational-achievement">
    <!-- 標題 -->
    <div class="achievement-title">
      <h2>動態教育實績</h2>
    </div>
    
    <!-- 成就網格 -->
    <div class="achievement-grid">
      <!-- 第一排 -->
      <div class="achievement-row">
        <div class="achievement-item" :ref="el => { if (el) achievementItems[0] = el }">
          <div class="icon-container">
            <img src="/sdgs/sdgs1.png" alt="SDG 1 教育實績" class="sdg-icon">
          </div>
          <div class="achievement-text">
            <h3>教育實績</h3>
            <div class="percentage-display">
              <span class="percentage-number">{{ animatedPercentages[0] }}</span>
              <span class="percentage-symbol">%</span>
            </div>
          </div>
        </div>
        
        <div class="achievement-item" :ref="el => { if (el) achievementItems[1] = el }">
          <div class="icon-container">
            <img src="/sdgs/sdgs2.png" alt="SDG 2 教育實績" class="sdg-icon">
          </div>
          <div class="achievement-text">
            <h3>教育實績</h3>
            <div class="percentage-display">
              <span class="percentage-number">{{ animatedPercentages[1] }}</span>
              <span class="percentage-symbol">%</span>
            </div>
          </div>
        </div>
        
        <div class="achievement-item" :ref="el => { if (el) achievementItems[2] = el }">
          <div class="icon-container">
            <img src="/sdgs/sdgs3.png" alt="SDG 3 健康與福祉" class="sdg-icon">
          </div>
          <div class="achievement-text">
            <h3>教育實績</h3>
            <div class="percentage-display">
              <span class="percentage-number">{{ animatedPercentages[2] }}</span>
              <span class="percentage-symbol">%</span>
            </div>
          </div>
        </div>
      </div>
      
      <!-- 第二排 -->
      <div class="achievement-row">
        <div class="achievement-item" :ref="el => { if (el) achievementItems[3] = el }">
          <div class="icon-container">
            <img src="/sdgs/sdgs4.png" alt="SDG 4 優質教育" class="sdg-icon">
          </div>
          <div class="achievement-text">
            <h3>教育實績</h3>
            <div class="percentage-display">
              <span class="percentage-number">{{ animatedPercentages[3] }}</span>
              <span class="percentage-symbol">%</span>
            </div>
          </div>
        </div>
        
        <div class="achievement-item" :ref="el => { if (el) achievementItems[4] = el }">
          <div class="icon-container">
            <img src="/sdgs/sdgs5.png" alt="SDG 5 教育實績" class="sdg-icon">
          </div>
          <div class="achievement-text">
            <h3>教育實績</h3>
            <div class="percentage-display">
              <span class="percentage-number">{{ animatedPercentages[4] }}</span>
              <span class="percentage-symbol">%</span>
            </div>
          </div>
        </div>
        
        <div class="achievement-item" :ref="el => { if (el) achievementItems[5] = el }">
          <div class="icon-container">
            <img src="/sdgs/sdgs6.png" alt="SDG 6 教育實績" class="sdg-icon">
          </div>
          <div class="achievement-text">
            <h3>教育實績</h3>
            <div class="percentage-display">
              <span class="percentage-number">{{ animatedPercentages[5] }}</span>
              <span class="percentage-symbol">%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, nextTick } from 'vue'

// 目標百分比數據
const targetPercentages = ref([89.76, 64.32, 74.03, 89.76, 64.32, 74.03])

// 動畫中的百分比數據
const animatedPercentages = ref([0, 0, 0, 0, 0, 0])

// 動畫狀態
const animationTriggered = ref(false)

// DOM 引用
const achievementItems = ref([])

// 數字動畫函數
const animateNumber = (index, target, duration = 2000) => {
  console.log(`animateNumber 被調用: index=${index}, target=${target}`) // 調試信息
  const startTime = performance.now()
  const startValue = 0
  
  const animate = (currentTime) => {
    const elapsed = currentTime - startTime
    const progress = Math.min(elapsed / duration, 1)
    
    // 使用緩動函數讓動畫更自然
    const easeOutQuart = 1 - Math.pow(1 - progress, 4)
    const currentValue = startValue + (target - startValue) * easeOutQuart
    
    animatedPercentages.value[index] = currentValue.toFixed(2)
    
    if (progress < 1) {
      requestAnimationFrame(animate)
    } else {
      animatedPercentages.value[index] = target.toFixed(2)
      console.log(`動畫完成: index=${index}, 最終值=${target}`) // 調試信息
    }
  }
  
  requestAnimationFrame(animate)
}

// 檢查元素是否在視窗中
const isElementInViewport = (el) => {
  const rect = el.getBoundingClientRect()
  const windowHeight = window.innerHeight || document.documentElement.clientHeight
  
  // 當元素頂部進入視窗下半部時觸發動畫
  return rect.top <= windowHeight * 0.8 && rect.bottom >= 0
}

// 滾動事件處理
const handleScroll = () => {
  if (animationTriggered.value) return
  
  const firstItem = achievementItems.value[0]
  if (firstItem && isElementInViewport(firstItem)) {
    console.log('動畫觸發！') // 調試信息
    animationTriggered.value = true
    
    // 依序觸發動畫，每個項目間隔200ms
    targetPercentages.value.forEach((target, index) => {
      setTimeout(() => {
        console.log(`開始動畫 ${index}: ${target}%`) // 調試信息
        animateNumber(index, target)
      }, index * 200)
    })
  }
}

onMounted(async () => {
  await nextTick()
  
  console.log('組件已掛載，achievementItems:', achievementItems.value) // 調試信息
  
  // 添加滾動監聽
  window.addEventListener('scroll', handleScroll)
  
  // 延遲初始檢查，確保DOM完全渲染
  setTimeout(() => {
    handleScroll()
  }, 100)
})



// 清理事件監聽
onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.educational-achievement {
  width: 100%;
  margin: 2rem 0;
  padding: 2rem 0;
  font-family: "GenYoGothic TW", "源樣黑體月", "Microsoft JhengHei", sans-serif;
}

/* 標題樣式 */
.achievement-title {
  text-align: center;
  margin-bottom: 3rem;
}

.achievement-title h2 {
  font-size: 30pt;
  font-weight: bold;
  color: #333;
  margin: 0;
  letter-spacing: 1px;
}

/* 成就網格 */
.achievement-grid {
  max-width: 70vw;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 3rem;
}

.achievement-row {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  justify-items: center;
}

.achievement-item {
  display: flex;
  flex-direction: row;
  align-items: center;
  text-align: left;
  max-width: 400px;
  padding: 1rem;
  gap: 1rem;
}

/* 圖標容器 */
.icon-container {
  flex-shrink: 0;
}

.sdg-icon {
  width: 120px;
  height: 120px;
  object-fit: contain;
}

/* 文字區域 */
.achievement-text {
  flex: 1;
}

.achievement-text h3 {
  font-size: 28pt;
  color: #333;
  margin: 0 0 0.5rem 0;
  font-weight: normal;
}

.percentage-display {
  display: flex;
  align-items: baseline;
  justify-content: flex-start;
  gap: 2px;
}

.percentage-number {
  font-size: 48pt;
  font-weight: bold;
  color: #333;
  line-height: 1;
}

.percentage-symbol {
  font-size: 28pt;
  font-weight: bold;
  color: #333;
}

/* 響應式設計 */
@media (max-width: 1024px) {
  .achievement-title h2 {
    font-size: 36pt;
  }
  
  .achievement-grid {
    max-width: 90%;
  }
  
  .achievement-row {
    gap: 1.5rem;
  }
  
  .achievement-item {
    max-width: 350px;
  }
  
  .achievement-text h3 {
    font-size: 28pt;
  }
  
  .sdg-icon {
    width: 105px;
    height: 105px;
  }
  
  .percentage-number {
    font-size: 40pt;
  }
  
  .percentage-symbol {
    font-size: 24pt;
  }
}

@media (max-width: 768px) {
  .achievement-row {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  .achievement-title h2 {
    font-size: 32pt;
  }
  
  .achievement-item {
    max-width: 100%;
    justify-content: flex-start;
  }
  
  .achievement-text h3 {
    font-size: 24pt;
  }
  
  .sdg-icon {
    width: 90px;
    height: 90px;
  }
  
  .percentage-number {
    font-size: 36pt;
  }
  
  .percentage-symbol {
    font-size: 20pt;
  }
}

@media (max-width: 480px) {
  .achievement-title h2 {
    font-size: 28pt;
  }
  
  .achievement-grid {
    gap: 2rem;
  }
  
  .achievement-item {
    padding: 0.5rem;
    gap: 0.5rem;
  }
  
  .achievement-text h3 {
    font-size: 20pt;
  }
  
  .sdg-icon {
    width: 75px;
    height: 75px;
  }
  
  .percentage-number {
    font-size: 32pt;
  }
  
  .percentage-symbol {
    font-size: 18pt;
  }
}
</style> 
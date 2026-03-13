<template>
  <div class="eec-courses-container">
    <div class="courses-wrapper">
      <div class="title-section">
        <h2 class="title-text">教育推廣中心 - 熱門課程</h2>
      </div>

      <p v-if="loading" class="courses-loading">載入中...</p>
      <p v-else-if="!courseList.length" class="courses-empty">暫無課程</p>
      <template v-else>
        <div class="courses-grid">
          <div
            class="course-card"
            v-for="(course, index) in courseList"
            :key="course.id || index"
            @click="goToCourseDetail(course)"
          >
            <div class="image-container">
              <img
                :src="course.mainImageUrl || course.main_image_url || (course.imageUrls && course.imageUrls[0]) || (course.image_urls && course.image_urls[0]) || '/image/example.png'"
                :alt="course.title"
                class="course-image"
              />
            </div>
          </div>
        </div>
        <div class="more-info-section">
          <div class="button-with-lines">
            <div class="line left-line"></div>
            <q-btn
              rounded
              class="more-btn"
              label="了解更多"
              no-caps
              @click="handleMoreInfo"
            />
            <div class="line right-line"></div>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import { useRouter } from 'vue-router'
import { getPublicCourses } from '@/api/course'

const router = useRouter()
const loading = ref(true)
const courses = ref([])

const courseList = computed(() => {
  const list = [...courses.value]
  list.sort((a, b) => (a.sortOrder ?? a.sort_order ?? 0) - (b.sortOrder ?? b.sort_order ?? 0))
  return list.slice(0, 6)
})

onMounted(async () => {
  try {
    const res = await getPublicCourses('EDUCATION_CENTER')
    const list = Array.isArray(res) ? res : (res?.data ?? [])
    courses.value = list ?? []
  } catch {
    courses.value = []
  } finally {
    loading.value = false
  }
})

const goToCourseDetail = (course) => {
  if (course?.id != null) {
    router.push({ path: `/educationCenter/course-detail/${course.id}`, state: { course } })
  }
}

const handleMoreInfo = () => {
  window.open('https://cec.nkust.edu.tw/CurriculumList.aspx', '_blank')
}
</script>

<style scoped>
.eec-courses-container {
  width: 100%;
  margin: 1.3rem 0;
  font-family: "GenYoGothic TW", "源樣黑體月", "Microsoft JhengHei", sans-serif;
}

.courses-wrapper {
  position: relative;
  background: #fff;
  padding: 0 13px 20px 13px;
}

/* 標題區域 */
.title-section {
  text-align: center;
  margin-bottom: 20px;
  position: relative;
}

.title-text {
  color: #534741;
  font-size: 30pt;
  font-weight: bold;
  margin: 13px 0;
  letter-spacing: 0.7px;
}

.courses-loading,
.courses-empty {
  text-align: center;
  color: #999;
  padding: 2rem;
  margin: 0;
}

/* 4格圖片佈局 */
.courses-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 34px;
  margin-bottom: 27px;
  max-width: 1055px;
  margin-left: auto;
  margin-right: auto;
  justify-items: center;
  padding: 13px 0;
}

.course-card {
  background: #f2ede8;
  border-radius: 17px;
  padding: 12px;
  transition: transform 0.3s ease;
  width: 512px;
  height: 336px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.course-card:hover {
  transform: translateY(-1.3px);
  box-shadow: 0 3px 8px rgba(83, 71, 65, 0.15);
}

.image-container {
  width: 100%;
  height: 85%;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 1.3px 5px rgba(0,0,0,0.1);
}

.course-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

/* 了解更多按鈕區域 */
.more-info-section {
  text-align: center;
  margin: 20px 0;
}

.button-with-lines {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 13px;
  max-width: 536px;
  margin: 0 auto;
}

.line {
  flex: 1;
  height: 2px;
  background-color: #e3d9cd;
}

.left-line,
.right-line {
  min-width: 67px;
}

.more-btn {
  background-color: #e3d9cd !important;
  color: #534741 !important;
  padding: 5px 20px;
  font-size: 11pt;
  font-weight: bold;
  min-width: 80px;
  border: none;
  flex-shrink: 0;
}

.more-btn:hover {
  background-color: #d4c7bb !important;
}

/* 響應式設計 */
@media (max-width: 1100px) {
  .courses-grid {
    max-width: 603px;
    gap: 27px;
    padding: 10px 0;
  }
  
  .course-card {
    width: 402px;
    height: 261px;
    padding: 10px;
    border-radius: 13px;
  }
}

@media (max-width: 768px) {
  .courses-grid {
    grid-template-columns: 1fr;
    gap: 23px;
    max-width: 402px;
    padding: 10px 0;
  }
  
  .course-card {
    width: 402px;
    height: 261px;
    padding: 10px;
    border-radius: 12px;
  }
  
  .image-container {
    width: 100%;
    height: 80%;
  }
  
  .title-text {
    font-size: 21.5pt;
  }
  
  .courses-wrapper {
    padding: 0 10px 17px 10px;
  }
  
  .button-with-lines {
    gap: 10px;
    max-width: 268px;
  }
  
  .line {
    min-width: 34px;
    height: 1.3px;
  }
}

@media (max-width: 480px) {
  .courses-grid {
    max-width: 322px;
    gap: 20px;
    padding: 7px 0;
  }
  
  .course-card {
    width: 302px;
    height: 201px;
    padding: 8px;
    border-radius: 10px;
  }
  
  .image-container {
    width: 100%;
    height: 75%;
  }
  
  .title-text {
    font-size: 16pt;
  }
  
  .more-btn {
    padding: 4px 17px;
    font-size: 9.5pt;
    min-width: 67px;
  }
  
  .button-with-lines {
    gap: 7px;
    max-width: 201px;
  }
  
  .line {
    min-width: 20px;
    height: 1.3px;
  }
}
</style> 
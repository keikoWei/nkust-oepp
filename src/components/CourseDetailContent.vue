<template>
  <div class="course-detail-content">
    <div class="content-container">
      <p v-if="loading" class="detail-loading">載入中...</p>
      <div v-else-if="loadFailed" class="detail-failed">
        <p>無法取得課程內容</p>
        <router-link :to="backPath" class="back-link">{{ backLabel }}</router-link>
      </div>
      <template v-else-if="course">
        <div class="announcement-header">
          <h2 class="announcement-title">{{ course.title }}</h2>
          <p class="announcement-date">{{ course.date }}</p>
        </div>
        <div class="content-section">
          <div class="content-text" v-html="processedContent"></div>
        </div>
        <div class="images-section" v-if="course.images && course.images.length > 0">
          <div class="images-row">
            <div
              class="image-item"
              v-for="(image, index) in course.images"
              :key="index"
              @click="openImageModal(image)"
            >
              <img :src="image" :alt="`圖片 ${index + 1}`" />
            </div>
          </div>
        </div>
        <div class="download-section" v-if="course.downloadFilePath || course.downloadFile">
          <div class="download-item">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" class="download-icon">
              <path d="M21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V15" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M7 10L12 15L17 10" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M12 15V3" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <a
              v-if="course.downloadFilePath"
              href="#"
              class="download-link"
              @click.prevent="handleDownloadFile(course)"
            >
              {{ course.downloadFileName }}
            </a>
            <a
              v-else
              :href="course.downloadFile"
              :download="getDisplayFileName(course.downloadFile)"
              class="download-link"
              target="_blank"
            >
              {{ getDisplayFileName(course.downloadFile) }}
            </a>
          </div>
        </div>
      </template>
    </div>
    <div class="image-modal" v-if="modalImage" @click="closeImageModal">
      <div class="modal-content" @click.stop>
        <button class="close-btn" @click="closeImageModal">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
        <img :src="modalImage" alt="放大圖片" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useCourseDetail } from '@/api/useCourseDetail'

defineProps({
  backPath: { type: String, default: '/educationCenter/hotCourses' },
  backLabel: { type: String, default: '返回熱門課程' }
})

const route = useRoute()
const idRef = computed(() => route.params.id)
const {
  course,
  loading,
  loadFailed,
  processedContent,
  modalImage,
  openImageModal,
  closeImageModal,
  getDisplayFileName,
  handleDownloadFile
} = useCourseDetail(idRef)
</script>

<style scoped>
.course-detail-content {
  min-height: 40vh;
  background-color: #ffffff;
}

.content-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 3rem 2rem;
}

.detail-loading {
  text-align: center;
  padding: 3rem;
  font-size: 16px;
  color: #999;
}

.detail-failed {
  text-align: center;
  padding: 3rem;
}

.detail-failed p {
  margin: 0 0 1rem;
  font-size: 16px;
  color: #666;
}

.detail-failed .back-link {
  color: #534741;
  text-decoration: underline;
}

.detail-failed .back-link:hover {
  color: #333;
}

.announcement-header {
  text-align: center;
  margin-bottom: 2rem;
  padding: 2rem 0;
}

.announcement-title {
  font-size: 2rem;
  font-weight: bold;
  color: #534741;
  margin: 0 0 1rem 0;
  line-height: 1.3;
}

.announcement-date {
  font-size: 1.2rem;
  color: #666;
  margin: 0;
}

.content-section {
  background: #ffffff;
  padding: 3rem;
  margin-bottom: 2rem;
}

.content-text {
  font-family: "源樣黑體月R", "GenYoGothic TW", "源樣黑體月", "Microsoft JhengHei", sans-serif;
  font-size: 20pt;
  line-height: 1.6;
  color: #333;
}

.content-text :deep(p),
.content-text :deep(li) {
  font-size: 20pt;
  font-family: inherit;
}

.content-text :deep(h3) {
  color: #534741;
  font-size: 20pt;
  margin: 2rem 0 1rem 0;
  font-weight: bold;
}

.content-text :deep(p) {
  margin-bottom: 1.2rem;
}

.content-text :deep(ul) {
  margin: 1rem 0;
  padding-left: 2rem;
}

.content-text :deep(li) {
  margin-bottom: 0.8rem;
}

.images-section {
  margin-top: 2rem;
  padding: 2rem 0;
  background: #ffffff;
  text-align: center;
}

.images-row {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  justify-content: flex-start;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 3rem;
}

.image-item {
  cursor: pointer;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  flex-shrink: 0;
}

.image-item:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
}

.image-item img {
  width: 120px;
  height: 80px;
  object-fit: contain;
  display: block;
  background-color: #ffffff;
}

.image-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.modal-content {
  position: relative;
  max-width: 90%;
  max-height: 90%;
}

.modal-content img {
  width: 1200px;
  height: 800px;
  object-fit: contain;
  max-width: 100%;
  max-height: 100%;
}

.close-btn {
  position: absolute;
  top: -40px;
  right: 0;
  background: none;
  border: none;
  color: white;
  cursor: pointer;
  padding: 0.5rem;
}

.close-btn:hover {
  opacity: 0.7;
}

.download-section {
  margin-top: 2rem;
  padding: 2rem 0;
  background: #ffffff;
  text-align: center;
}

.download-item {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 1.5rem 3rem;
  background: #f8f9fa;
  border-radius: 8px;
  border: 2px solid #e3d9cd;
}

.download-icon {
  color: #534741;
  flex-shrink: 0;
}

.download-link {
  font-family: "源樣黑體月R", "GenYoGothic TW", "源樣黑體月", "Microsoft JhengHei", sans-serif;
  font-size: 18pt;
  color: #534741;
  text-decoration: none;
  transition: color 0.3s ease;
}

.download-link:hover {
  color: #8B4513;
  text-decoration: underline;
}

@media (max-width: 768px) {
  .content-container {
    padding: 2rem 1.5rem;
  }
  .content-section {
    padding: 2rem 1.5rem;
  }
  .images-row {
    padding: 0 1.5rem;
  }
  .image-item img {
    width: 100px;
    height: 70px;
  }
  .modal-content img {
    width: 100%;
    height: auto;
    max-height: 80vh;
  }
}

@media (max-width: 480px) {
  .content-container {
    padding: 2rem 1rem;
  }
  .announcement-title {
    font-size: 1.5rem;
  }
  .content-section {
    padding: 2rem 1.5rem;
  }
  .modal-content img {
    max-height: 70vh;
  }
}
</style>

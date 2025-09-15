<template>
  <div class="director-section">
    <div class="director-card">
      <div class="director-photo">
        <img :src="director.photo" :alt="`${director.title}照片`" class="photo">
      </div>
      <div class="director-info">
        <div class="title-name-row">
          <h2 class="title">{{ director.title }}</h2>
          <h3 class="name">{{ director.name }}</h3>
        </div>
        <div class="contact-info">
          <p><span class="label">分機：</span>{{ director.extension }}</p>
          <p><span class="label">信箱：</span>{{ director.email }}</p>
        </div>
        <div class="description">
          <!-- 支援舊格式的 responsibility -->
          <p v-if="director.responsibility && !director.responsibilities"><span class="label">職掌：</span>{{ director.responsibility }}</p>
          
          <!-- 支援新格式的 responsibilities 數組 -->
          <div v-if="director.responsibilities">
            <p><span class="label">職掌：</span></p>
            <p v-for="responsibility in director.responsibilities" :key="responsibility" class="responsibility-item">
              {{ responsibility }}
            </p>
          </div>
          
          <div v-if="director.additionalInfo">
            <p v-for="info in director.additionalInfo" :key="info">{{ info }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  director: {
    type: Object,
    required: true,
    validator: (value) => {
      return value.title && value.name && value.photo && 
             value.extension !== undefined && value.email !== undefined && 
             (value.responsibility !== undefined || value.responsibilities !== undefined)
    }
  }
})
</script>

<style scoped>
/* 處室長區域 */
.director-section {
  margin-bottom: 0;
}

.director-card {
  background: #d9d9d9;
  padding: 1.3rem;
  margin-bottom: 1.3rem;
  display: flex;
  align-items: flex-start;
  gap: 2rem;
  max-width: 720px;
  margin: 0 auto 1.3rem auto;
}

.director-photo {
  flex-shrink: 0;
}

.director-photo .photo {
  width: 211px;
  height: 211px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid #86a8ab;
}

.director-info {
  flex: 1;
  padding-top: 0.7rem;
  min-width: 0;
}

.title-name-row {
  display: flex;
  align-items: baseline;
  gap: 0.7rem;
  margin-bottom: 0.3rem;
  flex-wrap: nowrap;
  white-space: nowrap;
}

.director-info .title {
  font-size: 27pt;
  color: #3f5963;
  margin: 0;
  font-weight: normal;
  flex-shrink: 0;
  white-space: nowrap;
}

.director-info .name {
  font-size: 37pt;
  color: #333;
  margin: 0;
  font-weight: bold;
  flex-shrink: 0;
  white-space: nowrap;
}

.contact-info {
  margin-bottom: 1rem;
}

.contact-info p {
  margin: 0.3rem 0;
  font-size: 15.5pt;
  color: #333;
}

.description {
  font-size: 15.5pt;
  color: #333;
}

.description p {
  margin: 0.3rem 0;
  line-height: 1.6;
}

.responsibility-item {
  margin: 0.2rem 0 !important;
  line-height: 1.6 !important;
  padding-left: 0;
}

.label {
  font-weight: bold;
  color: #3f5963;
}

/* 響應式設計 */
@media (max-width: 768px) {
  .director-section {
    display: flex;
    justify-content: center;
    width: 100%;
  }
  
  .director-card {
    flex-direction: column;
    text-align: center;
    padding: 1rem;
    width: 100%;
    max-width: none;
    margin: 0;
    display: flex;
    align-items: center;
  }
  
  .director-photo {
    display: flex;
    justify-content: center;
    margin-bottom: 1rem;
  }
  
  .director-photo .photo {
    width: 168px;
    height: 168px;
  }
  
  .director-info {
    text-align: center;
    width: 100%;
    padding-top: 0;
  }
  
  .title-name-row {
    justify-content: center;
    flex-wrap: wrap;
    gap: 0.5rem;
  }
  
  .director-info .title {
    font-size: 13.5pt;
  }
  
  .director-info .name {
    font-size: 16pt;
  }
  
  .contact-info {
    text-align: center;
  }
  
  .contact-info p {
    text-align: center;
  }
  
  .description {
    text-align: center;
  }
  
  .description p {
    text-align: center;
  }
  
  .responsibility-item {
    text-align: center !important;
  }
}

@media (max-width: 480px) {
  .director-section {
    display: flex;
    justify-content: center;
    width: 100vw;
    margin: 0;
    padding: 0 1rem;
    box-sizing: border-box;
  }
  
  .director-card {
    width: 100%;
    max-width: none;
    margin: 0;
    padding: 1.5rem 1rem;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .director-photo {
    display: flex;
    justify-content: center;
    margin-bottom: 1rem;
  }
  
  .director-photo .photo {
    width: 150px;
    height: 150px;
  }
  
  .director-info {
    text-align: center;
    width: 100%;
    padding-top: 0;
  }
  
  .title-name-row {
    justify-content: center;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-bottom: 1rem;
  }
  
  .director-info .title {
    font-size: 16pt;
  }
  
  .director-info .name {
    font-size: 20pt;
  }
  
  .contact-info {
    text-align: center;
    margin-bottom: 1rem;
  }
  
  .contact-info p {
    font-size: 14pt;
    text-align: center;
  }
  
  .description {
    text-align: center;
  }
  
  .description p {
    font-size: 14pt;
    text-align: center;
  }
  
  .responsibility-item {
    text-align: center !important;
  }
}
</style> 
<template>
  <div class="director-section">
    <div class="director-card">
      <div class="director-photo">
        <img :src="director.photo" :alt="`${director.title}照片`" class="photo">
      </div>
      <div class="director-info">
        <h2 class="title">{{ director.title }}</h2>
        <h3 class="name">{{ director.name }}</h3>
        <div class="contact-info">
          <p><span class="label">分機：</span>{{ director.extension }}</p>
          <p><span class="label">信箱：</span>{{ director.email }}</p>
        </div>
        <div class="description">
          <p><span class="label">職掌：</span>{{ director.responsibility }}</p>
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
             value.responsibility !== undefined
    }
  }
})
</script>

<style scoped>
/* 處室長區域 */
.director-section {
  margin-bottom: 3rem;
}

.director-card {
  background: #d9d9d9;
  padding: 2rem;
  display: flex;
  align-items: center;
  gap: 2rem;
  max-width: 800px;
  margin: 0 auto;
}

.director-photo {
  flex-shrink: 0;
}

.director-photo .photo {
  width: 375px;
  height: 375px;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid #86a8ab;
}

.director-info {
  flex: 1;
}

.director-info .title {
  font-size: 24pt;
  color: #3f5963;
  margin: 0 0 1rem 0;
  font-weight: normal;
}

.director-info .name {
  font-size: 30pt;
  color: #333;
  margin: 0 0 1.5rem 0;
  font-weight: bold;
}

.contact-info {
  margin-bottom: 1.5rem;
}

.contact-info p {
  margin: 0.5rem 0;
  font-size: 14pt;
  color: #333;
}

.description {
  font-size: 14pt;
  color: #333;
}

.description p {
  margin: 0.5rem 0;
  line-height: 1.6;
}

.label {
  font-weight: bold;
  color: #3f5963;
}

/* 響應式設計 */
@media (max-width: 768px) {
  .director-card {
    flex-direction: column;
    text-align: center;
    padding: 1.5rem;
  }
  
  .director-photo .photo {
    width: 250px;
    height: 250px;
  }
  
  .director-info .title {
    font-size: 20pt;
  }
  
  .director-info .name {
    font-size: 24pt;
  }
}

@media (max-width: 480px) {
  .director-photo .photo {
    width: 200px;
    height: 200px;
  }
  
  .director-info .title {
    font-size: 18pt;
  }
  
  .director-info .name {
    font-size: 20pt;
  }
}
</style> 
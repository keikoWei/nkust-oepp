<template>
  <div class="member-card">
    <div class="member-photo">
      <img :src="member.photo" :alt="`${member.title}照片`" class="photo">
    </div>
    <div class="member-info">
      <h3 class="member-title">{{ member.title }}</h3>
      <h4 class="member-name">{{ member.name }}</h4>
      <p v-if="member.subtitle" class="member-subtitle">{{ member.subtitle }}</p>
      <div class="contact-info">
        <p v-for="contact in member.contacts" :key="contact.label">
          <span class="label">{{ contact.label }}：</span>{{ contact.value }}
        </p>
      </div>
      <div v-if="member.responsibilities" class="description">
        <p><span class="label">職掌：</span></p>
        <p v-for="responsibility in member.responsibilities" :key="responsibility">
          {{ responsibility }}
        </p>
      </div>
      <div v-if="member.additionalInfo" class="description">
        <p v-for="info in member.additionalInfo" :key="info">
          <span class="label">{{ info.label }}：</span>{{ info.value }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  member: {
    type: Object,
    required: true,
    validator: (value) => {
      return value.title && value.name && value.photo && value.contacts
    }
  }
})
</script>

<style scoped>
.member-card {
  background: #d9d9d9;
  padding: 2rem;
  margin-bottom: 2rem;
  display: flex;
  align-items: flex-start;
  gap: 2rem;
  max-width: 800px;
  margin: 0 auto 2rem auto;
}

.member-photo {
  flex-shrink: 0;
}

.member-photo .photo {
  width: 315px;
  height: 315px;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid #86a8ab;
}

.member-info {
  flex: 1;
  padding-top: 1rem;
}

.member-title {
  font-size: 20pt;
  color: #3f5963;
  margin: 0 0 0.5rem 0;
  font-weight: normal;
}

.member-name {
  font-size: 24pt;
  color: #333;
  margin: 0 0 0.5rem 0;
  font-weight: bold;
}

.member-subtitle {
  font-size: 14pt;
  color: #666;
  margin: 0 0 1rem 0;
  font-style: italic;
}

.contact-info {
  margin-bottom: 1.5rem;
}

.contact-info p {
  margin: 0.3rem 0;
  font-size: 13pt;
  color: #333;
}

.description {
  font-size: 13pt;
  color: #333;
}

.description p {
  margin: 0.3rem 0;
  line-height: 1.5;
}

.label {
  font-weight: bold;
  color: #3f5963;
}

/* 響應式設計 */
@media (max-width: 768px) {
  .member-card {
    flex-direction: column;
    text-align: center;
    padding: 1.5rem;
  }
  
  .member-photo .photo {
    width: 250px;
    height: 250px;
  }
  
  .member-title {
    font-size: 18pt;
  }
  
  .member-name {
    font-size: 20pt;
  }
}

@media (max-width: 480px) {
  .member-photo .photo {
    width: 200px;
    height: 200px;
  }
  
  .member-title {
    font-size: 16pt;
  }
  
  .member-name {
    font-size: 18pt;
  }
  
  .contact-info p,
  .description p {
    font-size: 12pt;
  }
}
</style> 
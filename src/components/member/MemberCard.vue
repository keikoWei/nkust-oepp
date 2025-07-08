<template>
  <div class="member-card">
    <div class="member-photo">
      <img :src="member.photo" :alt="`${member.title}照片`" class="photo">
    </div>
    <div class="member-info">
      <div class="title-name-row">
        <h3 class="member-title">{{ member.title }}</h3>
        <h4 class="member-name">{{ member.name }}</h4>
      </div>
      <p v-if="member.subtitle" class="member-subtitle">{{ member.subtitle }}</p>
      <div class="contact-info">
        <p v-for="contact in member.contacts" :key="contact.label">
          <span class="label">{{ contact.label }}：</span>{{ contact.value }}
        </p>
      </div>
      <div v-if="member.responsibilities" class="description">
        <p><span class="label">職掌：</span></p>
        <p v-for="responsibility in member.responsibilities" :key="responsibility" class="responsibility-item">
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
  padding: 1.3rem;
  margin-bottom: 1.3rem;
  display: flex;
  align-items: flex-start;
  gap: 1.3rem;
  max-width: 536px;
  margin: 0 auto 1.3rem auto;
}

.member-photo {
  flex-shrink: 0;
}

.member-photo .photo {
  width: 211px;
  height: 211px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid #86a8ab;
}

.member-info {
  flex: 1;
  padding-top: 0.7rem;
}

.title-name-row {
  display: flex;
  align-items: baseline;
  gap: 0.7rem;
  margin-bottom: 0.3rem;
  flex-wrap: nowrap;
  white-space: nowrap;
}

.member-title {
  font-size: 21.5pt;
  color: #3f5963;
  margin: 0;
  font-weight: normal;
  flex-shrink: 0;
  white-space: nowrap;
}

.member-name {
  font-size: 16pt;
  color: #333;
  margin: 0;
  font-weight: bold;
  flex-shrink: 0;
  white-space: nowrap;
}

.member-subtitle {
  font-size: 9.5pt;
  color: #666;
  margin: 0 0 0.7rem 0;
  font-style: italic;
}

.contact-info {
  margin-bottom: 1rem;
}

.contact-info p {
  margin: 0.2rem 0;
  font-size: 13.5pt;
  color: #333;
}

.description {
  font-size: 13.5pt;
  color: #333;
}

.description p {
  margin: 0.2rem 0;
  line-height: 1.5;
}

.responsibility-item {
  margin: 0.2rem 0 !important;
  line-height: 1.5 !important;
  text-indent: -1em;
  padding-left: 1em;
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
    padding: 1rem;
  }
  
  .member-photo .photo {
    width: 168px;
    height: 168px;
  }
  
  .member-title {
    font-size: 12pt;
  }
  
  .member-name {
    font-size: 13.5pt;
  }
}

@media (max-width: 480px) {
  .member-photo .photo {
    width: 134px;
    height: 134px;
  }
  
  .member-title {
    font-size: 11pt;
  }
  
  .member-name {
    font-size: 12pt;
  }
  
  .contact-info p,
  .description p {
    font-size: 8pt;
  }
}
</style> 
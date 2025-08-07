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
        <div class="responsibilities-container" :class="{ 'collapsed': !isExpanded }">
          <p v-for="(responsibility, index) in member.responsibilities" 
             :key="responsibility" 
             class="responsibility-item"
             :class="{ 'hidden': !isExpanded && index >= 3 }">
            {{ responsibility }}
          </p>
        </div>
        <div v-if="needsExpand" class="expand-section">
          <div class="divider-line"></div>
          <button class="expand-btn" @click="toggleExpand">
            {{ isExpanded ? '收起' : '查看更多' }}
          </button>
        </div>
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
import { ref, computed } from 'vue'

const props = defineProps({
  member: {
    type: Object,
    required: true,
    validator: (value) => {
      return value.title && value.name && value.photo && value.contacts
    }
  }
})

const isExpanded = ref(false)

const toggleExpand = () => {
  isExpanded.value = !isExpanded.value
}

// 計算是否需要展開功能
const needsExpand = computed(() => {
  return props.member.responsibilities && props.member.responsibilities.length > 3
})
</script>

<style scoped>
.member-card {
  background: #d9d9d9;
  padding: 1.3rem;
  margin-bottom: 1.3rem;
  display: flex;
  align-items: flex-start;
  gap: 2rem;
  max-width: 720px;
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

.responsibilities-container {
  transition: all 0.3s ease;
}

.responsibilities-container.collapsed {
  max-height: none;
  overflow: visible;
}

.responsibility-item {
  margin: 0.2rem 0 !important;
  line-height: 1.5 !important;
  padding-left: 0;
  transition: opacity 0.3s ease;
}

.responsibility-item.hidden {
  opacity: 0;
  height: 0;
  overflow: hidden;
  margin: 0 !important;
  padding: 0 !important;
  display: none;
}

.expand-section {
  margin-top: 0.5rem;
}

.divider-line {
  width: 100%;
  height: 1px;
  background-color: #ccc;
  margin: 0.5rem 0;
}

.expand-btn {
  background: none;
  border: none;
  color: #3f5963;
  font-size: 13.5pt;
  cursor: pointer;
  padding: 0.3rem 0;
  font-family: "GenYoGothic TW", "源樣黑體月", "Microsoft JhengHei", sans-serif;
  transition: color 0.3s ease;
}

.expand-btn:hover {
  color: #86a8ab;
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
    width: 100%;
    max-width: none;
    margin: 0 auto 1.3rem auto;
    display: flex;
    align-items: center;
  }
  
  .member-photo {
    display: flex;
    justify-content: center;
    margin-bottom: 1rem;
  }
  
  .member-photo .photo {
    width: 168px;
    height: 168px;
  }
  
  .member-info {
    text-align: center;
    width: 100%;
  }
  
  .title-name-row {
    justify-content: center;
    flex-wrap: wrap;
    gap: 0.5rem;
  }
  
  .member-title {
    font-size: 12pt;
  }
  
  .member-name {
    font-size: 13.5pt;
  }
  
  .member-subtitle {
    text-align: center;
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
  .member-card {
    width: 100%;
    max-width: none;
    margin: 0 0 1rem 0;
    padding: 1.5rem 1rem;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .member-photo {
    display: flex;
    justify-content: center;
    margin-bottom: 1rem;
  }
  
  .member-photo .photo {
    width: 150px;
    height: 150px;
  }
  
  .member-info {
    text-align: center;
    width: 100%;
    padding-top: 0;
  }
  
  .title-name-row {
    justify-content: center;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-bottom: 0.5rem;
  }
  
  .member-title {
    font-size: 14pt;
  }
  
  .member-name {
    font-size: 16pt;
  }
  
  .member-subtitle {
    text-align: center;
    font-size: 12pt;
  }
  
  .contact-info {
    text-align: center;
    margin-bottom: 1rem;
  }
  
  .contact-info p {
    font-size: 12pt;
    text-align: center;
  }
  
  .description {
    text-align: center;
  }
  
  .description p {
    font-size: 12pt;
    text-align: center;
  }
  
  .responsibility-item {
    text-align: center !important;
  }
  
  .expand-btn {
    font-size: 12pt;
  }
}
</style> 
<script setup>
import Carousel from '@/components/Carousel.vue'

const carouselImages = [
  {
    url: '/image/campus.jpg',
    alt: '高科大校園'
  }
]
</script>

<template>
  <div class="home">
    <section class="banner">
      <Carousel :images="carouselImages" :interval="5000" />
    </section>

    <section class="welcome">
      <h1>教育事業暨產品推廣處</h1>
      <p>歡迎來到國立高雄科技大學教育事業暨產品推廣處</p>
    </section>

    <section class="news-section">
      <div class="section-header">
        <h2>最新消息</h2>
        <a href="/news" class="more-link">更多消息</a>
      </div>
      <div class="news-list">
        <!-- 最新消息列表將在這裡添加 -->
      </div>
    </section>

    <section class="activities-section">
      <div class="section-header">
        <h2>活動資訊</h2>
        <a href="/activities" class="more-link">更多活動</a>
      </div>
      <div class="activities-grid">
        <div class="activity-card">
          <img src="/image/activity1.jpg" alt="活動1" />
          <div class="activity-info">
            <h3>中華花藝</h3>
            <p>精緻插花藝術展示</p>
          </div>
        </div>
        <div class="activity-card">
          <img src="/image/activity2.jpg" alt="活動2" />
          <div class="activity-info">
            <h3>專案經理PMP實務班</h3>
            <p>第01期開課資訊</p>
          </div>
        </div>
        <!-- 更多活動卡片 -->
      </div>
    </section>
  </div>
</template>

<style scoped>
.home {
  width: 100%;
}

.banner {
  margin-bottom: 2rem;
  width: 100%;
}

.welcome {
  text-align: center;
  margin-bottom: 3rem;
}

.welcome h1 {
  font-size: 2rem;
  color: #004098;
  margin-bottom: 1rem;
}

.welcome p {
  color: #666;
}

.section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
  border-bottom: 2px solid #004098;
  padding-bottom: 0.5rem;
}

.section-header h2 {
  color: #004098;
  font-size: 1.5rem;
}

.more-link {
  color: #666;
  text-decoration: none;
  font-size: 0.9rem;
}

.more-link:hover {
  color: #004098;
}

.activities-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 1rem;
}

.activity-card {
  background: #fff;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  transition: transform 0.3s;
}

.activity-card:hover {
  transform: translateY(-5px);
}

.activity-card img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.activity-info {
  padding: 1rem;
}

.activity-info h3 {
  color: #333;
  margin-bottom: 0.5rem;
}

.activity-info p {
  color: #666;
  font-size: 0.9rem;
}

.news-section,
.activities-section {
  margin-bottom: 3rem;
}
</style> 
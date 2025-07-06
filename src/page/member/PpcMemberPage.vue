<template>
  <AppHeader />
  
  <!-- 頂部圖片區域 -->
  <section class="member-banner">
    <div class="banner-image">
      <img src="/image/members/member_top.jpg" alt="成員介紹頂部圖片" class="banner-img">
    </div>
  </section>
  
  <div class="member-page">
    <DepartmentHeader activeTab="ppc" />
    
    <DirectorCard :director="directorInfo" />

    <!-- 中心成員標題 -->
    <div class="members-header">
      <h2>中心成員</h2>
    </div>

    <!-- 中心成員區域 -->
    <div class="members-section">
      <MemberCard 
        v-for="member in membersInfo" 
        :key="member.name" 
        :member="member" 
      />
    </div>
  </div>
  
  <!-- Footer -->
  <MainFooterComponent waveColor="#d9d9d9" />
</template>

<script setup>
import AppHeader from '@/components/AppHeader.vue'
import DepartmentHeader from '@/components/member/DepartmentHeader.vue'
import DirectorCard from '@/components/member/DirectorCard.vue'
import MemberCard from '@/components/member/MemberCard.vue'
import MainFooterComponent from '@/components/MainFooterComponent.vue'

// 中心主任資訊
const directorInfo = {
  title: '中心主任',
  name: '黃志雄',
  photo: '/image/members/ppc_黃志雄主任.jpg',
  extension: '-',
  email: '-',
  responsibility: '產品推廣中心業務綜理'
}

// 中心成員資訊
const membersInfo = [
  {
    title: '專案助理',
    name: '郁萱',
    photo: '/image/members/ppc_郁萱.jpg',
    contacts: [
      { label: '分機', value: '-' },
      { label: '信箱', value: '-' }
    ],
    responsibilities: [
      '產品推廣業務執行',
      '市場開發與行銷',
      '客戶關係維護'
    ]
  },
  {
    title: '專案助理',
    name: '宛汝',
    photo: '/image/members/ppc_宛汝.jpg',
    contacts: [
      { label: '分機', value: '-' },
      { label: '信箱', value: '-' }
    ],
    responsibilities: [
      '產品設計與開發',
      '技術支援服務',
      '品質控制管理'
    ]
  }
]
</script>

<style scoped>
/* 頂部圖片區域 */
.member-banner {
  width: calc(70vw);
  max-width: 100%;
  margin: 0 auto;
  position: relative;
  overflow: hidden;
}

.banner-image {
  width: 100%;
  height: 422px;  /* 原本 630px * 0.67 */
  position: relative;
  overflow: hidden;
}

.banner-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.member-page {
  width: 70vw;
  max-width: 100%;
  margin: 0 auto;
  padding: 1.3rem 0.7rem 67px 0.7rem;  /* 原本 2rem 1rem 100px 1rem * 0.67 */
  font-family: "GenYoGothic TW", "源樣黑體月", "Microsoft JhengHei", sans-serif;
  background-color: #d9d9d9;
}

/* 中心成員標題 */
.members-header {
  text-align: center;
  margin-bottom: 1.3rem;  /* 原本 2rem * 0.67 */
}

.members-header h2 {
  font-size: 30pt;  /* 原本 45pt * 0.67 */
  color: #333;
  margin: 0;
  font-weight: normal;
}

/* 中心成員區域 */
.members-section {
  max-width: 670px;  /* 原本 1000px * 0.67 */
  margin: 0 auto;
}
</style>

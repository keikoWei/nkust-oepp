<template>
  <AppHeader />
  
  <!-- 頂部圖片區域 -->
  <section class="member-banner">
    <div class="banner-image">
      <img src="/image/members/member_top.jpg" alt="成員介紹頂部圖片" class="banner-img">
    </div>
  </section>
  
  <div class="member-page">
    <DepartmentHeader activeTab="epc" />
    
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

// 中心主任資訊，因為是副處長兼任，所以需要特殊處理
const directorInfo = {
  title: '中心主任',
  name: '鄭兆宏',
  photo: '/image/members/default_man_02.png',
  extension: '12850',
  email: 'zhchen@nkust.edu.tw',
  responsibility: '會展及出版中心業務綜理',
  additionalInfo: ['(副處長兼任)']
}

// 中心成員資訊
const membersInfo = [
  {
    title: '專案助理',
    name: '待聘',
    photo: '/image/members/default_woman_01.png',
    contacts: [
      { label: '分機', value: '-' },
      { label: '信箱', value: '-' }
    ],
    responsibilities: [
      '會展活動規劃與執行',
      '展覽場地管理',
      '參展商服務'
    ]
  },
  {
    title: '專案助理',
    name: '待聘',
    photo: '/image/members/default_woman_02.png',
    contacts: [
      { label: '分機', value: '-' },
      { label: '信箱', value: '-' }
    ],
    responsibilities: [
      '出版品企劃與編輯',
      '版權管理',
      '發行與推廣'
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
  height: 630px;
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
  padding: 2rem 1rem 100px 1rem;
  font-family: "GenYoGothic TW", "源樣黑體月", "Microsoft JhengHei", sans-serif;
  background-color: #d9d9d9;
}

/* 中心成員標題 */
.members-header {
  text-align: center;
  margin-bottom: 2rem;
}

.members-header h2 {
  font-size: 45pt;
  color: #333;
  margin: 0;
  font-weight: normal;
}

/* 中心成員區域 */
.members-section {
  max-width: 1000px;
  margin: 0 auto;
}
</style>

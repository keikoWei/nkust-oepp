<template>
  <AppHeader />
  
  <!-- 頂部圖片區域 -->
  <section class="member-banner">
    <div class="banner-image">
      <img src="/image/members/member_top.jpg" alt="經營管理中心成員介紹頂部圖片" class="banner-img">
    </div>
  </section>
  
  <div class="member-page">
    <DepartmentHeader activeTab="com" />
    
    <DirectorCard :director="directorInfo" />


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
  <MainFooterComponent waveColor="#EFEDEB" />
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
  name: '鄭瑞鴻',
  photo: '/image/members/oepp_瑞鴻.png',
  extension: '15416',
  email: 'rick.cheng@nkust.edu.tw',
  responsibilities: [
    '綜理經營管理中心業務與管理'
  ]
}

// 中心成員資訊
const membersInfo = [
  {
    title: '專案經理',
    name: '王君豪',
    photo: '/image/members/com_君豪.png',
    contacts: [
      { label: '分機', value: '(07)3617141 轉 22123' },
      { label: '信箱', value: 'johnnycooky@nkust.edu.tw' },
      { label: '職務代理人', value: '賴杏雲,吳永生' }
    ],
    responsibilities: [
      '經營管理中心各類專案之規劃與執行',
      '配合全校各單位業務彙整提報資料',
      '其他行政支援及臨時交辦事項'
    ]
  },
  {
    title: '約用專員',
    name: '賴杏雲',
    photo: '/image/members/com_杏雲.png',
    contacts: [
      { label: '分機', value: '(07)3617141 轉 22101' },
      { label: '信箱', value: 'xingyun@nkust.edu.tw' },
      { label: '職務代理人', value: '' }
    ],
    responsibilities: [
      '處長行程安排及公文核稿',
      '彙整及召開中心會議',
      '彙整各項工作報告（含專案）進度',
      '彙整及管考年度計畫',
      '彙整及提報業務績效報告資料',
      '經營管理中心各類專案之規劃與執行',
      '其他行政支援及臨時交辦事項'
    ]
  },
  {
    title: '約用專員',
    name: '吳永生',
    photo: '/image/members/com_永生.png',
    contacts: [
      { label: '分機', value: '(07)3617141 轉 22124' },
      { label: '信箱', value: 'r7163069@nkust.edu.tw' },
      { label: '職務代理人', value: '賴杏雲' }
    ],
    responsibilities: [
      '經營管理中心各類專案之規劃與執行',
      '配合全校各單位業務彙整提報資料',
      '其他行政支援及臨時交辦事項'
    ]
  },
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
  background-color: #EFEDEB;
}

/* 頁面標題區域 */
.page-header {
  text-align: center;
  margin-bottom: 3rem;
}

.page-header h1 {
  font-size: 36pt;
  color: #333;
  margin: 0 0 2rem 0;
  font-weight: normal;
}

.department-nav {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  background: #d9d9d9;
  padding: 0.5rem;
}

.nav-item {
  padding: 0.8rem 1rem;
  text-decoration: none;
  color: #666;
  font-size: 16pt;
  font-family: "GenYoGothic TW", "源樣黑體月", "Microsoft JhengHei", sans-serif;
  font-weight: normal;
  transition: all 0.3s ease;
}

.nav-item.active {
  color: #333;
  font-family: "GenYoGothic TW", "源樣黑體月", "Microsoft JhengHei", sans-serif;
  font-weight: 900;
  letter-spacing: 0.5px;
}

.nav-item:not(.active):hover {
  color: #3f5963;
}

.nav-separator {
  color: #666;
  font-size: 16pt;
  font-weight: normal;
}

/* 頂部圖片 */
.header-image {
  margin-bottom: 2rem;
  width: 100%;
  text-align: center;
}

.top-image {
  width: 100vw;
  height: 420px;
  max-width: 100%;
  object-fit: cover;
  margin: -2rem calc(-15vw) 2rem calc(-15vw);
}


/* 中心成員區域 */
.members-section {
  max-width: 720px;  /* 配合 MemberCard 的新寬度 */
  margin: 0 auto;
}

/* 響應式設計 */
@media (max-width: 768px) {
  .member-page {
    padding: 1rem 0.5rem;
  }

  .page-header h1 {
    font-size: 28pt;
  }

  .department-nav {
    flex-wrap: wrap;
    gap: 0.5rem;
  }

  .nav-item {
    padding: 0.6rem 1rem;
    font-size: 14pt;
  }
}

/* 手機版樣式 */
@media (max-width: 480px) {
  .member-banner {
    width: 100vw;
    margin: 0;
  }
  
  .banner-image {
    height: 200px;  /* 手機版縮小高度 */
  }
  
  .member-page {
    width: 100vw;
    margin: 0;
    padding: 1rem 1rem 50px 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .members-section {
    max-width: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
  }
  
  .members-header {
    width: 100%;
    text-align: center;
  }
}
</style>

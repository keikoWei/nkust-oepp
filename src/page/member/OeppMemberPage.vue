<template>
  <AppHeader />
  
  <!-- 頂部圖片區域 -->
  <section class="member-banner">
    <div class="banner-image">
      <img src="/image/members/member_top.jpg" alt="成員介紹頂部圖片" class="banner-img">
    </div>
  </section>
  
  <div class="member-page">
    <DepartmentHeader activeTab="oepp" />
    
    <DirectorCard :director="directorInfo" />

    <!-- 處室成員標題 -->
    <div class="members-header">
      <h2>處室成員</h2>
    </div>

    <!-- 處室成員區域 -->
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

// 處長資訊
const directorInfo = {
  title: '處長',
  name: '高瑞鍾',
  photo: '/image/members/default_man_01.png',
  extension: '12860',
  email: 'jckao@nkust.edu.tw',
  responsibility: '綜理教育推廣中心業務與管理'
}

// 處室成員資訊
const membersInfo = [
  {
    title: '副處長',
    name: '鄭兆宏',
    photo: '/image/members/default_man_02.png',
    contacts: [
      { label: '分機', value: '12850' },
      { label: '信箱', value: 'zhcheng@nkust.edu.tw' }
    ],
    responsibilities: [
      '協助教推處處長綜理教推處事務',
      '教推中心、產品中心、會展中心業務督導及協調'
    ]
  },
  {
    title: '助理員',
    name: '江芷汝',
    photo: '/image/members/default_woman_01.png',
    contacts: [
      { label: '處辦信箱', value: 'ieoffice01@nkust.edu.tw' },
      { label: '信箱', value: 'z779c632@nkust.edu.tw' }
    ],
    responsibilities: [
      '教育事業暨產品推廣處相關法規修訂',
      '處務會議召開、紀錄與管考追蹤',
      '各項會議工作報告、提案及資料提送與追蹤管考',
      '公文核稿、分發、稽催及公務信箱窗口',
      '主管行程安排登錄',
      '主辦教推處專案人員甄選及進用作業',
      '業務績效報告資料彙整與提報',
      '處內經費分配與控管',
      '技專資料庫填報業務窗口',
      '教育事業暨產品推廣處綜合業務及公文處理',
      '其他臨時交辦事項'
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

/* 處室長區域 */
.director-section {
  margin-bottom: 3rem;
}

/* 處成員標題 */
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

/* 處成員區域 */
.members-section {
  max-width: 720px;  /* 配合 MemberCard 的新寬度 */
  margin: 0 auto;
}

.member-card {
  background: #d9d9d9;
  padding: 2rem;
  display: flex;
  align-items: flex-start;
  gap: 2rem;
}

.member-photo {
  flex-shrink: 0;
}

.member-photo .photo {
  width: 315px;
  height: 315px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid #86a8ab;
}

.member-info {
  flex: 1;
}

.member-title {
  font-size: 18pt;
  color: #3f5963;
  margin: 0 0 0.3rem 0;
  font-weight: normal;
}

.member-name {
  font-size: 22pt;
  color: #333;
  margin: 0 0 0.3rem 0;
  font-weight: bold;
}

.member-subtitle {
  font-size: 14pt;
  color: #666;
  margin: 0 0 1rem 0;
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
</style>

<template>
  <AppHeader />
  
  <!-- 頂部圖片區域 -->
  <section class="member-banner">
    <div class="banner-image">
      <img src="/image/members/epc_member_page_top.jpg" alt="會展及出版中心成員介紹頂部圖片" class="banner-img">
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
  photo: '/image/members/epc_主任.jpg',
  extension: '12850',
  email: 'zhcheng@nkust.edu.tw',
  responsibility: '綜理會展及出版中心業務與管理'
}

// 中心成員資訊
const membersInfo = [
  {
    title: '約用組員',
    name: '黃昱瑄',
    photo: '/image/members/epc_昱瑄.jpg',
    contacts: [
      { label: '分機', value: '12851' },
      { label: '信箱', value: 'chuh0302@nkust.edu.tw' }
    ],
    responsibilities: [
      '中心公文收發管理',
      '中心請購核銷相關業務',
      '承攬校內單位委辦之活動業務',
      '協助規劃及辦理畢業典禮、校慶等校級活動',
      '其他臨時交辦事項'
    ]
  },
  {
    title: '專任助理',
    name: '林讌宣',
    photo: '/image/members/epc_讌宣.jpg',
    contacts: [
      { label: '分機', value: '12852' },
      { label: '信箱', value: 'yenhsuan613@nkust.edu.tw' }
    ],
    responsibilities: [
      '教師出版品之內容規劃、排版及印刷',
      '青藝獎出版業務及協助活動辦理',
      '活動周邊商品規劃及開發',
      '活動主題視覺規劃設計',
      '中心網頁管理與維護',
      '研討會生成系統管理與維護'
    ]
  },
  {
    title: '待聘',
    name: '',
    photo: '/image/members/default_man_01.png',
    contacts: [
      { label: '分機', value: '-' },
      { label: '信箱', value: '-' }
    ],
    responsibilities: [
      '承攬校外公、私部門及企業委辦之活動業務',
      '高等教育深耕計畫執行',
      '校內特殊專案規劃與執行',
      '研討會生成系統管理與維護',
      '中心法規修訂',
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
  max-width: 720px;  /* 配合 MemberCard 的新寬度 */
  margin: 0 auto;
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
    align-items: center;
  }
  
  .members-header {
    width: 100%;
    text-align: center;
  }
}
</style>

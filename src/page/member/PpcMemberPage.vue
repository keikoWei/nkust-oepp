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
  photo: '/image/members/ppc_產品推廣中心主任.png',
  extension: '12889/23511',
  email: 'chhuang23511@nkust.edu.tw',
  responsibilities: [
    '產品推廣中心業務綜理',
    '組織管理',
    '商品策略',
    '行銷策略',
    '商品佈局',
    '品牌形象'
  ]
}

// 中心成員資訊
const membersInfo = [
  {
    title: '約用組員',
    name: '蔡宛汝',
    photo: '/image/members/ppc_宛汝.png',
    contacts: [
      { label: '分機', value: '12858' },
      { label: '信箱', value: 'ru66@nkust.edu.tw' }
    ],
    responsibilities: [
      '各類銷售帳務作業、月結手續費收支作帳',
      '逐月營收經費分配',
      '每月營業銷售統計表及銷售分析表',
      '營業稅申報、預借及繳納',
      '經費授權及結轉業務',
      '經費核銷申報及設備採購',
      '進貨管理與促銷方案商談',
      '宣傳品請領及自籌管道及相關訂單處理',
      '線上/線下通路訂單準備及禮品包裝',
      '品牌商店商品銷售諮詢服務',
      '檔期行銷企劃',
      '官方帳號推播及管理',
      '官網後台上下架商品及檔期作業等維護管理'
    ]
  },
  {
    title: '專任助理',
    name: '許郁萱',
    photo: '/image/members/ppc_郁萱.png',
    contacts: [
      { label: '分機', value: '12859' },
      { label: '信箱', value: 'yuxuan@nkust.edu.tw' }
    ],
    responsibilities: [
      '校徽商品規劃與開發、商品投保、售價訂定',
      '商品文宣設計與製作',
      '活動規劃/推廣活動企劃與執行',
      '吉祥物經營規劃與管理',
      '吉祥物活動策劃與執行',
      '校內主管蛋糕致贈事宜',
      '宣傳品請領系統',
      '工讀生聘僱及管理事宜',
      '校名校徽暨商標使用管理相關事宜',
      '辦理本校校園紀念商品之商標授權相關申請及防偽標籤管理',
      'DK/SHOP校園實習商店商品上架審查',
      '審查本校形象識別系統設計及管理',
      '官網後台上下架商品及檔期作業等維護管理',
      '品牌商店商品銷售諮詢服務',
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
  }
  
  .members-header {
    width: 100%;
    text-align: center;
  }
}
</style>

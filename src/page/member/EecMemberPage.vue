<template>
  <AppHeader />
  
  <!-- 頂部圖片區域 -->
  <section class="member-banner">
    <div class="banner-image">
      <img src="/image/members/member_top.jpg" alt="成員介紹頂部圖片" class="banner-img">
    </div>
  </section>
  
  <div class="member-page">
    <DepartmentHeader activeTab="eec" />
    
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
  name: '李純怡',
  photo: '/image/members/eec_李純怡主任.png',
  extension: '12840',
  email: '-',
  responsibilities: [
    '綜理教育推廣中心業務與管理',
    '策畫推廣教育班業務',
    '策畫企業委訓或政府標案等業務',
    '其他臨時交辦事項'
  ]
}

// 中心成員資訊
const membersInfo = [
  {
    title: '約用專員',
    name: '張鏵方',
    photo: '/image/members/eec_張鏵方約用專員.png',
    contacts: [
      { label: '分機', value: '12842' },
      { label: '職務代理人', value: '邱淑屏' }
    ],
    responsibilities: [
      '彙整全校開班提案資料及教育推廣小組會議召開',
      '課程結案及提撥管理費',
      '各類經費彙整統計及中心經費統籌',
      '教育部cell系統填報',
      '技專校院資料庫填報',
      '推廣教育審查會議(大會)召開',
      '中心對內服務窗口、線上公文登記桌及推廣教育中心會議召開',
      '工讀生管理及安排',
      '中心自辦政府及企業委訓案經費核銷',
      '各班次主計計畫代碼開設',
      '其他臨時交辦事項'
    ]
  },
  {
    title: '約用專員',
    name: '許慧芬',
    photo: '/image/members/eec_許慧芬約用專員.png',
    contacts: [
      { label: '分機', value: '12845' },
      { label: '職務代理人', value: '邱淑屏' }
    ],
    responsibilities: [
      '政府及企業委訓案評估(業務拓展)及對外窗口',
      'TTQS評鑑協助',
      '中心對外服務窗口及線上公文登記桌',
      '法規修訂',
      '校內各項會議提案及資料提送與追蹤管考',
      '公文、信件及其他事項協調窗口',
      '其他臨時交辦事項'
    ]
  },
  {
    title: '約用組員',
    name: '潘淑花',
    photo: '/image/members/default_woman_01.png',
    contacts: [
      { label: '分機', value: '12846' },
      { label: '職務代理人', value: '楊富閔' }
    ],
    responsibilities: [
      '承辦推廣教育學分班相關業務',
      '推廣教育班級線上學習教學平台學員資料建置及維護',
      'LINE@學分班問題回覆',
      '建工校區樂齡大學',
      ' (1)教務工作(聯繫老師、教學評量施作)',
      ' (2)總務工作(借用教室、經費核銷及結案、停車證辦理、上課設備準備)',
      ' (3)各類證書印製(聘書、感謝狀、結業證書)',
      '台企銀繳費系統推廣教育課程銷帳事宜',
      '協辦中心執行之高教深根業務',
      '楠梓校區各單位非學分班業務協辦(台企銀繳費系統建立、辦理學員退費、經費控管、經費授權、結案單催繳、通行證辦理、聘書、結業證書製作)',
      '其他臨時交辦事項'
    ]
  },
  {
    title: '專案副理',
    name: '邱淑屏',
    photo: '/image/members/default_woman_02.png',
    contacts: [
      { label: '分機', value: '12844' },
      { label: '職務代理人', value: '許慧芬' }
    ],
    responsibilities: [
      '推廣教育廣告文案及宣傳',
      '各類招生簡章規劃及EDM設計',
      '推廣教育網頁維護及更新資訊及刊登',
      'Facebook、LINE@、IG粉絲專頁經營',
      '各項招生訊息發送(電子郵件)',
      '協辦政府委訓計畫',
      '課程開發及師資接洽',
      '毒災中心及第一校區非學分班業務協辦(台企銀繳費系統建立、辦理學員退費、經費控管、經費授權、結案單催繳、通行證辦理、聘書、結業證書製作)',
      'TTQS評鑑主導',
      '自辦政府及企業委訓案協助',
      '其他臨時交辦事項'
    ]
  },
  {
    title: '專任助理',
    name: '呂婉如',
    photo: '/image/members/default_woman_01.png',
    contacts: [
      { label: '分機', value: '22867' },
      { label: '職務代理人', value: '張驊方' }
    ],
    responsibilities: [
      '申請教育部樂齡大學計畫窗口',
      '課程開發及師資接洽',
      '現場報名及收費(現場或線上報名諮詢)',
      '楠梓校區非學分班開班班務',
      '教推中心報名系統資料建立、校對及台企銀繳費系統建立',
      '學員聯繫(報名資格優惠審核、寄發開關課簡訊、催繳報名費、辦理學員退費)',
      '教務工作(聯繫老師、教學評量施作)',
      '總務工作(借用教室、經費核銷及結案、停車證辦理、上課設備準備)',
      '各類證書印製(聘書、感謝狀、結業證書)',
      '其他臨時交辦事項'
    ]
  },
  {
    title: '專任助理',
    name: '邱麓仱',
    photo: '/image/members/default_man_01.png',
    contacts: [
      { label: '分機', value: '12847' },
      { label: '職務代理人', value: '邱淑屏' }
    ],
    responsibilities: [
      '建工校區樂齡大學',
      ' (1)教務工作(聯繫老師、教學評量施作)',
      ' (2)總務工作(借用教室、經費核銷及結案、停車證辦理、上課設備準備)',
      ' (3)各類證書印製(聘書、感謝狀、結業證書)',
      '其他臨時交辦事項'
    ]
  },
  {
    title: '專任助理',
    name: '陳苡榕',
    photo: '/image/members/default_woman_02.png',
    contacts: [
      { label: '分機', value: '12849' },
      { label: '職務代理人', value: '許慧芬' }
    ],
    responsibilities: [
      'AI智慧製造產業人才培訓據點',
      '據點課程開發及師資接洽'
    ]
  },
  {
    title: '待聘',
    name: '',
    photo: '/image/members/default_man_02.png',
    contacts: [
      { label: '職務代理人', value: '潘淑花、邱淑屏' }
    ],
    responsibilities: [
      '承辦推廣教育學分班相關業務',
      '推廣教育班級線上學習教學平台學員資料建置及維護',
      'LINE@學分班問題回覆',
      '台企銀繳費系統推廣教育課程銷帳事宜',
      '協辦中心執行之高教深根業務',
      '建工校區各單位非學分班業務協辦(台企銀繳費系統建立、辦理學員退費、經費控管、經費授權、結案單催繳、通行證辦理、聘書、結業證書製作)',
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
</style>

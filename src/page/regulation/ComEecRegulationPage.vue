<template>
  <AppHeader />
  
  <!-- 頂部圖片區域 -->
  <section class="regulation-banner">
    <div class="banner-image">
      <img src="/image/members/member_top.jpg" alt="經營管理中心法規相關頂部圖片" class="banner-img">
    </div>
  </section>
  
  <div class="regulation-page">
    <RegulationHeader activeTab="com" />

    <div class="regulation-content">
      <div class="regulation-categories">
        <div class="category-section">
          <div class="category-header">
            <span class="category-title">財政部法規</span>
          </div>
          <div class="file-list">
            <div class="file-item" v-for="item in mofRegulations" :key="item.name">
              <span class="file-bullet">📄</span>
              <a :href="item.url" target="_blank" rel="noopener noreferrer" class="file-link">
                {{ item.name }}
              </a>
            </div>
          </div>
        </div>

        <div class="category-section">
          <div class="category-header">
            <span class="category-title">本校法規</span>
          </div>
          <div class="file-list">
            <div class="file-item" v-for="item in nkustRegulations" :key="item.name">
              <span class="file-bullet">📄</span>
              <a :href="item.url" target="_blank" rel="noopener noreferrer" class="file-link">
                {{ item.name }}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  <!-- Footer -->
  <MainFooterComponent />
</template>

<script setup>
import AppHeader from '@/components/AppHeader.vue'
import RegulationHeader from '@/components/regulation/RegulationHeader.vue'
import MainFooterComponent from '@/components/MainFooterComponent.vue'

const mofRegulations = [
  {
    name: '促進民間參與公共建設法',
    url: 'https://law-out.mof.gov.tw/LawContent.aspx?id=GL009096'
  },
  {
    name: '政府有償取得公共服務政策評估作業辦法',
    url: 'https://law-out.mof.gov.tw/LawContent.aspx?id=GL011375'
  },
  {
    name: '促進民間參與公共建設案件履約爭議調解收費辦法',
    url: 'https://law-out.mof.gov.tw/LawContent.aspx?id=GL011364'
  },
  {
    name: '促進民間參與公共建設案件履約爭議調解規則',
    url: 'https://law-out.mof.gov.tw/LawContent.aspx?id=GL011363'
  },
  {
    name: '促進民間參與公共建設案件履約爭議調解會組織準則',
    url: 'https://law-out.mof.gov.tw/LawContent.aspx?id=GL011362'
  },
  {
    name: '促進民間參與公共建設案件申請保證金收取及返還作業要點',
    url: 'https://law-out.mof.gov.tw/LawContent.aspx?id=GL011345&kw='
  },
  {
    name: '促進民間參與公共建設專業人員資格考試訓練發證管理及獎勵辦法',
    url: 'https://law-out.mof.gov.tw/LawContent.aspx?id=GL010132'
  },
  {
    name: '民間自行規劃申請參與公共建設作業辦法',
    url: 'https://law-out.mof.gov.tw/LawContent.aspx?id=GL010130'
  },
  {
    name: '民間參與公共建設甄審委員會組織及評審辦法',
    url: 'https://law-out.mof.gov.tw/LawContent.aspx?id=GL009076'
  },
  {
    name: '促進民間參與公共建設法施行細則',
    url: 'https://law-out.mof.gov.tw/LawContent.aspx?id=GL009077'
  },
  {
    name: '促進民間參與公共建設公有土地出租及設定地上權租金優惠辦法',
    url: 'https://law-out.mof.gov.tw/LawContent.aspx?id=GL011327'
  },
  {
    name: '促進民間參與公共建設法之重大公共建設範圍',
    url: 'https://law-out.mof.gov.tw/LawContent.aspx?id=GL010358'
  },
  {
    name: '民間參與公共建設金擘獎頒發作業要點',
    url: 'https://law-out.mof.gov.tw/LawContent.aspx?id=GL009070'
  },
  {
    name: '財政部辦理促進民間參與公共建設案件督導及考核作業要點',
    url: 'https://law-out.mof.gov.tw/LawContent.aspx?id=GL011047'
  },
  {
    name: '機關辦理民間參與公共建設案件資訊蒐集及獎勵金核發作業要點',
    url: 'https://law-out.mof.gov.tw/LawContent.aspx?id=GL011281'
  }
]

const nkustRegulations = [
  {
    name: '國立高雄科技大學場地設備借用收費基準表',
    url: 'https://gen.nkust.edu.tw/p/406-1008-15414,r314.php'
  },
  {
    name: '國立高雄科技大學招待所管理要點',
    url: 'https://gen.nkust.edu.tw/p/406-1008-7695,r314.php'
  }
]
</script>

<style scoped>
/* 頂部圖片區域 */
.regulation-banner {
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

.regulation-page {
  width: 70vw;
  max-width: 100%;
  margin: 0 auto;
  padding: 1.3rem 0.7rem 67px 0.7rem;  /* 原本 2rem 1rem 100px 1rem * 0.67 */
  font-family: "GenYoGothic TW", "源樣黑體月", "Microsoft JhengHei", sans-serif;
  background-color: white;
  min-height: 60vh;
}

.regulation-content {
  margin-top: 1.3rem;  /* 原本 2rem * 0.67 */
  padding: 1.3rem 0;  /* 原本 2rem * 0.67 */
}

.regulation-categories {
  display: flex;
  flex-direction: column;
  gap: 60px;
  max-width: 800px;
  margin: 0 auto;
}

.category-section {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.category-header {
  height: 52px;
  background-color: #6B574F;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 20px;
  width: fit-content;
  min-width: 360px;
}

.category-title {
  font-size: 21pt;
  color: #ffffff;
  font-weight: normal;
  white-space: nowrap;
}

.file-list {
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding-left: 20px;
}

.file-item {
  display: flex;
  align-items: center;
  gap: 10px;
}

.file-bullet {
  font-size: 17pt;
  color: #666;
  min-width: 20px;
}

.file-link {
  font-size: 17pt;
  color: #333;
  text-decoration: none;
  line-height: 1.4;
  transition: color 0.3s ease;
}

.file-link:hover {
  color: #6B574F;
  text-decoration: underline;
}

/* 手機版樣式 */
@media (max-width: 480px) {
  .regulation-banner {
    width: 100vw;
    margin: 0;
  }
  
  .banner-image {
    height: 200px;  /* 手機版縮小高度 */
  }
  
  .regulation-page {
    width: 100vw;
    margin: 0;
    padding: 1rem 1rem 50px 1rem;
  }
  
  .regulation-categories {
    max-width: 100%;
    width: 100%;
  }

  .category-title {
    font-size: 12pt;
  }

  .category-header {
    height: 40px;
    min-width: 220px;
    padding: 0 15px;
    width: 100%;
    max-width: none;
  }

  .file-link {
    font-size: 11pt;
  }

  .file-bullet {
    font-size: 11pt;
  }

  .file-list {
    padding-left: 15px;
  }
}
</style>

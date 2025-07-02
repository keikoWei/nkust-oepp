import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../layout/OeppMainLayout.vue')
    },
    {
      path: '/productCenter',
      name: 'product-center',
      component: () => import('../layout/PpcLayout.vue')
    },
    {
      path: '/productCenter/activity',
      name: 'ppc-activity',
      component: () => import('../page/ppc/PpcActivityPage.vue')
    },
    {
      path: '/productCenter/news',
      name: 'ppc-news',
      component: () => import('../page/ppc/PpcNewsPage.vue')
    },
    {
      path: '/about/members/oepp',
      name: 'oepp-members',
      component: () => import('../page/member/OeppMemberPage.vue')
    },
    {
      path: '/about/members/eec',
      name: 'eec-members',
      component: () => import('../page/member/EecMemberPage.vue')
    },
    {
      path: '/about/members/ppc',
      name: 'ppc-members',
      component: () => import('../page/member/PpcMemberPage.vue')
    },
    {
      path: '/about/members/epc',
      name: 'epc-members',
      component: () => import('../page/member/EpcMemberPage.vue')
    },
    {
      path: '/regulations/oepp',
      name: 'oepp-regulations',
      component: () => import('../page/regulation/OeppRegulationPage.vue')
    },
    {
      path: '/regulations/eec',
      name: 'eec-regulations',
      component: () => import('../page/regulation/EecRegulationPage.vue')
    },
    {
      path: '/regulations/ppc',
      name: 'ppc-regulations',
      component: () => import('../page/regulation/PpcRegulationPage.vue')
    },
    {
      path: '/regulations/epc',
      name: 'epc-regulations',
      component: () => import('../page/regulation/EpcRegulationPage.vue')
    },
    {
      path: '/download/oepp',
      name: 'oepp-download',
      component: () => import('../page/download/OeppDownloadPage.vue')
    },
    {
      path: '/download/eec',
      name: 'eec-download',
      component: () => import('../page/download/EecDownloadPage.vue')
    },
    {
      path: '/download/ppc',
      name: 'ppc-download',
      component: () => import('../page/download/PpcDownloadPage.vue')
    },
    {
      path: '/download/epc',
      name: 'epc-download',
      component: () => import('../page/download/EpcDownloadPage.vue')
    }
  ]
})

export default router 
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
    }
  ]
})

export default router 
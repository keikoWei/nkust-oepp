import { createRouter, createWebHistory } from 'vue-router'
import { isAuthenticated, getCurrentUser, getDashboardPathByRole } from '@/api/auth'

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
      path: '/educationCenter',
      name: 'education-center',
      component: () => import('../layout/EecLayout.vue')
    },
    {
      path: '/publication',
      name: 'publication-center',
      component: () => import('../layout/EpcLayout.vue')
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
      path: '/about/intro',
      name: 'oceom-introduction',
      component: () => import('../page/oceom/OceomIntroductionPage.vue')
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
      path: '/about/members/com',
      name: 'com-members',
      component: () => import('../page/member/ComMemberPage.vue')
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
      path: '/regulations/com',
      name: 'com-regulations',
      component: () => import('../page/regulation/ComEecRegulationPage.vue')
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
    },
    {
      path: '/download/com',
      name: 'com-download',
      component: () => import('../page/download/ComDownloadPage.vue')
    },
    {
      path: '/educationCenter/payment/process',
      name: 'eec-payment-process',
      component: () => import('../page/eec/PayPage.vue')
    },
    {
      path: '/educationCenter/payment/refund',
      name: 'eec-payment-refund',
      component: () => import('../page/eec/RefundPage.vue')
    },
    {
      path: '/educationCenter/faq/educationRelated',
      name: 'eec-education-related',
      component: () => import('../page/eec/EducationRelatedPage.vue')
    },
    {
      path: '/educationCenter/introduction',
      name: 'eec-center-introduction',
      component: () => import('../page/eec/EecCenterIntroductionPage.vue')
    },
    {
      path: '/educationCenter/courseAnnouncement',
      name: 'eec-course-announcement',
      component: () => import('../page/eec/EecCourseAnnouncementPage.vue')
    },
    {
      path: '/educationCenter/hotCourses',
      name: 'eec-hot-courses',
      component: () => import('../page/eec/HotCoursesPage.vue')
    },
    {
      path: '/educationCenter/seniorCitizensUniversity',
      name: 'eec-senior-citizens-university',
      component: () => import('../page/eec/SeniorCitizensUniversityPage.vue')
    },
    {
      path: '/educationCenter/faq/training',
      name: 'eec-training-program',
      component: () => import('../page/eec/TrainingProgramPage.vue')
    },
    {
      path: '/exhibitionCenter/introduction',
      name: 'epc-center-introduction',
      component: () => import('../page/epc/EpcCenterIntroductionPage.vue')
    },
    {
      path: '/exhibitionCenter/seminar',
      name: 'epc-seminar',
      component: () => import('../page/epc/SeminarPage.vue')
    },
    {
      path: '/exhibitionCenter/seminar/option',
      name: 'epc-seminar-option',
      component: () => import('../page/epc/SeminarOptionPage.vue')
    },
    {
      path: '/exhibitionCenter/seminar/option/preparation',
      name: 'epc-seminar-preparation',
      component: () => import('../page/epc/seminarOptions/SeminarPreparation.vue')
    },
    {
      path: '/exhibitionCenter/seminar/option/marketing',
      name: 'epc-seminar-marketing',
      component: () => import('../page/epc/seminarOptions/SeminarMarketing.vue')
    },
    {
      path: '/exhibitionCenter/seminar/option/service',
      name: 'epc-seminar-service',
      component: () => import('../page/epc/seminarOptions/SeminarService.vue')
    },
    {
      path: '/exhibitionCenter/seminar/option/venue',
      name: 'epc-seminar-venue',
      component: () => import('../page/epc/seminarOptions/SeminarVenue.vue')
    },
    {
      path: '/exhibitionCenter/seminar/option/foodandstay',
      name: 'epc-seminar-food-and-stay',
      component: () => import('../page/epc/seminarOptions/SeminarFoodAndStay.vue')
    },
    {
      path: '/exhibitionCenter/seminar/option/model',
      name: 'epc-seminar-model',
      component: () => import('../page/epc/seminarOptions/SeminarModel.vue')
    },
    {
      path: '/exhibitionCenter/activity',
      name: 'epc-commissioned-activities',
      component: () => import('../page/epc/CommissionedActivitiesPage.vue')
    },
    {
      path: '/exhibitionCenter/achievement',
      name: 'epc-achievements',
      component: () => import('../page/epc/EpcAchievementsPage.vue')
    },
    {
      path: '/exhibitionCenter/achievement/launch',
      name: 'epc-achievement-launch',
      component: () => import('../page/epc/achievements/AchievementLaunch.vue')
    },
    {
      path: '/exhibitionCenter/achievement/livestream',
      name: 'epc-achievement-livestream',
      component: () => import('../page/epc/achievements/AchievementLiveStream.vue')
    },
    {
      path: '/exhibitionCenter/achievement/other',
      name: 'epc-achievement-other',
      component: () => import('../page/epc/achievements/AchievementOther.vue')
    },
    {
      path: '/exhibitionCenter/achievement/seminar',
      name: 'epc-achievement-seminar',
      component: () => import('../page/epc/achievements/AchievementSeminar.vue')
    },
    {
      path: '/exhibitionCenter/achievement/university-ceremony',
      name: 'epc-achievement-university-ceremony',
      component: () => import('../page/epc/achievements/AchievementUniversityCeremony.vue')
    },
    {
      path: '/exhibitionCenter/publications',
      name: 'epc-publications',
      component: () => import('../page/epc/PublicationPage.vue')
    },
    {
      path: '/announcement-detail/:id',
      name: 'announcement-detail',
      component: () => import('../page/eec/CourseAnnouncementDetailPage.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../page/dashboard/LoginPage.vue')
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: () => import('../page/dashboard/DashboardPage.vue'),
      redirect: '/dashboard/oceom/carousel',
      children: [
        {
          path: 'oceom/carousel',
          name: 'dashboard-oceom-carousel',
          component: () => import('../page/dashboard/CarouselManagementPage.vue')
        },
        {
          path: 'oceom/news',
          name: 'dashboard-oceom-news',
          component: () => import('../page/dashboard/NewsManagementPage.vue')
        },
        {
          path: 'eec/carousel',
          name: 'dashboard-eec-carousel',
          component: () => import('../page/dashboard/CarouselManagementPage.vue')
        },
        {
          path: 'eec/news',
          name: 'dashboard-eec-news',
          component: () => import('../page/dashboard/NewsManagementPage.vue')
        },
        {
          path: 'epc/carousel',
          name: 'dashboard-epc-carousel',
          component: () => import('../page/dashboard/CarouselManagementPage.vue')
        },
        {
          path: 'epc/news',
          name: 'dashboard-epc-news',
          component: () => import('../page/dashboard/NewsManagementPage.vue')
        },
        {
          path: 'ppc/carousel',
          name: 'dashboard-ppc-carousel',
          component: () => import('../page/dashboard/CarouselManagementPage.vue')
        },
        {
          path: 'ppc/news',
          name: 'dashboard-ppc-news',
          component: () => import('../page/dashboard/NewsManagementPage.vue')
        },
        {
          path: 'com/carousel',
          name: 'dashboard-com-carousel',
          component: () => import('../page/dashboard/CarouselManagementPage.vue')
        },
        {
          path: 'com/news',
          name: 'dashboard-com-news',
          component: () => import('../page/dashboard/NewsManagementPage.vue')
        }
      ]
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: () => import('../page/ErrorPage.vue')
    }
  ]
})

// 路由守衛：保護後台頁面
router.beforeEach((to, from, next) => {
  // 檢查是否要訪問後台頁面
  const isDashboardRoute = to.path.startsWith('/dashboard')
  
  if (isDashboardRoute) {
    // 檢查是否已登入
    if (!isAuthenticated()) {
      // 未登入，跳轉到登入頁
      next('/login')
    } else {
      const user = getCurrentUser()
      
      // 檢查是否訪問了中心根路徑（如 /dashboard/oceom）
      // 如果是，則重定向到該中心的輪播圖頁面
      const pathMatch = to.path.match(/^\/dashboard\/(oceom|eec|epc|ppc|com)$/)
      if (pathMatch) {
        const center = pathMatch[1]
        next(`/dashboard/${center}/carousel`)
        return
      }
      
      // 檢查用戶是否有權限訪問該中心頁面
      if (user) {
        const centerRoleMap = {
          'oceom': 'HEADQUARTERS',
          'eec': 'EDUCATION_CENTER',
          'epc': 'EXHIBITION_CENTER',
          'ppc': 'PRODUCT_CENTER',
          'com': 'MANAGEMENT_CENTER'
        }
        
        // 從路徑中提取中心名稱
        const centerMatch = to.path.match(/^\/dashboard\/(oceom|eec|epc|ppc|com)/)
        if (centerMatch) {
          const centerName = centerMatch[1]
          const requiredRole = centerRoleMap[centerName]
          
          // 超級管理員可以訪問所有中心
          if (user.role === 'SUPER_ADMIN') {
            next()
            return
          }
          
          // 其他角色只能訪問自己對應的中心
          if (user.role !== requiredRole) {
            // 無權限，重定向到用戶有權限的中心頁面
            alert('您沒有權限訪問此中心')
            next(getDashboardPathByRole(user.role))
            return
          }
        }
      }
      
      // 已登入且有權限，允許訪問
      next()
    }
  } else if (to.path === '/login' && isAuthenticated()) {
    // 如果已登入但訪問登入頁，跳轉到後台
    const user = getCurrentUser()
    if (user) {
      next(getDashboardPathByRole(user.role))
    } else {
      next('/dashboard/oceom/carousel')
    }
  } else {
    // 其他頁面正常訪問
    next()
  }
})

export default router 
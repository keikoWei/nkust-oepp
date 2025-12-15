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
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: () => import('../page/ErrorPage.vue')
    }
  ]
})

export default router 
import { createRouter, createWebHashHistory } from 'vue-router';

const routerHistory = createWebHashHistory();

const router = createRouter({
  history: routerHistory,
  routes: [
    {
      path: '/',
      component: () => import('@/components/layout/index.vue'),
      redirect: '/workbooks',
      children: [
        {
          path: '/workbooks',
          component: () => import('@/views/workbooks.vue'),
        },
        {
          path: '/applications',
          component: () => import('@/views/applications.vue'),
        },
        {
          path: '/signatures',
          component: () => import('@/views/signatures.vue'),
        },
        {
          path: '/pcaps',
          component: () => import('@/views/pcaps.vue'),
        },
        {
          path: '/packages',
          component: () => import('@/views/packages.vue'),
        },
        {
          path: '/jobs',
          component: () => import('@/views/jobs.vue'),
        },
        {
          path: '/playbooks',
          component: () => import('@/views/playbooks.vue'),
        },
        {
          path: '/runners',
          component: () => import('@/views/runners.vue'),
        },
      ],
    },
    //404页面捕获
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound', 
      component: () => import('@/views/404.vue')
    },
  ],
});

export default router;

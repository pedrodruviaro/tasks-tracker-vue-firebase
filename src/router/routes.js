export const routes = [
  { path: '/', redirect: '/dashboard' },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/LoginView.vue')
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    meta: {
      requiresAuth: true
    },
    component: () => import('@/views/DashboardView.vue')
  }
]

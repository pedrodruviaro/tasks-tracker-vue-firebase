import { createWebHistory } from 'vue-router'
import { createRouter } from 'vue-router'
import { routes } from './routes'
import { authGuard } from '@/guards/auth'

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach(authGuard)

export default router

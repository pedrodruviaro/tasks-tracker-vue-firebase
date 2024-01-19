import { getCurrentUser } from 'vuefire'

export async function authGuard(to) {
  if (to.meta.requiresAuth) {
    const currentUser = await getCurrentUser()

    if (!currentUser) {
      return {
        path: '/login',
        query: {
          redirect: to.fullPath
        }
      }
    }
  }
}

import { useUserStore } from '~/store/user'

export default defineNuxtRouteMiddleware((to, from) => {
  const userStore = useUserStore()

  if (!userStore.isAuthenticated && to.path !== '/login') {
    console.log('Redirect path in store_before:', userStore.redirectPath)
    console.log('Setting redirect path:', to.fullPath)
    userStore.setRedirectPath(to.fullPath)
    console.log('Redirect path in store:', userStore.redirectPath)
    console.log('User store after login:', userStore.$state);// ストアの状態をログに出力
    return navigateTo(`/login`)
  }
})

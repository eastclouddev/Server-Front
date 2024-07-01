import { defineStore } from 'pinia'

interface User {
  id: number | null
  role_id: number | null
  first_name: string
  last_name: string
  email: string
}

interface Payload {
  user: User
  isAuthenticated: boolean
}

export const useUserStore = defineStore('user', {
  state: () => ({
    user: {
      id: null,
      role_id: null,
      first_name: '',
      last_name: '',
      email: '',
    } as User,
    isAuthenticated: false,
    redirectPath: '',
  }),
  actions: {
    setUser(payload: Payload) {
      this.user = payload.user
      this.isAuthenticated = payload.isAuthenticated
    },
    clearUser() {
      this.user = {
        id: null,
        role_id: null,
        first_name: '',
        last_name: '',
        email: '',
      }
      this.isAuthenticated = false
    },
    setRedirectPath(path: string) {
      console.log('setRedirectPath called with:', path)
      this.redirectPath = path
      console.log('Redirect path after set:', this.redirectPath)
    },
    login(/* ログイン情報 */) {
      // 認証ロジック
      this.isAuthenticated = true
      console.log("loginメソッド");
    },
    clearRedirectPath() {
      this.redirectPath = ''
    },
  },
  getters: {
    userName: state => {
      if (state.user) {
        return `${state.user.first_name} ${state.user.last_name}`
      }
      return ''
    },
    userRole: state => (state.user ? state.user.role_id : null),
    userEmail: state => (state.user ? state.user.email : ''),
  },
  persist: true,
})

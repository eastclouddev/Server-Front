import { defineStore } from 'pinia'

export type User = {
  id: string
  role_id: number
  first_name: string
  last_name: string
}

type UserState = {
  user: User | null
  isAuthenticated: boolean
}

export const useUserStore = defineStore('user', {
  state: (): UserState => ({
    user: null,
    isAuthenticated: false,
  }),
  actions: {
    setUser(payload: { user: User; isAuthenticated: boolean }) {
      this.user = payload.user
      this.isAuthenticated = payload.isAuthenticated
    },
    clearUser() {
      this.user = null
      this.isAuthenticated = false
    },
  },
  getters: {
    userRole: state => (state.user ? state.user.role_id : null),
    userName: state =>
      state.user
        ? `${state.user.first_name} ${state.user.last_name}`
        : 'ゲスト',
  },
  persist: true,
})

import { defineStore } from 'pinia'

export type User = {
  id: string
  role: string
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
})

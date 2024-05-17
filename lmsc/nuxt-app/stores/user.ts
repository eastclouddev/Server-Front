import { defineStore } from 'pinia'

export type User = {
  id: string
  email: string
  name: string
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
    setUser(user: User) {
      this.user = user
      this.isAuthenticated = true
    },
    clearUser() {
      this.user = null
      this.isAuthenticated = false
    },
  },
})

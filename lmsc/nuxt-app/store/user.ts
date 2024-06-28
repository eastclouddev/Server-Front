import { defineStore } from 'pinia'

interface User {
  id: number | null
  role_id: number | null
  first_name: string
  last_name: string
  email: string
  company_id: number | null
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
      company_id: null,
    } as User,
    isAuthenticated: false,
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
        company_id: null,
      }
      this.isAuthenticated = false
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
    userCompany: state => (state.user ? state.user.company_id : null),
  },
  persist: true,
})

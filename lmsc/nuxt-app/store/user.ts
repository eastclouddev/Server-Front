import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    user: {
      id: null,
      role_id: null,
      first_name: '',
      last_name: '',
      email: '',
    },
    isAuthenticated: false,
  }),
  actions: {
    setUser(payload) {
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
})

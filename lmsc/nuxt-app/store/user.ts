import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', {
  state: () => ({
    user: null,
    isAuthenticated: false,
  }),
  actions: {
    setUser(payload) {
      this.user = payload.user;
      this.isAuthenticated = payload.isAuthenticated;
    },
    clearUser() {
      this.user = null;
      this.isAuthenticated = false;
    },
  },
  getters: {
    userName: (state) => {
      if (state.user) {
        return `${state.user.first_name} ${state.user.last_name}`;
      }
      return '';
    },
    userRole: (state) => state.user ? state.user.role_id : null,
  },
});
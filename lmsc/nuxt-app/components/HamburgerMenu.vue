<template>
  <v-menu flat v-model="menu" style="top:50px; right:30px;" width="18rem">
    <template v-slot:activator>
      <v-app-bar-nav-icon @click="toggleMenu" style="border-radius: 0;"></v-app-bar-nav-icon>
    </template>
    <v-list>
      <v-list-item>
        <div class="d-flex align-start pa-3">
          <img src="/assets/accountcircle.svg" alt="account" class="pr-3" width="60rem">
          <div style="font-size:0.9em; font-weight:lighter;">
            <p style="font-weight:bold;">{{ userName }}</p>
            <p style="font-weight:lighter;">{{ userEmail }}</p>
          </div>
        </div>
        <v-divider color="#BFBFBF"></v-divider>
      </v-list-item>
      <!-- 受講生メニュー -->
      <MenuStudent />
      <!-- 法人メニュー -->
      <MenuCorporation />
      <!-- 法人代行メニュー -->
      <MenuActingdirector />
      <!-- メンターメニュー -->
      <MenuMentor />
      <!-- 管理者メニュー -->
      <MenuAdmin />
    </v-list>
  </v-menu>
</template>
<script>
export default {
  name: 'ToolbarMenu',
  data() {
    return {
      menu: false,
      userName: '',
      userEmail: '',
    }
  },
  mounted() {
    // ユーザー情報取得
    this.fetchUserInfo();
  },
  methods: {
    toggleMenu() {
      this.menu = !this.menu;
    },
    fetchUserInfo() {
      //APIユーザー情報取得
      this.userName = 'ユーザー名';
      this.userEmail = 'user@example.com';
    }
  }
}
</script>
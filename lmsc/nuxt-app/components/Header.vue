<template>
  <!-- ログイン前のヘッダー -->

    <!-- <v-toolbar v-if="!isLoggedIn" color="white">
      <v-btn @click="buttonClicked">
        <img src="../assets/idemy_logo.svg" width="100%">
      </v-btn>
    </v-toolbar>
    <v-divider color="#BFBFBF"></v-divider>
  </v-card>

  <br /> -->

    <!-- ログイン後のヘッダー -->
    <!-- <v-card>
    <v-toolbar v-if="!isLoggedIn" color="white">
      <v-btn @click="buttonClicked">
        <img src="../assets/idemy_logo.svg" width="100%">
      </v-btn>
      <v-container fluid>
        <v-menu offset-y>
          <template v-slot:activator="{ on }">
            <v-btn color="primary" dark @click="on">
              <v-app-bar-nav-icon />
            </v-btn>
          </template>
          <v-list>
            <v-list-item v-for="(item, index) in items" :key="index" @click="menuItemClicked(item)">
              <v-list-item-title>{{ item }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-container>

    </v-toolbar>
    <v-divider color="#BFBFBF"></v-divider> -->

    <v-card>
      <v-toolbar color="white">
        <v-btn class="button_icon" @click="buttonClicked">
          <img src="../assets/idemy_logo.svg" width="100%">
        </v-btn>
        <v-container fluid v-if="isLoggedIn"> <!-- ログイン後に表示 -->
          <v-menu offset-y>
            <template v-slot:activator="{ on }">
              <v-btn color="primary" dark @click="on">
                <v-app-bar-nav-icon />
              </v-btn>
            </template>
            <v-list>
              <v-list-item v-for="(item, index) in items" :key="index" @click="menuItemClicked(item)">
                <v-list-item-title>{{ item }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </v-container>
      </v-toolbar>
      <v-divider color="#BFBFBF"></v-divider>
    </v-card>

</template>

<script>
export default {
  data() {
    return {
      isLoggedIn: false ,// ログイン状態を保持するデータ
      items: [
        'Item 1',
        'Item 2',
        'Item 3']
    };
  },
  methods: {
    buttonClicked() {
      const nextPageUrl = '/login';
      window.location.href = nextPageUrl;
    },
    menuItemClicked(item) {
      // メニュー項目がクリックされたときの処理
      console.log('Clicked:', item);
    },
    // ログイン処理
    login() {
      // ログイン処理が成功した場合にisLoggedInをtrueに設定
      this.isLoggedIn = true;
    },
    // ログアウト処理
    logout() {
      // ログアウト処理が成功した場合にisLoggedInをfalseに設定
      this.isLoggedIn = false;
    }
  }
  
};
</script>
<style>
@media screen and (max-width: 768px) {
  .button_icon{
    margin: auto;
  }
}
</style>
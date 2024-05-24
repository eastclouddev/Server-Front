<template>
  <v-container style="margin:10% 0;">
    <v-card flat class="mx-auto" max-width="620">
      <v-card-title class="pt-2 pb-2 pl-0 sp_title"  style="font-size:1.5em; font-weight: bold;"
        color="#242424">ログイン</v-card-title>
      <v-divider class="#CFCFCF" thickness="1"></v-divider>
      <v-card-text>
          <v-form @submit.prevent="handleSubmit">
            <v-card flat style="margin:10% 0;">
              <EmailForm label="メールアドレス" v-model="email" />
              <PasswordForm label="パスワード" v-model="password" />
            </v-card>
            <v-card flat style="text-align: center;">
              <p class="pb-2 sp_text">※パスワードを忘れた方は<a href="" target="_blank" color="#242424">こちら</a></p>
              <Button type="submit" color="#FF5A36" style="font-size: 1.5em;" buttonText=" ログイン"></Button>
            </v-card>
          </v-form>
      </v-card-text>
    </v-card>
  </v-container>
</template>
<script setup>
import { useNuxtApp } from "#app";

const { $api } = useNuxtApp();

const email = ref("");
const password = ref("");

const handleSubmit = async () => {
  const deviceInfo = {
    device_type: "PC",
    device_name: "Web",
    uuid: "unique_device_identifier",
  };
  console.log("email.value:", email.value);
  console.log("password.value:", password.value);
  console.log("deviceInfo:", deviceInfo);

  try {
    const response = await $api.login.$post({
      body: {
        email: email.value,
        password: password.value,
        device_info: deviceInfo,
      },
    });

    // ログイン成功時の処理
    console.log("Login successed:", response);
    // ログイン状態をpiniaに保存するなどの処理を行う
    // 例: localStorage.setItem('access_token', response.access_token);

    navigateTo('/dashboard');
  } catch (error) {
    // ログイン失敗時の処理
    console.error("Login failed:", error);
    // エラーメッセージの表示などの処理を行う
  }
};
</script>
<style lang="scss" scoped>
@media screen and (max-width: 768px) {
  .sp {
   &_title {
    font-size: 2.5em !important;
  }
  &_text {
    font-size: 1.4em;
  }
  }
}
</style>
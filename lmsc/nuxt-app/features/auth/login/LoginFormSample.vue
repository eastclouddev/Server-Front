<template>
  <v-card class="mx-auto" max-width="400">
    <v-card-title>ログイン</v-card-title>
    <v-card-text>
      <v-form @submit.prevent="handleSubmit">
        <v-text-field
          v-model="email"
          label="メールアドレス"
          type="email"
          required
        ></v-text-field>
        <v-text-field
          v-model="password"
          label="パスワード"
          type="password"
          required
        ></v-text-field>
        <v-btn type="submit" color="primary" block>ログイン</v-btn>
      </v-form>
    </v-card-text>
  </v-card>
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

    // ログイン後のリダイレクト処理
    navigateTo('/dashboard');
  } catch (error) {
    // ログイン失敗時の処理
    console.error("Login failed:", error);
    // エラーメッセージの表示などの処理を行う
  }
};
</script>

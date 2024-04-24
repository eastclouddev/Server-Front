<template>
  <NuxtLayout>
    <Head>
      <Title>ログイン | iDemy</Title>
      <Meta name="description" content="iDemy | ログイン画面" />
    </Head>
    <v-container>
      <LoginForm />
    </v-container>
  </NuxtLayout>
</template>

<script setup>
import LoginForm from "~/features/auth/login/LoginForm.vue";
</script>

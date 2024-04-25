<template>
  <NuxtLayout>
    <Head>
      <Title>ログイン | iDemy</Title>
      <Meta name="description" content="iDemy | ログイン画面" />
    </Head>
    <v-container>
      <LoginFormSample />
    </v-container>
  </NuxtLayout>
</template>

<script setup>
import LoginFormSample from "~/features/auth/login/LoginFormSample.vue";
</script>

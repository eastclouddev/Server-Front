<template>
  <div>
    <Head>
      <Title>ログイン | My App</Title>
      <Meta name="description" content="Idemy | ログイン画面" />
    </Head>

    <v-container>
      <LoginForm />
    </v-container>
  </div>
</template>

<script setup>
import LoginForm from '~/features/auth/login/LoginForm.vue'
</script>

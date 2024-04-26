<<<<<<< HEAD
<template>
  <Head>
    <Title>ログイン | iDemy</Title>
    <Meta name="description" content="iDemy | ログイン画面" />
  </Head>
  <v-container>
    <LoginForm />
  </v-container>
</template>
<script setup>
import LoginForm from '~/features/auth/login/LoginForm.vue'
=======
<!-- 
    このページは削除して大丈夫です！
    こちらはサンプルのログインページを作成する際に、/loginが無いとエラーが出るため作成しました。 
-->
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
>>>>>>> develop
</script>

<template>
  <div>
    <Head>
      <Title>パスワード再設定 | iDemy</Title>
      <Meta name="description" content="iDemy | ログイン画面" />
    </Head>
    <v-container>
      <PasswordResettingsSendEmail />
    </v-container>
  </div>
</template>
<script setup>
import PasswordResettingsSendEmail from "~/features/PasswordResettings/PasswordResettingsSendEmail.vue";
</script>
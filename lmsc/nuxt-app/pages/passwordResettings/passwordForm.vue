<template>
  <div>
    <Head>
      <Title>パスワード再設定 | iDemy</Title>
      <Meta name="description" content="iDemy | ログイン画面" />
    </Head>
    <v-container>
      <PasswordResettingsPasswordForm />
    </v-container>
  </div>
</template>
<script setup>
import PasswordResettingsPasswordForm from "~/features/PasswordResettings/PasswordResettingsPasswordForm.vue";
</script>
<template>
  <div>
    <Head>
      <Title>パスワード再設定 | iDemy</Title>
      <Meta name="description" content="iDemy | ログイン後パスワード再設定" />
    </Head>
    <v-container>
      <PasswordResettingsMailFormLogined />
    </v-container>
  </div>
</template>
<script setup>
import PasswordResettingsMailFormLogined from "~/features/PasswordResettings/PasswordResettingsMailFormLogined.vue";
</script>
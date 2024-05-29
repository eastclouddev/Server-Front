<template>
  <div>
    <Head>
      <Title>パスワード再設定 | iDemy</Title>
      <Meta name="description" content="iDemy | パスワード再設定" />
    </Head>
    <v-container>
      <PasswordResettingsMailForm />
    </v-container>
  </div>
</template>
<script setup>
    import PasswordResettingsMailForm from "~/features/PasswordResettings/PasswordResettingsMailForm.vue";
</script>
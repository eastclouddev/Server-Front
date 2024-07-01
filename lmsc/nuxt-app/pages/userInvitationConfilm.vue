<template>

  <Head>
    <Title>ユーザー情報確認 | iDemy</Title>
    <Meta name="description" content="iDemy | ユーザー情報確認画面" />
  </Head>
  <v-container>
    <userInvitationConfilmForm />
  </v-container>
</template>
<script setup>
definePageMeta({
  middleware: 'auth',
})
import userInvitationConfilmForm from '~/features/auth/userInvitation/userInvitationConfilmForm.vue'
</script>

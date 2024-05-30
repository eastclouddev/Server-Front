<template>
  <Head>
    <Title>ユーザー情報入力 | iDemy</Title>
    <Meta name="description" content="iDemy | ユーザー情報入力画面" />
  </Head>
  <v-container>
    <UserInvitationForm />
  </v-container>
</template>
<script setup>
import UserInvitationForm from '~/features/auth/userInvitation/UserInvitationForm.vue';
</script>

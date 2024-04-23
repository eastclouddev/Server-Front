<template>
  <NuxtLayout>
    <Head>
      <Title>ユーザー情報入力 | iDemy</Title>
      <Meta name="description" content="iDemy | ユーザー情報入力画面" />
    </Head>
    <v-container>
      <userInvitationForm />
    </v-container>
  </NuxtLayout>
</template>
<script setup>
import userInvitationForm from '~/features/userInvitation/userInvitationForm.vue'
</script>

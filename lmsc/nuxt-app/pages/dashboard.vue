<template>
  <Head>
    <Title>ダッシュボード | iDemy</Title>
    <Meta name="description" content="iDemy | ダッシュボード画面" />
  </Head>
  <v-container>
    <DashboardContent />
  </v-container>
</template>
<script setup>
definePageMeta({
  middleware: 'auth',
})
import DashboardContent from '~/features/auth/dashboard/components/DashboardContent.vue';
</script>

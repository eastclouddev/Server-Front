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
import DashboardContent from '~/features/auth/dashboard/dashboardContent.vue';
</script>

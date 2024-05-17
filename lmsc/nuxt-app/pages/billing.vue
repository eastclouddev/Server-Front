<template>
  <Head>
    <Title>請求履歴 | iDemy</Title>
    <Meta name="description" content="iDemy | 請求履歴一覧画面" />
  </Head>
  <v-container>
    <BillingHistory />
  </v-container>
</template>
<script setup>
import BillingHistory from '~/features/auth/billing/components/BillingHistory.vue';
</script>
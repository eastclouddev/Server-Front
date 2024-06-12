<template>
  <Head>
    <Title>請求履歴 | iDemy</Title>
    <Meta name="description" content="iDemy | 請求履歴一覧画面" />
  </Head>
  <v-container>
    <BillingList />
  </v-container>
</template>
<script setup>
import BillingList from '~/features/billing/components/BillingList.vue'
</script>

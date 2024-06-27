<template>
  <div>
    <Head>
      <Title>請求履歴 | iDemy</Title>
      <Meta name="description" content="iDemy | 請求履歴一覧画面" />
    </Head>
    <v-container>
      <BillingList />
    </v-container>
  </div>
</template>
<script setup>
import BillingList from '~/features/auth/billing/components/BillingList.vue';
</script>
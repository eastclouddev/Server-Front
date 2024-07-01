<template>
  <Head>
    <Title>請求先情報 | iDemy</Title>
    <Meta name="description" content="iDemy | 請求先情報画面" />
  </Head>
  <v-container>
    <BillingInformationList/>
  </v-container>
</template>
<script setup>
definePageMeta({
  middleware: 'auth',
})
import BillingInformationList from '~/features/auth/billing/components/BillingInformationList.vue';
</script>
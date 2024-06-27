<template>
    <div>
        <Head>
        <Title>請求先情報 | iDemy</Title>
        <Meta name="description" content="iDemy | 請求先情報確認画面" />
        </Head>
        <v-container>
        <BillingConfirmationAgency />
        </v-container>
    </div>
  </template>
  <script setup>
  import BillingConfirmationAgency from '~/features/CompanyInfomation/BillingConfirmationAgency.vue'
  </script>
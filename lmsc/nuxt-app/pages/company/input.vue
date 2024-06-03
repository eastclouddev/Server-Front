<template>
    <div>
        <Head>
        <Title>会社情報入力 | iDemy</Title>
        <Meta name="description" content="iDemy | 会社情報入力画面" />
        </Head>
        <v-container>
        <CompanyInfomationForm />
        </v-container>
    </div>
  </template>
  <script setup>
  import CompanyInfomationForm from '~/features/CompanyInfomation/CompanyInfomationForm.vue'
  </script>
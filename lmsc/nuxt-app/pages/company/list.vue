<template>
    <div>
        <Head>
        <Title>管理会社一覧 | iDemy</Title>
        <Meta name="description" content="iDemy | 管理会社情報詳細画面" />
        </Head>
        <v-container>
        <CompanyList />
        </v-container>



        <v-container>
        </v-container>

    </div>

  </template>
  <script setup>
  import CompanyList from '~/features/CompanyInfomation/CompanyList.vue'
  </script>

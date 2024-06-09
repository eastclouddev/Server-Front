<template>
    <div>
        <div>
        <Head>
        <Title>管理会社詳細 | iDemy</Title>
        <Meta name="description" content="iDemy | 管理会社情報詳細画面" />
        </Head>
        <v-container>
        <DetailCompany />
        </v-container>
        </div>

        <div>
        <v-container>
        <DetailBilling />
        </v-container>
        </div>

        <div>
        <v-container>
        <BillingHistory />
        </v-container>
        </div>

    </div>

  </template>
  <script setup>
  import DetailCompany from '~/features/CompanyInfomation/DetailCompany.vue'
  import DetailBilling from '~/features/CompanyInfomation/DetailBilling.vue'
  import BillingHistory from '~/features/CompanyInfomation/BillingHistory.vue'
  </script>

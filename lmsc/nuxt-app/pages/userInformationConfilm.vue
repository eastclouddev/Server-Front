<template>
  <div>
      <Head>
      <Title>ユーザー情報確認 | iDemy</Title>
      <Meta name="description" content="iDemy | ユーザー情報確認画面" />
      </Head>
      <v-container>

      <UserInformationConfirmation /> 
      <UserCompanyConfirmation />
      <UserBillingConfirmation />
      
      </v-container>
  </div>
</template>
<script setup>
import UserCompanyConfirmation from '~/features/CompanyInfomation/UserCompanyConfirmation.vue'
import UserBillingConfirmation from '~/features/CompanyInfomation/UserBillingConfirmation.vue'
import UserInformationConfirmation from '~/features/CompanyInfomation/UserInformationConfirmation.vue'

UserInformationConfirmation
</script> 
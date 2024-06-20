<template>
    <v-container style="margin:5% 0;">

      <Position :item="Links" />

      <v-card flat class="mx-auto" max-width="620">
        <v-card-title class="pt-2 pb-2 pl-0 sp_title" style="font-size: 1.6em; font-weight: bold;" color="#242424">
          請求先情報
        </v-card-title>
        <v-divider class="#CFCFCF" thickness="1"></v-divider>
        <v-card flat style="margin:10% 0;"> 
        <BillingAddress :showSpan="false"/>
        <BillingBuildingRoomNumber :showSpan="false" label="建物名・部屋番号" placeholder="〇〇〇123号室"/>
        <BillingPhoneNumber :showSpan="false" label="電話番号" placeholder="00000000000"/>
        <BillingMail :showSpan="false" label="メールアドレス" placeholder="XXXXXXX@example.com"/>
        <BillingInvoice :showSpan="false" label="インボイス番号" placeholder="0-00-000"/>
        <BillingTaxNumber :showSpan="false" label="税金番号" placeholder="0-00-000"/>
        <BillingColumn label="備考欄" placeholder="テキスト入力"/>
      </v-card>
        <v-row class="align-center justify-space-between flex-column-sm">     
          <v-card flat class="mx-auto text-center">
            <Button  flat type="submit" color="#FF5A36" style="font-size: 1.5em; border-radius:5px; margin-bottom: 15px; height: 4ex;" buttonText="更新する"></Button>
          </v-card>
        </v-row>
      </v-card>
    </v-container>
  </template>

<script setup>
import BillingAddress from "~/features/CompanyInfomation/components/BillingAddress.vue";
import BillingBuildingRoomNumber from "~/features/CompanyInfomation/components/BillingBuildingRoomNumber.vue";
import BillingPhoneNumber from "~/features/CompanyInfomation/components/BillingPhoneNumber.vue";
import BillingMail from "~/features/CompanyInfomation/components/BillingMail.vue";
import BillingInvoice from "~/features/CompanyInfomation/components/BillingInvoice.vue";
import BillingTaxNumber from "~/features/CompanyInfomation/components/BillingTaxNumber.vue";
import BillingColumn from "~/features/CompanyInfomation/components/BillingColumn.vue";
import Position from '~/features/CompanyInfomation/components/PositionInfo.vue';

const  Links = {
    title: '請求先情報',
  }
</script>
  
  <style lang="scss" scoped>
  @media screen and (max-width: 768px) {
    .sp {
      &_title {
        font-size: 2.5em !important;
      }
  
      &_text {
        font-size: 1.4em;
      }
    }
  }
  </style>
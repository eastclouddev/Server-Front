<template>
    <v-container style="margin:10% 0;">
      <v-card flat class="mx-auto" max-width="620">
        <v-card-title class="pt-2 pb-2 pl-0 sp_title" style="font-size: 1.6em; font-weight: bold;" color="#242424">
          請求先情報入力
        </v-card-title>
        <v-divider class="#CFCFCF" thickness="1"></v-divider>
        <v-card flat style="margin:10% 0;"> 
        <BillingAddress />
        <BillingStreetAddress label="番地" placeholder="0-00-000" />
        <BillingBuildingRoomNumber label="建物名・部屋番号" placeholder="〇〇〇123号室"/>
        <BillingPhoneNumber label="電話番号" placeholder="00000000000"/>
        <BillingMail label="メールアドレス" placeholder="XXXXXXX@example.com"/>
        <BillingInvoice label="インボイス番号" placeholder="0-00-000"/>
        <BillingTaxNumber label="税金番号" placeholder="0-00-000"/>
        <BillingColumn label="備考欄" placeholder="テキスト入力"/>
      </v-card>
        <v-row class="align-center justify-space-between flex-column-sm">
          <BillingPrivacyCheckButton />     
          <v-card flat class="mx-auto text-center">
            <Button flat type="submit" color="#FF5A36" style="font-size: 1.5em; border-radius:5px; margin-bottom: 15px; height: 4ex;" buttonText="入力情報を確認する"></Button>
          </v-card>
        </v-row>
      </v-card>
    </v-container>
  </template>

<script setup>
import BillingAddress from "~/features/CompanyInfomation/components/BillingAddress.vue";
import BillingStreetAddress from "~/features/CompanyInfomation/components/BillingStreetAddress.vue";
import BillingBuildingRoomNumber from "~/features/CompanyInfomation/components/BillingBuildingRoomNumber.vue";
import BillingPhoneNumber from "~/features/CompanyInfomation/components/BillingPhoneNumber.vue";
import BillingMail from "~/features/CompanyInfomation/components/BillingMail.vue";
import BillingInvoice from "~/features/CompanyInfomation/components/BillingInvoice.vue";
import BillingTaxNumber from "~/features/CompanyInfomation/components/BillingTaxNumber.vue";
import BillingColumn from "~/features/CompanyInfomation/components/BillingColumn.vue";
import BillingPrivacyCheckButton from "~/features/CompanyInfomation/components/BillingPrivacyCheckButton.vue";
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
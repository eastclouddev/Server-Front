<template>
    <v-container style="margin:10% 0;">
      <v-card flat class="mx-auto" max-width="620">
        <v-card-title class="pt-2 pb-2 pl-0 sp_title" style="font-size: 1.6em; font-weight: bold;" color="#242424">
          会社情報入力
        </v-card-title>
        <v-divider class="#CFCFCF" thickness="1"></v-divider>
        <v-card flat style="margin:10% 0;"> 
        <CompanyName label="会社名" placeholder="株式会社〇〇"/>
        <CompanyNameFurigana label="フリガナ" placeholder="カブシキガイシャ〇〇"/>
        <CompanyAddress />
        <CompanyBuildingRoomNumber label="建物名・部屋番号" placeholder="〇〇〇123号室"/>
        <CompanyPhoneNumber label="電話番号" placeholder="00000000000"/>
        <CompanyMail label="メールアドレス" placeholder="XXXXXXX@example.com"/>
        <CompanyBillingCheckButton label="請求先"/>

    
        
        </v-card>
        <v-card flat class="mx-auto text-center">
          <Button type="submit" color="#FF5A36" style="font-size: 1.5em; border-radius:5px; height: 4ex; margin-bottom: 4px;" buttonText="次へ"></Button>
        </v-card>
      </v-card>
    </v-container>
  </template>

  <script setup>
  import CompanyName from "~/features/CompanyInfomation/components/CompanyName.vue";
  import CompanyNameFurigana from "~/features/CompanyInfomation/components/CompanyNameFurigana.vue";
  import CompanyAddress from "~/features/CompanyInfomation/components/CompanyAddress.vue";
  import CompanyBuildingRoomNumber from "~/features/CompanyInfomation/components/CompanyBuildingRoomNumber.vue";
  import CompanyPhoneNumber from "~/features/CompanyInfomation/components/CompanyPhoneNumber.vue";
  import CompanyMail from "~/features/CompanyInfomation/components/CompanyMail.vue";
  import CompanyBillingCheckButton from "~/features/CompanyInfomation/components/CompanyBillingCheckButton.vue";
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
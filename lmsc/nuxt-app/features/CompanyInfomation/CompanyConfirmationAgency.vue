<template>
    <v-container style="margin:5% 0;">

      <Position :item="Links" />

      <v-card flat class="mx-auto" max-width="620">
        <v-card-title class="pt-2 pb-2 pl-0 sp_title" style="font-size: 1.6em; font-weight: bold;" color="#242424">
          会社情報確認
        </v-card-title>
        <v-divider class="#CFCFCF" thickness="1"></v-divider>
        <v-card flat style="margin:10% 0;"> 
        <ConfirmationCompanyName  label="会社名" />
        <div class="full-width-dotted-line"></div>
        <ConfirmationCompanyNameFurigana  label="フリガナ" />
        <div class="full-width-dotted-line"></div>
        <ConfirmationPostNumber  label="郵便番号" />
        <div class="full-width-dotted-line"></div>
        <ConfirmationPrefectures  label="都道府県" />
        <div class="full-width-dotted-line"></div>
        <ConfirmationMunicipalities  label="市区町村" />
        <div class="full-width-dotted-line"></div>
        <ConfirmationStreetAddress  label="番地" />
        <div class="full-width-dotted-line"></div>
        <ConfirmationBuildingRoomNumber  label="建物名・部屋番号" />
        <div class="full-width-dotted-line"></div>
        <ConfirmationPhoneNumber  label="電話番号" />
        <div class="full-width-dotted-line"></div>
        <ConfirmationMail  label="メールアドレス" />
        <div class="full-width-dotted-line"></div>
      </v-card>
        <v-row class="align-center justify-space-between flex-column-sm">     
          <v-card flat class="mx-auto text-center">
            <Button flat class="return-mark" @click="returnLink" type="submit" style="font-size: 1.5em; border-radius:5px; margin-bottom: 15px; height: 4ex;" buttonText="戻る"></Button>
          </v-card>
        </v-row>
      </v-card>
    </v-container>
  </template>

<script setup>
import ConfirmationCompanyName from "~/features/CompanyInfomation/components/ConfirmationCompanyName.vue";
import ConfirmationCompanyNameFurigana from "~/features/CompanyInfomation/components/ConfirmationCompanyNameFurigana.vue";
import ConfirmationPostNumber from "~/features/CompanyInfomation/components/ConfirmationPostNumber.vue";
import ConfirmationPrefectures from "~/features/CompanyInfomation/components/ConfirmationPrefectures.vue";
import ConfirmationMunicipalities  from "~/features/CompanyInfomation/components/ConfirmationMunicipalities.vue";
import ConfirmationStreetAddress from "~/features/CompanyInfomation/components/ConfirmationStreetAddress.vue";
import ConfirmationBuildingRoomNumber from "~/features/CompanyInfomation/components/ConfirmationBuildingRoomNumber.vue";
import ConfirmationPhoneNumber from "~/features/CompanyInfomation/components/ConfirmationPhoneNumber.vue";
import ConfirmationMail from "~/features/CompanyInfomation/components/ConfirmationMail.vue";
import Position from '~/features/CompanyInfomation/components/PositionInfo.vue';

const  Links = {
    title: '会社情報確認',
}

const returnLink = () => {
  window.location.href = '/dashboard';
};

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

  .return-mark {
  color: #FF5136;
  background-color: #FFFF;
  border: 1px solid#FF5136;
  border-radius: 5px;
  padding: 0 1%;
  width: 260px !important;
}
  .full-width-dotted-line {
  width: 100%;
  border-top: 2px dotted #CFCFCF;
  margin: 20px 0;
}
  </style>
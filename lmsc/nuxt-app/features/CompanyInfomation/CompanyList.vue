<template>
    <v-container style="margin:5% 0; ">
      <v-card flat class="mx-auto" style="margin:3% 0; max-width: 100%;">
      <v-row>
        <img src="/assets/account.svg" alt="study" style="padding:0 10px 0 20px;">
        <v-card-title class="pt-2 pb-2 pl-0 sp_title" style="font-size: 1.6em; font-weight: bold;" color="#242424">
          契約会社情報一覧
        </v-card-title>
      </v-row>
        <v-divider class="#CFCFCF" thickness="1" style="padding-bottom: 50px;"></v-divider>
        <Position :item="Links" style="margin-bottom: 30px !important;"/>
        <ListContractCompanies />
      </v-card>
    </v-container>
  </template>

<script setup>
import ListContractCompanies from '~/features/CompanyInfomation/components/ListContractCompanies.vue';
import Position from '~/features/CompanyInfomation/components/PositionInfo.vue';

const  Links = {
    title: '契約会社情報一覧',
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
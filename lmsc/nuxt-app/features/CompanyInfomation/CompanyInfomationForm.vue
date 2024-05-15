<template>
    <v-container style="margin:10% 0;">
      <v-card flat class="mx-auto" max-width="620">
        <v-card-title class="pt-2 pb-2 pl-0 sp_title" style="font-size: 1.6em; font-weight: bold;" color="#242424">
          会社情報入力
        </v-card-title>
        <v-divider class="#CFCFCF" thickness="1"></v-divider>
        <v-card flat style="margin:10% 0;"> 
        <CompanyComponent label="会社名" placeholder="株式会社〇〇"/>
        <CompanyComponent label="フリガナ" placeholder="カブシキガイシャ〇〇"/>
        <CompanyPostNumber label="郵便番号" placeholderFirst="000" placeholderSecond="0000"/>
        <CompanyPrefecture label="都道府県" placeholder="選択してください"/>
        <CompanyComponent label="市区町村" placeholder="〇〇市"/>
        <CompanyComponent label="番地" placeholder="0-00-000"/>
        <CompanyComponent label="建物名・部屋番号" placeholder="〇〇〇123号室"/>
        <CompanyPhoneNumber label="電話番号" placeholder="00000000000"/>
        <CompanyComponent label="メールアドレス" placeholder="XXXXXXX@example.com"/>
        <CompanyBillingCheckButton label="請求先"/>

    
        
        </v-card>
        <v-card flat class="mx-auto text-center">
          <!-- <PrivacyPolicyModal /> -->
          <!-- <TeamOfUseModal /> -->
          <Button type="submit" color="#FF5A36" style="font-size: 1.5em;" buttonText="次へ"></Button>
        </v-card>
      </v-card>
    </v-container>
  </template>
  
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
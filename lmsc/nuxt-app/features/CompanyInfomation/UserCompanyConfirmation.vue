<template>
  <v-container style="margin:5% 0;">
    <v-card flat class="mx-auto" max-width="620">
      <v-card-title class="pt-2 pb-2 pl-0 sp_title" style="font-size: 1.6em; font-weight: bold;" color="#242424">
        会社情報確認
      </v-card-title>
      <v-divider class="#CFCFCF" thickness="1"></v-divider>
      <v-card flat style="margin:10% 0;">
        <ConfirmationCompanyName label="会社名" :placeholder="companyInfo.name" />
        <div class="full-width-dotted-line"></div>
        <ConfirmationCompanyNameFurigana label="フリガナ" :placeholder="companyInfo.name_kana" />
        <div class="full-width-dotted-line"></div>
        <ConfirmationPostNumber label="郵便番号" :placeholder="companyInfo.postal_code" />
        <div class="full-width-dotted-line"></div>
        <ConfirmationPrefectures label="都道府県" :placeholder="companyInfo.prefecture" />
        <div class="full-width-dotted-line"></div>
        <ConfirmationMunicipalities label="市区町村" :placeholder="companyInfo.city" />
        <div class="full-width-dotted-line"></div>
        <ConfirmationStreetAddress label="番地" :placeholder="companyInfo.town" />
        <div class="full-width-dotted-line"></div>
        <ConfirmationBuildingRoomNumber label="建物名・部屋番号" :placeholder="companyInfo.address" />
        <div class="full-width-dotted-line"></div>
        <ConfirmationPhoneNumber label="電話番号" :placeholder="companyInfo.phone_number" />
        <div class="full-width-dotted-line"></div>
        <ConfirmationMail label="メールアドレス" :placeholder="companyInfo.email" />
        <div class="full-width-dotted-line"></div>
      </v-card>
      <v-row class="align-center justify-space-between flex-column-sm">
        <v-card flat class="mx-auto text-center">
          <Button flat class="return-mark" @click="returnLink" type="submit" style="font-size: 1.5em; border-radius:5px; margin-bottom: 15px; height: 4ex;" buttonText="入力画面に戻る"></Button>
        </v-card>
      </v-row>
    </v-card>
  </v-container>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import ConfirmationCompanyName from "~/features/CompanyInfomation/components/ConfirmationCompanyName.vue";
import ConfirmationCompanyNameFurigana from "~/features/CompanyInfomation/components/ConfirmationCompanyNameFurigana.vue";
import ConfirmationPostNumber from "~/features/CompanyInfomation/components/ConfirmationPostNumber.vue";
import ConfirmationPrefectures from "~/features/CompanyInfomation/components/ConfirmationPrefectures.vue";
import ConfirmationMunicipalities  from "~/features/CompanyInfomation/components/ConfirmationMunicipalities.vue";
import ConfirmationStreetAddress from "~/features/CompanyInfomation/components/ConfirmationStreetAddress.vue";
import ConfirmationBuildingRoomNumber from "~/features/CompanyInfomation/components/ConfirmationBuildingRoomNumber.vue";
import ConfirmationPhoneNumber from "~/features/CompanyInfomation/components/ConfirmationPhoneNumber.vue";
import ConfirmationMail from "~/features/CompanyInfomation/components/ConfirmationMail.vue";
import { getCompanyInfo } from '~/features/CompanyInfomation/api/getCompany.ts'

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// const companyInfo = {
//   name: '会社名',
//   name_kana: 'カイシャメイ',
//   prefecture: '都道府県',
//   city: '市区町村',
//   town: '番地',
//   address: '建物名',
//   postal_code: '郵便番号',
//   phone_number: '電話番号',
//   email: 'メールアドレス'
// };
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////


const route = useRoute();
const companyInfo = ref({
  name: '',
  name_kana: '',
  prefecture: '',
  city: '',
  town: '',
  address: '',
  postal_code: '',
  phone_number: '',
  email: ''
});

const fetchCompanyInfo = async () => {
  // const companyId = route.params.company_id;
  const companyId = 1
  try {
    const data = await getCompanyInfo(companyId);
    companyInfo.value = {
      name: data.name, 
      name_kana: data.name_kana, 
      prefecture: data.prefecture,
      city: data.city, 
      town: data.town, 
      address: data.address, 
      postal_code: data.postal_code,
      phone_number: data.phone_number,
      email: data.email, 
    };
  } catch (error) {
    console.error('Failed to fetch billing info:', error);
  }
};

onMounted(fetchCompanyInfo);
 


const returnLink = () => {
  router.push('/company/input')
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
  border: 1px solid #FF5136;
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

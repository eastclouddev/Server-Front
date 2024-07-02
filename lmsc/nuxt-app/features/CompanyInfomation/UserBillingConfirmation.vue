<template>
  <v-container style="margin:5% 0;">
    <v-card flat class="mx-auto" max-width="620">
      <v-card-title class="pt-2 pb-2 pl-0 sp_title" style="font-size: 1.6em; font-weight: bold;" color="#242424">
        請求先情報
      </v-card-title>
      <v-divider class="#CFCFCF" thickness="1"></v-divider>
      <v-card flat style="margin:10% 0;"> 
        <ConfirmationPostNumber label="郵便番号" :placeholder="billingInfo.postal_code" />
        <div class="full-width-dotted-line"></div>
        <ConfirmationPrefectures label="都道府県" :placeholder="billingInfo.prefecture" />
        <div class="full-width-dotted-line"></div>
        <ConfirmationMunicipalities label="市区町村" :placeholder="billingInfo.city" />
        <div class="full-width-dotted-line"></div>
        <ConfirmationStreetAddress label="番地" :placeholder="billingInfo.town" />
        <div class="full-width-dotted-line"></div>
        <ConfirmationBuildingRoomNumber label="建物名・部屋番号" :placeholder="billingInfo.address" />
        <div class="full-width-dotted-line"></div>
        <ConfirmationPhoneNumber label="電話番号" :placeholder="billingInfo.phone_number" />
        <div class="full-width-dotted-line"></div>
        <ConfirmationMail label="メールアドレス" :placeholder="billingInfo.billing_email" />
        <div class="full-width-dotted-line"></div>
        <ConfirmationInvoice label="インボイス番号" :placeholder="billingInfo.invoice_number" />
        <div class="full-width-dotted-line"></div>
        <ConfirmationTaxNumber label="税金番号" :placeholder="billingInfo.tax_number" />
        <div class="full-width-dotted-line"></div>
      </v-card>
      <v-row class="align-center justify-center">
        <v-col cols="12" md="auto" class="mx-auto text-center">
          <v-card flat class="w-100">
            <Button flat class="return-mark" @click="returnLink" type="submit" style="font-size: 1.5em; border-radius:5px; margin-bottom: 15px; height: 4ex;" buttonText="入力画面に戻る"></Button>
          </v-card>
        </v-col>
        <v-col cols="12" md="auto" class="mx-auto text-center">
          <v-card flat class="w-100">
            <Button flat @click="entry" type="submit" color="#FF5A36" style="width: 260px !important; font-size: 1.5em; border-radius:5px; margin-bottom: 15px; height: 4ex;" buttonText="登録"></Button>
          </v-card>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import ConfirmationPostNumber from "~/features/CompanyInfomation/components/ConfirmationPostNumber.vue";
import ConfirmationPrefectures from "~/features/CompanyInfomation/components/ConfirmationPrefectures.vue";
import ConfirmationMunicipalities from "~/features/CompanyInfomation/components/ConfirmationMunicipalities.vue";
import ConfirmationStreetAddress from "~/features/CompanyInfomation/components/ConfirmationStreetAddress.vue";
import ConfirmationBuildingRoomNumber from "~/features/CompanyInfomation/components/ConfirmationBuildingRoomNumber.vue";
import ConfirmationPhoneNumber from "~/features/CompanyInfomation/components/ConfirmationPhoneNumber.vue";
import ConfirmationMail from "~/features/CompanyInfomation/components/ConfirmationMail.vue";
import ConfirmationInvoice from "~/features/CompanyInfomation/components/ConfirmationInvoice.vue";
import ConfirmationTaxNumber from "~/features/CompanyInfomation/components/ConfirmationTaxNumber.vue";
import { getBillingInfo } from '~/features/CompanyInfomation/api/getBilling.ts';

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// const billingInfo = {
//   postal_code: '郵便番号',
//   prefecture: '都道府県',
//   city: '市区町村',
//   town: '番地',
//   address: '建物番号',
//   phone_number: '電話番号',
//   billing_email: 'メールアドレス',
//   invoice_number: 'インボイス番号',
//   tax_number: '税番号',
// };
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////



const route = useRoute();
const billingInfo = ref({
  postal_code: '',
  prefecture: '',
  city: '',
  town: '',
  address: '',
  phone_number: '',
  billing_email: '',
  invoice_number: '',
  tax_number: '',
});

const fetchBillingInfo = async () => {
  // const companyId = route.params.company_id;
  const companyId = 1
  // const billingInfoId = route.params.billing_info_id;
  const billingInfoId = 1
  try {
    const data = await getBillingInfo(companyId, billingInfoId);
    billingInfo.value = {
      postal_code: data.postal_code,
      prefecture: data.prefecture,
      city: data.city,
      town: data.town,
      address: data.address,
      phone_number: data.phone_number,
      billing_email: data.billing_email,
      invoice_number: data.invoice_number,
      tax_number: data.tax_number,
    };
  } catch (error) {
    console.error('Failed to fetch billing info:', error);
  }
};

onMounted(fetchBillingInfo);

const returnLink = () => {
  router.push('/billing/input')
  
};

const entry = () => {
  router.push('/profile/complete');
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

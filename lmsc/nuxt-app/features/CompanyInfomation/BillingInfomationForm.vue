<template>
  <v-container style="margin:10% 0;">
    <v-card flat class="mx-auto" max-width="620">
      <v-card-title class="pt-2 pb-2 pl-0 sp_title" style="font-size: 1.6em; font-weight: bold;" color="#242424">
        請求先情報入力
      </v-card-title>
      <v-divider class="#CFCFCF" thickness="1"></v-divider>
      <v-card flat style="margin:10% 0;">
        <BillingAddress @create="createBillingAddress"/>
        <BillingStreetAddress label="番地" placeholder="0-00-000" @create="createBillingStreetAddress"/>
        <BillingBuildingRoomNumber label="建物名・部屋番号" placeholder="〇〇〇123号室" @create="createBillingBuildingRoomNumber"/>
        <BillingPhoneNumber label="電話番号" placeholder="00000000000" @create="createBillingPhoneNumber"/>
        <BillingMail label="メールアドレス" placeholder="XXXXXXX@example.com" @create="createBillingMail"/>
        <BillingInvoice label="インボイス番号" placeholder="0-00-000" @create="createBillingInvoice"/>
        <BillingTaxNumber label="税金番号" placeholder="0-00-000" @create="createBillingTaxNumber"/>
        <BillingColumn label="備考欄" placeholder="テキスト入力" @create="createBillingColumn"/>
      </v-card>
      <v-row class="align-center justify-space-between flex-column-sm">
        <BillingPrivacyCheckButton @create="handlePrivacyCheck"/>
        <v-card flat class="mx-auto text-center">
          <Button flat type="submit" color="#FF5A36" style="font-size: 1.5em; border-radius:5px; margin-bottom: 15px; height: 4ex;" buttonText="入力情報を確認する" @click="handleBillingSubmit"></Button>
        </v-card>
      </v-row>
    </v-card>
  </v-container>
</template>

<script setup>
import { ref } from 'vue'
import BillingAddress from "~/features/CompanyInfomation/components/BillingAddress.vue";
import BillingStreetAddress from "~/features/CompanyInfomation/components/BillingStreetAddress.vue";
import BillingBuildingRoomNumber from "~/features/CompanyInfomation/components/BillingBuildingRoomNumber.vue";
import BillingPhoneNumber from "~/features/CompanyInfomation/components/BillingPhoneNumber.vue";
import BillingMail from "~/features/CompanyInfomation/components/BillingMail.vue";
import BillingInvoice from "~/features/CompanyInfomation/components/BillingInvoice.vue";
import BillingTaxNumber from "~/features/CompanyInfomation/components/BillingTaxNumber.vue";
import BillingColumn from "~/features/CompanyInfomation/components/BillingColumn.vue";
import BillingPrivacyCheckButton from "~/features/CompanyInfomation/components/BillingPrivacyCheckButton.vue";
import Button from '~/components/Button.vue'
import { createBillingInfo } from '~/features/CompanyInfomation/api/createBillingInfo.ts'
import { computed } from 'vue';
import { useUserStore } from '@/stores/userStore';

const billingAddress = ref('')
const billingStreetAddress = ref('')
const billingBuildingRoomNumber = ref('')
const billingPhoneNumber = ref('')
const billingMail = ref('')
const billingInvoice = ref('')
const billingTaxNumber = ref('')
const billingColumn = ref('')
let privacyChecked = ref(false)
const errorMessage = ref('')

function createBillingAddress(value) {
  billingAddress.value = value
}

function createBillingStreetAddress(value) {
  billingStreetAddress.value = value
}

function createBillingBuildingRoomNumber(value) {
  billingBuildingRoomNumber.value = value
}

function createBillingPhoneNumber(value) {
  billingPhoneNumber.value = value
}

function createBillingMail(value) {
  billingMail.value = value
}

function createBillingInvoice(value) {
  billingInvoice.value = value
}

function createBillingTaxNumber(value) {
  billingTaxNumber.value = value
}

function createBillingColumn(value) {
  billingColumn.value = value
}

function handlePrivacyCheck(value) {
  privacyChecked.value = value
}

async function handleBillingSubmit() {
  console.log('handleBillingSubmit called')
  if (!privacyChecked.value) {
    errorMessage.value = '利用規約の確認をしてください。'
    console.log("利用規約の確認をしてください。")
    return
  }

  const requestBody = {
    postal_code: billingAddress.value.postal_code,
    prefecture: billingAddress.value.prefecture,
    city: billingAddress.value.city,
    town: billingStreetAddress.value,
    address: billingBuildingRoomNumber.value,
    phone_number: billingPhoneNumber.value,
    billing_email: billingMail.value,
    invoice_number: billingInvoice.value,
    tax_number: billingTaxNumber.value,
    notes: billingColumn.value,
  }

  const userStore = useUserStore();
  const userCompany = computed(() => userStore.userCompany);

  const company_id = 1 // ーーーーーーーーーーーーーーーーーーTODO：company_idの設定or取得
  console.log("送信データ", requestBody)
  try {
    const response = await createBillingInfo(requestBody, company_id)  //仮　id設定　　//本番はこちらを削除
    // const response = await createBillingInfo(requestBody, userCompany)　　　//本番はこちらを利用
    console.log('請求先情報作成 成功:', response)
    errorMessage.value = '請求先情報の作成に成功しました。'
  } catch (error) {
    console.error('請求先情報作成 失敗:', error)
    errorMessage.value = '請求先情報の作成に失敗しました。'
  }
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

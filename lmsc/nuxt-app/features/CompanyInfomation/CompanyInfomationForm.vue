<template>
  <v-container style="margin: 10% 0">
    <v-card flat class="mx-auto" max-width="620">
      <v-card-title
        class="pt-2 pb-2 pl-0 sp_title"
        style="font-size: 1.6em; font-weight: bold"
        color="#242424"
      >
        会社情報入力
      </v-card-title>
      <v-divider class="#CFCFCF" thickness="1"></v-divider>
      <v-card flat style="margin: 10% 0">
        <CompanyName label="会社名" placeholder="株式会社〇〇" @create="createCompanyName" />
        <CompanyNameFurigana label="フリガナ" placeholder="カブシキガイシャ〇〇" @create="createCompanyNameFurigana" />
        <CompanyAddress @create="createCompanyAddress" />
        <CompanyStreetAddress label="番地" placeholder="0-00-000" @create="createCompanyStreetAddress" />
        <CompanyBuildingRoomNumber label="建物名・部屋番号" placeholder="〇〇〇123号室" @create="createCompanyBuildingRoomNumber" />
        <CompanyPhoneNumber label="電話番号" placeholder="00000000000" @create="createCompanyPhoneNumber" />
        <CompanyMail label="メールアドレス" placeholder="XXXXXXX@example.com" @create="createCompanyMail" />
        <CompanyBillingCheckButton label="請求先" @create="handleBillingCheck" />
      </v-card>
      <v-card flat class="mx-auto text-center">
        <Button
          flat
          type="submit"
          color="#FF5A36"
          style="
            font-size: 1.5em;
            border-radius: 5px;
            height: 4ex;
            margin-bottom: 4px;
          "
          buttonText="次へ"
          @click="handleSubmit"
        ></Button>
        <!-- <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p> -->
      </v-card>
    </v-card>
  </v-container>
</template>

<script setup>
import { ref } from 'vue'
import CompanyName from '~/features/CompanyInfomation/components/CompanyName.vue'
import CompanyNameFurigana from '~/features/CompanyInfomation/components/CompanyNameFurigana.vue'
import CompanyAddress from '~/features/CompanyInfomation/components/CompanyAddress.vue'
import CompanyStreetAddress from '~/features/CompanyInfomation/components/CompanyStreetAddress.vue'
import CompanyBuildingRoomNumber from '~/features/CompanyInfomation/components/CompanyBuildingRoomNumber.vue'
import CompanyPhoneNumber from '~/features/CompanyInfomation/components/CompanyPhoneNumber.vue'
import CompanyMail from '~/features/CompanyInfomation/components/CompanyMail.vue'
import CompanyBillingCheckButton from '~/features/CompanyInfomation/components/CompanyBillingCheckButton.vue'
import Button from '~/components/Button.vue'
import { createCompany } from '~/features/CompanyInfomation/api/createCompany.ts'

const companyName = ref('')
const companyNameFurigana = ref('')
const companyAddress = ref('')
const companyStreetAddress = ref('')
const companyBuildingRoomNumber = ref('')
const companyPhoneNumber = ref('')
const companyMail = ref('')
const errorMessage = ref('')
let billingChecked = ref(false)

function createCompanyName(value) {
  companyName.value = value
}

function createCompanyNameFurigana(value) {
  companyNameFurigana.value = value
}

function createCompanyAddress(value) {
  companyAddress.value = value
}

function createCompanyStreetAddress(value) {
  companyStreetAddress.value = value
}

function createCompanyBuildingRoomNumber(value) {
  companyBuildingRoomNumber.value = value
}

function createCompanyPhoneNumber(value) {
  companyPhoneNumber.value = value
}

function createCompanyMail(value) {
  companyMail.value = value
}

function handleBillingCheck(value) {
  billingChecked.value = value 
}

async function handleSubmit() {
  if (!billingChecked.value) {
    errorMessage.value = '請求先の確認をしてください。'
    return
  }

  const requestBody = {
  name: companyName.value,
  name_kana: companyNameFurigana.value,
  postal_code:companyAddress.value.postal_code,
  prefecture:companyAddress.value.prefecture,
  city:companyAddress.value.city,
  town: companyStreetAddress.value,
  address: companyBuildingRoomNumber.value,
  phone_number: companyPhoneNumber.value,
  email: companyMail.value,
  }
  console.log("送信データ", requestBody)
  try {
    const response = await createCompany(requestBody)
    console.log('会社情報作成 成功:', response)
    errorMessage.value = '会社情報の作成に成功しました。' 
  } catch (error) {
    console.error('会社情報作成 失敗:', error)
    errorMessage.value = '会社情報の作成に失敗しました。'
  }
}
</script>

<style lang="scss" scoped>
.error-message {
  color: red;
  margin-top: 10px;
  text-align: center;
}

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




<template>
  <!-- <v-container> -->
  <v-breadcrumbs :items="items" color="#FF5A36">
    <template v-slot:divider>
      <v-icon icon="mdi-chevron-right"></v-icon>
    </template>
  </v-breadcrumbs>
  <v-card flat>
    <v-sheet width="80%" class="mx-auto mb-8 mt-8">
      <v-card-title
        class="pt-2 pb-2 pl-0 sp_title"
        style="font-size: 1.6em; font-weight: bold"
        color="#242424"
      >
        請求先情報
      </v-card-title>
      <v-divider class="#CFCFCF" thickness="1"></v-divider>

      <v-card flat class="mx-auto mt-15 mb-15">
        <BillingAddress />
        <BillingBuildingRoomNumber
          label="建物名・部屋番号"
          placeholder="〇〇〇123号室"
        />
        <BillingPhoneNumber label="電話番号" placeholder="00000000000" />
        <BillingMail label="メールアドレス" placeholder="XXXXXXX@example.com" />
        <BillingInvoice label="インボイス番号" placeholder="0-00-000" />
        <BillingTaxNumber label="税金番号" placeholder="0-00-000" />
        <BillingColumn label="備考欄" placeholder="テキスト入力" />
        <div class="d-flex justify-center mt-10 mb-10">
          <Button
            to="/billing"
            color="#FFFFFF"
            style="background-color: #ff5136"
            width="30em"
            class="mt-5"
            variant="outlined"
            buttonText="更新する"
          ></Button>
        </div>
      </v-card>
    </v-sheet>
  </v-card>
  <!-- </v-container> -->
</template>

<script>
import BillingAddress from '~/features/CompanyInfomation/components/BillingAddress.vue'
import BillingBuildingRoomNumber from '~/features/CompanyInfomation/components/BillingBuildingRoomNumber.vue'
import BillingPhoneNumber from '~/features/CompanyInfomation/components/BillingPhoneNumber.vue'
import BillingMail from '~/features/CompanyInfomation/components/BillingMail.vue'
import BillingInvoice from '~/features/CompanyInfomation/components/BillingInvoice.vue'
import BillingTaxNumber from '~/features/CompanyInfomation/components/BillingTaxNumber.vue'
import BillingColumn from '~/features/CompanyInfomation/components/BillingColumn.vue'
import BillingPrivacyCheckButton from '~/features/CompanyInfomation/components/BillingPrivacyCheckButton.vue'

export default {
  components: {
    BillingAddress,
    BillingPhoneNumber,
    BillingInvoice,
    BillingTaxNumber,
    BillingMail,
    BillingBuildingRoomNumber,
    BillingTaxNumber,
    BillingColumn,
    BillingPrivacyCheckButton,
  },
  data() {
    return {
      items: [
        {
          title: 'ダッシュボード',
          disabled: false,
          href: '/dashboard',
        },
        {
          title: '請求先情報',
          disabled: false,
        },
      ],
    }
  },
}
</script>

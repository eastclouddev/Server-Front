<template>
  <v-container>
    <div class="d-flex">
      <img src="/assets/progress.svg" class="pr-5">
      <v-card-title class="pt-2 pb-2 pl-0 sp_title" style="font-size: 1.6em; font-weight: bold;" color="#242424">
        請求履歴一覧
      </v-card-title>
    </div>
    <v-divider class="#CFCFCF" thickness="1"></v-divider>
    <v-breadcrumbs :items="items" color="#FF5A36">
      <template v-slot:divider>
        <v-icon icon="mdi-chevron-right"></v-icon>
      </template>
    </v-breadcrumbs>
    <v-card flat color="#F5F5F5" style="border-radius: 5px 5px 0 0; box-shadow: 4px 0px 6px -3px rgba(0, 0, 0, 0.2);">
      <v-sheet color="#F5F5F5" width="80%" class="mx-auto mb-8 mt-8">
        <div class="d-flex justify-space-between">
          <div class="d-flex">
            <SelectField
              :filterOptions="paymentOptions"
              v-model="selectedPayment"
              placeholder="請求対象月を選択"
              @filter-change="performFilter"
            />
            <SelectField
              :filterOptions="statusOptions"
              v-model="selectedStatus"
              placeholder="ステータスを選択"
              @filter-change="performFilter"
            />
          </div>
          <Button to="/billingInformation"
          color="#FF5136" class="sp_button" style="width:10rem; height:40px;" buttonText="請求先情報編集">
          </Button>
        </div>
        <PcBillingTable :filteredList="displayBillingList" />
        <SpBillingTable :filteredList="displayBillingList" />
      </v-sheet>
    </v-card>
  </v-container>
</template>

<script>
import SelectField from '~/features/auth/billing/components/SelectField.vue';
import PcBillingTable from "~/features/auth/billing/components/PcBillingTable.vue";
import SpBillingTable from "~/features/auth/billing/components/SpBillingTable.vue";

export default {
  components: {
    SelectField,
    PcBillingTable,
    SpBillingTable,
  },
  data() {
    return {
      selectedStatus: '',
      selectedPayment: '',
      billingList: [
        {
          id: 1,
          billingDate: '2024-01-01~2024-02-01',
          paymentDate: '2024-03-01',
          payment: '¥10,200',
          status: '未請求',
          billing_id: '/billing/1',
          billingLink: '詳細',
        },
        {
          id: 2,
          billingDate: '2024-01-01~2024-02-01',
          paymentDate: '2024-03-01',
          payment: '¥10,200',
          status: '請求済',
          billing_id: '/billing/2',
          billingLink: '詳細',
        },
        {
          id: 3,
          billingDate: '2024-01-01~2024-02-01',
          paymentDate: '2024-03-01',
          payment: '¥10,200',
          status: '支払済',
          billing_id: '/billing/3',
          billingLink: '詳細',
        },
        {
          id: 4,
          billingDate: '2024-01-01~2024-02-01',
          paymentDate: '2024-03-01',
          payment: '¥10,200',
          status: '支払済',
          billing_id: '/billing/4',
          billingLink: '詳細',
        },
        {
          id: 5,
          billingDate: '2024-01-01~2024-02-01',
          paymentDate: '2024-03-01',
          payment: '¥10,200',
          status: '支払済',
          billing_id: '/billing/5',
          billingLink: '詳細',
        },
      ],
      filteredBillingList: [],
      items: [
        {
          title: 'ダッシュボード',
          disabled: false,
          href: '/dashboard',
        },
        {
          title: '請求履歴一覧',
          disabled: true,
          href: '/billing',
        },
      ],
      statusOptions: ['未請求', '請求済', '支払済'],
      paymentOptions: ['2024/01', '2023/12', '2023/11'],
    };
  },
  computed: {
    displayBillingList() {
      return this.filteredBillingList.length > 0 || this.selectedStatus || this.selectedPayment
        ? this.filteredBillingList
        : this.billingList;
    },
  },
  methods: {
    performFilter() {
      this.filteredBillingList = this.billingList.filter(item => {
        const statusMatch = this.selectedStatus ? item.status === this.selectedStatus : true;
        const paymentMatch = this.selectedPayment ? item.billingDate.includes(this.selectedPayment) : true;
        return statusMatch && paymentMatch;
      });
    },
  },
};
</script>

<style>
.unclaimed {
  color: #FFFFFF;
  background-color: #FF5A36;
  font-weight: bold;
  padding: 3px;
  width: 6rem;
  text-align: center;
  border-radius: 5px;
  margin-left: 10px;
}
.paid {
  color: #FFFFFF;
  background-color: #8A4E41;
  font-weight: bold;
  padding: 3px;
  width: 6rem;
  text-align: center;
  border-radius: 5px;
  margin-left: 10px;
}
.billed {
  color: #FFFFFF;
  background-color: #292737;
  font-weight: bold;
  padding: 3px;
  width: 6rem;
  text-align: center;
  border-radius: 5px;
  margin-left: 10px;
}
</style>
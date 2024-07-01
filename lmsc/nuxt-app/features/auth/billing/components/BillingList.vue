<template>
  <v-container class="billing-container">
    <div class="d-flex">
      <img src="/assets/progress.svg" class="pr-5" />
      <v-card-title
        class="pt-2 pb-2 pl-0 sp_title"
        style="font-size: 1.6em; font-weight: bold"
        color="#242424"
      >
        請求履歴一覧
      </v-card-title>
    </div>
    <v-divider class="#CFCFCF" thickness="1"></v-divider>
    <v-breadcrumbs :items="items" color="#FF5A36">
      <template v-slot:divider>
        <v-icon icon="mdi-chevron-right"></v-icon>
      </template>
    </v-breadcrumbs>
    <v-card
      flat
      color="#F5F5F5"
      style="
        border-radius: 5px 5px 0 0;
        box-shadow: 4px 0px 6px -3px rgba(0, 0, 0, 0.2);
      "
    >
      <v-sheet color="#F5F5F5" width="80%" class="mx-auto mb-8 mt-8">
        <div class="filter-container">
          <FilterSelect
            v-model="selectedMonth"
            :filterOptions="months"
            placeholderText="請求対象月"
            @filter-change="filterData"
          />
          <FilterSelect
            v-model="selectedStatus"
            :filterOptions="statuses"
            placeholderText="ステータス"
            @filter-change="filterData"
          />
          <Button
            to="/billingInformation"
            color="#FF5136"
            class="sp_button"
            style="width: 10rem; height: 40px"
            buttonText="請求先情報編集"
          />
        </div>
        <template v-if="filteredList.length > 0">
          <PcBillingTable :filteredList="filteredList" />
          <SpBillingTable :filteredList="filteredList" />
        </template>
        <template v-else>
          <p class="message">該当するデータがありません</p>
        </template>
      </v-sheet>
    </v-card>
  </v-container>
</template>

<script>
import PcBillingTable from '~/features/auth/billing/components/PcBillingTable.vue'
import SpBillingTable from '~/features/auth/billing/components/SpBillingTable.vue'
import FilterSelect from '~/components/FilterSelect.vue'

export default {
  components: {
    PcBillingTable,
    SpBillingTable,
    FilterSelect,
  },
  data() {
    return {
      selectedMonth: null,
      selectedStatus: null,
      months: ['2024/01', '2023/12', '2023/11'],
      statuses: ['未請求', '請求済', '支払済'],
      data: [
        {
          id: 1,
          billingDate: '2024/01',
          paymentDate: '2024/02/01',
          payment: 1000,
          status: '未請求',
        },
        {
          id: 2,
          billingDate: '2024/01',
          paymentDate: '2024/02/02',
          payment: 2000,
          status: '請求済',
        },
        {
          id: 3,
          billingDate: '2023/12',
          paymentDate: '2024/01/01',
          payment: 1500,
          status: '支払済',
        },
        {
          id: 4,
          billingDate: '2023/11',
          paymentDate: '2023/12/01',
          payment: 3000,
          status: '未請求',
        },
        {
          id: 5,
          billingDate: '2023/11',
          paymentDate: '2023/12/01',
          payment: 3000,
          status: '未請求',
        },
      ],
      items: [
        { title: 'ダッシュボード', disabled: false, href: '/dashboard' },
        { title: '請求先情報', disabled: false },
      ],
    }
  },
  computed: {
    filteredList() {
      return this.data.filter(item => {
        return (
          (!this.selectedMonth || item.billingDate === this.selectedMonth) &&
          (!this.selectedStatus || item.status === this.selectedStatus)
        )
      })
    },
  },
  methods: {
    filterData() {},
  },
}
</script>

<style>
.billing-container {
  max-width: 100%;
  padding: 0;
}
.filter-container {
  display: flex;
  flex-wrap: wrap;
}
.filter-container > * {
  margin: 0.5rem;
}
@media (max-width: 768px) {
  .filter-container {
    flex-direction: column;
    align-items: center;
  }
  .filter-container > * {
    width: 100%;
    margin-top: 0rem;
    margin-bottom: 0rem;
  }
  .sp_button {
    margin-bottom: 2.5rem;
  }
}
.unclaimed {
  color: #ffffff;
  background-color: #ff5a36;
  font-weight: bold;
  padding: 3px;
  width: 6rem;
  text-align: center;
  border-radius: 5px;
  margin-left: 10px;
}
.paid {
  color: #ffffff;
  background-color: #8a4e41;
  font-weight: bold;
  padding: 3px;
  width: 6rem;
  text-align: center;
  border-radius: 5px;
  margin-left: 10px;
}
.billed {
  color: #ffffff;
  background-color: #292737;
  font-weight: bold;
  padding: 3px;
  width: 6rem;
  text-align: center;
  border-radius: 5px;
  margin-left: 10px;
}
.message {
  text-align: center;
  font-weight: bold;
  padding: 50px;
  margin-top: 50px;
}
.v-select .v-field.v-field {
  background-color: #ffffff;
}
</style>

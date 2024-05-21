<template>
  <v-card flat color="#F5F5F5" style="border-radius: 5px 5px 0 0; box-shadow: 4px 0px 6px -3px rgba(0, 0, 0, 0.2);">
 <v-sheet color="#F5F5F5" width="90%" class="mx-auto mb-8 mt-8">
     <SearchForm
        :searchQuery="searchQuery"
        @update:searchQuery="searchQuery = $event"
        @search="performSearch"
      />
    <PcBillingTable :filteredList="displayBillingList" />
    <SpBillingTable :filteredList="displayBillingList" />
  </v-sheet>
  </v-card>
</template>
<script>
import SearchForm from '/components/SearchForm.vue';
import PcBillingTable from "~/features/auth/billing/components/PcBillingTable.vue";
import SpBillingTable from "~/features/auth/billing/components/SpBillingTable.vue";

export default {
  components: {
    SearchForm,
    PcBillingTable,
    SpBillingTable
  },
  data() {
    return {
      searchQuery: '',
      billingList: [
        {
          id: 1,
          billingDate: '2024-01-01~2024-02-01',
          paymentDate: '2024-03-01',
          payment: '¥10,200',
          status: '未対応',
          billing_id: '/billing/1',
          billingLink: '詳細',
        },
        {
          id: 2,
          billingDate: '2024-01-01~2024-02-01',
          paymentDate: '2024-03-01',
          payment: '¥10,200',
          status: '処理中',
          billing_id: '/billing/2',
          billingLink: '詳細',
        },
        {
          id: 3,
          billingDate: '2024-01-01~2024-02-01',
          paymentDate: '2024-03-01',
          payment: '¥10,200',
          status: '支払い済み',
          billing_id: '/billing/3',
          billingLink: '詳細',
        },
        {
          id: 4,
          billingDate: '2024-01-01~2024-02-01',
          paymentDate: '2024-03-01',
          payment: '¥10,200',
          status: '支払い済み',
          billing_id: '/billing/4',
          billingLink: '詳細',
        },
        {
          id: 5,
          billingDate: '2024-01-01~2024-02-01',
          paymentDate: '2024-03-01',
          payment: '¥10,200',
          status: '支払い済み',
          billing_id: '/billing/5',
          billingLink: '詳細',
        },
      ],
      filteredBillingList: []
    }
  },
  computed: {
     displayBillingList() {
      return this.filteredBillingList.length > 0 || this.searchQuery ? this.filteredBillingList : this.billingList;
    }
  },
methods: {
    performSearch() {
      if (this.searchQuery.trim() === '') {
        this.filteredBillingList = [];
      } else {
        this.filteredBillingList = this.billingList.filter(item => {
          return (
            item.billingDate.includes(this.searchQuery) ||
            item.paymentDate.includes(this.searchQuery) ||
            item.payment.includes(this.searchQuery) ||
            item.status.includes(this.searchQuery) ||
            item.billingLink.includes(this.searchQuery)
          )
        });
      }
    }
  }
}
</script>
<style>
.unprocessed {
  color: #FFFFFF;
  background-color: #FF5A36;
  font-weight: bold;
  padding: 3px;
  width: 6rem;
  text-align: center;
  border-radius: 5px;
  margin-left: 10px;
}
.processing {
  color: #FFFFFF;
  background-color: #8A4E41;
  font-weight: bold;
  padding: 3px;
  width: 6rem;
  text-align: center;
  border-radius: 5px;
  margin-left: 10px;
}
.paid {
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
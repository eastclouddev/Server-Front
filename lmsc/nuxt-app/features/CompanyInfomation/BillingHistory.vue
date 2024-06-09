<template>
  <v-container style="margin-bottom:10%;">
    <v-card flat class="mx-auto" max-width="620">
      <v-card-title class="pt-2 pb-2 pl-0 sp_title" style="font-size: 1.6em; font-weight: bold;" color="#242424">
        請求履歴
      </v-card-title>
      <v-divider class="#CFCFCF" thickness="1"></v-divider>
      <v-card flat style="margin:10% 0;"> 
        
        <template v-if="filteredList.length > 0">
          <PcBillingTable :filteredList="filteredList" />
          <SpBillingTable :filteredList="filteredList" />
          
        <div class="right-aligned-link">
        <NuxtLink to="/billing" class="link-style">もっとみる</NuxtLink>
        </div>

        </template>
        <template v-else>
          <p class="message">該当するデータがありません</p>
        </template>

      </v-card>
      <v-card flat class="mx-auto text-center">
        <Button flat class="return-mark" @click="returnLink" type="submit" style="font-size: 1.5em; border-radius:5px; margin-bottom: 15px; height: 4ex;" buttonText="一覧に戻る"></Button>
      </v-card>
    </v-card>
  </v-container>
</template>

<script>
import PcBillingTable from '~/features/CompanyInfomation/components/PcBillingTable.vue';
import SpBillingTable from '~/features/CompanyInfomation/components/SpBillingTable.vue';

export default {
  components: {
    PcBillingTable,
    SpBillingTable,
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
    returnLink() {
      window.location.href = '/company/list';
    },
  },
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

.return-mark {
  color: #FF5136;
  background-color: #FFFF;
  border: 1px solid #FF5136;
  border-radius: 5px;
  padding: 0 1%;
  width: 260px !important;
}

.right-aligned-link {
  text-align: right;
}

.link-style {
  color: black;
  text-decoration: underline;
}
</style>

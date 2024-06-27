<template>
  <v-table density="compact" class="mb-5 table_wrap" width="100%" style="background-color: #F5F5F5 !important">
    <thead style="color: #FFFFFF; background-color: #292737;">
      <tr>
        <th class="text-center pa-0" style="font-weight: bold; border: 2px solid #F5F5F5; border-radius: 5px;">会社名</th>
        <th class="text-center pa-0" style="font-weight: bold; border: 2px solid #F5F5F5; border-radius: 5px;">メールアドレス</th>
        <th class="text-center pa-0" style="font-weight: bold; border: 2px solid #F5F5F5; border-radius: 5px;">今月の請求額</th>
        <th class="text-center pa-0" style="font-weight: bold; border: 2px solid #F5F5F5; border-radius: 5px;">請求書</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item, index) in filteredList" :key="item.id" :style="{ backgroundColor: index % 2 === 0 ? '#FFFFFF' : '#EAF4F9', height: '50px' }">
        <td style="border-left: 2px solid #F5F5F5; border-right: 2px solid #F5F5F5; width:260px;" class="text-center">
          {{ item.companyName }}
        </td>
        <td style="border-left: 2px solid #F5F5F5; border-right: 2px solid #F5F5F5; width:260px;" class="text-center">
          {{ item.mailAddres }}
        </td>
        <td style="border-left: 2px solid #F5F5F5; border-right: 2px solid #F5F5F5; width:154px;" class="text-center">
          {{ item.payment }}
        </td>
        <td class="text-center" style="border-left: 2px solid #F5F5F5; width:77px; border-right: 2px solid #F5F5F5;">
          <BillingModal />
        </td>
      </tr>
    </tbody>
  </v-table>
</template>

<script>
import { defineComponent } from 'vue';
import BillingModal from '~/features/auth/billing/components/BillingModal.vue';

export default defineComponent({
  components: {
    BillingModal
  },
  props: {
    filteredList: {
      type: Array,
      required: true
    }
  },
  methods: {
    getStatusClass(status) {
      switch (status) {
        case '未請求':
          return 'unclaimed';
        case '請求済':
          return 'billed';
        case '支払済':
          return 'paid';
        default:
          return '';
      }
    },
    getStatusText(status) {
      return status;
    }
  }
});
</script>

<style lang="scss" scoped>
@media (max-width: 768px) {
  .table_wrap {
    display: none;
  }
}

@media (min-width: 769px) {
    .table_wrap {
  display: block;
  overflow-y: hidden;
  width: 100%; 
  background-color: #f5f5f5;
}


.v-table thead th,
.v-table tbody td {
  white-space: nowrap; 
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

</style>
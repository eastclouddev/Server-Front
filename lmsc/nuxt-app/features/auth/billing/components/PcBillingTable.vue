<template>
    <v-table density="compact" class="mb-5 table_wrap" width="100%">
      <thead style="color: #FFFFFF; background-color: #292737;">
        <tr>
          <th class="text-center pa-0" style="font-weight: bold;border: 2px solid #F5F5F5;border-radius: 5px;">請求対象月</th>
          <th class="text-center pa-0" style="font-weight: bold;border: 2px solid #F5F5F5;border-radius: 5px;">支払日</th>
          <th class="text-center pa-0" style="font-weight: bold;border: 2px solid #F5F5F5;border-radius: 5px;">金額</th>
          <th class="text-center pa-0" style="font-weight: bold;border: 2px solid #F5F5F5;border-radius: 5px;">ステータス</th>
          <th class="text-center pa-0" style="font-weight: bold;border: 2px solid #F5F5F5;border-radius: 5px;">請求書</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in filteredList" :key="item.id" :style="{ backgroundColor: index % 2 === 0 ? '#FFFFFF' : '#EAF4F9', height: '50px' }">
          <td style="border-left: 2px solid #F5F5F5; border-right: 2px solid #F5F5F5; width:300px;" class="text-center">
            {{ item.billingDate }}
          </td>
          <td style="border-left: 2px solid #F5F5F5; border-right: 2px solid #F5F5F5; width:140px;" class="text-center">
            {{ item.payment }}
          </td>
          <td style="border-left: 2px solid #F5F5F5; border-right: 2px solid #F5F5F5; width:140px;" class="text-center">
            {{ item.paymentDate }}
          </td>
          <td style="border-left: 2px solid #F5F5F5; border-right: 2px solid #F5F5F5; height:50px;" class="d-flex align-center justify-center pl-3 pr-3">
            <div class="d-flex align-center justify-end">
              <span :class="getStatusClass(item.status)">{{ getStatusText(item.status) }}</span>
            </div>
          </td>
          <td class="text-center" style="border-left: 2px solid #F5F5F5; border-right: 2px solid #F5F5F5;">
            <NuxtLink :to="item.billing_id" style="color:#FF5A36;">{{ item.billingLink }}</NuxtLink>
          </td>
        </tr>
      </tbody>
    </v-table>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    filteredList: {
      type: Array,
      required: true,
    }
  },
  methods: {
    getStatusClass(status) {
      switch (status) {
        case '未対応':
          return 'unprocessed';
        case '処理中':
          return 'processing';
        case '支払い済み':
          return 'paid';
      }
    },
    getStatusText(status) {
      return status;
    },
  },
});
</script>
<style lang="scss" scoped>
  @media (max-width: 768px) {
  .table_wrap {
    display: none;
  }
  }
  @media (min-width: 769px) {
  .table_wrap{
    display: block;
  }
  }
</style>
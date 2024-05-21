<template>
  <table class="table_wrap" v-for="item in filteredList" :key="item.id">
    <tr class="d-flex flex-column">
      <th >請求対象月</th>
      <td >{{ item.billingDate }}</td>
    </tr>
    <div class="d-flex" style="width:100%;">
      <tr class="d-flex flex-column" style="width:100%;">
        <th>支払日</th>
        <td>{{ item.paymentDate }}</td>
      </tr>
      <tr class="d-flex flex-column" style="width:100%;">
        <th style="width: 100%;">金額</th>
        <td >{{ item.payment }}</td>
      </tr>
    </div>
    <div class="d-flex" style="width:100%;">
      <tr class="d-flex flex-column" style="width:100%;">
        <th style="width: 100%;">ステータス</th>
          <td>
            <span :class="getStatusClass(item.status)">{{ getStatusText(item.status) }}</span>
          </td>
      </tr>
      <tr class="d-flex flex-column" style="width:100%;">
        <th style=" width: 100%;">請求書</th>
          <td >
            <NuxtLink :to="item.billing_id" style="color:#FF5A36;">{{ item.billingLink }}</NuxtLink>
          </td>
        </tr>
    </div>
  </table>
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
.table_wrap {
  border-collapse: collapse;
  width: 100%;
  margin-bottom: 40px;
}

.table_wrap th,
.table_wrap td {
  border: 3px solid #F5F5F5;
  padding: 8px;
}
th {
  background-color: #EAF4F9;
  color: #292737;
  font-weight: bold;
}
td {
  line-height: 50px;
  text-align: center;
  background-color: #FFFFFF;
}
  @media (max-width: 768px) {
  .table_wrap {
    display: block;
  }
  }
  @media (min-width: 769px) {
  .table_wrap{
    display: none;
  }
  }
</style>
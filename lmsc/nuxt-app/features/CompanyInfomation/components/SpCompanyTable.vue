<template>
  <div>
    <table
      class="table_wrap"
      v-for="item in filteredList"
      :key="item.id"
      style="background-color: #f5f5f5 !important"
    >
      <tr class="d-flex flex-column">
        <th>会社名</th>
        <td>{{ item.companyName }}</td>
      </tr>

      <tr class="d-flex flex-column" style="width: 100%">
        <th>メールアドレス</th>
        <td>{{ item.mailAddres }}</td>
      </tr>
      <div class="d-flex" style="width: 100%">
        <tr class="d-flex flex-column" style="width: 100%">
          <th style="width: 100%">今月の請求額</th>
          <td>{{ item.payment }}</td>
        </tr>
        <tr class="d-flex flex-column" style="width: 100%">
          <th style="width: 100%">請求書</th>
          <td>
            <BillingModal />
          </td>
        </tr>
      </div>
    </table>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import BillingModal from '~/features/billing/components/BillingModal.vue'

export default defineComponent({
  components: {
    BillingModal,
  },
  props: {
    filteredList: {
      type: Array,
      required: true,
    },
  },
  methods: {
    getStatusClass(status) {
      switch (status) {
        case '未請求':
          return 'unclaimed'
        case '請求済':
          return 'paid'
        case '支払済':
          return 'billed'
      }
    },
    getStatusText(status) {
      return status
    },
  },
})
</script>

<style lang="scss" scoped>
.table_wrap {
  border-collapse: collapse;
  width: 100%;
  margin-bottom: 40px;
  background-color: #f5f5f5;
}

.table_wrap th,
.table_wrap td {
  border: 3px solid #f5f5f5;
  padding: 8px;
}

th {
  background-color: #eaf4f9;
  color: #292737;
  font-weight: bold;
}

td {
  line-height: 30px;
  text-align: center;
  background-color: #ffffff;
}

@media (max-width: 768px) {
  .table_wrap {
    display: block;
  }
}

@media (min-width: 769px) {
  .table_wrap {
    display: none;
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
  padding-left: 30px;
  padding-right: 30px;
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
  padding-left: 30px;
  padding-right: 30px;
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
  padding-left: 30px;
  padding-right: 30px;
}
</style>

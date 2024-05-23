<template>
  <v-container>
    <v-breadcrumbs :items="items" color="#FF5A36">
      <template v-slot:divider>
        <v-icon icon="mdi-chevron-right"></v-icon>
      </template>
    </v-breadcrumbs>
    <v-card flat>
      <v-sheet width="80%" class="mx-auto mb-8 mt-8">
        <v-card-title class="pt-2 pb-2 pl-0 sp_title" style="font-size: 1.6em; font-weight: bold;" color="#242424">
        請求先情報
        </v-card-title>
        <v-divider class="#CFCFCF" thickness="1"></v-divider>
          <Button to="/billing" color="#FF5136" style="background-color: #FFFFFF;" width="15em" class="mt-5"
          variant="outlined" buttonText="戻る">
          </Button>
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
      items: [
        {
          title: 'ダッシュボード',
          disabled: false,
          href: '/dashboard',
        },
        {
          title: '請求先情報',
          disabled: true,
          href: '/billingInformation',
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


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
    <BillingList />
  </v-container>
</template>

<script>
import BillingList from './BillingList.vue';
import  PcProgressTable from "~/features/auth/dashboard/components/PcProgressTable.vue";

export default {
  components: {
    BillingList
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
          title: '請求履歴一覧',
          disabled: true,
          href: '/billing',
        },
      ],
    };
  },
};
</script>

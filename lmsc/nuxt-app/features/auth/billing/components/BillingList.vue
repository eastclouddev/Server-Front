<template>
  <v-card flat color="#F5F5F5" style="border-radius: 5px 5px 0 0; box-shadow: 4px 0px 6px -3px rgba(0, 0, 0, 0.2);">
    <v-sheet color="#F5F5F5" width="90%" class="mx-auto mb-8 mt-8">

<SearchForm />
    <PcBillingTable />
    </v-sheet>
  </v-card>
</template>
<script>
import SearchForm from '/components/SearchForm.vue';
import PcBillingTable from "~/features/auth/billing/components/PcBillingTable.vue";

export default {
  components: {
    SearchForm,
    PcBillingTable
  },
}
</script>

<template>
  <v-container class="mx-aout">
    <v-card flat color="#F5F5F5"  class="d-flex align-center pt-2 pb-2 pl-6" width="25rem"
    style="border-radius: 5px 5px 0 0; box-shadow: 4px 0px 6px -3px rgba(0, 0, 0, 0.2);">
    <img src="/assets/progress.svg" alt="study" style="padding:0 10px 0 0;">
      <label style="font-size: 1.5em; font-weight: bold;">進捗管理</label>
    </v-card>
    <v-card flat class="pt-2 pb-8" color="#F5F5F5"
    style="border-radius: 0 5px 5px 5px; box-shadow: 4px 5px 6px -3px rgba(0, 0, 0, 0.2);">
    <v-sheet class="mx-auto mt-8 mb-8" width="90%" color="#F5F5F5">
    <PcProgressTable />
    <SpProgressTable />
    <div class="d-flex justify-end">
      <Button color="#FF5136" class="sp_button" style="width:20rem;"  buttonText="進捗管理一覧へ"></Button>
    </div>
    </v-sheet>
    </v-card>
  </v-container>
</template>

<script>
import SpProgressTable from "~/features/auth/dashboard/components/SpProgressTable.vue";
import PcProgressTable from './PcProgressTable.vue';
export default {
    components: {
    SpProgressTable,
    PcProgressTable
  },
}
</script>

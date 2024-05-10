<template>
  <v-container class="mx-auto">
    <v-card flat color="#F5F5F5" class="d-flex align-center pt-2 pb-2 pl-6" width="20rem"
    style="border-radius: 5px 5px 0 0; box-shadow: 4px 0px 6px -3px rgba(0, 0, 0, 0.2);">
    <img src="/assets/account.svg" alt="study" style="padding:0 10px 0 0;">
      <label style="font-size: 1.5em; font-weight: bold;">有効アカウント数</label>
    </v-card>
    <v-card flat class="pt-2 pb-8 pl-6" color="#F5F5F5"
    style="border-radius: 0 5px 5px 5px; box-shadow: 4px 5px 6px -3px rgba(0, 0, 0, 0.2);">

    <v-sheet class="mx-auto mt-8 mb-8" width="50rem" color="#F5F5F5">
      <v-card class="d-flex align-center mb-2" style="height: 50px; border-radius: 5px;" >
        <label class="text-center" style="width: 25rem; line-height:50px; font-weight: bold; color: #FFFFFF; background-color: #292737;">受講生</label>
        <div class="text-center" style="width: 25rem;">{{ studentsCount }}個</div>
      </v-card>
      <v-card class="d-flex align-center mb-4" style="height: 50px; border-radius: 5px;">
        <label class="text-center" style="width: 25rem; line-height:50px; font-weight: bold; color: #FFFFFF; background-color: #292737;">法人・法人代行</label>
        <div class="text-center" style="width: 25em;">{{ corporationsCount }}個</div>
      </v-card>
      <div class="d-flex justify-end">
        <Button color="#FF5136" style="width:20rem;" buttonText="ユーザー一覧へ"></Button>
      </div>
    </v-sheet>
    </v-card>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      studentsCount: 0,
      corporationsCount: 0
    };
  },
  created() {
    // データベースから受講生と法人・法人代行のアカウント数を取得する
  }
};
</script>
<style>
</style>
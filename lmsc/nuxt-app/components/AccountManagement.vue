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
      <v-table class="mb-5">
        <tbody>
          <tr style="height:50px;">
            <th class="text-center" style="font-weight:bold; color: #FFFFFF; background-color: #292737; border-top-left-radius: 5px; border-bottom-left-radius: 5px">
              受講生
            </th>
            <td class="text-center" style="border-top-right-radius: 5px; border-bottom-right-radius: 5px;">{{ studentsCount }}個</td>
          </tr>
          <tr style="height:50px;">
            <th class="text-center" style="font-weight:bold; color: #FFFFFF; background-color: #292737; background-color: #292737; border-top-left-radius: 5px; border-bottom-left-radius: 5px">
              法人・法人代行
            </th>
            <td class="text-center" style="border-top-right-radius: 5px; border-bottom-right-radius: 5px;">{{ corporationsCount }}個</td>
          </tr>
        </tbody>
      </v-table>
      <div class="d-flex justify-end">
        <Button color="#FF5136" buttonText="ユーザー一覧へ"></Button>
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
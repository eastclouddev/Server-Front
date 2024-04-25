<template>
  <v-container class="d-flex justify-space-between align-center" v-for=" item in items" :key="item.id">
    <label style="font-size: 1em; font-weight: bold;" color="#242424">{{ item.label}}</label>
    <v-sheet width="25rem" class="mb-3 pr-4 pb-4 pl-4" color="#EBEBEB" style="border-radius: 5%;">
      <v-text-field hide-details="auto" variant="plain" disabled type="text">{{ item.data }}</v-text-field>
    </v-sheet>
  </v-container>
</template>

<script setup>
const items = [
  {
    label: "お名前",
    data:" API取得データ"
  },
  {
    label: "フリガナ",
    data: " API取得データ"
  },
  {
    label: "メールアドレス",
    data: " API取得データ"
  },
];
</script>
<style scoped>
</style>



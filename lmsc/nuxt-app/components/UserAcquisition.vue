<template>
  <v-container>
    <v-row class="d-flex justify-space-between justify-start sp_content" v-for=" item in items" :key="item.id">
      <label class="sp_label" style="font-weight: bold;" color="#242424">{{ item.label }}</label>
      <v-sheet width="25rem" class="mb-5 pr-4 pb-4 pl-4 sp_field" color="#EBEBEB" style="border-radius: 5%;">
        <v-text-field hide-details="auto" variant="plain" disabled type="text">{{ item.data
          }}</v-text-field>
      </v-sheet>
    </v-row>
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
<style lang="scss" scoped>
@media screen and (max-width: 768px) {
.sp {
  &_content {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }
  &_label {
    font-size: 2em !important;
    padding-bottom: 2%;
  }
  &_field {
    width: 100% !important;
  }
}
}
</style>



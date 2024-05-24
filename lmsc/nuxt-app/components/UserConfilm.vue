<template>
  <v-container>
    <v-row class="align-center justify-space-between pb-4" v-for=" item in items" :key="item.id">
      <label class="sp_label" style="font-size: 1em; font-weight: bold;">{{ item.label }}</label>
      <v-card flat class="sp_field d-flex flex-column" width="25rem">
        <v-sheet class="my-0 pr-4 pb-4 pl-4">
          <v-text-field hide-details="auto" placeholder="API取得" variant="plain"
          v-model="password" full-width disabled></v-text-field>
        </v-sheet>
      </v-card>
      <v-divider class="#CFCFCF mb-5" thickness="1" dotted></v-divider>
    </v-row>
    <v-row class="align-center justify-space-between pb-4">
      <label class="sp_label" style="font-size: 1em; font-weight: bold;">パスワード</label>
      <v-card flat class="sp_field d-flex flex-column" width="25rem">
        <v-sheet class="my-0 pr-4 pb-4 pl-4">
          <v-text-field hide-details="auto" placeholder="API取得" variant="plain"
          v-model="password" :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
          :type="showPassword ? 'text' : 'password'" readonly full-width></v-text-field>
        </v-sheet>
      </v-card>
      <v-divider class="#CFCFCF" thickness="1"></v-divider>
    </v-row>
  </v-container>
</template>

<script setup>
const password = ref(''); // パスワードを保持するリアクティブなデータ
const showPassword = ref(false); // パスワードの表示状態を管理するリアクティブなデータ

const togglePasswordVisibility = () => {
  showPassword.value = !showPassword.value; // パスワードの表示状態を反転させる
}

const items = [
  {
    label: "お名前",
    data: "API取得データ"
  },
  {
    label: "フリガナ",
    data: "API取得データ"
  },
  {
    label: "メールアドレス",
    data: "API取得データ"
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



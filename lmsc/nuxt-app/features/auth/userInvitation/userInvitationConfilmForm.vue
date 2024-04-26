<template>
  <v-container style="margin:10% 0;">
    <v-card flat class="mx-auto" max-width="620">
      <v-card-title class="pt-2 pb-2 pl-0 sp_title" style="font-weight: bold;" color="#242424">
        ユーザー情報確認
      </v-card-title>
      <v-divider class="#CFCFCF" thickness="1"></v-divider>

      <v-card-text>
        <UserAcquisition />
        <v-row>
          <v-col cols="6" class="pt-8">
            <label style="font-size: 1em; font-weight: bold; ">パスワード</label>
          </v-col>
          <v-col cols="6" class="d-flex justify-end">
            <v-text-field v-model="name" placeholder="API取得" variant="plain" readonly width="25rem"
              class="my-0"></v-text-field>
          </v-col>
          <v-divider class="#CFCFCF" thickness="1"></v-divider>
        </v-row>
      </v-card-text>

      <v-card-actions>
        <v-btn color="primary" @click="goBack">戻る</v-btn>
        <v-btn color="primary" @click="goBack">登録</v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>
<script>
export default {
  data() {
    return {
      name: '',
      email: '',
    };
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    }
  },
  mounted() {
    // ルート遷移時に入力データを取得
    this.name = this.$route.query.name;
    this.email = this.$route.query.email;
    // 他の入力フィールドも同様に設定
  },
};
</script>
<style lang="scss" scoped>
@media screen and (max-width: 768px) {
  .sp {
    &_title {
      font-size: 2.5em !important;
    }
  }
}
</style>
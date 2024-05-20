<template>
  <Head>
    <Title>ユーザー登録完了 | iDemy</Title>
    <Meta name="description" content="iDemy | ユーザー登録完了画面" />
  </Head>
  <v-container class="sp_content mx-auto text-center" style="margin:10% auto;">
    <v-card flat>
      <v-card-title flat class="sp_title">ユーザー登録が完了しました。</v-card-title>
      <v-card flat class=" d-flex justify-center flex-column align-center">
        <v-icon class="mt-8 mb-8 sp_icon" :size="100">mdi-check-circle</v-icon>
        <Button to="/login" color="#FF5A36" style="font-size: 1.5em;" buttonText="ログイン画面へ"></Button>
      </v-card>
    </v-card>
  </v-container>
</template>

<style lang="scss" scoped>
@media screen and (max-width: 768px) {
  .sp {
  &_content {
    max-width: 540px;
    margin: 0 auto;
  }
  &_title {
    font-size: 1.8em !important;
    }
}
}
</style>
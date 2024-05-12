<template>
  <v-container style="margin:10% 0;">
    <v-card flat class="mx-auto" max-width="620">
      <v-card-title class="pt-2 pb-2 pl-0 sp_title" style="font-size: 1.6em; font-weight: bold;" color="#242424">
        パスワード再設定
      </v-card-title>
      <v-divider class="#CFCFCF" thickness="1"></v-divider>
      <div class="py-3">
        パスワード再設定をします。下記情報を入力ください。
      </div>
      <v-card flat style="margin:10% 0;">
        <!-- データ取得 -->
        <EmailForm label="メールアドレス" />
        <PasswordFormConfirmation />
      </v-card>
      <v-card flat class="mx-auto text-center">
        <Button type="submit" color="#FF5A36" style="font-size: 1.5em;" buttonText="再設定する"></Button>
      </v-card>
    </v-card>
  </v-container>
</template>

<style lang="scss" scoped>
@media screen and (max-width: 768px) {
  .sp {
    &_title {
      font-size: 2.5em !important;
    }

    &_text {
      font-size: 1.4em;
    }
  }
}
</style>
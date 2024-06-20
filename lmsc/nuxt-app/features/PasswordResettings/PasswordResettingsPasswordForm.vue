<template>
  <v-container style="margin: 10% 0">
    <v-card flat class="mx-auto" max-width="620">
      <v-card-title
        class="pt-2 pb-2 pl-0 sp_title headline"
        style="font-size: 1.6em; font-weight: bold"
        color="#242424"
      >
        パスワード再設定
      </v-card-title>
      <v-divider class="#CFCFCF" thickness="1"></v-divider>
      <div class="py-3 sentence">
        パスワード再設定をします。下記情報を入力ください。
      </div>
      <div class="py-5 sp_sentence">
        パスワード再設定をします。<br />下記情報を入力ください。
      </div>
      <v-card flat class="input_form">
        <!-- データ取得 -->
        <EmailForm label="メールアドレス" class="sp_mailTitle" />
        <PasswordFormConfilmation />
      </v-card>
      <v-card flat class="mx-auto text-center input_form_button">
        <Button
          type="submit"
          color="#FF5A36"
          style="font-size: 1.5em"
          buttonText="再設定する"
        ></Button>
      </v-card>
    </v-card>
  </v-container>
</template>

<style lang="scss" scoped>
.headline {
  text-overflow: inherit;
  white-space: unset;
}
.sp_sentence {
  display: none;
}
.input_form {
  margin: 10% 0;
}
@media screen and (max-width: 768px) {
  .input_form {
    margin: 0;
    padding: 5%;
    &_button {
      padding: 7%;
    }
  }
  .sentence {
    display: none;
  }
  .sp {
    &_title {
      font-size: 2.5em !important;
    }
    // &_mailTitle{
    //   font-size: 0.5em !important;
    // }

    &_text {
      font-size: 1.4em;
    }

    &_sentence {
      display: block;
    }
  }
}
</style>

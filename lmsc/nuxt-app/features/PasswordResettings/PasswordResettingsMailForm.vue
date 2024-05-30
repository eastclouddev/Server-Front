<template>
  <v-container style="margin:10% 0;">
    <v-card flat class="mx-auto" max-width="620">
      <v-card-title class="pt-2 pb-2 pl-0 sp_title headline"  style="font-size:1.5em; font-weight: bold;"
        color="#242424">パスワード再設定</v-card-title>
      <v-divider class="#CFCFCF" thickness="1"></v-divider>
      <v-card-text class="sp_text">
        <div class="sentence">再設定用のURLを送信します。<br>
        ご登録いただいているメールアドレスを入力し、送信ボタンを押してください。
        </div>
        <div class="sp_sentence">再設定用のURLを送信しますので、ご登録いただいているメールアドレス信ボタンを押してください。
        </div>
        <v-form @submit.prevent="handleSubmit" ref="form" class="content_box">
          <v-card flat style="margin:10% 0;">
            <EmailForm ref="emailForm" label="メールアドレス" v-model="email" class="sp_mailTitle"/>
          </v-card>
          <v-card flat style="text-align: center;">
            <Button type="submit" color="#FF5A36" style="font-size: 1.5em;" buttonText="送信"></Button>
          </v-card>
        </v-form>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const email = ref('');
const router = useRouter();
const emailForm = ref(null); // emailForm を ref として宣言

const handleSubmit = () => {
  // フォームのバリデーションを手動でトリガー
  if (emailForm.value && emailForm.value.$refs.form.validate()) {
    // メール送信後
    router.push('/passwordResettings/sendMail');
  }
}
</script>

<style lang="scss" scoped>
.headline {
        text-overflow: inherit;
        white-space: unset;
}
.sp_sentence{
  display: none;
}
@media screen and (max-width: 768px) {
  .sentence{
    display: none;
  }
  .sp {
    &_title {
      font-size: 2em !important;
    }
    &_text {
      font-size: 1em;
    }
    &_mailTitle {
      font-size: 1em !important;
    }
    &_sentence{
      display: block;
    }
  }
}
</style>
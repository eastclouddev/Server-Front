<template>
  <v-container style="margin:10% 0;">
    <v-card flat class="mx-auto" max-width="620">
      <v-card-title class="text-center headline pc_title"  style="font-size:1.5em; font-weight: bold;"
        color="#242424">パスワード再設定のメールが送信されました。</v-card-title>
      <v-card-title class="headline sp_title"  style="font-size:1.5em; font-weight: bold;"
      color="#242424">パスワード再設定のメールが送信されました。</v-card-title>
      <v-divider class="#CFCFCF" thickness="1"></v-divider>
      <div class="text-center py-4 sentence">
        ご登録のメールアドレスにパスワード再設定のご案内をお送りしました。<br>
        設定手続きを進めてください。<br>
        <br>
        ※しばらく経ってもメールが届かない場合、入力に誤りがある可能性があります。<br>
        お手数ですが、再度パスワードの設定の手続きを行ってください。
      </div>
      <div class="py-4 sp_sentence">
        ご登録のメールアドレスにパスワード再設定のご案内をお送りしました。<br>
        設定手続きを進めてください。<br>
        <br>
        ※しばらく経ってもメールが届かない場合、入力に誤りがある可能性があります。<br>
        お手数ですが、再度パスワードの設定の手続きを行ってください。
      </div>
      <v-card-text>
          <v-form @submit.prevent="handleSubmit" class="content_box">
            <div class="text-center">
              <v-avatar size="150" class="mx-auto">
              <img src="/assets/send_mail.png" alt="Your Image" style="border-radius: 50%; width: 80%; height: auto;">
              </v-avatar>
            </div>
            <v-card flat style="text-align: center;" class="py-8">
              <Button type="button" color="#FF5A36" style="font-size: 1.5em;" buttonText="戻る" variant="outlined"></Button>
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

const handleSubmit = () => {
  // メール送信後
  router.push('/');
}
</script>
<style lang="scss" scoped>
.headline {
        text-overflow: inherit;
        white-space: unset;
}
.sp {
  &_title{
    display: none;
  }
  &_sentence{
    display: none;
  }
}
@media screen and (max-width: 768px) {
  .pc_title{
    display: none;
    font-size: 1.5em !important;
  }
  .sentence{
    display: none;
  }
  .sp {
   &_title {
    display: block;
  }
  &_text {
    font-size: 1.4em;
  }
  &_sentence{
    display: block;
  }
  }
}
</style>
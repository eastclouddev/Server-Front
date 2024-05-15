<template>
  <div style="padding:5%;">
    <NuxtLink to="/dashboard" style="text-decoration: none;color: #ff5a36;">ダッシュボード</NuxtLink>
    <v-avatar size="60" class="mx-auto">
              <img src="/assets/arrow_right.png" alt="arrow_right" style="width: 15%;">
              </v-avatar>
    <NuxtLink to="/passwordResettings/mailFormLogined" style="text-decoration: none;color: #ff5a36;">パスワード再設定</NuxtLink>
    <v-container style="margin:5% 0;">
    <v-card flat class="mx-auto" max-width="620">
      <v-card-title class="headline"  style="font-size:1.5em; font-weight: bold;"
        color="#242424">パスワード再設定</v-card-title>
      <v-divider class="#CFCFCF" thickness="1"></v-divider>
      <div class="py-4">
        登録されているメールアドレスにパスワード再設定用のURLを送信いたします。
      </div>
      <v-card-text>
          <v-form @submit.prevent="handleSubmit" class="content_box">
            <div class="text-center">
              <v-avatar size="150" class="mx-auto">
              <img src="/assets/send_mail.png" alt="Your Image" style="border-radius: 50%; width: 80%; height: auto;">
              </v-avatar>
            </div>
            <v-card flat style="text-align: center;" class="py-8">
              <Button type="button" color="#FF5A36" style="font-size: 1.5em;" buttonText="送信"></Button>
            </v-card>
          </v-form>
      </v-card-text>
    </v-card>
  </v-container>
  </div>
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
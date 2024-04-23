<template>
  <v-container style="margin:10% 0;">
    <v-card flat class=" mx-auto" max-width="620">
      <v-card-title class="pt-2 pb-2 pl-0" style="font-size: 1.6em; font-weight: bold;"
        color="#242424">ログイン</v-card-title>
      <v-divider class="#CFCFCF" thickness="1"></v-divider>
      <v-card-text>
        <v-form @submit.prevent="handleSubmit" class="content_box">
          <v-card flat style="margin:10% 0;">
            <EmailForm v-model="email" />
            <PasswordForm v-model="password" />
          </v-card>
          <v-card flat style="text-align: center;">
            <p class="pb-2">※パスワードを忘れた方は<a href="" target="_blank" color="#242424">こちら</a></p>
            <Button type="submit" width="25rem" height="6ex" style="font-size: 1.5em;" buttonText=" ログイン"></Button>
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
const password = ref('');
const router = useRouter();

const handleSubmit = () => {
  console.log('email:', email.value, 'password:', password.value);
  // ログイン成功
  router.push('/dashboard');
}
</script>
<style lang="scss" scoped>

@media screen and (max-width: 768px) {
  .content {
    &_title {
      font-size: 2.5em;
      padding: 2.5% 0;
    }
    &_text {
      font-size: 1.4em;
    }
  }
  .formwrap{
    margin: 10% 5%;
  }
}
</style>
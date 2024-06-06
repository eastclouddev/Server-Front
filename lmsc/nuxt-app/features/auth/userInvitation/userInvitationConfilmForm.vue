<template>
  <v-container style="margin:10% 0;">
    <v-card flat class="mx-auto" max-width="620">
      <v-card-title class="pt-2 pb-2 pl-0 sp_title" style="font-weight:bold;" color="#242424">
        ユーザー情報確認
      </v-card-title>
      <v-divider class="#CFCFCF" thick="1"></v-divider>
      <v-card-text>
        <div>お名前: {{ name }}</div>
        <div>メールアドレス: {{ email }}</div>
        <div>パスワード: {{ password }}</div>
      </v-card-text>
      <v-card-actions class="mx-auto mt-5 justify-center sp_buttonwrap">
        <Button @click="goBack" color="#FF5136" class="sp_button" style="background-color: #FFFFFF;" width="12rem" variant="outlined" buttonText="戻る"></Button>
        <Button @click="submit" color="#FFFFFF" class="sp_button" style="background-color: #FF5136;" width="12rem" buttonText="登録"></Button>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script setup>
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()

const name = route.query.name
const email = route.query.email
const password = route.query.password

const goBack = () => {
  router.push('/profile/form')
}

const submit = () => {
  console.log('Submit data', { name, email, password })
  // Add submission logic here
}
</script>

<style scoped lang="scss">
@media screen and (max-width: 768px) {
  .sp {
    &_title {
      font-size: 2.5em !important;
    }
    &_buttonwrap {
      display: flex;
      flex-direction: column;
    }
    &_button {
      margin-bottom: 40px!important;
      font-size: 1.6em !important;
    }
  }
}
</style>
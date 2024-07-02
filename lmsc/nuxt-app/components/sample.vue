<template>
  <v-container>
    <v-card class="mx-auto" max-width="620">
      <v-card-title class="pt-2 pb-2 pl-0 sp_title" style="font-size: 1.6em; font-weight: bold" color="#242424">
        入力内容確認
      </v-card-title>
      <v-divider class="#CFCFCF" thickness="1"></v-divider>
      <v-card flat style="margin: 10% 0">
        <div>お名前: {{ user.last_name }} {{ user.first_name }}</div>
        <div>フリガナ: {{ user.last_name_kana }} {{ user.first_name_kana }}</div>
        <div>メールアドレス: {{ user.email }}</div>
        <div>パスワード: {{ password }}</div>
      </v-card>
      <v-btn @click="goBack">戻る</v-btn>
      <v-btn @click="submit">送信</v-btn>
    </v-card>
  </v-container>
</template>

<script>
import { useRouter } from 'vue-router'

export default {
  props: ['user', 'password'],
  setup() {
    const router = useRouter()

    const goBack = () => {
      router.push('/profile/edit')
    }

    const submit = () => {
      // Perform submission logic
      console.log('Submit data', { user, password })
    }

    return { goBack, submit }
  }
}
</script>
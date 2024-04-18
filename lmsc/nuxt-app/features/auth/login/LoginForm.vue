<template>
  <v-card class="mx-auto" max-width="400">
    <v-card-title>ログイン</v-card-title>
    <v-card-text>
      <v-form @submit.prevent="handleSubmit">
        <v-text-field
          v-model="email"
          label="メールアドレス"
          type="email"
          required
        ></v-text-field>
        <v-text-field
          v-model="password"
          label="パスワード"
          type="password"
          required
        ></v-text-field>
        <v-btn type="submit" color="primary" block>ログイン</v-btn>
      </v-form>
    </v-card-text>
  </v-card>
</template>

<script setup>
const email = ref('')
const password = ref('')

const handleSubmit = () => {
  // Todo:ログイン処理
  console.log('email:', email.value, 'password:', password.value)
}
</script>

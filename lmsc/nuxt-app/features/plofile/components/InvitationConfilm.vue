<template>
  <v-container style="margin: 10% 0;">
    <v-card flat class="mx-auto" max-width="620">
      <v-card-title class="pt-2 pb-2 pl-0 sp_title" style="font-weight: bold;" color="#242424">
        ユーザー情報確認
      </v-card-title>
      <v-divider class="divider-color" thick="1"></v-divider>
      <v-card-text>
        <div v-for="(item, index) in userInfo" :key="index" class="info-item">
          <span class="label">{{ item.label }} </span>
          <span class="value">{{ item.value }}</span>
        </div>
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
const nameKana = route.query.name_kana
const email = route.query.email
const password = route.query.password

const userInfo = [
  { label: 'お名前', value: name },
  { label: 'フリガナ', value: nameKana },
  { label: 'メールアドレス', value: email },
  { label: 'パスワード', value: password },
]

const goBack = () => {
  router.push('/profile/edit')
}

const submit = () => {
  console.log('Submit data', { name, nameKana, email, password })
  // Add submission logic here
}
</script>

<style scoped lang="scss">
.divider-color {
  background-color: #CFCFCF;
}

.info-item {
  display: flex;
  margin-bottom: 10px;
}

.label {
  font-weight: bold;
  margin-right: 5px;
}

.value {
  color: #242424;
}

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
      margin-bottom: 40px !important;
      font-size: 1.6em !important;
    }
  }
}
</style>
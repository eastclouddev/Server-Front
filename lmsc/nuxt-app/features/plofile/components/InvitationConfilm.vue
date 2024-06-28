<template>
  <v-container style="margin: 10% 0;">
    <v-card flat class="mx-auto" max-width="620">
      <v-card-title class="pt-2 pb-2 pl-0 sp_title" style="font-weight: bold;" color="#242424">
        ユーザー情報確認
      </v-card-title>
      <v-divider class="divider_color" thick="1"></v-divider>
      <v-card-text class="mb-9 mt-9">
        <div v-for="(item, index) in userInfo" :key="index">
          <div class="mb-6 mt-6 d-flex justify-space-between sp_content">
            <span class="label">{{ item.label }}</span>
            <span v-if="item.label !== 'パスワード'" class="value" style="width:23rem;">{{ item.value }}</span>
            <div v-if="item.label === 'パスワード'" class="d-flex justify-space-between align-center pr-5" style="width: 23rem;">
              <span :class="{ 'value': true, 'pr-3': true }" v-show="showPassword">{{ item.value }}</span>
              <span :class="{ 'value': true, 'pr-3': true }" v-show="!showPassword">{{ '•'.repeat(item.value.length) }}</span>
              <v-icon @click="togglePasswordVisibility">{{ showPassword ? 'mdi-eye-off' : 'mdi-eye' }}</v-icon>
            </div>
          </div>
          <v-divider class="dotted"></v-divider>
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
import { ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { updateUserPassword } from '~/features/plofile/api/postProfile.ts'

const router = useRouter()
const route = useRoute()

const name = route.query.name
const nameKana = route.query.name_kana
const email = route.query.email
const password = route.query.password

const showPassword = ref(false)

const togglePasswordVisibility = () => {
  showPassword.value = !showPassword.value
}

const userInfo = [
  { label: 'お名前', value: name },
  { label: 'フリガナ', value: nameKana },
  { label: 'メールアドレス', value: email },
  { label: 'パスワード', value: password },
]

const goBack = () => {
  router.push('/profile/edit')
}

const submit = async () => {
  try {
    const response = await updateUserPassword(password)
    console.log('Password updated successfully:', response)
    router.push('/profile/complete')
  } catch (error) {
    console.error('Failed to update password:', error)
  }
}
</script>

<style scoped lang="scss">
.divider_color {
  background-color: #CFCFCF;
}

.dotted {
  border-top: 1px dotted #000;
  margin-top: 8px;
  margin-bottom: 8px;
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
    &_content {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
    }
  }
  .label {
    justify-content: flex-start;
    margin-bottom: 30px;
  }
}
</style>
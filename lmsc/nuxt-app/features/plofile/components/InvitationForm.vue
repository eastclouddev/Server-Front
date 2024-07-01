<template>
  <v-container style="margin: 10% 0">
    <v-card flat class="mx-auto" max-width="620">
      <v-card-title class="pt-2 pb-2 pl-0 sp_title" style="font-size: 1.6em; font-weight: bold; color: #242424;">
        ユーザー情報入力
      </v-card-title>
      <v-divider class="divider-color" thick="1"></v-divider>
      <v-card flat style="margin: 10% 0">
        <UserAcquisition ref="userAcquisitionRef" />
        <PasswordFormConfilm
          label="パスワード"
          placeholder="パスワードを入力"
          v-model="passwordInput"
          :errorMessage="passwordErrorMessage"
          additionalText="※8文字以上14文字以内の半角英数字で入力してください。"
          required
          class="mb-5"
        />
        <PasswordFormConfilm
          label="パスワード(確認)"
          placeholder="パスワードを再入力"
          v-model="passwordConfirm"
          :errorMessage="confirmPasswordErrorMessage"
          additionalText="※確認のため同じパスワードを再度入力してください。"
          required
        />
      </v-card>
      <v-card flat class="mx-auto text-center">
        <PrivacyPolicyModal />
        <TeamOfUseModal :checkbox="termsAccepted" @update:checkbox="termsAccepted = $event" />
        <p v-if="!termsAccepted && showError" class="error_message text-center"
        style="position: relative; top: -55px;">利用規約に同意してください。</p>
        <Button
          type="submit"
          color="#FF5A36"
          style="font-size: 1.5em"
          @click="handleSubmit"
          buttonText="入力情報を確認する"
        ></Button>
      </v-card>
    </v-card>
  </v-container>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import UserAcquisition from '~/features/plofile/components/UserAcquisition.vue'
import PrivacyPolicyModal from '~/features/plofile/components/PrivacyPolicyModal.vue'
import TeamOfUseModal from '~/features/plofile/components/TeamOfUseModal.vue'
import PasswordFormConfilm from '~/components/PasswordFormConfilm.vue'
import { useUserStore } from '@/store/user'

const userStore = useUserStore()
const router = useRouter()

const passwordInput = ref('')
const passwordConfirm = ref('')
const userAcquisitionRef = ref(null)
const termsAccepted = ref(false)
const showError = ref(false)

const passwordErrorMessage = computed(() => {
  if (!passwordInput.value) return 'パスワードを入力してください。'
  if (passwordInput.value.length < 8 || passwordInput.value.length > 14) return 'パスワードは8文字以上14文字以内で入力してください。'
  if (!/^[a-zA-Z0-9]+$/.test(passwordInput.value)) return 'パスワードは半角英数字のみ使用できます。'
  return ''
})

const confirmPasswordErrorMessage = computed(() => {
  if (passwordInput.value !== passwordConfirm.value) return 'パスワードが一致しません。'
  return ''
})

const handleSubmit = () => {
  if (!termsAccepted.value) {
    showError.value = true
    return
  }

  const user = userStore.user
  const password = passwordInput.value

  if (!userAcquisitionRef.value) {
    console.error('UserAcquisition component is not loaded.')
    return
  }

  const kanaItem = userAcquisitionRef.value.items.find(i => i.label === 'フリガナ')
  if (!kanaItem) {
    console.error('Kana item not found in UserAcquisition component.')
    return
  }

  const [last_name_kana, first_name_kana] = kanaItem.data.split(' ')

  if (!user || !password || passwordInput.value !== passwordConfirm.value) {
    console.error('User information or password is missing or passwords do not match')
    return
  }

  router.push({
    path: '/profile/confilm',
    query: {
      name: `${user.last_name} ${user.first_name}`,
      name_kana: `${last_name_kana} ${first_name_kana}`,
      email: user.email,
      password: password,
    }
  })
}
</script>

<style scoped lang="scss">
.divider-color {
  background-color: #CFCFCF;
}

.error_message {
  color: #ff0000;
  font-size: 0.75em;
  text-align: left;
  margin-top: 10px;
}

.required-mark {
  color: #ffff;
  background-color: #ff5a36;
  border-radius: 5px;
  font-weight: bold;
  padding: 0 1%;
  margin: 0 3%;
}

@media screen and (max-width: 768px) {
  .sp {
    &_title {
      font-size: 2.5em !important;
    }
    &_form {
      display: flex;
      flex-direction: column;
    }
    &_labelwrap {
      width: 100% !important;
    }
    &_label {
      font-size: 2em !important;
    }
    &_field {
      width: 100% !important;
    }
  }
  .error_message {
    font-size: 0.75em;
  }
}
</style>
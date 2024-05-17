<template>
  <v-container style="margin: 10% 0">
    <v-card flat class="mx-auto" max-width="620">
      <v-card-title
        class="pt-2 pb-2 pl-0"
        style="font-size: 1.6em; font-weight: bold"
        color="#242424"
        >ログイン</v-card-title
      >
      <v-divider class="#CFCFCF" thickness="1"></v-divider>
      <v-card-text>
        <v-form @submit.prevent="handleSubmit" class="content_box">
          <v-card flat style="margin: 10% 0">
            <EmailInput
              v-model="email"
              :error-message="errors.email"
              @blur="validateField('email')"
            />
            <PasswordInput
              v-model="password"
              :error-message="errors.password"
              @blur="validateField('password')"
            />
          </v-card>
          <v-card flat style="text-align: center">
            <p class="pb-2">
              ※パスワードを忘れた方は<a href="" target="_blank" color="#242424"
                >こちら</a
              >
            </p>
            <Button
              type="submit"
              width="25rem"
              height="6ex"
              style="font-size: 1.5em"
              buttonText=" ログイン"
              :disabled="isSubmitting || !isValid"
            ></Button>
          </v-card>
        </v-form>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useNuxtApp } from '#app'
import { useField, useForm } from 'vee-validate'
import { schema } from '~/features/auth/login/schema'
import EmailInput from '~/components/EmailInput.vue'
import PasswordInput from '~/components/PasswordInput.vue'
import Button from '~/components/Button.vue'

const { $api } = useNuxtApp()

const showPassword = ref(false)
const isSubmitting = ref(false)

const { errors, validate, validateField } = useForm({
  validationSchema: schema,
})

const { value: email } = useField('email')
const { value: password } = useField('password')

const isValid = computed(() => Object.keys(errors.value).length === 0)

const handleSubmit = async () => {
  isSubmitting.value = true
  const valid = await validate()
  if (!valid) {
    isSubmitting.value = false
    return
  }

  const deviceInfo = {
    device_type: 'PC',
    device_name: 'Web',
    uuid: 'unique_device_identifier',
  }
  console.log('email.value:', email.value)
  console.log('password.value:', password.value)
  console.log('deviceInfo:', deviceInfo)

  try {
    const response = await $api.login.$post({
      body: {
        email: email.value,
        password: password.value,
        device_info: deviceInfo,
      },
      config: {
        withCredentials: true,
      },
    })

    // ログイン成功時の処理
    console.log('Login succeeded:', response)
    // ログイン状態をpiniaに保存するなどの処理を行う
    // 例: localStorage.setItem('access_token', response.access_token);

    // ログイン後のリダイレクト処理
    // 例: navigateTo('/dashboard');
  } catch (error) {
    // ログイン失敗時の処理
    console.error('Login failed:', error)
    // エラーメッセージの表示などの処理を行う
  } finally {
    isSubmitting.value = false
  }
}
</script>

<style lang="scss" scoped>
.error {
  border: 1px solid red;
  border-radius: 5px;
}

.error_message {
  color: #ff0000;
  font-size: 0.75em;
  text-align: left;
}
@media screen and (max-width: 768px) {
  .error_message {
    font-size: 1em;
  }
}
</style>

<template>
  <v-container style="margin: 10% 0">
    <v-card flat class="mx-auto" max-width="620">
      <v-card-title class="pt-2 pb-2 pl-0 sp_title" style="font-size: 1.6em; font-weight: bold" color="#242424">
        ユーザー情報入力
      </v-card-title>
      <v-divider class="#CFCFCF" thick="1"></v-divider>
      <v-card flat style="margin: 10% 0">
        <UserAcquisition ref="userAcquisition" />
        <PasswordFormConfirmation @update:passwordInput="passwordInput = $event" @update:passwordConfirm="passwordConfirm = $event" />
      </v-card>
      <v-card flat class="mx-auto text-center">
        <PrivacyPolicyModal />
        <TeamOfUseModal />
        <Button type="submit" color="#FF5A36" style="font-size: 1.5em" @click="handleSubmit" buttonText="入力情報を確認する"></Button>
      </v-card>
    </v-card>
  </v-container>
</template>

<script setup>
import { ref, inject } from 'vue'
import { useRouter } from 'vue-router'
import UserAcquisition from '~/features/plofile/components/UserAcquisition.vue'
import PasswordFormConfirmation from '~/components/PasswordFormConfirmation.vue'
import PrivacyPolicyModal from '~/features/plofile/components/PrivacyPolicyModal.vue'
import TeamOfUseModal from '~/features/plofile/components/TeamOfUseModal.vue'
import { useUserStore } from '@/store/user'

const userStore = useUserStore()
const router = useRouter()

const passwordInput = ref('')
const passwordConfirm = ref('')

const handleSubmit = () => {
  const user = userStore.user
  const password = passwordInput.value

  console.log('User:', user)
  console.log('Password:', password)
  console.log('Password Confirm:', passwordConfirm.value)

  if (!user || !password || passwordInput.value !== passwordConfirm.value) {
    console.error('User information or password is missing or passwords do not match')
    return
  }

  router.push({
    path: '/profile/confirm',
    query: {
      name: `${user.last_name} ${user.first_name}`,
      email: user.email,
      password: password
    }
  })
}
</script>

<style scoped lang="scss">
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
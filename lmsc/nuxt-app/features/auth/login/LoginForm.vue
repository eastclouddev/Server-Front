<template>
  <v-container style="margin: 10% 0">
    <v-card flat class="mx-auto" max-width="620" style="padding: 20px">
      <v-card-title class="pt-2 pb-2 pl-0" style="font-size: 1.6em; font-weight: bold" color="#242424">
        ログイン
      </v-card-title>
      <v-divider class="#CFCFCF" thickness="1"></v-divider>
      <v-card-text>
        <v-form @submit.prevent="handleSubmit" class="content_box">
          <v-card flat style="margin: 10% 0">
            <EmailInput v-model="email" :error-message="errors.email" @blur="validateField('email')" />
            <PasswordInput v-model="password" :error-message="errors.password" @blur="validateField('password')" />
          </v-card>
          <v-card flat style="text-align: center">
            <p class="pb-2">
              ※パスワードを忘れた方は<a href="" target="_blank" color="#242424">こちら</a>
            </p>
            <Button
              type="submit"
              width="25rem"
              height="6ex"
              color="#FF5A36"
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
import { ref, computed, onMounted } from 'vue';
import { useNuxtApp, useRouter } from '#app';
import { useField, useForm } from 'vee-validate';
import { schema } from '~/features/auth/login/schema';
import EmailInput from '~/components/EmailInput.vue';
import PasswordInput from '~/components/PasswordInput.vue';
import Button from '~/components/Button.vue';
import platform from 'platform';
import { v4 as uuidv4 } from 'uuid';
import { useUserStore } from '~/store/user';

const { $api } = useNuxtApp();
const router = useRouter();
const userStore = useUserStore();

const isSubmitting = ref(false);
const deviceInfo = ref({ device_type: '', device_name: '', uuid: '' });

onMounted(() => {
  deviceInfo.value = {
    device_type: platform.os.family || 'Unknown',
    device_name: platform.name || 'Unknown',
    uuid: uuidv4(),
  };
});

const { errors, validate, validateField } = useForm({
  validationSchema: schema,
});

const { value: email } = useField('email');
const { value: password } = useField('password');

const isValid = computed(() => Object.keys(errors.value).length === 0);

const roleMap = {
  admin: 1,
  mentor: 2,
  student: 3,
  corporation: 4,
};

const handleSubmit = async () => {
  isSubmitting.value = true;
  const valid = await validate();
  if (!valid) {
    isSubmitting.value = false;
    return;
  }

  try {
    const response = await $api.login.$post({
      body: {
        email: email.value,
        password: password.value,
        device_info: deviceInfo.value,
      },
      config: {
        withCredentials: true,
      },
    });

    console.log('Login succeeded:', response);

    console.log('API Response:', response);
    console.log('First Name:', response.first_name);
    console.log('Last Name:', response.last_name);
    console.log('Email:', response.email);


    const user = {
      user: {
        id: response.user_id,
        role_id: roleMap[response.role], // ロールを数値に変換
        first_name: response.first_name,
        last_name: response.last_name,
        email: response.email,
      },
      isAuthenticated: true,
    };
    userStore.setUser(user);

    console.log('User store after login:', userStore.$state);// ストアの状態をログに出力

    await router.push('/dashboard');
  } catch (error) {
    console.error('Login failed:', error);
  } finally {
    isSubmitting.value = false;
  }
};
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
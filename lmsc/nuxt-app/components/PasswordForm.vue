
<template>
  <v-container>
    <v-row class="align-center justify-space-between flex-column-sm">
      <label class="sp_label" style="font-weight: bold;">{{ label }}</label>
      <v-card flat class="d-flex flex-column sp_field" width="25rem">
        <v-sheet :class="{ 'error': errors.password }" class="my-0 pr-4 pb-4 pl-4" color="#EBEBEB">
          <v-text-field hide-details="auto" :placeholder="placeholder" variant="plain" class="mb-"
            :type="showPassword ? 'text' : 'password'" :value="modelValue" @input="updatePassword" full-width>
            <template #append>
              <v-icon @click="togglePasswordVisibility">{{ showPassword ? 'mdi-eye' : 'mdi-eye-off' }}</v-icon>
            </template>
          </v-text-field>
        </v-sheet>
        <p class="password_conditions">{{ passwordConditions }}</p>
        <p class="error_message">{{ errors.password }}</p>
      </v-card>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref, computed, defineProps, defineEmits } from 'vue';
import { useField, useForm } from 'vee-validate';
import { object, string, setLocale } from 'yup';

setLocale({
  mixed: {
    required: 'パスワードを入力してください。',
  },
});

const props = defineProps({
  modelValue: String,
  label: String,
  placeholder: String,
  passwordConditions: String // パスワードの条件を受け取るprops
});
const emits = defineEmits(['update:modelValue']);

const schema = object({
  password: string()
    .required()
    .matches(/^[a-zA-Z0-9]{8,14}$/, 'パスワードは半角英数字のみ使用できます。')
    .min(8, 'パスワードは8文字以上14文字以内で入力してください。')
    .max(14, 'パスワードは8文字以上14文字以内で入力してください。')
    .label('パスワード'),
});
const { errors } = useForm({
  validationSchema: schema,
});
const { value: password } = useField('password');

const showPassword = ref(false);

function togglePasswordVisibility() {
  showPassword.value = !showPassword.value;
}

function updatePassword(event) {
  password.value = event.target.value;
  emits('update:modelValue', event.target.value); // 親コンポーネントに入力値を通知
}
</script>

<style lang="scss" scoped>
.error {
  border: 1px solid red;
  border-radius: 5px;
}

.error_message {
  color: #FF0000;
  font-size: 0.75em;
  text-align: left;
  padding: 1% 0;
}

.password_conditions {
  font-size: 0.75em;
  color: #666;
}
@media screen and (max-width: 768px) {
  .sp {
    &_label {
      font-size: 1em !important;
      padding-bottom: 2%;
    }

    &_field {
      width: 100% !important;
    }
  }

  .error_message {
    font-size: 1em;
  }
}
</style>

<template>
  <v-container class="d-flex justify-space-between">
    <v-row class="align-center">
      <v-col class="text-left text-md-left">
        <label style="font-size: 1em; font-weight: bold" color="#242424"
          >パスワード</label
        >
      </v-col>
      <v-col class="text-center text-md-right">
        <v-card flat class="d-flex flex-column" width="25rem">
          <v-sheet
            :class="{ error: errors.password }"
            class="my-0 pr-4 pb-4 pl-4"
            color="#EBEBEB"
          >
            <v-text-field
              hide-details="auto"
              placeholder="パスワードを入力"
              variant="plain"
              :type="showPassword ? 'text' : 'password'"
              v-model="internalPassword"
            >
              <template #append>
                <v-icon @click="showPassword = !showPassword">{{
                  showPassword ? 'mdi-eye-off' : 'mdi-eye'
                }}</v-icon>
              </template>
            </v-text-field>
          </v-sheet>
          <p class="error_message">{{ errors.password }}</p>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref, computed, watch } from 'vue'
import { useField, useForm } from 'vee-validate'
import { object, string, setLocale } from 'yup'

const props = defineProps({
  modelValue: String,
})
const emit = defineEmits(['update:modelValue'])

setLocale({
  mixed: {
    required: 'パスワードを入力してください。',
  },
})

const schema = object({
  password: string()
    .required()
    .matches(/^[a-zA-Z0-9]{8,14}$/, 'パスワードは半角英数字のみ使用できます。')
    .min(8, 'パスワードは少なくとも8文字必要です。')
    .max(14, 'パスワードは14文字以下である必要があります。')
    .label('パスワード'),
})

const { errors } = useForm({
  validationSchema: schema,
})

const { value: password } = useField('password')

const internalPassword = computed({
  get: () => props.modelValue,
  set: value => emit('update:modelValue', value),
})

const showPassword = ref(false)

watch(internalPassword, newVal => {
  password.value = newVal
})
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
  .form {
    display: flex;
    flex-direction: column;
    &_label {
      font-size: 2em;
      margin-bottom: 20px;
    }
    &_input {
      width: 548px;
    }
  }
  .error_message {
    font-size: 1em;
  }
}
</style>

<template>
<<<<<<< HEAD
  <v-container>
    <v-row class="align-center justify-space-between flex-column-sm">
      <label class="sp_label" style="font-weight: bold;">{{ label }}</label>
      <v-card flat class="d-flex flex-column sp_field" width="25rem">
        <v-sheet :class="{ 'error': errors.password }" class="my-0 pr-4 pb-4 pl-4" color="#EBEBEB">
          <v-text-field hide-details="auto" :placeholder="placeholder" variant="plain" class="mb-"
            :type="showPassword ? 'text' : 'password'" :value="modelValue" @input="updatePassword" full-width>
            <template #append>
              <v-icon @click="togglePasswordVisibility">{{ showPassword ? 'mdi-eye-off' : 'mdi-eye' }}</v-icon>
            </template>
          </v-text-field>
        </v-sheet>
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
  placeholder: String
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
=======
  <div class="inner">
    <div class="inner_wrap">
      <label class="inner_item">パスワード</label>
      <div
        class="inner_formwrap"
        v-bind:class="{ 'error-border': form.password.errorMessage }"
      >
        <!-- <FormulateInput
          type="password"
          label="パスワード"
          v-model="form.password.val"
          @input="() => validatePassword(form.password.val) "
          :validation="{
            regex: /^[a-zA-Z0-9]{8,14}$/,
            error: {
              regex: '半角英数のみ使用できます。',
              required: 'パスワードを入力してください。',
              length: '8文字以上14文字以内で入力してください。'
            }
          }"
          :messages="{
            required: form.password.errorMessage,
            regex: form.password.errorMessage,
            length: form.password.errorMessage
          }"
          :class="{
            'error-border': form.password.errorMessage
          }"
          placeholder= "パスワードを入力"
        /> -->
      </div>
      <span @click="togglePasswordVisibility">
        <img
          v-if="showPassword"
          src="/assets/show_password.svg"
          class="password_icon"
          aria-hidden="true"
        />
        <img
          v-else
          class="password_icon"
          src="/assets/hide_password.svg"
          aria-hidden="true"
        />
      </span>
    </div>
  </div>
  <div class="inner_text">
    <p class="message">※半角英数字の組み合わせ（8桁以上14文字以下）</p>
    <p class="errorMessage">{{ form.password.errorMessage }}</p>
  </div>
</template>

<script>
// import { FormulateInput } from '@braid/vue-formulate'
export default {
  data() {
    return {
      form: {
        password: {
          val: null,
          errorMessage: null,
        },
      },
      showPassword: false,
    };
  },
  methods: {
    validatePassword(value) {
      const { password } = this.form;
      const maxLength = 14;
      const minLength = 8;

      if (!value) {
        password.errorMessage = "パスワードを入力してください。";
        return false;
      }
      if (value.length < minLength || value.length > maxLength) {
        password.errorMessage = "8文字以上14文字以内で入力してください。";
        return false;
      }
      password.errorMessage = null;
      return true;
    },
    togglePasswordVisibility() {
      this.showPassword = !this.showPassword;
    },
  },
};
>>>>>>> develop
</script>

<style lang="scss" scoped>
.error {
  border: 1px solid red;
  border-radius: 5px;
}

<<<<<<< HEAD
.error_message {
  color: #FF0000;
  font-size: 0.75em;
  text-align: left;
  padding: 1% 0;
}
@media screen and (max-width: 768px) {
  .sp {
    &_label {
      font-size: 2em !important;
      padding-bottom: 2%;
    }

    &_field {
      width: 100% !important;
    }
  }

  .error_message {
    font-size: 1.5em;
  }
}
=======
.inner {
  width: 620px;
  margin-bottom: 32px;

  &_wrap {
    display: flex;
    justify-content: space-between;
  }

  &_item {
    color: #242424;
    font-weight: bold;
    padding: 18px 0;
  }

  &_formwrap {
    display: flex;
    align-items: center;
    width: 400px;
    text-decoration-color: #b5b5b5;
    background-color: #ebebeb;
    border-radius: 5px;
    padding: 0 18px;
    margin-bottom: 10px;
  }
  input {
    background-color: #ebebeb;
    height: 51px;
    width: 400px;
    outline: none;
    border: none;
  }

  &_text {
    width: 400px;
    display: block;
    flex-direction: column;
    margin-left: 30%;
  }
}

.password_icon {
  cursor: pointer;
}

.error-border {
  border: 1px solid #ff0000;
}

.message {
  font-size: 12px;
  margin: 0;
}

.errorMessage {
  font-size: 12px;
  color: #ff0000;
  margin: 0;
}
>>>>>>> develop
</style>

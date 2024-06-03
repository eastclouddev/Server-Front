<template>
  <v-container class="d-flex justify-space-between mb-3">
    <v-row class="align-center justify-space-between flex-column-sm" style="">
      <label class="sp_label" style="font-size: 1em; font-weight: bold;margin-bottom: 6px;">{{ label }}</label>
      <v-card flat class="sp_field d-flex flex-column" width="25rem">
        <v-sheet :class="{ 'error': errors.email }" class="my-0 pr-4 pb-4 pl-4" color="#EBEBEB">
          <v-text-field hide-details="auto" placeholder="XXXXXXX@example.com" variant="plain" type="email"
            v-model="email" full-width></v-text-field>
        </v-sheet>
        <p class="error_message mt-2">{{ errors.email }}</p>
      </v-card>
    </v-row>
  </v-container>
</template>
<script setup>
import { useField, useForm } from 'vee-validate';
import { object, string, setLocale } from 'yup';

setLocale({
  mixed: {
    required: 'メールアドレスを入力してください。',
  },
  string: {
    email: 'メールアドレスの形式が正しくありません。',
  },
});
const props = defineProps({
  modelValue: String,
  label: String,
  placeholder: String
});

const schema = object({
  email: string()
    .required()
    .email()
    .label('メールアドレス'),
});
const { errors } = useForm({
  validationSchema: schema,
});
const { value: email } = useField('email');
</script>
<style lang="scss" scoped>
.error {
  border: 1px solid red;
  border-radius: 5px;
}

.error_message {
  color: #FF0000;
  font-size: 0.75em;
}
@media screen and (max-width: 768px) {
  .sp {
    &_label {
      font-size: 2em !important;
      padding-bottom: 2;
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
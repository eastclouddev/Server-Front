<template>
  <v-container>
    <v-row class="d-flex justify-space-between  mb-3 sp_form">
      <v-card flat class="d-flex align-center sp_labelwrap" width="11rem">
        <label class="sp_label" style="font-weight: bold;">パスワード</label>
        <span class="required-mark">必須</span>
      </v-card>
      <v-card flat>
        <PasswordForm v-model="passwordInput" :passwordConditions="passwordConditions"/>
      </v-card>
    </v-row>
    <v-row class="d-flex ¥ justify-space-between mb-3sp_form">
      <v-card flat class=" d-flex align-center sp_labelwrap" width="11rem">
        <label class="sp_label" style="font-weight: bold;">パスワード(確認)</label>
        <span class="required-mark">必須</span>
      </v-card>
      <v-card flat class="text-left sp_field">
        <PasswordForm v-model="passwordConfirm" :passwordConditions="passwordConfirmConditions"/>
        <p v-if="passwordMismatch" class="error_message" style="padding:0 1%;">パスワードが一致しません。</p>
      </v-card>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref, computed } from 'vue';
import PasswordForm from '@/components/PasswordForm.vue';

const passwordInput = ref('');
const passwordConfirm = ref('');

const passwordConditions = ref('※パスワードは8文字以上14文字以内の半角英数字で入力してください。');
const passwordConfirmConditions = ref('※確認のため同じパスワードを再度入力してください。');

const passwordMismatch = computed(() => passwordInput.value !== passwordConfirm.value);
</script>
<style lang="scss" scoped>
.error_message {
  color: #FF0000;
  font-size: 0.75em;
  text-align: left;
}

.required-mark {
  color: #FFFF;
  background-color: #FF5A36;
  border-radius: 5px;
  font-weight: bold;
  padding: 0 1%;
  margin: 0 3%;
}

@media screen and (max-width: 768px) {
  .sp {
    &_form {
      display: flex;
      flex-direction: column;
    }
    &_labelwrap {
      width: 100%!important;
    }
    &_label {
      font-size: 1em !important;
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
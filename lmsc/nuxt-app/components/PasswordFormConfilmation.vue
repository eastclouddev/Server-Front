<template>
  <v-container>
    <v-sheet class="d-flex align-center justify-space-between mb-3">
      <v-card flat class=" d-flex align-center " width=" 11rem">
        <label style="font-size: 1em; font-weight: bold;">パスワード</label>
        <span class="required-mark">必須</span>
      </v-card>
      <v-card flat>
        <PasswordForm v-model="passwordInput" />
      </v-card>
    </v-sheet>
    <v-sheet class="d-flex align-center justify-space-between mb-3">
      <v-card flat class=" d-flex align-center" width="11rem">
        <label style="font-size: 1em; font-weight: bold;">パスワード(確認)</label>
        <span class="required-mark">必須</span>
      </v-card>
      <v-card flat class="text-left">
        <PasswordForm v-model="passwordConfirm" />
        <p v-if="passwordMismatch" class="error_message" style="padding:0 1%;">パスワードが一致しません。</p>
      </v-card>
    </v-sheet>
  </v-container>
</template>

<script setup>
import { ref, computed } from 'vue';
import PasswordForm from '@/components/PasswordForm.vue';

const passwordInput = ref('');
const passwordConfirm = ref('');

const passwordMismatch = computed(() => passwordInput.value !== passwordConfirm.value);
</script>
<style>
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
  padding: 1% 2%;
  margin: 3%;
}
</style>
<template>
  <v-container class="d-flex justify-space-between">
    <label style="font-size: 1em; font-weight: bold;" color="#242424">パスワード<span class="required-mark">必須</span></label>
    <v-sheet class="my-0 pr-4 pb-4 pl-4">
      <v-text-field width="25rem" v-model="password" type="password"></v-text-field>
      <p>※半角英数字の組み合わせ（8桁以上14文字以下）</p>
    </v-sheet>
  </v-container>
  <v-containe class="d-flex justify-space-between">
    <label style=" font-size: 1em; font-weight: bold;" color="#242424">パスワード（確認）<span
        class="required-mark">必須</span></label>
    <v-sheet class="my-0 pr-4 pb-4 pl-4">
      <v-text-field width="25rem" v-model="confirmPassword" type="password" :error="passwordMismatch"></v-text-field>
      <p>※確認のため同じパスワードを入力してください。</p>
    </v-sheet>
  </v-containe>



</template>

<script>
export default {
  data() {
    return {
      password: '',
      confirmPassword: ''
    };
  },
  computed: {
    passwordMismatch() {
      return this.password !== this.confirmPassword;
    }
  }
};
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

.required-mark {
  color: #FFFF;
  background-color: #FF5A36;
  border-radius: 5px;
  font-size: 0.75em;
  padding: 0.5%;
  margin: 1%;
}

</style>
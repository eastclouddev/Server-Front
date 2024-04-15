<template>
  <div>
    <form @submit.prevent="onSubmit">
      <div class="inner">
        <label class="inner_item">メールアドレス</label>
        <div>
          <input @keyup="validateEmail" v-bind:class="{ 'error-border': form.email.errorMessage }"
            @blur="validateEmail" type="text" v-model="form.email.val" placeholder="XXXXXXX @example .com">
          <p class="errorMessage">{{ form.email.errorMessage }}</p>
        </div>
      </div>

      <div class="inner">
        <label class="inner_item">パスワード</label>
        <div>
          <input @keyup="validatePassword" v-bind:class="{ 'error-border': form.password.errorMessage }"
            @blur="validatePassword" :type="showPassword ? 'text' : 'password'" v-model="form.password.val"
            placeholder="パスワードを入力">
          <span @click="togglePasswordVisibility">
            <img v-if="showPassword" src="/assets/show_password.svg" class="password_icon" aria-hidden="true">
            <img v-else class="password_icon" src="/assets/hide_password.svg" aria-hidden="true">
          </span>
          <p class="message">※半角英数字の組み合わせ（8桁以上14文字以下）</p>
          <p class="errorMessage">{{ form.password.errorMessage }}</p>
        </div>
      </div>

      <ButtonSubmit color-orange class="button">ログイン</ButtonSubmit>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        email: {
          label: "メールアドレス",
          val: null,
          errorMessage: null
        },
        password: {
          label: "パスワード",
          val: null,
          errorMessage: null
        },
      },
      showPassword: false
    }
  },
  methods: {
    validateEmail() {
      const { email } = this.form
      const regex = /^[a-zA-Z0-9_.+-]+@([a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]*\.)+[a-zA-Z]{2,}$/;
      if (!email.val) {
        email.errorMessage = `${email.label}を入力してください。`
        return
      }
      email.errorMessage = null
      if (!regex.test(email.val)) {
        email.errorMessage = `${email.label}の形式が正しくありません。`
        return
      }
    },
    validatePassword() {
      const { password } = this.form
      const maxLength = 14
      const minLength = 8
      const regex = /^[a-zA-Z0-9]{8,14}$/;
      if (!password.val) {
        password.errorMessage = `${password.label}を入力してください。`
        return
      }
      password.errorMessage = null
      if (password.val.length > maxLength) {
        password.errorMessage = `${password.label}は${minLength}文字以上${maxLength}文字以内で入力してください。`
        return
      }
      password.errorMessage = null
      
      password.errorMessage = null
      if (!regex.test(password.val)) {
        password.errorMessage = `${password.label}は半角英数のみ使用できます。`
        return
      }
    },
    onSubmit() {
      this.validateEmail()
      this.validatePassword()
    },
    togglePasswordVisibility() {
      this.showPassword = !this.showPassword;
    }
  }
}
</script>

<style lang="scss" scoped>
form {
  width: 620px;
  margin: 0 auto;
}
.inner {
  display: flex;
  justify-content: space-between;
  width: 620px;
  margin-bottom: 32px;
  &_item {
      color: #242424;
      font-weight: bold;
      padding: 18px 0;
  }
}

input {
  height: 51px;
  width: 400px;
  border-radius: 5px;
  outline: none;
  border: none;
  padding: 0 18px;
  margin-bottom: 10px;
  text-decoration-color: #B5B5B5;
  background-color: #EBEBEB;
}

.password_icon {
  cursor: pointer;
}
  .error-border {
    border: 1px solid red;
    /* エラーがある場合に赤色の枠線を設定 */
  }
  .message {
    font-size: 12px;
    margin: 0;
  }
  .errorMessage {
    font-size: 12px;
    color: #FF0000;
    margin: 0;
  }
  .button {
    margin: 0 auto;
  }
</style>
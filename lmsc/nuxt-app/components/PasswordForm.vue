<template>
  <div class="inner">
    <div class="inner_wrap">
      <label class="inner_item">パスワード</label>
      <div class="inner_formwrap" v-bind:class="{ 'error-border': form.password.errorMessage }">
        <input @keyup="validatePassword" @blur="validatePassword" :type="showPassword ? 'text' : 'password'"
          v-model="form.password.val" placeholder="パスワードを入力" >
        <span @click="togglePasswordVisibility">
          <img v-if="showPassword" src="/assets/show_password.svg" class="password_icon" aria-hidden="true">
          <img v-else class="password_icon" src="/assets/hide_password.svg" aria-hidden="true">
        </span>
      </div>
    </div>
    <div class="inner_text">
      <p class="message">※半角英数字の組み合わせ（8桁以上14文字以下）</p>
      <p class="errorMessage">{{ form.password.errorMessage }}</p>
    </div>
  </div>
</template>

<script>
export default {
  // props: ['value'],
  data() {
    return {
      form: {
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
    text-decoration-color: #B5B5B5;
    background-color: #EBEBEB;
    border-radius: 5px;
    padding: 0 18px;
    margin-bottom: 10px;
  }
    input {
      background-color: #EBEBEB;
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
  border: 1px solid #FF0000;
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
</style>
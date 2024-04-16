<template>
  <div class="inner">
    <label class="inner_item">メールアドレス</label>
    <div>
        <input type="email" id="email" :value="value" @input="$emit('input', $event.target.value)" @keyup="validateEmail" v-bind:class="{ 'error-border': form.email.errorMessage }" @blur="validateEmail" placeholder="XXXXXXX @example .com" />
      <p class="errorMessage">{{ form.email.errorMessage }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ['value'],
  data() {
    return {
      form: {
        email: {
          label: "メールアドレス",
          val: null,
          errorMessage: null
        },
      },
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
    onSubmit() {
      this.validateEmail()
    },
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

.error-border {
  border: 1px solid #FF0000;
}

.errorMessage {
  font-size: 12px;
  color: #FF0000;
  margin: 0;
}

</style>
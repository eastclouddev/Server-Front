<template>
  <NuxtLayout>
    <div class="wrap">
      <h1 class="wrap_title">ログイン</h1>
      <sampleform />
      <form @submit.prevent="login">
        <div class="form_wrap">
          <EmailForm v-model="email" />
          <PasswordForm v-model="password" />
        </div>
        <ButtonSubmit color-orange class="button">ログイン</ButtonSubmit>
      </form>
      <!-- <FormulateInput /> -->
    </div>
  </NuxtLayout>
</template>
<script>
import axios from "axios";

export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    async login() {
      try {
        consol.log("Email:", this.email);
        consol.log("Password:", this.password);
        const response = await axios.post("http://localhost:8080/login", {
          email: this.email,
          password: this.password,
        });

        console.log("Form submitted:", response.data);
        // ログイン成功時に画面遷移
        this.$router.push("/dashbord");
      } catch (error) {
        console.error("ログインエラー", error);
        // ログイン失敗
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.wrap {
  width: 620px;
  margin: 160px auto;
  &_title {
    font-weight: bold;
    font-size: 25px;
    border-bottom: solid 1px #cfcfcf;
    padding-bottom: 15px;
  }
}

.form_wrap {
  margin: 70px 0;
}

.button {
  margin: 0 auto;
}
</style>

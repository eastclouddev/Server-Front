<template>
  <NuxtLayout>
    <div class="wrap">
      <h1 class="wrap_title">管理者によってメールアドレスが変更されました</h1>
      <div class="inner">
        <div class="inner_text">
          <p>再度ログインしてください</p>
          <img src="/assets/emailchange_logout.svg" alt="">
        </div>
        <Button color-orange class="button" to="/LoginInput">ログイン画面</Button>
      </div>
    </div>
  </NuxtLayout>
</template>

<style lang="scss" scoped>
.wrap {
  width: 620px;
  margin: 160px auto;

  &_title {
    font-weight: bold;
    font-size: 25px;
    border-bottom: solid 1px #CFCFCF;
    padding-bottom: 15px;
  }
}
.inner {
  text-align: center;
  &_text {
    margin: 60px auto;
  }
  img {
    width: 140px;
  }
}
.button {
    margin: 0 auto;
  }
</style>
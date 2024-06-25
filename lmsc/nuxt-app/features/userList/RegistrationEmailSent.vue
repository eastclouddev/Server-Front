<script setup lang="ts">
import Mail_Icon from '~/assets/SendEmail.svg'
</script>

<template>
  <main>
    <div class="main center">
      <h1>ユーザー登録用のメールが送信されました。</h1>
      <div class="text">
        <p>
          ご登録のメールアドレスにユーザー登録用URLのご案内をお送りしました。<br />
          設定手続きを進めてください。
        </p>
        <p>
          ※しばらく経ってもメールが届かない場合、入力に誤りがある可能性があります。<br />
          お手数ですが、ユーザー追加の手続きを行ってください。
        </p>
      </div>
      <div class="icon">
        <img :src="Mail_Icon" alt="MailIcon" />
      </div>
      <v-btn>
        <NuxtLink to="/userList" class="NuxtLink">戻る</NuxtLink>
      </v-btn>
    </div>
  </main>
</template>

<style scoped lang="scss">
main {
  width: 100%;
  height: auto;
  font-family: 'Noto Sans';
}
.main {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  max-width: 620px;
  width: auto;
  h1 {
    width: 100%;
    font-size: 25px;
    line-height: 30.26px;
    margin-top: 140px;
    margin-bottom: 20px;
    padding-bottom: 20px;
    border-bottom: 1px solid #cfcfcf;
  }
  .text {
    display: flex;
    flex-direction: column;
    height: 95px;
    justify-content: space-between;
    p {
      width: 513px;
      font-size: 14px;
      line-height: 19.07px;
      white-space: nowrap;
    }
  }
  .icon {
    margin: 60px 0;
    img {
      width: 100px;
      height: 100px;
    }
  }
  .v-btn {
    box-sizing: border-box;
    border: 2px solid #ff5136;
    border-radius: 5px;
    padding: 0;
    height: auto;
    .NuxtLink {
      display: inline-block;
      width: 400px;
      height: 50px;
      text-align: center;
      font-size: 18px;
      line-height: 50px;
      color: #ff5136;
      text-decoration: none;
      &:visited {
        color: #ff5136;
      }
    }
  }
}

.center {
  margin: 0 auto;
}

@media screen and (max-width: 768px) {
  .main {
    max-width: 620px;
    text-align: left;
    h1 {
      font-size: 40px;
      line-height: 54.48px;
      margin-top: 99px;
      margin-bottom: 60px;
      padding-right: 120px;
      padding-bottom: 14px;
    }
    .text {
      height: 328px;
      p {
        width: 100%;
        font-size: 30px;
        line-height: 40.86px;
        white-space: initial;
      }
    }
    .icon {
      margin: 124px 0 132px;
      img {
        width: 200px;
        height: 200px;
      }
    }
    .v-btn {
      margin-bottom: 202px;
      .NuxtLink {
        width: 548px;
        height: 95px;
        font-size: 32px;
        font-weight: 700;
        line-height: 95px;
      }
    }
  }
  .space {
    height: 645px;
  }
}
</style>

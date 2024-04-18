<template>
  <NuxtLayout>
    <div class="inputlist">
      <h1 class="inputlist_title">ユーザー情報入力</h1>
      <div class="inputlist_inner">
        <label class="inputlist_label" v-for="item in items" :key="item">{{ item }}
          <input class="inputlist_box" type="text" disabled v-model="message">
        </label>
        <p>パスワード</p>
        <div class="inputlist_textwrap">
          <p class="inputlist_text">
            個人情報は<a class="inputlist_link" href="">プライバシーポリシー</a>に従って取り扱いします。
          </p>
          <div class="inputlist_teamofuse">
            <input class="custom_checkbox" type="checkbox" id="checkbox" v-model="checked">
            <p class="inputlist_text"><a class="inputlist_link" href="">利用規約</a>を確認する。</p>
          </div>
          <Button color-orange class="inputlist_button" to="/user_services/user_create">入力情報を確認する</Button>
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>
<script>
export default {
  data() {
    return {
      items: ['お名前', 'フリガナ', 'メールアドレス'],
      message: ['API'],
    }
  },
};
</script>
<style lang="scss" scoped>
.inputlist {
  margin: 80px auto;
  width: 620px;

  &_title {
    font-weight: bold;
    font-size: 25px;
    border-bottom: solid 1px #CFCFCF;
    padding-bottom: 15px;
  }

  &_inner {
    margin: 70px 0;
  }

  &_label {
    font-weight: bold;
    font-size: 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 32px;
  }

  &_box {
    height: 50px;
    width: 400px;
    border: none;
    border-radius: 5px;
    background-color: #EBEBEB;
    text-decoration-color: #B5B5B5;
    padding: 0 18px;
  }

  &_textwrap {
    text-align: center;
  }

  &_text {
    font-size: 14px;
    margin: 0;
  }

  &_link {
    cursor: pointer;
    color: inherit;
  }

  &_teamofuse {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &_button {
    margin: 20px auto;
  }
}


.custom_checkbox {
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  width: 20px;
  height: 20px;
  border: 1px solid #292737;
  border-radius: 4px;
  outline: none;
  cursor: pointer;
  margin: 7px;
}

.custom_checkbox:checked {
  background-color: #292737;
  border-color: #292737;
}

.custom_checkbox:checked::before {
  content: "\2713";
  display: block;
  text-align: center;
  color: white;
}
</style>
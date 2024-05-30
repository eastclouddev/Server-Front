
<template>
  <v-container class="mx-aout">
    <v-card flat color="#F5F5F5" class="d-flex align-center pt-2 pb-2 pl-6" width="20rem"
    style="border-radius: 5px 5px 0 0; box-shadow: 4px 0px 6px -3px rgba(0, 0, 0, 0.2);">
    <img src="/assets/flame.svg" alt="study" style="padding:0 10px 0 0;">
      <label style="font-size: 1.5em; font-weight: bold;">おすすめ</label>
    </v-card>
    <v-card flat class="pt-2 pb-8" color="#F5F5F5"
    style="border-radius: 0 5px 5px 5px; box-shadow: 4px 5px 6px -3px rgba(0, 0, 0, 0.2);">
    <v-sheet class="mx-auto" width="90%" color="#F5F5F5">
      <div class="mt-8 mb-8 d-flex justify-space-between sp_itembox">
        <v-card flat class="pa-7 sp_item" width="28rem" v-for="(item, index) in items" :key="index">
          <div class="d-flex mb-5" style="align-items: flex-start;">
            <img :src="item.icon" :alt="item.title" class="pr-4">
            <div>
              <h3 class="mb-3" style="height: 8ex;">{{ truncateText(item.title,50) }}</h3>
              <p class="mb-3">{{ truncateText(item.summary,50) }}</p>
              <h4>全{{ item.session }}セッション</h4>
            </div>
          </div>
          <Button  color="#FF5A36" class="sp_button" style="font-size: 1em;" buttonText="学習する" width="100%" :to="'/details/' + item.id"></Button>
        </v-card>
      </div>
      <NuxtLink to="/" style="display: flex; justify-content: flex-end; color:#242424;" >もっとみる</NuxtLink>
    </v-sheet>
    </v-card>
  </v-container>
</template>

<script>
import PythonIcon from '~/assets/python.svg';
import JqueryIcon from '~/assets/jquery.svg';
export default {
  data() {
    return {
      items: [
        {
          icon: PythonIcon,
          title: 'Python入門 基礎文法徹底解説:チュートリアル網羅で初心者でもプログラミングできるようになる',
          summary: '現役エンジニアによる基礎文法徹底解説&ハンズオン。未経験者には意味不明な Python チュートリアルをしっかり学ぶことができます。',
          image: '/assets/python.svg',
          session:'20'
        },
        {
          icon: JqueryIcon,
          title: 'JavaScript & jQuery基礎講座',
          summary: '最も人気のあるプログラミング言語のひとつ、JavaScriptを知識ゼロから習得できます。jQueryの使い方も同時に学べるビギナー向けのコースです。',
          image: '/assets/jquery.svg',
          session:'30'
        },
      ]
    }
  },
  methods: {
    truncateText(text, maxLength) {
      if (text.length > maxLength) {
        return text.substring(0, maxLength) + '...';
      } else {
        return text;
      }
    }
  }
}
</script>
<style lang="scss" scoped>
@media (max-width: 768px) {
.sp {
  &_itembox {
    flex-direction: column;
    align-items: flex-start;
  }
  &_item {
    width: 100% !important;
    height: 45ex;
    margin-bottom: 40px;
  }
  &_button {
    margin-top: 40px;
    font-size: 1.5em !important;
  }
}
}
</style>
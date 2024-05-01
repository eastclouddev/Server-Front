<template>
  <v-container class="mx-auto">
    <v-card flat color="#F5F5F5" class="d-flex align-center pt-2 pb-2 pl-6" width="16rem"
    style="border-radius: 5px 5px 0 0; box-shadow: 4px 0px 6px -3px rgba(0, 0, 0, 0.2);">
    <img src="/assets/flag.svg" alt="study" style="padding:0 10px 0 0;">
      <label style="font-size: 1.5em; font-weight: bold;">必修コース</label>
    </v-card>
    <v-card flat class="pt-2 pb-2 pl-6" color="#F5F5F5"
    style="border-radius: 0 5px 5px 5px; box-shadow: 4px 5px 6px -3px rgba(0, 0, 0, 0.2);">
    <v-sheet  class="mx-auto mt-8 mb-8 d-flex"  width="60rem">
      <v-card v-for="(item, index) in items" :key="index">
        <img :src="item.image" :alt="item.title">
        <h3>{{ item.title }}</h3>
        <p>{{ item.summary }}</p>
        <Button  color="#FF5A36" style="font-size: 1em;" buttonText="学習する" width="13rem" :to="'/details/' + item.id"></Button>
      </v-card>
    </v-sheet>
    <a href="" style="display: flex; justify-content: flex-end;">一覧をみる</a>
        
    </v-card>
  </v-container>
</template>
<script>
export default {
  data() {
    return {
      items: [
        {
          title: 'Python入門 基礎文法徹底解説:チュートリアル網羅で初心者でもプログラミングできるようになる',
          summary: '現役エンジニアによる基礎文法徹底解説&ハンズオン。未経験者には意味不明な Python チュートリアルをしっ...',
          image: '/assets/python.svg'
        },
        {
          title: 'JavaScript & jQuery基礎講座',
          summary: '最も人気のあるプログラミング言語のひとつ、JavaScriptを知識ゼロから習得できます。jQueryの使い方も同時に学べるビギナー向けのコースです。',
          image: '/assets/jquery.svg'
        },
      ]
    }
  }
}
</script>
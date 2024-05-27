<template>
  <v-container class="mx-auto">
    <v-card flat color="#F5F5F5" class="d-flex align-center pt-2 pb-2 pl-6" width="16rem"
    style="border-radius: 5px 5px 0 0; box-shadow: 4px 0px 6px -3px rgba(0, 0, 0, 0.2);">
    <img src="/assets/flag.svg" alt="study" style="padding:0 10px 0 0;">
      <label style="font-size: 1.5em; font-weight: bold;">必修コース</label>
    </v-card>
    <v-card flat class="pt-2 pb-2 pl-6" color="#F5F5F5"
    style="border-radius: 0 5px 5px 5px; box-shadow: 4px 5px 6px -3px rgba(0, 0, 0, 0.2);">
    <v-sheet color="#F5F5F5" class="mx-auto mt-8 mb-8 "  width="60rem">
      <v-sheet color="#F5F5F5" class="mx-auto d-flex justify-space-between">
      <v-card flat class="pa-8 mb-8" width="27rem" v-for="(item, index) in items" :key="index">
        <!-- <img :src="item.image" :alt="item.title"> -->
        <div style="display: flex; align-items: flex-start;">
          <img src="/assets/python.svg" alt="" style="padding:0 10px;">
          <div style="margin-bottom:15px;">
            <h3 style="font-size:1.5em; height: 9.5rem;">{{ item.title }}</h3>
            <p  style="margin-bottom:15px; height: 5rem;">{{ limitText(item.summary) }}</p>
            <h4>全{{ item.session }}セッション</h4>
          </div>
        </div>
        <div style="display: flex; justify-content:center; align-items: flex-end;">
          <Button color="#FF5A36" style="font-size: 1em;" buttonText="学習する" width="27rem" :to="'/' + item.id"></Button>
        </div>
      </v-card>
      </v-sheet>
      <NuxtLink to="/" style="display: flex; justify-content: flex-end; color:#222222;">一覧を見る</NuxtLink>
    </v-sheet>
        
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
          summary: '現役エンジニアによる基礎文法徹底解説&ハンズオン。未経験者には意味不明な Python チュートリアルをしっかり学びましょう',
          image: '/assets/python.svg',
          session:'24'
        },
        {
          title: 'JavaScript & jQuery基礎講座',
          summary: '最も人気のあるプログラミング言語のひとつ、JavaScriptを知識ゼロから習得できます。jQueryの使い方も同時に学べるビギナー向けのコースです。',
          image: '/assets/jquery.svg',
          session:'30',
        },
      ]
    }
  },
  methods: {
    limitText(value) {
      if (!value) return '';
      if (value.length > 50) {
        return value.slice(0, 50) + '...';
      } else {
        return value;
      }
    }
  }
}
</script>

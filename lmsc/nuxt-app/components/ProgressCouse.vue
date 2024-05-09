<template>
    <v-card flat class="pt-2 pb-8 pl-6" color="#F5F5F5"
    style="border-radius: 0 5px 5px 5px;">
    <v-sheet class="mx-auto" width="60rem" color="#F5F5F5">
      <div class="mt-8 mb-8 d-flex justify-space-between">
        <v-card flat class="pa-7" width="28rem" v-for="(item, index) in items" :key="index">
          <div class="d-flex mb-5" style="align-items: flex-start;">
            <img src="/assets/python.svg" :alt="item.title" class="pr-4">
            <div>
              <h3>{{ truncateText(item.title,20) }}</h3>
              <p class="mb-2">{{ truncateText(item.summary,15) }}</p>
              <h4>全{{ item.session }}セッション</h4>
            </div>
          </div>
          <indicator />
          <Button  color="#FF5A36" style="font-size: 1em;" buttonText="学習する" width="100%" :to="'/details/' + item.id"></Button>
        </v-card>
      </div>
      <NuxtLink to="/" style="display: flex; justify-content: flex-end; color:#242424;" >もっとみる</NuxtLink>
    </v-sheet>
    </v-card>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          title: 'Python 3 入門 + 応用 ①',
          summary: '現役エンジニアによる基礎文法徹底解説&ハンズオン。未経験者には意味不明な Python チュートリアルをしっかり学ぶことができます。',
          image: '/assets/python.svg',
          session:'20'
        },
        {
          title: 'ECMAScriptとバージョン',
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
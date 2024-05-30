<script setup lang="ts">
import { reactive } from 'vue'
import Title from '~/features/course/components/titleHeader.vue'
import Contents from '~/features/course/components/courseContents.vue'
import FlagIcon from '~/assets/flag.svg'
import PythonIcon from '~/assets/python_icon.svg'
import JQueryIcon from '~/assets/jQuery_icon.svg'

const title = {
  img: FlagIcon,
  title: 'コース一覧',
}

const contents = reactive([
  {
    title:
      'Python入門 基礎文法徹底解説:チュートリアル網羅で初心者でもプログラミングできるようになる',
    img: PythonIcon,
    text: '現役エンジニアによる基礎文法徹底解説&ハンズオン。未経験者には意味不明な Python チュートリアルをしっかりと解説。',
    time: 80,
    num: 24,
  },
  {
    title: 'JavaScript & jQuery基礎講座',
    img: JQueryIcon,
    text: '最も人気のあるプログラミング言語のひとつ、JavaScriptを知識ゼロから習得できます。jQueryの使い方も同時に学べるビギナー向けのコースです。',
    time: 100,
    num: 30,
  },
])
</script>

<template>
  <main>
    <div class="main center">
      <Title :item="title" />
      <Contents :items="contents" />
    </div>
  </main>
</template>

<style scoped lang="scss">
main {
  width: 100%;
  height: auto;
}
.main {
  display: flex;
  flex-direction: column;
  max-width: 1000px;
  width: auto;
}
.space {
  width: 100%;
  height: 149px;
}

.center {
  margin: 0 auto;
}

@media screen and (max-width: 768px) {
  .main {
    max-width: 708px;
  }
  .space {
    height: 645px;
  }
}
</style>

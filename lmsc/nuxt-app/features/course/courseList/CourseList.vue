<script setup lang="ts">
import { reactive, defineProps } from 'vue'
import Title from '~/features/course/courseList/components/titleHeader.vue'
import Options from '~/features/course/courseList/components/courseOptions.vue'
import Contents from '~/features/course/courseList/components/courseContents.vue'
import FlagIcon from '~/assets/flag.svg'
import PythonIcon from '~/assets/python.svg'
import JQueryIcon from '~/assets/jQuery.svg'

const title = {
  img: FlagIcon,
  title: 'コース一覧',
}

const props = defineProps<{
  courses: any[]
}>()

// 仮データ

type TestData = {
  title: string
  img: string
  description: string
  time: number
  num: number
  completed: number
}

const contents = reactive([
  {
    title:
      'Python入門 基礎文法徹底解説:チュートリアル網羅で初心者でもプログラミングできるようになる',
    img: PythonIcon,
    description:
      '現役エンジニアによる基礎文法徹底解説&ハンズオン。未経験者には意味不明な Python チュートリアルをしっ現役エンジニアによる基礎文法徹底解説&ハンズオン。未経験者には意味不明な Python チュートリアルをしっ現役エンジニアによる基礎文法徹底解説&ハンズオン。',
    time: 80,
    num: 24,
    completed: 18,
    category: 'Python',
  },
  {
    title: 'JavaScript & jQuery基礎講座',
    img: JQueryIcon,
    description:
      '最も人気のあるプログラミング言語のひとつ、JavaScriptを知識ゼロから習得できます。jQueryの使い方も同時に学べるビギナー向けのコースです。',
    time: 100,
    num: 30,
    completed: 1,
    category: 'jQuery',
  },
])

const repeatedItems = computed(() => {
  let resultItem: TestData[] = []
  for (let i = 0; i < 3; i++) {
    resultItem = resultItem.concat(contents)
  }
  return resultItem
})

const items = ref(repeatedItems.value)

const sortOption = ref('')
const setSort = (newVal: string) => {
  sortOption.value = newVal
}

const categoryOption = ref('')
const setCategory = (newVal: string) => {
  categoryOption.value = newVal
}

const keywordOption = ref('')
const setKeyword = (newVal: string) => {
  keywordOption.value = newVal
}

const options = computed(() => ({
  type: 'List', // Contentsの表示切替用変数
  len: 70, // Contents readText()の最大文字数
  sort: sortOption.value,
  category: categoryOption.value,
  keyword: keywordOption.value,
}))
</script>

<template>
  <main>
    <div class="main center">
      <Options
        @updateSort="setSort"
        @updateCategory="setCategory"
        @updateKeyword="setKeyword"
      />
      <Title :item="title" />
      <Contents :items="items" :courses="courses" :options="options" />
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

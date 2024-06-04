<script setup lang="ts">
import { reactive } from 'vue'
import Title from '~/features/course/courseList/components/titleHeader.vue'
import Contents from '~/features/course/courseList/components/courseContents.vue'
import ProgressIcon from '~/assets/progress.svg'
import PythonIcon from '~/assets/python.svg'
import JQueryIcon from '~/assets/jQuery.svg'

import { getCourse, useGetCourse } from '~/features/course/api/getCourse'

const title = {
  img: ProgressIcon,
  title: '受講履歴',
}

const contents = reactive([
  {
    title:
      'Python入門 基礎文法徹底解説:チュートリアル網羅で初心者でもプログラミングできるようになる',
    img: PythonIcon,
    desc: '現役エンジニアによる基礎文法徹底解説&ハンズオン。未経験者には意味不明な Python チュートリアルをしっ現役エンジニアによる基礎文法徹底解説&ハンズオン。未経験者には意味不明な Python チュートリアルをしっ現役エンジニアによる基礎文法徹底解説&ハンズオン。',
    time: 80,
    num: 24,
    completed: 18,
  },
  {
    title: 'JavaScript & jQuery基礎講座',
    img: JQueryIcon,
    desc: '最も人気のあるプログラミング言語のひとつ、JavaScriptを知識ゼロから習得できます。jQueryの使い方も同時に学べるビギナー向けのコースです。',
    time: 100,
    num: 30,
    completed: 1,
  },
])

// type Data = {
//   course_id: number
//   title: string
//   desc: string
// }

// const CourseContents = ref<Data[]>([])

// let Beginning_id = 1
// let End_id = 11

// onMounted(async () => {
//   for (let i = Beginning_id; i < End_id; i++) {
//     try {
//       const { data, error, status } = useGetCourse(i)
//       await data.value
//       if (!error.value && status.value !== 'error') {
//         CourseContents.value.push(data.value) // データをcontentsに追加する
//       } else {
//         console.error(
//           `Failed to fetch course information for course ID: ${i}`,
//           error.value
//         )
//       }
//     } catch (err) {
//       console.error(
//         `Failed to fetch course information for course ID: ${i}`,
//         err
//       )
//     }
//   }
// })

const mode: string = 'History'
const len: number = 65
</script>

<template>
  <main>
    <div class="main center">
      <Title :item="title" />
      <Contents :items="contents" :type="mode" :len="len" />
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

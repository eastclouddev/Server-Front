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

const courses = ref(props.courses)
const category = ref([...new Set(courses.value.map(item => item.category))])

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
        :category="category"
      />
      <Title :item="title" />
      <Contents :courses="courses" :options="options" />
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

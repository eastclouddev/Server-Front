<script setup lang="ts">
import Title from '~/features/course/courseList/components/titleHeader.vue'
import Contents from '~/features/course/courseList/components/courseContents.vue'
import ProgressIcon from '~/assets/progress.svg'

const title = {
  img: ProgressIcon,
  title: '受講履歴',
}

const props = defineProps<{
  courses: any[]
}>()

const options = computed(() => ({
  type: 'History', // Contentsの表示切替用変数
  len: 65, // Contents readText()の最大文字数
  sort: '',
  category: '',
  keyword: '',
}))
</script>

<template>
  <main>
    <div class="main center">
      <Title :item="title" />
      <Contents :courses="props.courses" :options="options" />
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

<script setup lang="ts">
import { toRaw } from 'vue';
import Title from '~/features/test/components/TitleHeader.vue'
import Contents from '~/features/test/components/TestContents.vue'
import { useGetCurriculumDetail } from '@/features/test/api/getCurriculumDetail'

const Items = ref({
  img: 'mdi-check-circle',
  to: 'test',
  title: 'テスト',
});
let Questions = new Array();

const {
    data: courseData,
    error: courseError,
    status: courseStatus
} = useGetCurriculumDetail(1) // Todo:カリキュラムIDの取得
const rawData = toRaw(courseData.value);
if (rawData) {
  Items.value.title = rawData.title;
  if (rawData.quiz_content) {
    Questions = rawData.quiz_content;
  }
}

</script>

<template>
  <main>
    <div class="main center">
      <Title :item="Items" />
      <Contents :ques="Questions" />
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
  align-items: center;
  justify-content: center;
  flex-direction: column;
  max-width: 1209px;
  width: auto;
}

.center {
  margin: 0 auto;
}
.space {
  width: 100%;
  height: 1500px;
}

@media screen and (max-width: 768px) {
  .main {
    max-width: 702px;
  }
}
</style>

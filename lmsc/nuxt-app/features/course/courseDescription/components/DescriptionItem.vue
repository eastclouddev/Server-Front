<template>
  <div class="mx-aout">
    <v-card flat class="pt-2 pb-8 mt-8 mb-10" color="#fff7ec" style="border-radius: 0 5px 5px 5px;">
      <div class="mt-8 mb-8 pa-5 d-flex justify-center sp_itembox">
        <img src="assets/no_img.svg" alt="img" class="course_img">
        <template v-if="status === 'success'">
          <v-card flat color="#fff7ec" class="pa-7 sp_item" width="40rem" v-for="(section, index) in data.sections" :key="index">
            <div class="d-flex mb-5" style="align-items: flex-start;">
              <img :src="section.icon || 'assets/default_icon.svg'" alt="section.title" class="pr-4">
              <div>
                <h3 class="mb-3">{{ section.title }}</h3>
                <p class="mb-3">{{ section.description }}</p>
                <div class="d-flex align-center">
                  <span class="pr-2"><v-icon color="#FF5A36">mdi-clock-outline</v-icon></span><h4 class="pr-8">終了想定時間：{{ section.requiredTime }}時間</h4>
                  <span class="pr-2"><v-icon color="#FF5A36">mdi-book-open-blank-variant-outline</v-icon></span><h4>全{{ section.curriculums.length }}セッション</h4>
                </div>
              </div>
            </div>
            <Button color="#FF5A36" class="sp_button" style="font-size: 1em;" buttonText="学習する" width="100%" :to="'/details/' + section.section_id"></Button>
          </v-card>
        </template>
        <div v-if="status === 'pending'">読み込み中...</div>
        <div v-if="status === 'error'">エラーが発生しました: {{ error.message }}</div>
      </div>
    </v-card>
  </div>
</template>

<script setup>
import { useGetCourse } from '~/features/course/api/getCourse.ts'

const courseId = 1  // 取得したいコースのIDを設定
const { data, error, status } = useGetCourse(courseId)
</script>

<style lang="scss" scoped>
.course_img {
  width: 25rem;
}
@media (max-width: 1279px) {
.sp {
  &_itembox {
    flex-direction: column;
    align-items: flex-start;
  }
  &_item {
    width: 90% !important;
    height: 45ex;
    margin-bottom: 40px;
    margin: auto;
  }
  &_button {
    margin-top: 40px;
    font-size: 1.5em !important;
  }
}
.course_img {
  width: 42rem;
  margin: auto;
}
}
</style>
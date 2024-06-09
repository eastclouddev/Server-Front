<script setup lang="ts">
import { useGetCourseList } from '~/features/course/api/getCourseList'
import CourseList from '~/features/course/courseList/CourseList.vue'

type Data = {
  course_id: number // コースのID
  title: string // コースのタイトル
  description: string // コースの説明
  created_user: number // コースを作成したユーザーのID
  thumbnail_url: string // コースのサムネイル画像のURL
  created_at: string // コースの作成日時 (ISO 8601形式)
}

const { data, error, status } = useGetCourseList()
console.log('コース一覧の情報', typeof data.value, data.value?.courses)
console.log('エラー', error)
console.log('ステータス', status)

const courses = computed<Data[]>(() =>
  Array.isArray(data.value) ? data.value : []
)
</script>

<template>
  <CourseList :courses="courses" />
</template>

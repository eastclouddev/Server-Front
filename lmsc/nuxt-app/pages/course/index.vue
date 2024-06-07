<script setup lang="ts">
import ListView from '~/features/course/courseList/ListView.vue'
import { useGetCourses } from '~/features/course/api/getCourses'

type Data = {
  course_id: number // コースのID
  title: string // コースのタイトル
  description: string // コースの説明
  created_user: number // コースを作成したユーザーのID
  thumbnail_url: string // コースのサムネイル画像のURL
  created_at: string // コースの作成日時 (ISO 8601形式)
}

const { data, error, status } = useGetCourses()
console.log('コース一覧の情報', typeof data.value, data.value)

const courses = computed<Data[]>(() =>
  Array.isArray(data.value) ? data.value : []
)
</script>

<template>
  <ListView :courses="courses" />
</template>

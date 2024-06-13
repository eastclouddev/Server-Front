<script setup lang="ts">
import { useGetCourseHistory } from '~/features/course/api/getCourseHistory'
import CourseHistory from '~/features/course/courseList/CourseHistory.vue'

const user_id = 1
const { data, error, status } = useGetCourseHistory(user_id)
console.log(data.value)
console.log(error.value)
console.log(status.value)
const courses = computed(() => data.value ?? [])
</script>

<template>
  <CourseHistory :courses="courses" />
</template>

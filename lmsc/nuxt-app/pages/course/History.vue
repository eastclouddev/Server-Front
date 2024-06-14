<script setup lang="ts">
import { useGetCourseHistory } from '~/features/course/api/getCourseHistory'
import CourseHistory from '~/features/course/courseList/CourseHistory.vue'

const student_id = 1
const { data, error, status } = useGetCourseHistory(student_id)
console.log(data.value)
console.log(error.value)
console.log(status.value)
const courses = computed(() => (Array.isArray(data.value) ? data.value : []))
</script>

<template>
  <CourseHistory :courses="courses" />
</template>

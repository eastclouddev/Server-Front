<script setup lang="ts">
import { useGetCourseList } from '~/features/course/api/getCourseList'
import { useGetCourse } from '~/features/course/api/getCourse'
import CoursesList from '~/features/course/courseList/CourseList.vue'

const { data, error, status } = useGetCourseList()
console.log('コース一覧の情報', typeof data.value, data.value?.courses)
console.log('エラー', error)
console.log('ステータス', status)

const courses = computed(() => (Array.isArray(data.value) ? data.value : []))

const courseDetails = ref<any[]>([])
watchEffect(() => {
  courseDetails.value = []
  courses.value.forEach(async course => {
    const { data, error, status } = useGetCourse(course.course_id)
    if (data.value) {
      courseDetails.value.push(data.value)
    }
    console.log(
      `コース${data.value?.course_id}の情報`,
      typeof data.value,
      data.value
    )
    console.log('エラー', error)
    console.log('ステータス', status)
  })
})
</script>

<template>
  <CoursesList :courses="courseDetails" />
</template>

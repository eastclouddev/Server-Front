<script setup lang="ts">
import { useGetCourseList } from '~/features/course/api/getCourseList'
import { useStartCourse } from '~/features/course/api/startCourse'

import CoursesList from '~/features/course/courseList/CourseList.vue'

const { mutate: startCourse } = useStartCourse()

const testStartCourse = async () => {
  const postData = {
    user_id: 1,
    course_ids: [1, 2],
  }
  try {
    await startCourse(
      { postData },
      {
        onSuccess: () => {
          console.log('コースの開始に成功しました')
        },
        onError: (error: any) => {
          console.error('エラーが発生しました:', error.message)
          throw error
        },
      }
    )
  } catch (error) {
    console.error('エラーの処理:', error)
  }
}

const { data, error, status } = useGetCourseList()
const courses = computed(() => data.value?.courses ?? [])
testStartCourse()
</script>

<template>
  <CoursesList :courses="courses" />
</template>

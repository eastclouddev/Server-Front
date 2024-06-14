<script setup lang="ts">
import { useGetCourseList } from '~/features/course/api/getCourseList'
import { useStartCourse } from '~/features/course/api/startCourse'

import CoursesList from '~/features/course/courseList/CourseList.vue'

const { mutate: startCourse } = useStartCourse()

const sampleFunc = async (course_id: number) => {
  console.log('get id: ', course_id)
  const postData = {
    user_id: 1,
    course_ids: [1, 2],
  }
  console.log('postData:', postData)
  try {
    await startCourse(
      { postData },
      {
        onSuccess: () => {
          console.log('コースの開始に成功しました')
        },
        onError: (error: any) => {
          if (error.response) {
            console.error('エラーが発生しました', error.response.data)
          } else {
            console.error('エラーが発生しました', error.message)
          }
        },
      }
    )
  } catch (error) {
    console.error('startCourseの実行中にエラーが発生しました', error)
  }
}

const { data } = useGetCourseList()

const courses = computed(() => data.value?.courses ?? [])
</script>

<template>
  <CoursesList :courses="courses" @startCourse="sampleFunc" />
</template>

<script setup lang="ts">
import { useGetCourseHistory } from '~/features/course/api/getCourseHistory'
import { useGetCourseList } from '~/features/course/api/getCourseList'
import CourseHistory from '~/features/course/courseList/CourseHistory.vue'

const student_id = 1
const { data: historyData, error, status } = useGetCourseHistory(student_id)
console.log(
  typeof historyData.value,
  historyData.value,
  historyData.value?.progresses
)
console.log(error.value)
console.log(status.value)
const courseIds =
  historyData.value?.progresses?.map(item => item.course_id) || []
console.log(courseIds)

const { data: listData } = useGetCourseList()
const courseList = computed(() => listData.value?.courses ?? [])
const coursesHistory = computed(() =>
  courseList.value.filter(course => courseIds.includes(course.course_id))
)

const courses = computed(() => {
  return coursesHistory.value.map(course => {
    const progressIndex = historyData.value?.progresses.findIndex(
      p => p.course_id === course.course_id
    )
    if (progressIndex !== undefined) {
      const progress = historyData.value?.progresses[progressIndex]
      return {
        course_id: course.course_id,
        title: course.title,
        thumbnail_url: course.thumbnail_url,
        description: course.description,
        created_user: course.created_user,
        created_at: course.created_at,
        last_accessed_at: progress?.last_accessed_at,
        progress_percentage: progress?.progress_percentage,
        status: progress?.status,
      }
    }
  })
})
console.log(courses.value)
</script>

<template>
  <CourseHistory :courses="courses" />
</template>

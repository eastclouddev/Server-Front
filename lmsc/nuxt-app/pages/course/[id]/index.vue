<template>
  <v-row>
    <v-col>
      <LoadingAndError
        :errors="[courseError, questionsError]"
        :statuses="[courseStatus, questionsStatus]"
      >
        <CourseDetails :course="course" :questionList="rawQuestionsData" />
      </LoadingAndError>
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
import { useGetCourse } from '~/features/course/api/getCourse'
import { useGetCurriculumQuestions } from '~/features/course/api/getCurriculumQuestions'
import CourseDetails from '~/features/course/courseDetail/components/CourseDetails.vue'
import LoadingAndError from '~/components/LoadingAndError.vue'
import { toRaw } from 'vue'
import type { CourseDetail } from '~/features/course/types'

const route = useRoute()
const courseId = Number(route.params.id)
// Todo: curriculumIdを取得する
const curriculumId = 1
const {
  data: courseData,
  error: courseError,
  status: courseStatus,
} = useGetCourse(courseId)
const {
  data: questionsData,
  error: questionsError,
  status: questionsStatus,
} = useGetCurriculumQuestions(curriculumId)

const rawQuestionsData = questionsData.value
  ? toRaw(questionsData.value.questions)
  : []
console.log('questionsData', rawQuestionsData)

const courseRowData = courseData.value

const course: CourseDetail = {
  course_id: courseRowData?.course_id,
  title: courseRowData?.title,
  description: courseRowData?.description,
  level: '初級', // 仮データ
  duration: 30.5, // 仮データ
  video: {
    video_url: '/_nuxt/assets/81562_1280x720.mp4', // 仮データ
    thumbnail_url: 'https://picsum.photos/id/237/200/300', // 仮データ
    thumbnail_url: 'https://picsum.photos/id/237/200/300', // 仮データ
  },
  sections: courseRowData?.sections,
}
</script>

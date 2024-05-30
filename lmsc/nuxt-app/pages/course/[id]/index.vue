<template>
  <v-container>
    <v-row>
      <v-col>
        <LoadingAndError :error="error" :status="status">
          <CourseDetails :course="courseData" />
        </LoadingAndError>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { useGetCourse } from '~/features/course/api/getCourse'
import CourseDetails from '~/features/course/courseDetail/components/CourseDetails.vue'
import LoadingAndError from '~/components/LoadingAndError.vue'
import type { CourseDetail } from '~/features/course/types'

const route = useRoute()
const courseId = Number(route.params.id)
const { data, error, status } = useGetCourse(courseId)

const courseRowData = data.value

const courseData: CourseDetail = {
  course_id: courseRowData?.course_id,
  title: courseRowData?.title,
  description: courseRowData?.description,
  level: '初級', // 仮データ
  duration: 30.5, // 仮データ
  video: {
    video_url: '/_nuxt/assets/81562_1280x720.mp4', // 仮データ
    thumbnail_url: 'https://picsum.photos/id/237/200/300', // 仮データ
  },
  sections: courseRowData?.sections,
}
</script>

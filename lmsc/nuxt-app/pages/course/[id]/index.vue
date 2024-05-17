<template>
  <v-container>
    <v-row>
      <v-col>
        <LoadingAndError :error="error" :status="status">
          <CourseDetails :course="data" />
        </LoadingAndError>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { useGetCourse } from '~/features/course/api/getCourse'
import CourseDetails from '~/features/course/courseDetail/components/CourseDetails.vue'
import LoadingAndError from '~/components/LoadingAndError.vue'

const route = useRoute()
const courseId = Number(route.params.id)
const { data, error, status } = useGetCourse(courseId)

definePageMeta({
  layout: 'authenticated',
})
</script>

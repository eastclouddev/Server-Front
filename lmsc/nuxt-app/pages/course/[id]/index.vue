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
import { useUserStore } from '~/store/user'

const route = useRoute()
const courseId = Number(route.params.id)
const { data, error, status } = useGetCourse(courseId)

definePageMeta({
  layout: 'authenticated',
  middleware: 'auth',
})

const userStore = useUserStore()
console.log('User store state in course page:', userStore.isAuthenticated)
</script>

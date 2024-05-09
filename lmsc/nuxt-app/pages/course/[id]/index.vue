<template>
  <v-container>
    <v-row>
      <v-col>
        <CourseDetails :course="data" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { useGetCourse } from "~/features/course/api/getCourse";
import CourseDetails from "~/features/course/courseDetail/components/CourseDetails.vue";

const route = useRoute();
const courseId = Number(route.params.id);
const { data, error, status } = useGetCourse(courseId);

const course = {
  title: data.value?.title || "",
  description: data.value?.description || "",
  section: data.value?.sections || "",
};
</script>

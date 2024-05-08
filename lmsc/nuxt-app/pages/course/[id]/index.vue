<template>
  <v-container>
    <v-row>
      <v-col>
        <CourseDetails
          :title="course.title"
          :level="course.level"
          :duration="course.duration"
          :description="course.description"
        />
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

console.log("status:", status.value);
console.log("error:", error.value);
console.log("data:", data.value);
console.log("title:", data.value?.title);
console.log("courseId:", courseId);

const course = {
  title: data.value?.title || "",
  level: "初級",
  duration: 30.5,
  description: data.value?.description || "",
};
</script>

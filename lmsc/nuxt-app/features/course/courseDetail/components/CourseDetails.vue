<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="8">
        <CourseVideo :video="props.course?.video || {}"/>
        <v-card flat>
          <client-only>
            <CourseTabs v-model:tab="tab" />
            <v-window v-model="tab">
              <v-window-item value="course-content" v-if="smAndDown">
                <CourseContent :sections="props.course?.sections || []" />
              </v-window-item>
              <v-window-item value="overview">
                <CourseOverview
                  :title="$props.course?.title || ''"
                  :level="$props.course?.level || ''"
                  :duration="30.5"
                  :description="$props.course?.description || ''"
                />
              </v-window-item>
              <v-window-item value="questions">
                <CourseQuestions />
              </v-window-item>
              <v-window-item value="submissions">
                <CourseSubmissions />
              </v-window-item>
            </v-window>
          </client-only>
        </v-card>
      </v-col>
      <client-only>
        <v-col cols="12" md="4" v-if="mdAndUp">
          <CourseContent :sections="props.course?.sections || []" />
        </v-col>
      </client-only>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useDisplay } from "vuetify";
import CourseVideo from "./CourseVideo.vue";
import CourseTabs from "@/features/course/courseDetail/components/CourseTabs.vue";
import CourseContent from "@/features/course/courseDetail/components/CourseContent.vue";
import CourseOverview from "@/features/course/courseDetail/components/CourseOverview.vue";
import CourseQuestions from "@/features/course/courseDetail/components/CourseQuestions.vue";
import CourseSubmissions from "@/features/course/courseDetail/components/CourseSubmissions.vue";
import type { CourseDetailResponseBody } from "~/generated/api/@types";
import type { CourseDetail } from "../../types";

// CourseDetailResponseBodyが修正されたらコメントアウトしている方を使用する
// const props = defineProps<{ course: CourseDetailResponseBody | null }>();
const props = defineProps<{ course: CourseDetail }>();

const { smAndDown, mdAndUp } = useDisplay();
const tab = ref("overview");
</script>

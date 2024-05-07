<!-- CourseDetail.vue -->
<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="8">
        <CourseVideo />
        <v-card>
          <client-only>
            <CourseTabs v-model:tab="tab" />
            <v-card-text>
              <v-window v-model="tab">
                <v-window-item value="course-content" v-if="smAndDown">
                  <CourseContent />
                </v-window-item>
                <v-window-item value="overview">
                  <CourseOverview
                    :title="title"
                    :level="level"
                    :duration="duration"
                    :description="description"
                  />
                </v-window-item>
                <v-window-item value="questions">
                  <CourseQuestions />
                </v-window-item>
                <v-window-item value="submissions">
                  <CourseSubmissions />
                </v-window-item>
              </v-window>
            </v-card-text>
          </client-only>
        </v-card>
      </v-col>
      <client-only>
        <v-col cols="12" md="4" v-if="mdAndUp">
          <CourseContent />
        </v-col>
      </client-only>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useDisplay } from "vuetify";
import CourseVideo from "./CourseVideo.vue";
import CourseTabs from "./CourseTabs.vue";
import CourseContent from "./CourseContent.vue";
import CourseOverview from "./CourseOverview.vue";
import CourseQuestions from "./CourseQuestions.vue";
import CourseSubmissions from "./CourseSubmissions.vue";

const props = defineProps<{
  title: string;
  level: string;
  duration: number;
  description: string[];
}>();

const { smAndDown, mdAndUp } = useDisplay();
const tab = ref("overview");
</script>

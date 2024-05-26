<template>
  <v-container style="max-width: 1200px;">
    <v-row>
      <v-col cols="12" md="8">
        <CourseVideo :video="props.course?.video || {}" />
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
                <component
                  :is="currentQuestionComponent"
                  @switch-to-post="switchToQuestionPost"
                  @switch-to-detail="switchToQuestionDetail"
                  @switch-to-questions="switchToQuestions"
                  :questionList="props.questionList"
                />
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
import { ref, computed } from "vue";
import { useDisplay } from "vuetify";
import CourseVideo from "./CourseVideo.vue";
import CourseTabs from "@/features/course/courseDetail/components/CourseTabs.vue";
import CourseContent from "@/features/course/courseDetail/components/CourseContent.vue";
import CourseOverview from "@/features/course/courseDetail/components/CourseOverview.vue";
import CourseQuestions from "~/features/course/courseDetail/components/questions/CourseQuestions.vue";
import CourseQuestionsPost from "~/features/course/courseDetail/components/questions/CourseQuestionsPost.vue";
import CourseQuestionDetail from "~/features/course/courseDetail/components/questions/CourseQuestionDetail.vue";
import CourseSubmissions from "@/features/course/courseDetail/components/CourseSubmissions.vue";
import type { CourseDetailResponseBody, QuestionCreateResponseBody, Schemas__curriculums__QuestionListResponseBody } from "~/generated/api/@types";
import type { CourseDetail } from "../../types";

const props = defineProps<{ course: CourseDetail, questionList: QuestionCreateResponseBody[] | null }>();

const { smAndDown, mdAndUp } = useDisplay();
const tab = ref("overview");

// 状態管理
const currentQuestionComponentRef = ref("CourseQuestions");
const selectedQuestionId = ref<number | null>(null);

const currentQuestionComponent = computed(() => {
  switch (currentQuestionComponentRef.value) {
    case "post":
      return CourseQuestionsPost;
    case "detail":
      return CourseQuestionDetail;
    default:
      return CourseQuestions;
  }
});

const switchToQuestionPost = () => {
  currentQuestionComponentRef.value = "post";
};

const switchToQuestionDetail = (questionId: number) => {
  currentQuestionComponentRef.value = "detail";
  selectedQuestionId.value = questionId;
};

const switchToQuestions = () => {
  currentQuestionComponentRef.value = "CourseQuestions";
};
</script>

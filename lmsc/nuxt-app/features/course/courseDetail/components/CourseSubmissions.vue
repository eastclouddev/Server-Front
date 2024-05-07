<!-- CourseSubmissions.vue -->
<template>
  <v-card flat>
    <v-card-title class="text-h6">課題提出</v-card-title>
    <v-card-text>
      <v-list>
        <v-list-item v-for="(submission, index) in submissions" :key="index">
          <v-list-item-title>{{ submission.title }}</v-list-item-title>
          <v-list-item-subtitle
            >{{ submission.author }} -
            {{ submission.date }}</v-list-item-subtitle
          >
          <div>{{ submission.content }}</div>
        </v-list-item>
      </v-list>
    </v-card-text>
    <v-card-actions>
      <v-btn color="primary" @click="openSubmissionDialog"
        >課題を提出する</v-btn
      >
    </v-card-actions>
    <v-dialog v-model="submissionDialog" max-width="500px">
      <v-card>
        <v-card-title class="text-h5">課題提出フォーム</v-card-title>
        <v-card-text>
          <v-form @submit.prevent="submitAssignment">
            <v-text-field
              v-model="newSubmission.title"
              label="タイトル"
              required
            ></v-text-field>
            <v-textarea
              v-model="newSubmission.content"
              label="提出内容"
              required
            ></v-textarea>
            <v-btn type="submit" color="primary">提出</v-btn>
          </v-form>
        </v-card-text>
      </v-card>
    </v-dialog>
  </v-card>
</template>

<script setup lang="ts">
import { ref } from "vue";

const submissions = ref([
  {
    title: "課題1",
    author: "ユーザー1",
    date: "2023-05-01",
    content: "課題内容1",
  },
  {
    title: "課題2",
    author: "ユーザー2",
    date: "2023-05-02",
    content: "課題内容2",
  },
]);

const submissionDialog = ref(false);
const newSubmission = ref({
  title: "",
  content: "",
});

const openSubmissionDialog = () => {
  submissionDialog.value = true;
};

const submitAssignment = () => {
  // 課題の提出処理を実装
  // newSubmission.valueを使用して課題を提出し、submissionsに追加する
  submissionDialog.value = false;
  newSubmission.value = {
    title: "",
    content: "",
  };
};
</script>

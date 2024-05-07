<!-- CourseQuestions.vue -->
<template>
  <v-card flat>
    <v-card-title class="text-h6">質問</v-card-title>
    <v-card-text>
      <v-list>
        <v-list-item v-for="(question, index) in questions" :key="index">
          <v-list-item-title>{{ question.title }}</v-list-item-title>
          <v-list-item-subtitle
            >{{ question.author }} - {{ question.date }}</v-list-item-subtitle
          >
          <div>{{ question.content }}</div>
        </v-list-item>
      </v-list>
    </v-card-text>
    <v-card-actions>
      <v-btn color="primary" @click="openQuestionDialog">質問する</v-btn>
    </v-card-actions>
    <v-dialog v-model="questionDialog" max-width="500px">
      <v-card>
        <v-card-title class="text-h5">質問フォーム</v-card-title>
        <v-card-text>
          <v-form @submit.prevent="submitQuestion">
            <v-text-field
              v-model="newQuestion.title"
              label="タイトル"
              required
            ></v-text-field>
            <v-textarea
              v-model="newQuestion.content"
              label="質問内容"
              required
            ></v-textarea>
            <v-btn type="submit" color="primary">送信</v-btn>
          </v-form>
        </v-card-text>
      </v-card>
    </v-dialog>
  </v-card>
</template>

<script setup lang="ts">
import { ref } from "vue";

const questions = ref([
  {
    title: "質問1",
    author: "ユーザー1",
    date: "2023-05-01",
    content: "質問内容1",
  },
  {
    title: "質問2",
    author: "ユーザー2",
    date: "2023-05-02",
    content: "質問内容2",
  },
]);

const questionDialog = ref(false);
const newQuestion = ref({
  title: "",
  content: "",
});

const openQuestionDialog = () => {
  questionDialog.value = true;
};

const submitQuestion = () => {
  // 質問の送信処理を実装
  // newQuestion.valueを使用して質問を送信し、questionsに追加する
  questionDialog.value = false;
  newQuestion.value = {
    title: "",
    content: "",
  };
};
</script>

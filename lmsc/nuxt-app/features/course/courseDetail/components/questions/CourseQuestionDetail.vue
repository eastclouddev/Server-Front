<template>
    <v-card
      flat
      :style="{
        backgroundColor: `rgb(var(--v-theme-background))`,
        padding: '32px',
      }"
    >
    <div style="display: flex; align-items: center; font-size: 16px; margin-bottom: 16px;">
    <p @click="$emit('switch-to-questions')" style="cursor: pointer; color: #FF5A36;">質問一覧</p>
    <v-icon style="margin: 0 5px;">mdi-chevron-right</v-icon>
    <p style="color: #FF5A36;">{{ question.title }}</p>
  </div>
      <v-card-text>
        <h2>{{ question.title }}</h2>
        <v-list>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>{{ question.content }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <!-- ここに質問の詳細内容を追加 -->
        </v-list>
      </v-card-text>
    </v-card>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { useRoute } from 'vue-router';
  
  const route = useRoute();
  const questionId = route.params.questionId;
  
  // 質問の詳細データを取得するロジック
  const question = ref({
    title: '質問のタイトル1',
    content: '質問の内容1',
    // 他の質問詳細情報
  });
  
  const breadcrumbs = [
    { text: '質問一覧', href: `/course/${route.params.courseId}/questions` },
    { text: '質問詳細', disabled: true },
  ];
  </script>
  
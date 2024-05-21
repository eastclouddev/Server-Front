<template>
  <v-card
    flat
    :style="{
      backgroundColor: `rgb(var(--v-theme-background))`,
      padding: '32px',
    }"
  >
    <v-card-text>
      <v-breadcrumbs :items="breadcrumbs" />
      <h2>質問を投稿する</h2>
      <p>質問をする際の注意事項</p>
      <ul>
        <li>テキストが入ります。</li>
        <li>テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。</li>
        <li>テキストが入ります。</li>
        <li>テキストが入ります。テキストが入ります。テキストが入ります。</li>
      </ul>
      <v-form @submit.prevent="submitQuestion">
        <v-text-field
          v-model="newQuestion.title"
          label="タイトル"
          required
          outlined
          :rules="[rules.required]"
        ></v-text-field>
        <v-textarea
          v-model="newQuestion.goal"
          label="やりたいこと"
          required
          outlined
          :rules="[rules.required]"
        ></v-textarea>
        <v-textarea
          v-model="newQuestion.currentState"
          label="現状"
          required
          outlined
          :rules="[rules.required]"
        ></v-textarea>
        <v-textarea
          v-model="newQuestion.researched"
          label="自分が調べたこと"
          required
          outlined
          :rules="[rules.required]"
        ></v-textarea>
        <v-textarea
          v-model="newQuestion.content"
          label="質問内容"
          required
          outlined
          :rules="[rules.required]"
        ></v-textarea>
        <v-file-input
          v-model="newQuestion.file"
          label="ファイル選択"
          prepend-icon="mdi-paperclip"
          outlined
        ></v-file-input>
        <v-btn type="submit" color="orange">投稿する</v-btn>
      </v-form>
    </v-card-text>
  </v-card>
</template>

<script setup>
import { ref } from 'vue';

const newQuestion = ref({
  title: '',
  goal: '',
  currentState: '',
  researched: '',
  content: '',
  file: null,
});

const rules = {
  required: value => !!value || '必須項目です',
};

const breadcrumbs = [
  { text: '質問一覧', href: '#' },
  { text: '質問を投稿する', disabled: true },
];

const submitQuestion = () => {
  // 質問の送信処理を実装
  console.log(newQuestion.value);
};
</script>

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
      <p style="color: #FF5A36;">質問を投稿する</p>
    </div>
    <v-card-text>
      <h2 class="my-4">質問をする際の注意事項</h2>
      <ul class="ml-4">
        <li>テキストが入ります。</li>
        <li>テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。</li>
        <li>テキストが入ります。</li>
        <li>テキストが入ります。テキストが入ります。テキストが入ります。</li>
      </ul>
      <hr class="border-t border-dashed my-10">
      <v-form @submit.prevent="submitQuestion">
        <TextInput
          v-model="newQuestion.title"
          label="タイトル"
          placeholder="タイトルを入力してください"
          outlined
          required
        />
        <TextArea
          v-model="newQuestion.goal"
          label="やりたいこと"
          placeholder="やりたいことを入力してください"
          outlined
          required
        />
        <TextArea
          v-model="newQuestion.currentState"
          label="現状"
          placeholder="現状を入力してください"
          outlined
          required
        />
        <TextArea
          v-model="newQuestion.researched"
          label="自分が調べたこと"
          placeholder="自分が調べたことを入力してください"
          outlined
          required
        />
        <TextArea
          v-model="newQuestion.content"
          label="質問内容"
          placeholder="質問内容を入力してください"
          outlined
          required
        />
        <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 20px; padding: 10px; border-radius: 5px;">
          <OutlinedButton @click="selectFile" color="#FF5A36" textColor="#FF5A36" fontSize="16px" fontWeight="normal" icon="mdi-paperclip">ファイル選択</OutlinedButton>
          <!-- v-file-inputは非表示 -->
          <v-file-input ref="fileInput" v-model="newQuestion.file" label="ファイル選択" prepend-icon="mdi-paperclip" variant="outlined" outlined style="display: none;"></v-file-input>
          <SolidButton type="submit" color="#FF5A36" textColor="white" fontSize="16px" icon="mdi-send">投稿する</SolidButton>
        </div>
      </v-form>
    </v-card-text>
  </v-card>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import TextInput from '@/components/TextInput.vue';
import TextArea from '@/components/TextArea.vue';
import OutlinedButton from '@/components/OutlinedButton.vue';
import SolidButton from '@/components/SolidButton.vue';
import { useCreateQuestion } from '@/features/course/api/createQuestion';

const newQuestion = ref({
  title: '',
  goal: '',
  currentState: '',
  researched: '',
  content: '',
  file: null,
});

const route = useRoute();
const curriculumId = Number(route.params.curriculumId) || 1;

const fileInput = ref<HTMLInputElement | null>(null);
const selectFile = () => {
  fileInput.value?.click();
};

const { mutate: createQuestion } = useCreateQuestion();

const submitQuestion = async () => {
  console.log('フォームのデータ: ', newQuestion.value);

  const questionContent = `
    【やりたいこと】
    ${newQuestion.value.goal}

    【現状】
    ${newQuestion.value.currentState}

    【自分が調べたこと】
    ${newQuestion.value.researched}

    【質問内容】
    ${newQuestion.value.content}
  `;

  const questionData = {
    user_id: 1,
    title: newQuestion.value.title,
    content: questionContent,
    media_content: newQuestion.value.file ? [{ url: newQuestion.value.file }] : [],
  };
  console.log('質問データ: ', questionData);

  createQuestion({ curriculumId, questionData }, {
    onSuccess: () => {
      console.log('質問が投稿されました');
    },
    onError: (error: any) => {
      if (error.response) {
        console.error('エラーが発生しました', error.response.data);
      } else {
        console.error('エラーが発生しました', error.message);
      }
    }
  });
};
</script>

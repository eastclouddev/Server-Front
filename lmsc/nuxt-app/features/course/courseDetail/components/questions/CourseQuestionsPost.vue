<template>
  <v-card
    flat
    :style="{
      backgroundColor: `rgb(var(--v-theme-background))`,
      padding: '32px',
    }"
  >
    <v-card-text>
      <div style="display: flex; align-items: center; font-size: 16px; margin-bottom: 16px;">
        <p @click="$emit('switch-to-questions')" style="cursor: pointer; color: #FF5A36;">質問一覧</p>
        <v-icon style="margin: 0 5px;">mdi-chevron-right</v-icon>
        <p style="color: #FF5A36;">質問を投稿する</p>
      </div>
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
          variant="outlined"
          required
          outlined
          :rules="[rules.required]"
        ></v-text-field>
        <v-textarea
          v-model="newQuestion.goal"
          label="やりたいこと"
          variant="outlined"
          required
          outlined
          :rules="[rules.required]"
        ></v-textarea>
        <v-textarea
          v-model="newQuestion.currentState"
          label="現状"
          variant="outlined"
          required
          outlined
          :rules="[rules.required]"
        ></v-textarea>
        <v-textarea
          v-model="newQuestion.researched"
          label="自分が調べたこと"
          variant="outlined"
          required
          outlined
          :rules="[rules.required]"
        ></v-textarea>
        <v-textarea
          v-model="newQuestion.content"
          label="質問内容"
          variant="outlined"
          required
          outlined
          :rules="[rules.required]"
        ></v-textarea>
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

<script setup>
import { ref } from 'vue';
import OutlinedButton from '@/components/OutlinedButton.vue';
import SolidButton from '@/components/SolidButton.vue';

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

const fileInput = ref(null);
const selectFile = () => {
  if (fileInput.value) {
    fileInput.value.$el.querySelector('input').click();
  }
}

const submitQuestion = () => {
  // 質問の送信処理を実装
  console.log(newQuestion.value);
};
</script>

<template>
  <v-card
    flat
    :style="{
      backgroundColor: `rgb(var(--v-theme-background))`,
      padding: '32px',
    }"
  >
    <v-card-text>
      <v-row class="mb-3" v-if="!smAndDown" align-content="center">
        <v-col cols="3.5" class="d-flex align-center">
          <v-select variant="outlined" :items="filters" label="フィルター" dense></v-select>
        </v-col>
        <v-col cols="3.5" class="d-flex align-center">
          <v-select variant="outlined" :items="sortOptions" label="質問を絞り込む" dense></v-select>
        </v-col>
        <v-spacer></v-spacer>
        <v-col cols="4" class="align-center justify-end">
          <SolidButton color-orange class="button" :fullWidth="true" @click="openQuestionDialog">質問する</SolidButton>
        </v-col>
      </v-row>
      <v-row class="mb-3" v-else>
        <v-col cols="12" class="d-flex align-center" style="height: 70px; margin-bottom: 20px;">
          <SolidButton color-orange class="button" :fullWidth="true" fontSize="16px" @click="openQuestionDialog">質問する</SolidButton>
        </v-col>
        <v-col cols="5" class="d-flex align-center" style="height: 70px;">
          <v-select variant="outlined" :items="filters" label="フィルター" dense></v-select>
        </v-col>
        <v-col cols="7" class="d-flex align-center" style="height: 70px;">
          <v-select variant="outlined" :items="sortOptions" label="質問を絞り込む" dense></v-select>
        </v-col>
      </v-row>
      <div class="mt-3 mb-2" style="font-weight: bold; font-size: 24px;">このコースに関する質問 ({{ questions.length }})</div>
      <v-list style="background: none; padding: 10px;">
        <template v-for="(question, index) in questions" :key="index">
          <v-list-item class="mt-3 list-item-border">
            <v-row no-gutters>
              <v-col cols="auto">
                <v-list-item-avatar>
                  <img src="/assets/icons/avatar.svg" alt="Avatar" style="width: 40px; height: 40px;" />
                </v-list-item-avatar>
              </v-col>
              <v-col style="margin-left: 10px;">
                <v-list-item-content>
                  <v-list-item-title style="font-weight: bold;" class="mb-2">
                    {{ question.title }}
                    <span v-if="question.new" class="ml-2" style="font-weight: bold; color: #FF5A36;">New!</span>
                  </v-list-item-title>
                  <v-list-item-subtitle style="margin-bottom: 1rem;">
                    {{ question.content }}
                  </v-list-item-subtitle>
                  <v-list-item-subtitle class="d-flex justify-space-between align-center" style="opacity: 1 !important;">
                    <span>
                      <span style="color: #FF5A36; margin-right: 10px;">{{ question.author }}</span>
                      <span style="color: #B5B5B5;">{{ question.date }}</span>
                    </span>
                    <div class="d-flex align-center">
                      <span style="font-weight: bold;">{{ question.comments }}</span>
                      <img src="/assets/icons/comment.svg" alt="Comment" class="ml-2 opaque-icon" style="width: 20px; height: 20px;" />
                    </div>
                  </v-list-item-subtitle>
                </v-list-item-content>
              </v-col>
            </v-row>
          </v-list-item>
        </template>
      </v-list>


    </v-card-text>
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
import { useDisplay } from "vuetify";

const { smAndDown } = useDisplay();

const questions = ref([
  {
    title: "コードについて。",
    author: "山田 太郎",
    date: "3日前",
    content: "コードが正しく反映されないのですが、どこが...",
    comments: 2,
    new: true,
  },
  {
    title: "コードについて。",
    author: "山田 太郎",
    date: "3日前",
    content: "コードが正しく反映されないのですが、どこが...",
    comments: 2,
    new: false,
  },
  {
    title: "コードについて。",
    author: "山田 太郎",
    date: "3日前",
    content: "コードが正しく反映されないのですが、どこが...",
    comments: 2,
    new: false,
  },
]);

const filters = ["フィルター1", "フィルター2"];
const sortOptions = ["オプション1", "オプション2"];

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

<style scoped>
.list-item-border {
  border-top: 1px solid #ccc;
  padding-top: 15px;
}
.list-item-border:last-child {
  border-bottom: 1px solid #ccc;
  padding-bottom: 15px;
}
.mt-3 {
  margin-top: 1rem;
}
.ml-1 {
  margin-left: 0.25rem;
}
.ml-2 {
  margin-left: 0.5rem;
}
.d-flex {
  display: flex;
}
.justify-space-between {
  justify-content: space-between;
}
.align-center {
  align-items: center;
  justify-content: center;
}
.justify-end {
  justify-content: flex-end;
}
.mb-2 {
  margin-bottom: 0.5rem;
}
</style>

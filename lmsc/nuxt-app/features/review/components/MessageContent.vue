<template>
  <v-card flat class="mx-auto pa-7 mb-8" width="90%">
    <div class="d-flex justify-space-between align-center mb-4">
      <div class="d-flex">
        <img src="/assets/account.svg" alt="">
        <v-card-title style="font-weight:bold;">課題提出</v-card-title>
      </div>
    </div>
    <v-divider class="#CFCFCF" thickness="1"></v-divider>

    <v-card flat class="pt-8 pb-8 mt-8 mb-8" color="#FFF7EC">
      <v-sheet class="pa-8 mx-auto" width="90%" color="#FFF7EC">
        <v-breadcrumbs :items="breadcrumbs" color="#FF5A36" class="pl-0">
          <template v-slot:divider>
            <v-icon icon="mdi-chevron-right"></v-icon>
          </template>
        </v-breadcrumbs>

        <v-card flat class="pa-7 mx-auto" color="#FFF7EC">
          <v-list class="pa-0">
            <ThreadItem
              v-for="(thread, index) in threads" :key="index"
              :thread="thread"/>
          </v-list>
        </v-card>
      </v-sheet>
    </v-card>
    <v-alert v-if="error" type="error">{{ error }}</v-alert>
  </v-card>
</template>

<script>

import { ref, computed } from 'vue'
import { useGetReviewRequest } from '~/features/review/api/getReview.ts';
import ThreadItem from '~/components/ThreadItem.vue';

export default {
  components: {
    ThreadItem,
  },
  setup() {
    const reviewRequestId = 2; // 実際のIDに置き換えてください
    const { data, error } = useGetReviewRequest(reviewRequestId);

    const threads = computed(() => {
      if (data.value) {
        console.log('API取得データ:', data.value)
        const responses = data.value.review_responses || []; // responsesが存在しない場合に空の配列を使用
        return [{
          user_id: data.value.review_request.user.user_id,
          user_name: data.value.review_request.user.name,
          title: data.value.review_request.title,
          content: data.value.review_request.content,
          date: data.value.review_request.created_at,
          messages: responses.map(message => ({
            icon: '/assets/accountcircle.svg',
            author: message.user.name,
            title: message.title || '返信',
            content: message.content,
            date: message.created_at,
            expanded: false,
          }))
        }];
      }
      return [];
    });

    const breadcrumbs = ref([
      {
        title: 'ダッシュボード',
        disabled: false,
        href: '/dashboard',
      },
      {
        title: '課題提出一覧',
        disabled: false,
        href: '/review',
      },
      {
        title: '文字列の配列について',
        disabled: false,
      },
    ]);

    if (error.value) {
      console.error('API取得エラー:', error.value)
    }

    return {
      breadcrumbs,
      threads,
      error
    };
  },
};
</script>
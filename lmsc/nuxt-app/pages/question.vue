<template>
  <div>
    <Head>
      <Title>質問一覧 | iDemy</Title>
      <Meta name="description" content="iDemy | 質問一覧画面" />
    </Head>
    <v-container>
      <QuestionSummary />
    </v-container>
  </div>
</template>
<script setup>
import QuestionSummary from '~/features/question/components/QuestionSummary.vue'
</script>

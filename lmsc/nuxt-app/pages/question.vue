<template>
    <Head>
      <Title>質問一覧 | iDemy</Title>
      <Meta name="description" content="iDemy | 質問一覧画面" />
    </Head>
    <v-container>
      <QuestionSummary />
    </v-container>
</template>
<script setup>
import QuestionSummary from '~/features/auth/question/components/QuestionSummary.vue';
</script>

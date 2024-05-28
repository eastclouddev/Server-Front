<template>
    <Head>
      <Title>質問一覧 | iDemy</Title>
      <Meta name="description" content="iDemy | 質問一覧画面" />
    </Head>
    <v-container>
      <QuestionSummary />
      <sample />
    </v-container>
</template>
<script setup>
import QuestionSummary from '~/features/auth/question/components/QuestionSummary.vue';
import sample from '~/features/auth/question/components/sample.vue';
</script>

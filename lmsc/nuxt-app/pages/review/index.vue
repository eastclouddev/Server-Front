<template>
  <Head>
    <Title>レビュー一覧 | iDemy</Title>
    <Meta name="description" content="iDemy | レビュー一覧画面" />
  </Head>
  <v-container>
    <ReviewSummary />
  </v-container>
</template>
<script setup>
import ReviewSummary from '~/features/review/components/ReviewSummary.vue'
import useGetReviewList from '~/features/review/api/getReviewList'

const studentId = 3
const { data, error, status } = useGetReviewList(studentId)
console.log('data', data)
console.log('error', error)
console.log('status', status)
</script>

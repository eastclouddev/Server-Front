<template>
  <Head>
    <Title>レビュー一覧 | iDemy</Title>
    <Meta name="description" content="iDemy | レビュー一覧画面" />
  </Head>
  <LoadingAndError :error="error" :status="status">
    <v-container>
      <ReviewSummary />
      <div v-if="status === 'pending'">Loading...</div>
      <div v-else-if="error">Error: {{ error.message }}</div>
      <div v-else>
        <ul>
          <li v-for="review in data?.reviews" :key="review.id">
            {{ review.content }}
          </li>
        </ul>
      </div>
    </v-container>
  </LoadingAndError>
</template>

<script setup>
import { ref, computed } from 'vue'
import ReviewSummary from '~/features/review/components/ReviewSummary.vue'
import { useGetReviewList } from '~/features/review/api/getReviewList'
import LoadingAndError from '~/components/LoadingAndError.vue'

const studentId = 3
const { data, error, status } = useGetReviewList(studentId)

console.log('data', data.value ? data.value.reviews : 'No data')
console.log('error', error)
console.log('status', status)
</script>

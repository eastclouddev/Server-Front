<template>
  <Head>
    <Title>レビュー一覧 | iDemy</Title>
    <Meta name="description" content="iDemy | レビュー一覧画面" />
  </Head>
  <!-- <LoadingAndError :error="myReviewListError" :status="myReviewListStatus"> -->
  <v-container>
    <ReviewSummary :reviews="reviews" />
    <div v-if="myReviewListStatus === 'pending'">Loading...</div>
    <div v-else-if="myReviewListError">
      Error: {{ myReviewListError.message }}
    </div>
  </v-container>
  <!-- </LoadingAndError> -->
</template>

<script setup>
import { ref, onMounted } from 'vue'
import ReviewSummary from '~/features/review/components/ReviewSummary.vue'
import { useGetMyReviewList } from '~/features/review/api/getMyReviewList'
// import LoadingAndError from '~/components/LoadingAndError.vue'

const studentId = 3
const {
  data: myReviewListData,
  error: myReviewListError,
  status: myReviewListStatus,
} = useGetMyReviewList(studentId)
const reviews = ref([])

if (myReviewListData.value) {
  reviews.value = myReviewListData.value.reviews
}

console.log(
  'myReviewListData',
  myReviewListData.value ? myReviewListData.value.reviews : []
)
console.log('myReviewListError', myReviewListError)
console.log('myReviewListStatus', myReviewListStatus)
</script>

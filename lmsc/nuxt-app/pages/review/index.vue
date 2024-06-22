<template>
  <Head>
    <Title>レビュー一覧 | iDemy</Title>
    <Meta name="description" content="iDemy | レビュー一覧画面" />
  </Head>
  <LoadingAndError :error="reviewListError" :status="reviewListStatus">
    <v-container>
      <ReviewSummary :reviews="reviews" @sort-change="fetchReviews" />
      <div v-if="reviewListStatus === 'pending'">Loading...</div>
      <div v-else-if="reviewListError">
        Error: {{ reviewListError.message }}
      </div>
    </v-container>
  </LoadingAndError>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import ReviewSummary from '~/features/review/components/ReviewSummary.vue'
import { fetchReviewList } from '~/features/review/api/fetchReviewList'
import { useUserStore } from '~/store/user'
import LoadingAndError from '~/components/LoadingAndError.vue'

const userStore = useUserStore()
const userId = userStore.$state.user?.id
const userRole = userStore.$state.user?.role_id

const reviews = ref([])
const reviewListError = ref(null)
const reviewListStatus = ref('pending')
const selectedSort = ref('desc') // Default sort order

const fetchReviews = async (sortOrder = selectedSort.value) => {
  if (!userId || userRole === undefined) {
    console.log('User ID or role is missing')
    reviewListError.value = new Error('User ID or role is missing')
    reviewListStatus.value = 'error'
    return
  }

  console.log('Fetching reviews...')
  reviewListStatus.value = 'pending'
  const { data, error, status } = await fetchReviewList(
    userId,
    userRole,
    sortOrder
  )
  reviewListError.value = error.value
  reviewListStatus.value = status.value

  if (data.value) {
    reviews.value = data.value.reviews
  } else {
    console.log('No data fetched')
  }
}

onMounted(() => {
  console.log('Component mounted')
  console.log('userId:', userId)
  console.log('userRole:', userRole)
  fetchReviews()
})
</script>

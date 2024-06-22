<template>
  <div>
    <NewsItem />
    <ProgressManagement />
    <QuestionItem />
    <ReviewItem />
  </div>
</template>
<script>
import NewsItem from '~/features/dashboard/components/NewsItem.vue'
import ProgressManagement from '~/features/dashboard/components/ProgressManagement.vue'
import QuestionItem from '~/features/dashboard/components/QuestionItem.vue'
import ReviewItem from '~/features/dashboard/components/ReviewItem.vue'

export default {
  components: {
    NewsItem,
    ProgressManagement,
    QuestionItem,
    ReviewItem,
  },
}
</script>

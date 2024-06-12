<template>
  <div>
    <NewsItem />
    <ProgressManagement />
    <QuestionItem />
    <ReviewItem />
  </div>
</template>
<script>
import NewsItem from "~/features/auth/dashboard/components/NewsItem.vue";
import ProgressManagement  from "~/features/auth/dashboard/components/ProgressManagement.vue";
import QuestionItem  from "~/features/auth/dashboard/components/QuestionItem.vue";
import ReviewItem  from "~/features/auth/dashboard/components/ReviewItem.vue";

export default {
  components: {
    NewsItem,
    ProgressManagement,
    QuestionItem,
    ReviewItem
  },
}
</script>
<template>
  <div>
    <NewsItem />
    <!-- イニシャルでの実装なし -->
    <!-- <StudyItem /> -->
    <ProgressItem />
    <CourseItem />
    <RecommendationItem />
  </div>
</template>
<script>
import NewsItem from '~/features/dashboard/components/NewsItem.vue'
import StudyItem from '~/features/dashboard/components/StudyItem.vue'
import ProgressItem from '~/features/dashboard/components/ProgressItem.vue'
import CourseItem from '~/features/dashboard/components/CourseItem.vue'
import RecommendationItem from '~/features/dashboard/components/RecommendationItem.vue'

export default {
  components: {
    NewsItem,
    StudyItem,
    ProgressItem,
    CourseItem,
    RecommendationItem,
  },
}
</script>

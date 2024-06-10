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
import NewsItem from "~/features/auth/dashboard/components/newsnews.vue";
import StudyItem  from "~/features/auth/dashboard/components/StudyItem.vue";
import ProgressItem  from "~/features/auth/dashboard/components/ProgressItem.vue";
import CourseItem  from "~/features/auth/dashboard/components/CourseItem.vue";
import RecommendationItem from "~/features/auth/dashboard/components/RecommendationItem.vue";

export default {
  components: {
    NewsItem,
    StudyItem,
    ProgressItem,
    CourseItem,
    RecommendationItem
  },
}
</script>
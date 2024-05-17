<template>
  <div>
    <NewsItem />
    <!-- イニシャルでの実装なし -->
    <!-- <StudyItem /> -->
    <ProgressItem />
    <CouseItem />
    <RecommendationItem />
  </div>
</template>
<script>
import NewsItem from "~/features/auth/dashboard/components/NewsItem.vue";
import StudyItem  from "~/features/auth/dashboard/components/StudyItem.vue";
import ProgressItem  from "~/features/auth/dashboard/components/ProgressItem.vue";
import CouseItem  from "~/features/auth/dashboard/components/CouseItem.vue";
import RecommendationItem from "~/features/auth/dashboard/components/RecommendationItem.vue";

export default {
  components: {
    NewsItem,
    StudyItem,
    ProgressItem,
    CouseItem,
    RecommendationItem
  },
}
</script>
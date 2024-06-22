<template>
  <div>
    <NewsItem />
    <ProgressManagement />
    <AccountManagement />
    <BillingsManagement />
    <MentorAssignment />
    <CourseItem />
  </div>
</template>
<script>
import NewsItem from '~/features/dashboard/components/NewsItem.vue'
import ProgressManagement from '~/features/dashboard/components/ProgressManagement.vue'
import AccountManagement from '~/features/dashboard/components/AccountManagement.vue'
import BillingsManagement from '~/features/dashboard/components/BillingsManagement.vue'
import MentorAssignment from '~/features/dashboard/components/MentorAssignment.vue'
import CourseItem from '~/features/dashboard/components/CourseItem.vue'

export default {
  components: {
    NewsItem,
    ProgressManagement,
    AccountManagement,
    BillingsManagement,
    MentorAssignment,
    CourseItem,
  },
}
</script>

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
import NewsItem from "~/features/auth/dashboard/components/NewsItem.vue";
import ProgressManagement  from "~/features/auth/dashboard/components/ProgressManagement.vue";
import AccountManagement  from "~/features/auth/dashboard/components/AccountManagement.vue";
import BillingsManagement  from "~/features/auth/dashboard/components/BillingsManagement.vue";
import MentorAssignment  from "~/features/auth/dashboard/components/MentorAssignment.vue";
import CourseItem  from "~/features/auth/dashboard/components/CourseItem.vue";

export default {
  components: {
    NewsItem,
    ProgressManagement,
    AccountManagement,
    BillingsManagement,
    MentorAssignment,
    CourseItem
  },
}
</script>
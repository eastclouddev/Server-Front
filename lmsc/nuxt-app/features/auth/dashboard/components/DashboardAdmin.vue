<template>
  <div>
    <NewsItem />
    <ProgressManagement />
    <AccountManagement />
    <BillingsManagement />
    <MentorAssignment />
    <CouseItem />
  </div>
</template>
<script>
import NewsItem from "~/features/auth/dashboard/components/NewsItem.vue";
import ProgressManagement  from "~/features/auth/dashboard/components/ProgressManagement.vue";
import AccountManagement  from "~/features/auth/dashboard/components/AccountManagement.vue";
import BillingsManagement  from "~/features/auth/dashboard/components/BillingsManagement.vue";
import MentorAssignment  from "~/features/auth/dashboard/components/MentorAssignment.vue";
import CouseItem  from "~/features/auth/dashboard/components/CouseItem.vue";

export default {
  components: {
    NewsItem,
    ProgressManagement,
    AccountManagement,
    BillingsManagement,
    MentorAssignment,
    CouseItem
  },
}
</script>
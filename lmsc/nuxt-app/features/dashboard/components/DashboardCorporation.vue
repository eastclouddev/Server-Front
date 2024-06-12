<template>
  <div>
    <NewsItem />
    <ProgressManagement />
    <AccountManagement />
  </div>
</template>
<script>
import NewsItem from "~/features/auth/dashboard/components/NewsItem.vue";
import ProgressManagement  from "~/features/auth/dashboard/components/ProgressManagement.vue";
import AccountManagement  from "~/features/auth/dashboard/components/AccountManagement.vue";


export default {
  components: {
    NewsItem,
    ProgressManagement,
    AccountManagement,
  },
}
</script>
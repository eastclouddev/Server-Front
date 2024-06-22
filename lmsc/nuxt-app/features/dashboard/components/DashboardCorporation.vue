<template>
  <div>
    <NewsItem />
    <ProgressManagement />
    <AccountManagement />
  </div>
</template>
<script>
import NewsItem from '~/features/dashboard/components/NewsItem.vue'
import ProgressManagement from '~/features/dashboard/components/ProgressManagement.vue'
import AccountManagement from '~/features/dashboard/components/AccountManagement.vue'

export default {
  components: {
    NewsItem,
    ProgressManagement,
    AccountManagement,
  },
}
</script>

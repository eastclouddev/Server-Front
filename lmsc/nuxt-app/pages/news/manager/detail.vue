<script setup lang="ts">
definePageMeta({
  middleware: 'auth',
})
import newsDetail from '~/features/news/manager/detail.vue'
</script>

<template>
  <newsDetail />
</template>

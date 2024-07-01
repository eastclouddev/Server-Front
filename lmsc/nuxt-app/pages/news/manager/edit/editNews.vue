<script setup lang="ts">
definePageMeta({
  middleware: 'auth',
})
import editNews from '~/features/news/manager/edit/editNews.vue'
</script>

<template>
  <editNews />
</template>

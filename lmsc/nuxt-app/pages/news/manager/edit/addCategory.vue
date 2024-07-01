<script setup lang="ts">
definePageMeta({
  middleware: 'auth',
})
import addCategory from '~/features/news/manager/edit/addCategory.vue'
</script>

<template>
  <addCategory />
</template>

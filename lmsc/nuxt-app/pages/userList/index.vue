<script setup lang="ts">
import userList from '~/features/userList/userList.vue'

const roles = ['法人', '法人代行', '管理者']
</script>

<template>
  <userList :role="roles[2]" />
</template>

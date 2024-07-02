<script setup lang="ts">
import addUser from '~/features/userList/addUser.vue'

const roles = ['法人', '管理者']
</script>

<template>
  <addUser :role="roles[1]" />
</template>

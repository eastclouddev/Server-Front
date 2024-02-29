<template>
  <NuxtLayout>
    <div>
      <h1>ユーザーリスト</h1>
      <ul>
        <li v-for="user in users" :key="user.id">
          {{ user.name }} - {{ user.email }}
        </li>
      </ul>
    </div>
  </NuxtLayout>
</template>

<script setup>
import axios from 'axios';
import { onMounted, ref } from 'vue';
import { UserService } from '~/services/UserService.js';

const users = ref([]);

onMounted(async () => {
  users.value = await UserService.getUsers(0, 100);
});
</script>
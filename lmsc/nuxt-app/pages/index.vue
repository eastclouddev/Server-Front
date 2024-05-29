<template>
  <div>
    <h1>ユーザーリスト</h1>
    <ul>
      <li v-for="user in users" :key="user.id">
        <p>{{ user.name }} {{ user.prefecture }}</p>
        <p>{{ user.city }} {{ user.town }}</p>
        <p>{{ user.address }} {{ user.postal_code }}</p>
        <p>{{ user.phone_code }} {{ user.email }}</p>
      </li>
    </ul>
    <NuxtLink to="/user_services/user_create">ユーザー追加</NuxtLink>
    <NuxtLink to="/user_services/user_delete">ユーザー削除</NuxtLink>
    <NuxtLink to="/user_services/user_update">ユーザー編集</NuxtLink>
<<<<<<< HEAD
=======
    <!-- <NuxtLink to="/get_sample">サンプル</NuxtLink> -->
>>>>>>> develop
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
// import { UserService } from '~/services/UserService.js';

const users = ref([]);

// onMounted(async () => {
//   users.value = await UserService.getUsers(0, 100);
// });
</script>

<template>
    <div>
      <h1>ユーザー削除</h1>
      <button @click="deleteUser">Delete User</button>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { UserService } from '~/services/UserService.js';
  import { useRouter } from 'vue-router';
  
  const router = useRouter();
  const userId = ref(2); // 動的に設定すべきだが暫定として2を設定
  
  const deleteUser = async () => {
    await UserService.deleteUser(userId.value);
    // router.push('/users'); 
  };
  </script>
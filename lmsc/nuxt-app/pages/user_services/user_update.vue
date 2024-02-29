<template>
    <div>
      <h2>Edit User</h2>
      <form @submit.prevent="updateUser">
        <input v-model="editUserData.name" type="text" placeholder="Name" />
        <input v-model="editUserData.email" type="email" placeholder="Email" />
        <input v-model="editUserData.password" type="text" placeholder="PassWord" />
        <button type="submit">Update User</button>
      </form>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { useRoute } from 'vue-router';
  import { UserService } from '~/services/UserService.js';
  
  const route = useRoute();
  const userId = ref(2); // 動的に設定すべきだが暫定として2を設定
  //const userId = ref(route.params.id); // URLからIDを取得
  const editUserData = ref({
    name: '',
    email: '',
    password: '',
  });
  
  onMounted(async () => {
    const userData = await UserService.getUserById(userId.value);
    editUserData.value = userData;
  });
  
  const updateUser = async () => {
    await UserService.updateUser(userId.value, editUserData.value);
  };
  </script>
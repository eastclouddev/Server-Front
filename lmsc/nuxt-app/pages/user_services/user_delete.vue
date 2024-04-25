<template>
  <div>
    <h1>ユーザー削除</h1>
    <input v-model="userId" type="number" placeholder="Enter User ID to delete" />
    <button @click="deleteUser">Delete User</button>
  </div>
</template>
  
<script setup>
  import { ref } from 'vue';
  import { UserService } from '~/services/UserService.js';
  
  const userId = ref('');
  
  const deleteUser = async () => {
    if (!userId.value) {
      alert('Please enter a valid User ID');
      return;
    }

    try {
      await UserService.deleteUser(userId.value);
      alert('User delete successfully');
      userId.value = '';
    } catch (error) {
      alert(error.message);
    }
  };
</script>
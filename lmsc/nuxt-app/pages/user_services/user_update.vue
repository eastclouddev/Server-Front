<template>
  <div>
    <h2>ユーザー編集</h2>
    <input v-model="userId" placeholder="User ID" type="number" />
    <input v-model="editUserData.first_name" type="text" placeholder="Name" />
    <input v-model="editUserData.last_name" type="text" placeholder="Name" />
    <input v-model="editUserData.first_name_kana" type="text" placeholder="Name" />
    <input v-model="editUserData.last_name_kana" type="text" placeholder="Name" />
    <input v-model="editUserData.email" type="email" placeholder="Email" />
    <button @click="updateUser">Update User</button>
  </div>
</template>
  
<script setup>
  import { ref } from 'vue';
  import { UserService } from '~/services/UserService.js';
  
  const userId = ref('');
  const editUserData = ref({
    first_name: '',
    last_name: '',
    first_name_kana: '',
    last_name_kana: '',
    email: '',
    password: '',
  });

  const updateUser = async () => {
    if (!userId.value) {
      alert('Please enter a valid user ID');
      return;
    }
    const updatedUser = await UserService.updateUser(userId.value, editUserData.value);
    console.log('User created:', updatedUser);
    alert('User update successfully');

    userId.value = '';
    editUserData.value.first_name = '';
    editUserData.value.last_name = '';
    editUserData.value.first_name_kana = '';
    editUserData.value.last_name_kana = '';
    editUserData.value.email = '';
  };
</script>
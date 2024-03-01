<template>
  <NuxtLayout>
    <div>
      <h2>ユーザー編集</h2>
      <input v-model="userId" placeholder="User ID" type="number" />
      <input v-model="editUserData.name" type="text" placeholder="Name" />
      <input v-model="editUserData.email" type="email" placeholder="Email" />
      <input v-model="editUserData.password" type="text" placeholder="PassWord" />
      <button  @click="updateUser">Update User</button>
    </div>
  </NuxtLayout>
</template>
  
<script setup>
  import { ref } from 'vue';
  import { UserService } from '~/services/UserService.js';
  
  const userId = ref('');
  const editUserData = ref({
    name: '',
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
    editUserData.value.name = '';
    editUserData.value.email = '';
    editUserData.value.password = '';
  };
</script>
<template>
  <NuxtLayout>
    <h1>ユーザー作成</h1>
      <input v-model="userData.name" type="text" placeholder="Name" />
      <input v-model="userData.email" type="email" placeholder="Email" />
      <input v-model="userData.password" type="text" placeholder="PassWord" />
      <button @click="createUser">Create User</button>
  </NuxtLayout>
</template>
  
<script setup>
  import { ref } from 'vue';
  import { UserService } from '~/services/UserService.js';
  
  const userData = ref({
    name: '',
    email: '',
    password: ''
  });
  
  const createUser = async () => {
    // await UserService.createUser(userData.value);
    try {
      const newUser = await UserService.createUser(userData.value);
      console.log('User created:', newUser);
      newUser.value = { name: '', email: '' , password: ''}; 
    } catch (error) {
      console.error('Error creating user:', error);
    }
  };
</script>
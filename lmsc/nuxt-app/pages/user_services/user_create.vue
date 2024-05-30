<template>
<<<<<<< HEAD
  <div>
    <h1>ユーザー作成</h1>
    <input v-model="userData.name" type="text" placeholder="Name" />
    <input v-model="userData.prefecture" type="email" placeholder="" />
    <input v-model="userData.city" type="text" placeholder="city" />
    <input v-model="userData.town" type="text" placeholder="town" />
    <input v-model="userData.address" type="email" placeholder="address" />
    <input v-model="userData.postal_code" type="text" placeholder="postal_code" />
    <input v-model="userData.phone_number" type="text" placeholder="phone_number" />
    <input v-model="userData.email" type="text" placeholder="email" />
    <button @click="createUser">Create User</button>
  </div>
=======
  <NuxtLayout>
    <div>
      <h1>ユーザー作成</h1>
      <input v-model="userData.name" type="text" placeholder="Name" />
      <input v-model="userData.prefecture" type="email" placeholder="" />
      <input v-model="userData.city" type="text" placeholder="city" />
      <input v-model="userData.town" type="text" placeholder="town" />
      <input v-model="userData.address" type="email" placeholder="address" />
      <input
        v-model="userData.postal_code"
        type="text"
        placeholder="postal_code"
      />
      <input
        v-model="userData.phone_number"
        type="text"
        placeholder="phone_number"
      />
      <input v-model="userData.email" type="text" placeholder="email" />
      <button @click="createUser">Create User</button>
    </div>
  </NuxtLayout>
>>>>>>> develop
</template>

<script setup>
import { ref } from "vue";
// import { UserService } from '~/services/UserService.js';

const userData = ref({
  name: "",
  email: "",
  password: "",
});

const createUser = async () => {
  try {
    // const newUser = await UserService.createUser(userData.value);
    // console.log("User created:", newUser);
    alert("User created successfully");
    userData.value.name = "";
    userData.value.email = "";
    userData.value.password = "";
  } catch (error) {
    console.error("Error creating user:", error);
  }
};
</script>

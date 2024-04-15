<template>
  <div>
    <h1>get</h1>
    <ul>
      <li v-for="user in users" :key="user.company_id">
        {{ user.name }}
        {{ user.prefecture }}
        {{ user.town }}
        {{ user.city }}
        {{ user.address }}
        {{ user.postal_code }}
        {{ user.phone_nember }}
        {{ user.email }}
        {{ user.crested_at }}
      </li>
    </ul>
  </div>
</template>
<script>
import axios from "axios";

export default {

  data() {
    return {
      users: []
    };
  },
  mounted() {
    axios
      .get('http://localhost:8080/companies')
      .then(response => (this.users = response.data));
  }
};
</script>

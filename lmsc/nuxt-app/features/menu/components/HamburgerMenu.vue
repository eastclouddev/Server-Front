<template>
  <v-menu flat v-model="menu" style="top: 50px" width="18rem">
    <template v-slot:activator>
      <v-app-bar-nav-icon @click="toggleMenu" style="border-radius: 0"></v-app-bar-nav-icon>
    </template>
    <v-list>
      <v-list-item>
        <div class="d-flex align-start pa-3">
          <img src="/assets/accountcircle.svg" alt="account" class="pr-3" width="60rem" />
          <div style="font-size: 0.9em; font-weight: lighter">
            <p style="font-weight: bold">{{ userName }}</p>
            <p style="font-weight: lighter">{{ userEmail }}</p>
          </div>
        </div>
        <v-divider color="#BFBFBF"></v-divider>
      </v-list-item>
      <template v-if="userRole === 1">
        <MenuAdmin />
      </template>
      <template v-else-if="userRole === 2">
        <MenuMentor />
      </template>
      <template v-else-if="userRole === 3">
        <MenuStudent />
      </template>
      <template v-else-if="userRole === 4">
        <MenuCorporation />
      </template>
      <template v-else-if="userRole === 5">
        <MenuActingdirector />
      </template>
      <template v-else>
        <p>メニューがありません</p>
      </template>
    </v-list>
  </v-menu>
</template>

<script>
import { useUserStore } from '~/store/user.ts';
import MenuStudent from "~/features/menu/components/MenuStudent.vue";
import MenuCorporation from "~/features/menu/components/MenuCorporation.vue";
import MenuActingdirector from "~/features/menu/components/MenuActingdirector.vue";
import MenuMentor from "~/features/menu/components/MenuMentor.vue";
import MenuAdmin from "~/features/menu/components/MenuAdmin.vue";

export default {
  name: 'ToolbarMenu',
  components: {
    MenuStudent,
    MenuCorporation,
    MenuActingdirector,
    MenuMentor,
    MenuAdmin,
  },
  data() {
    return {
      menu: false,
    };
  },
  computed: {
    userRole() {
      const userStore = useUserStore();
      return userStore.userRole;
    },
    userName() {
      const userStore = useUserStore();
      console.log('User Name:', userStore.userName); // ユーザー名をログに出力
      return userStore.userName;
    },
    userEmail() {
      const userStore = useUserStore();
      console.log('User Email:', userStore.userEmail); // メールアドレスをログに出力
      return userStore.userEmail;
    }
  },
  methods: {
    toggleMenu() {
      this.menu = !this.menu;
    },
  },
};
</script>

<style scoped lang="scss">
.v-overlay-container {
  .v-overlay {
    left: auto;
    right: 300px;
  }
}
</style>
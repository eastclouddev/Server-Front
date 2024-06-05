<template>
  <div>
    <v-toolbar color="#FFFFFF" elevation="1">
      <v-btn class="button_icon" to="/login">
        <img src="../assets/idemy_logo.svg" width="100%">
      </v-btn>
      <v-spacer></v-spacer>
      <div class="toolbar-actions" v-if="isAuthenticated">
        <NotifiCation />
        <HamburgerMenu />
      </div>
    </v-toolbar>
  </div>
</template>

<script>
import { useUserStore } from '~/store/user.ts';
import NotifiCation from '~/components/NotifiCation.vue';
import HamburgerMenu from '~/components/HamburgerMenu.vue';

export default {
  components: {
    NotifiCation,
    HamburgerMenu,
  },
  computed: {
    isAuthenticated() {
      const userStore = useUserStore();
      return userStore.isAuthenticated;
    }
  }
};
</script>

<style scoped>
.button_icon {
  display: flex;
  justify-content: center;
}

.toolbar-actions {
  display: flex;
  align-items: center;
}

@media (max-width: 768px) {
  .v-toolbar {
    justify-content: space-between;
  }
  .button_icon {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }
}
</style>
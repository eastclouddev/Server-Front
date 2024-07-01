<template>
  <v-menu
    flat
    v-model="menu"
    :width="menuWidth"
    :absolute="isSmallScreen"
    >
    <template v-slot:activator>
      <v-btn icon @click="toggleMenu" style="border-radius: 0">
        <v-icon>{{ menu ? 'mdi-close' : 'mdi-menu' }}</v-icon>
      </v-btn>
    </template>
    <v-list>
      <v-list-item >
        <div class="d-flex align-start list_item">
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
      <template v-else >
        <p class="pa-4">メニューがありません</p>
      </template>
    </v-list>
  </v-menu>
</template>
<script>
import { computed, ref, watch, onMounted, onBeforeUnmount } from 'vue';
import { useUserStore } from '~/store/user.ts';
import { useGetUser } from '~/features/plofile/api/getProfile.ts';
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
  setup() {
    const userStore = useUserStore();
    const menu = ref(false);
    const userId = computed(() => userStore.user.id);

    const { data: userData, error, status } = useGetUser(userId.value);

    const userRole = computed(() => userStore.userRole);
    const userName = computed(() => userData.value?.first_name + ' ' + userData.value?.last_name);
    const userEmail = computed(() => userData.value?.email);

    const toggleMenu = () => {
      menu.value = !menu.value;
    };

    watch(menu, (newVal) => {
      if (newVal) {
        useGetUser(userId.value);
      }
    });

    const menuWidth = ref(window.innerWidth <= 768 ? '100%' : '18rem');
    const isSmallScreen = ref(window.innerWidth <= 768);

    const updateMenuWidth = () => {
      const isSmall = window.innerWidth <= 768;
      menuWidth.value = isSmall ? '100%' : '18rem';
      isSmallScreen.value = isSmall;
    };

    onMounted(() => {
      window.addEventListener('resize', updateMenuWidth);
      updateMenuWidth();
    });

    onBeforeUnmount(() => {
      window.removeEventListener('resize', updateMenuWidth);
    });

    return {
      menu,
      userRole,
      userName,
      userEmail,
      toggleMenu,
      menuWidth,
      isSmallScreen
    };
  }
};
</script>
<style scoped lang="scss">
.list_item {
  padding: 10px;
}

.v-overlay-container {
  .v-overlay {
    top: 50px;
    left: auto;
    right: 300px;
  }
}

@media (max-width: 768px) {
  .list_item {
    padding: 40px;
  }

  .v-overlay-container {
    .v-overlay {
      top: 65px !important;
      left: 0 !important;
      right: 0 !important;
      bottom: 0 !important;
      background-color: rgba(255, 255, 255, 0.9) !important;
      position: fixed !important;
    }
  }
}

</style>
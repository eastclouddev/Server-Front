<template>
  <v-menu flat v-model="menu" width="18rem">
    <template v-slot:activator>
      <v-btn icon @click="toggleMenu" style="border-radius: 0">
        <v-icon>{{ menu ? 'mdi-close' : 'mdi-menu' }}</v-icon>
      </v-btn>
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
import { computed, ref, watch } from 'vue';
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

    return {
      menu,
      userRole,
      userName,
      userEmail,
      toggleMenu,
    };
  }
};
</script>

<style scoped lang="scss">
.v-overlay-container {
  .v-overlay {
    top: 50px;
    left: auto;
    right: 300px;
  }
}
</style>
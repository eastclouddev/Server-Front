<template>
  <v-container style="margin:10% 0;">
    <v-sheet class="d-flex align-end pt-2 pb-8 pl-0">
      <img src="assets/idemy_logo.svg" width="192" height="70">
      <v-card-title class="ml-3 pa-0 sp_title" style="font-size:1.5em; font-weight: bold;" color="#242424">
        <span>{{ welcomeMessage }}</span>
      </v-card-title>
    </v-sheet>
    <v-divider class="#CFCFCF" thickness="1"></v-divider>
    <v-card flat class="mt-8 mb-8">
      <template v-if="userRole === 1">
        <DashboardAdmin />
      </template>
      <template v-else-if="userRole === 2">
        <DashboardMentor />
      </template>
      <template v-else-if="userRole === 3">
        <DashboardStudent />
      </template>
      <template v-else-if="userRole === 4 || userRole === 5">
        <DashboardCorporation />
      </template>
      <template v-else>
        <p>ユーザーのロールが不明です。</p>
      </template>
    </v-card>
  </v-container>
</template>

<script>
import { computed, ref, onMounted } from 'vue';
import { useUserStore } from '~/store/user.ts';
import { useGetUser } from '~/features/plofile/api/getProfile.ts';

const DashboardStudent = defineAsyncComponent(() => import("~/features/auth/dashboard/components/DashboardStudent.vue"));
const DashboardCorporation = defineAsyncComponent(() => import("~/features/auth/dashboard/components/DashboardCorporation.vue"));
const DashboardMentor = defineAsyncComponent(() => import("~/features/auth/dashboard/components/DashboardMentor.vue"));
const DashboardAdmin = defineAsyncComponent(() => import("~/features/auth/dashboard/components/DashboardAdmin.vue"));

export default {
  components: {
    DashboardStudent,
    DashboardCorporation,
    DashboardMentor,
    DashboardAdmin,
  },
  setup() {
    const userStore = useUserStore();
    const userId = computed(() => userStore.user.id);

    const { data: userData, error, status } = useGetUser(userId.value);

    const userRole = computed(() => userStore.userRole);
    const loggedInUsername = computed(() => {
      if (userData.value) {
        return `${userData.value.first_name} ${userData.value.last_name}`;
      }
      return '';
    });
    const welcomeMessage = computed(() => `${loggedInUsername.value} さんおかえりなさい`);

    return {
      userRole,
      loggedInUsername,
      welcomeMessage,
    };
  },
};
</script>
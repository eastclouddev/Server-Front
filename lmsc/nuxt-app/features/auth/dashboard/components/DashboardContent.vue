<template>
  <v-container style="margin:10% 0;">
    <v-sheet class="d-flex align-end pt-2 pb-8 pl-0 " >
      <img src="assets/idemy_logo.svg" width="192" height="70">
      <v-card-title class="ml-3 pa-0 sp_title" style="font-size:1.5em; font-weight: bold;" color="#242424">
        <span>{{ welcomeMessage }}</span>
      </v-card-title>
    </v-sheet>
    <v-divider class="#CFCFCF" thickness="1"></v-divider>
    <v-card flat class="mt-8 mb-8">
      受講生
      <DashboardStudent />
      法人・法人代行
      <DashboardCorporation />
      メンター
      <DashboardMentor />
      管理者
      <DashboardAdmin />
    </v-card>
  </v-container>
</template>
<script>
import DashboardStudent from "~/features/auth/dashboard/components/DashboardStudent.vue";
import Dashboard from "~/pages/dashboard.vue";
import DashboardCorporation from "~/features/auth/dashboard/components/DashboardCorporation.vue";
import DashboardMentor from "~/features/auth/dashboard/components/DashboardMentor.vue";
import DashboardAdmin from "~/features/auth/dashboard/components/DashboardAdmin.vue";

export default {
    components: {
    DashboardStudent,
    DashboardCorporation,
    DashboardMentor,
    DashboardAdmin,
  },
  data() {
    return {
      welcomeMessage: "さん おかえりなさい",
      loggedInUsername: ""
    };
  },
  mounted() {
    this.loggedInUsername = "ユーザーA";

    this.displayUsername();
  },
  methods: {
    displayUsername() {
      this.welcomeMessage = `${this.loggedInUsername} さん おかえりなさい`;
    }
  }
};
</script>
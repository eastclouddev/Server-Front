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
      <p>受講生</p>
        <NewsItem />
        <StudyItem />
        <ProgressItem />
        <CouseItem />
        <RecommendationItem />
      <p>法人・法人代行</p>
        <NewsItem />
        <ProgressManagement />
        <AccountManagement />
      <p>メンター</p>
        <NewsItem />
        <ProgressManagement />
        <QuestionItem />
        <ReviewItem />
      <p>管理者</p>
        <NewsItem />
        <ProgressManagement />
        <LastmonthAccount />
        <BillingsManagement />
        <MentorAssignment />
        <CouseItem />
    </v-card>
  </v-container>
</template>
<script>
export default {
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
<template>
  <v-container style="margin:10% 0;">
    <v-card flat class="mx-auto" max-width="620">
      <v-card-title class="pt-2 pb-2 pl-0" style="font-size: 1.6em; font-weight: bold;" color="#242424">
        ユーザー情報入力
      </v-card-title>
      <v-divider class="#CFCFCF" thickness="1"></v-divider>
      <v-card flat style="margin:10% 0;">
        <!-- データ取得 -->
        <UserAcquisition />
        <PasswordFormConfilmation />
      </v-card>
      <v-card flat class="mx-auto text-center">
        <PrivacyPolicyModal />
        <TeamOfUseModal />
        <Button type="submit" width="25rem" height="6ex" style="font-size: 1.5em;" buttonText="入力情報を確認する"></Button>
      </v-card>
    </v-card>

    <sample />
    <Completed titleText="登録が完了しました。" icon="mdi-check-circle" />
    
  </v-container>
</template>
<script>
</script>
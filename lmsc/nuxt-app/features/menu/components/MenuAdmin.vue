<template>
  <v-list class="sp_menu">
    <v-sheet v-for="(section, index) in settingsSections" :key="index" class="pa-3">
      <v-list-item v-if="section.icon && section.title" class="pb-5">
        <div class="d-flex align-center">
          <img :src="section.icon" alt="icon" class="pr-3" style="width:40px;">
          <v-list-item-title style="font-weight: bold;">{{ section.title }}</v-list-item-title>
        </div>
        <NuxtLink v-for="(link, linkIndex) in section.links" :to="link.url" class="d-flex align-start pt-3" :key="linkIndex" style="text-decoration: none; color:#242424;">
          {{ link.text }}
        </NuxtLink>
      </v-list-item>
      <template v-if="index !== settingsSections.length - 1">
        <v-divider color="#BFBFBF"></v-divider>
      </template>
    </v-sheet>
  </v-list>
</template>

<script>
import StudyIcon from '~/assets/study.svg';
import SettingIcon from '~/assets/setting.svg';
export default {
  data() {
    return {
      settingsSections: [
        {
          icon: StudyIcon,
          title: '進捗管理',
          links: [
            { text: '進捗管理一覧', url: '/' },
            { text: '契約会社情報', url: '/' },
            { text: 'コース一覧', url: '/' },
            { text: 'ユーザー一覧', url: '/' },
            { text: 'コース作成', url: '/' },
          ]
        },
        {
          icon: SettingIcon,
          title: '設定',
          links: [
            { text: 'パスワード変更', url: '/' },
            { text: 'メールアドレス変更', url: '/' },
            { text: '企業情報', url: '/' },
            { text: 'ログアウト', url: '/' },
          ]
        }
      ]
    }
  },
}
</script>

<style>
@media (max-width: 768px) {
.sp_menu {
  padding: 40px;
}
}
</style>
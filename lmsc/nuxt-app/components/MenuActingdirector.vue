<template>
  <v-list>
    <v-sheet v-for="(section, index) in settingsSections" :key="index" class="pa-3">
      <v-list-item v-if="section.icon && section.title" class="pb-5">
        <div class="d-flex align-center">
          <v-img :src="section.icon" class="mr-3" height="24" width="24"></v-img>
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
export default {
  data() {
    return {
      settingsSections: [
        {
          title: '進捗管理',
          icon: '',
          links: [
            { text: '進捗管理一覧', url: '/' },
            { text: 'ユーザー一覧', url: '/' }
          ]
        },
        {
          title: '設定',
          icon: '',
          links: [
            { text: 'パスワード変更', url: '/' },
            { text: '会社情報', url: '/' },
            { text: '請求情報', url: '/' },
            { text: 'ログアウト', url: '/' },
          ]
        }
      ]
    }
  },
  mounted() {
    this.settingsSections[0].icon = 'assets/progress.svg';
    this.settingsSections[1].icon = 'assets/setting.svg';
  }
}
</script>
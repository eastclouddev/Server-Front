<template>
  <v-container class="sp_content" style="margin: 10% auto">
    <v-card flat class="py-10">
      <v-card-title flat class="sp_title headline">{{
        titleText
      }}</v-card-title>
      <v-card flat class="d-flex justify-center flex-column align-center">
        <v-icon
          class="mt-8 mb-8 sp_icon"
          :color="iconColor"
          :icon="icon"
          :size="computedIconSize"
        ></v-icon>
        <Button
          color="#FF5A36"
          style="font-size: 1.5em"
          buttonText="ログイン画面へ"
        ></Button>
      </v-card>
    </v-card>
  </v-container>
</template>

<script>
export default {
  props: {
    titleText: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      iconColor: '#292737',
      iconSize: 100, // default size
    }
  },
  computed: {
    computedIconSize() {
      if (typeof window !== 'undefined') {
        return window.innerWidth >= 960 ? 150 : this.iconSize
      }
      return this.iconSize // サーバーサイドレンダリング時のデフォルトサイズ
    },
  },
  mounted() {
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', this.updateIconSize)
      this.updateIconSize() // 初期ロード時にサイズを更新
    }
  },
  beforeDestroy() {
    if (typeof window !== 'undefined') {
      window.removeEventListener('resize', this.updateIconSize)
    }
  },
  methods: {
    updateIconSize() {
      if (typeof window !== 'undefined') {
        if (window.innerWidth >= 960) {
          this.iconSize = 150 // md以上の時のサイズ
        } else {
          this.iconSize = 100 // デフォルトサイズ
        }
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.headline {
  text-overflow: inherit;
  white-space: unset;
}
@media screen and (max-width: 768px) {
  .sp {
    &_content {
      max-width: 540px;
      margin: 0 auto;
    }
    &_title {
      font-size: 1.8em !important;
    }
  }
}
</style>

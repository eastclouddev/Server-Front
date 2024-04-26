<template>
  <v-container>
    <v-card>
      <v-card-title class="pt-2 pb-2 pl-0" :class="{ 'hidden-sm-and-down': isSM }" :style="{ fontSize: isSM ? '2em' : '1.6em', fontWeight: 'bold' }" color="#242424">ログイン</v-card-title>
      <v-card-text class="hidden-sm-and-down" :style="{ fontSize: isSM ? '1.5em' : '1em' }">テキスト</v-card-text>
    </v-card>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      isSM: false
    };
  },
  mounted() {
    // 初期化時に一度チェック
    this.checkDeviceWidth();

    // ウィンドウのリサイズイベントを監視してデバイスの幅をチェック
    window.addEventListener('resize', this.checkDeviceWidth);
  },
  methods: {
    // デバイスの幅に応じてフラグを更新
    checkDeviceWidth() {
      this.isSM = window.innerWidth < 576;  // sm ブレイクポイント未満の場合 true
    }
  },
  beforeDestroy() {
    // イベントリスナーを削除
    window.removeEventListener('resize', this.checkDeviceWidth);
  }
}
</script>

<style scoped>
</style>

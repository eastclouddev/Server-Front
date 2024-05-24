<template>
  <Completed titleText="パスワード再設定が完了しました。" icon="mdi-check-circle" class="sp_title"/>
</template>

<style lang="scss" scoped>
.headline {
        text-overflow: inherit;
        white-space: unset;
}
@media screen and (max-width: 768px) {
  .sp {
    &_title {
      font-size: 0.5em !important;
    }

    &_text {
      font-size: 1.4em;
    }
  }
}
</style>
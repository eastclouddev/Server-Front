<script setup lang="ts">
import Headline from '~/features/userList/components/headline.vue'
import Options from '~/features/userList/components/userOptions.vue'
import Contents from '~/features/userList/components/userContents.vue'

const title = {
  title: 'ユーザー一覧',
  img: 'mdi-account-outline',
}
</script>

<template>
  <main>
    <div class="main center">
      <Headline :item="title" />
      <Options />
      <Contents />
    </div>
  </main>
</template>

<style scoped lang="scss">
main {
  width: 100%;
  height: auto;
  font-family: 'Noto Sans';
}
.main {
  display: flex;
  flex-direction: column;
  max-width: 1000px;
  width: auto;
}
.space {
  width: 100%;
  height: 149px;
}

.center {
  margin: 0 auto;
}

@media screen and (max-width: 768px) {
  .main {
    max-width: 708px;
  }
  .space {
    height: 645px;
  }
}
</style>

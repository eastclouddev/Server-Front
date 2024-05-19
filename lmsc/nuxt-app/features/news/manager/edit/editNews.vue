<script setup lang="ts">
import Title from '~/features/news/components/TitleHeader.vue'
import Position from '~/features/news/components/PositionInfo.vue'
import Form from '~/features/news/components/EditNewsForm.vue'

const Items = {
  title: 'ニュース編集',
}

const Links = {
  info: '/news/manager/detail',
  news: 'Pythonの新しい講座が追加されました！',
  title: 'ニュース編集',
}
</script>

<template>
  <main>
    <div class="main center">
      <Title :item="Items" />
      <Position :item="Links" />
      <Form />
    </div>
  </main>
</template>

<style scoped lang="scss">
main {
  width: 100%;
  height: auto;
}
.main {
  display: flex;
  flex-direction: column;
  max-width: 1000px;
  width: auto;
}

.center {
  margin: 0 auto;
}

@media screen and (max-width: 768px) {
  .main {
    max-width: 708px;
  }
}
</style>

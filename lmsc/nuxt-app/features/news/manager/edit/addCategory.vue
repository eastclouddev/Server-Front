<script setup lang="ts">
import Title from '~/features/news/components/TitleHeader.vue'
import Position from '~/features/news/components/PositionInfo.vue'
import CategoryList from '~/features/news/components/CategoryList.vue'

const Items = {
  img: '',
  title: 'カテゴリ追加',
}

const Links = {
  info: '/news/manager/view',
  title: 'カテゴリ追加',
}
</script>

<template>
  <main>
    <div class="main center">
      <Title :item="Items" />
      <Position :item="Links" />
      <CategoryList />
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
    max-width: 702px;
  }
}
</style>

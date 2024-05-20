<script setup lang="ts">
import Title from '~/features/test/components/TitleHeader.vue'

const Items = {
  img: 'mdi-check-circle',
  to: 'test',
  title: 'テスト',
}
</script>

<template>
  <main>
    <div class="main center">
      <Title :item="Items" />
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
  align-items: center;
  justify-content: center;
  flex-direction: column;
  max-width: 1209px;
  width: auto;
}

.center {
  margin: 0 auto;
}
.space {
  width: 100%;
  height: 1500px;
}

@media screen and (max-width: 768px) {
  .main {
    max-width: 702px;
  }
}
</style>

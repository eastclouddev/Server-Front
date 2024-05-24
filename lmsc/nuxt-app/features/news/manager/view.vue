<script setup lang="ts">
import { defineProps } from 'vue'
import NewsList from '~/features/news/components/NewsManagerList.vue'
import Title from '~/features/news/components/TitleHeader.vue'
import Position from '~/features/news/components/PositionInfo.vue'

import maillIcon from '~/assets/mail_icon.svg'

const Items = {
  img: maillIcon,
  title: 'お知らせ',
}

const Links = {
  title: 'お知らせ',
}

// const props = defineProps(['title', 'category', 'content'])
// const Posts = {
//   title: props.title,
//   category: props.category,
//   content: props.content,
// }
</script>

<template>
  <main>
    <div class="main center">
      <Title :item="Items" />
      <Position :item="Links" />
      <NewsList />
    </div>
  </main>
  <div class="space"></div>
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

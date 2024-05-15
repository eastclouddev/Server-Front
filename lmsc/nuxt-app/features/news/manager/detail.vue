<script setup lang="ts">
import Title from '~/features/news/components/TitleHeader.vue'
import NewsView from '~/features/news/components/NewsView.vue'
import NewsBtn from '~/features/news/components/NewsBtn.vue'
import NewsEditBtn from '~/features/news/components/NewsEditBtn.vue'
import Position from '~/features/news/components/PositionInfo.vue'

import maillIcon from '~/assets/mail_icon.svg'

const Items = {
  img: maillIcon,
  title: 'お知らせ',
}

const Links = {
  info: '/news/manager/view',
  title: 'Pythonの新しい講座が追加されました！',
}

const Paths = {
  path: '/news/manager/view',
}
</script>

<template>
  <main>
    <div class="main center">
      <Title :item="Items" />
      <Position :item="Links" />
      <NewsEditBtn />
      <NewsView />
      <NewsBtn :item="Paths" />
    </div>
  </main>
  <div class="space"></div>
</template>

<style scoped lang="scss">
// Variables
$main_color: #242424;
$accent_color: #ff5a36;

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

.space {
  width: 100%;
  height: 1500px;
}

@media screen and (max-width: 768px) {
  .main {
    max-width: 708px;
  }
}
</style>

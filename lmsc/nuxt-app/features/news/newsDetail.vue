<script setup lang="ts">
import Title from '~/components/TitleHeader.vue'
import NewsView from '~/components/NewsView.vue'
import NewsBtn from '~/components/NewsBtn.vue'
import maillIcon from '~/assets/mail_icon.svg'

const Items = {
  img: maillIcon,
  title: 'お知らせ',
}
</script>

<template>
  <main>
    <div class="main center">
      <Title :item="Items" />
      <NewsView />
      <NewsBtn />
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
    gap: 65px;
  }
}
</style>

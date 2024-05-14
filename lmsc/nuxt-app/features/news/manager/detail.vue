<script setup lang="ts">
import Title from '~/components/TitleHeader.vue'
import NewsView from '~/components/NewsView.vue'
import NewsBtn from '~/components/NewsBtn.vue'
import NewsEditBtn from '~/components/NewsEditBtn.vue'
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
      <div class="link">
        <NuxtLink to="/dashboard" class="NuxtLink"> ダッシュボード </NuxtLink>
        <div class="allow"></div>
        <p>お知らせ一覧</p>
        <div class="allow"></div>
        <p>Pythonの新しい講座が追加されました！</p>
      </div>
      <NewsEditBtn />
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

.link {
  display: flex;
  text-align: center;
  color: #ff5a36;
  width: 573px;
  margin-top: 40px;
  font-size: 16px;
  line-height: 25.6px;
  font-family: 'Noto Sans';
  gap: 16px;

  .allow {
    content: '';
    border-right: 1.5px solid #292737;
    border-top: 1.5px solid #292737;
    top: 0;
    bottom: 0;
    margin: auto;
    width: 5.25px;
    height: 5.25px;
    transform: rotate(45deg);
  }
  .NuxtLink {
    text-decoration: none;
    color: #ff5a36;
    &:visited {
      color: inherit;
    }
  }
}

.space {
  width: 100%;
  height: 1500px;
}

@media screen and (max-width: 768px) {
  .main {
    max-width: 708px;
  }
  .link {
    display: flex;
    width: 702px;
    height: 38px;
    font-size: 24px;
    font-weight: 400;
    line-height: 38.4px;
    white-space: nowrap;
    p {
      &:nth-of-type(2) {
        width: 300px;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }

    .allow {
      border-right: 2px solid #292737;
      border-top: 2px solid #292737;
      width: 11.62px;
      height: 11.62px;
    }
  }
}
</style>

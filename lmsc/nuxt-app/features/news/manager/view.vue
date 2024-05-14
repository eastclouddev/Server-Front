<script setup lang="ts">
import NewsList from '~/components/NewsManagerList.vue'
import Title from '~/components/TitleHeader.vue'
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
      </div>
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
.link {
  display: flex;
  text-align: center;
  color: #ff5a36;
  justify-content: space-between;
  width: 243px;
  height: 26px;
  margin-top: 40px;
  margin-bottom: 20px;
  font-size: 16px;

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
  height: 149px;
}

.center {
  margin: 0 auto;
}

@media screen and (max-width: 768px) {
  .main {
    max-width: 708px;
  }

  .link {
    width: 352px;
    height: 38px;
    margin: 40px 0;
    font-size: 24px;
    font-weight: 400;
    line-height: 38.4px;

    .allow {
      border-right: 2px solid #292737;
      border-top: 2px solid #292737;
      width: 11.62px;
      height: 11.62px;
    }
  }
  .space {
    height: 645px;
  }
}
</style>

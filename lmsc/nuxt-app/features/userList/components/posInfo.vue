<script setup lang="ts">
const props = defineProps<{
  pos: string
}>()
</script>

<template>
  <div class="link">
    <NuxtLink
      v-if="props.pos === 'ダッシュボード'"
      to="/dashboard"
      class="NuxtLink"
    >
      ダッシュボード
    </NuxtLink>
    <NuxtLink
      v-if="props.pos === 'ユーザー一覧'"
      to="/userList"
      class="NuxtLink"
    >
      ユーザー一覧
    </NuxtLink>
    <v-icon>mdi-chevron-right</v-icon>
    <p>{{ props.pos }}</p>
  </div>
</template>

<style scoped lang="scss">
.link {
  display: flex;
  color: #ff5a36;
  width: 1000px;
  margin-bottom: 20px;
  font-size: 16px;
  line-height: 25.6px;
  font-family: 'Noto Sans';
  gap: 16px;

  .v-icon {
    padding-top: 4px;
    color: #292737;
  }

  .NuxtLink {
    text-decoration: none;
    color: #ff5a36;
    &:visited {
      color: inherit;
    }
  }
}

@media screen and (max-width: 768px) {
  .link {
    display: flex;
    width: 702px;
    height: 38px;
    font-size: 24px;
    font-weight: 400;
    line-height: 38.4px;
    white-space: nowrap;
    .flex {
      .NuxtLink {
        max-width: 300px;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
    p {
      &:last-of-type {
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

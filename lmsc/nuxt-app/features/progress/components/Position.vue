<script>
export default {
  props: {
    item: {
      type: Object,
      title: String
    },
  },
}
</script>

<template>
  <div class="link">
    <NuxtLink to="/dashboard" class="NuxtLink"> ダッシュボード </NuxtLink>
    <div class="flex" >
      <div class="allow"></div>
    </div>
    <NuxtLink :to="item.link" class="NuxtLink"> {{ item.title }} </NuxtLink>
    <div class="flex" >
      <div class="allow"></div>
    </div>
    <div class="flex">
      <p>学習進捗詳細</p>
    </div>
    
  </div>
</template>

<style scoped lang="scss">
.link {
  display: flex;
  text-align: left;
  color: #ff5a36;
  width: 1000px;
  margin-bottom: 60px;
  font-size: 16px;
  line-height: 25.6px;
  font-family: 'Noto Sans';
  gap: 16px;

  .flex {
    display: flex;
    gap: 16px;
  }

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
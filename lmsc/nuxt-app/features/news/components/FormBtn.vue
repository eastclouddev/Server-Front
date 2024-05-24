<script lang="ts">
export default {
  props: {
    item: {
      type: Object,
      default: () => ({}),
    },
  },
}
</script>

<template>
  <div class="btns">
    <div class="remove">
      <NuxtLink
        v-if="item.path == 'addNews'"
        to="/news/manager/view"
        class="NuxtLink"
      >
        戻る
      </NuxtLink>
      <NuxtLink
        v-if="item.path == 'editNews'"
        to="/news/manager/detail"
        class="NuxtLink"
      >
        戻る
      </NuxtLink>
    </div>
    <div class="check">
      <NuxtLink
        v-if="item.label === '投稿'"
        to="/news/manager/edit/"
        class="NuxtLink"
      >
        投稿
      </NuxtLink>
      <NuxtLink v-else to="/news/manager/edit/checkNews" class="NuxtLink">
        確認
      </NuxtLink>
    </div>
  </div>
</template>

<style scoped lang="scss">
.btns {
  display: flex;
  text-align: center;
  justify-content: right;
  margin-top: 20px;
  margin-bottom: 60px;
  width: 400px;
  gap: 24px;
}
.NuxtLink {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  font-weight: 400;
  line-height: 21.78px;
  font-family: 'Noto Sans';
  padding: 11.5px 20px;
  text-decoration: none;
}
.remove {
  box-sizing: border-box;
  border: 2px solid #ff5a36;
  background-color: #fff;
  width: 188px;
  border-radius: 5px;
  align-items: center;
  .NuxtLink {
    color: #ff5a36;
  }
}
.check {
  background-color: #ff5a36;
  width: 188px;
  border-radius: 5px;
  align-items: center;
  .NuxtLink {
    color: #fff;
  }
}

@media screen and (max-width: 768px) {
  .btns {
    width: 548px;
    gap: 40px;
    justify-content: center;
    flex-direction: column;
    margin: 80px 0;
  }
  .NuxtLink {
    font-size: 32px;
    font-weight: 700;
    line-height: 43.58px;
    padding: 25.7px 0;
  }
  .remove {
    width: 100%;
    height: 95px;
  }
  .check {
    width: 100%;
  }
}
</style>

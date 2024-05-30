<script lang="ts">
export default {
  props: {
    item: {
      type: Object,
      default: () => ({ img: '', title: '' }),
    },
  },
}
</script>
<!--
  img: importを用いて、画像パスを指定しないとエラーが起きる or 動作しない
    例) import Img from '~/assets/img.svg'

        const Items = {
          img: Img,
        }
-->

<template>
  <div class="whole">
    <div class="title">
      <img :src="item.img" alt="" v-if="item.img" />
      <h2>{{ item.title }}</h2>
    </div>
  </div>
</template>

<style scoped lang="scss">
.whole {
  height: 72px;
  width: 1000px;
  margin-top: 80px;
  align-items: flex-start;
  border-bottom: 1px solid #cfcfcf;

  .title {
    display: flex;
    align-items: start;
    height: 72px;
    padding-top: 20px;
    padding-left: 10px;
    img {
      width: 48px;
      height: 62px;
      margin-right: 15px;
    }

    h2 {
      font-size: 25px;
      font-weight: 700;
      font-family: 'Inter';
      line-height: 30.26px;
      padding-top: 5px;
    }
  }
}

@media screen and (max-width: 768px) {
  .whole {
    width: 702px;
    height: 72px;
    margin-top: 65px;

    .title {
      margin-left: 17px;
      padding-top: 0;
      img {
        margin-right: 24px;
        margin-top: 10px;
      }
      h2 {
        height: 57px;
        font-size: 42px;
        font-family: 'Noto Sans';
        line-height: 57.2px;
        padding-top: 0;
      }
    }
  }
}
</style>

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
      <v-icon>{{ item.img }}</v-icon>
      <h2>{{ item.title }}</h2>
    </div>
  </div>
</template>

<style scoped lang="scss">
.whole {
  height: 52px;
  max-width: 1000px;
  margin-top: 80px;
  padding-bottom: 16px;
  border-bottom: 1px solid #cfcfcf;
  margin-bottom: 40px;

  .title {
    display: flex;
    align-items: flex-start;
    padding-left: 10px;
    .v-icon {
      width: 34px;
      height: 34px;
      margin-right: 15px;
      color: #10bed2;
      &::before {
        font-size: 38px;
      }
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
      .v-icon {
        margin-top: 5px;
        width: 51px;
        height: 51px;
        &::before {
          font-size: 62px;
        }
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

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

<template>
  <div class="whole" :class="{ test: item.to === 'test' }">
    <div class="title">
      <v-icon v-if="item.img" class="img">
        {{ item.img }}
      </v-icon>
      <h2>{{ item.title }}</h2>
    </div>
  </div>
</template>

<style scoped lang="scss">
.whole {
  height: 50px;
  width: 100%;
  margin-top: 80px;
  align-items: flex-start;
  border-bottom: 1px solid #cfcfcf;

  .title {
    display: flex;
    align-items: center;

    .img {
      width: 35px;
      height: 26px;
      margin-right: 15px;
    }

    h2 {
      font-size: 25px;
      font-weight: 700;
      font-family: 'Inter';
      line-height: 30.26px;
    }
  }

  &.test {
    height: 56px;
    .title {
      .img {
        color: #ff5a36;
        width: 36.3px;
        height: 36.3px;
        margin-right: 18.7px;
        &::before {
          font-size: 36.3px;
        }
      }
      h2 {
        line-height: 34.05px;
      }
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
      img {
        width: 51px;
        height: 38px;
        margin-right: 24px;
      }
      h2 {
        font-size: 42px;
        font-family: 'Noto Sans';
        line-height: 57.2px;
        text-align: center;
      }
    }

    &.test {
      height: 72px;
      .title {
        .img {
          color: #ff5a36;
          width: 54px;
          height: 54px;
          margin-right: 17px;
          &::before {
            font-size: 54px;
          }
        }
      }
    }
  }
}
</style>

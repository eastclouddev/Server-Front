<template>
  <div class="buttons">
    <div class="moveBtn">
      <div class="back">
        <p>戻る</p>
      </div>
      <div class="forward">
        <p>進む</p>
      </div>
    </div>
    <div class="remove">
      <NuxtLink to="/news/newsView" class="NuxtLink"> 一覧に戻る </NuxtLink>
    </div>
  </div>
</template>

<style scoped lang="scss">
// Variables
$main_color: #242424;
$accent_color: #ff5a36;

.buttons {
  margin-top: 123px;
  width: 1000px;
  height: 128px !important;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.moveBtn {
  display: flex;
  justify-content: space-between;

  div {
    text-align: center;
    border: 2px solid $accent_color;
    border-radius: 6.88px;
    width: 141.62px;
    height: 40px;
    &:hover {
      cursor: pointer;
    }
    p {
      color: $accent_color;
      font-size: 18px;
      height: 22px;
      margin: 7px 0 9px;
      line-height: 21.78px;
      position: relative;
      font-family: 'Inter';
    }
    &.back {
      p {
        margin-left: 20px;
        &::after {
          content: '';
          border-right: 2.06px solid $accent_color;
          border-top: 2.06px solid $accent_color;
          top: 0;
          bottom: 0;
          left: 0;
          width: 12px;
          height: 12px;
          margin: auto;
          position: absolute;
          transform: rotate(-135deg);
        }
      }
    }
    &.forward {
      p {
        margin-right: 20px;
        &::before {
          content: '';
          border-right: 2.06px solid $accent_color;
          border-top: 2.06px solid $accent_color;
          top: 0;
          bottom: 0;
          right: 0;
          width: 12px;
          height: 12px;
          margin: auto;
          position: absolute;
          transform: rotate(45deg);
        }
      }
    }
  }
}
.remove {
  justify-content: center;
  text-align: center;
  background-color: $accent_color;
  border-radius: 5px;
  box-shadow:
    3px 3px 10px 0 rgba(242, 238, 238, 0.25),
    3px 3px 5px 0 rgb(195, 195, 195);
  margin: 0 auto;
  width: 400px;
  height: 48px;
  padding: 11.5px;
  .NuxtLink {
    font-weight: 700;
    font-size: 18px;
    line-height: 24.52px;
    color: #fff;
    text-decoration: none;
  }
  &:hover {
    cursor: pointer;
  }
}

@media screen and (min-width: 768px) and (max-width: 1000px) {
  .buttons {
    width: 100%;
    display: flex;
  }
  .moveBtn {
    margin: 0;
  }
}

@media screen and (max-width: 768px) {
  .buttons {
    width: 708px;
    height: 249px !important;
  }
  .moveBtn {
    div {
      width: 200px;
      height: 80px;
      p {
        font-size: 35px;
        height: 42px;
        line-height: 42.36px;
        margin: 17px 0 19px;
      }
      &.back {
        p {
          margin-left: 29.5px;
          &::after {
            width: 14.3px;
            height: 14.3px;
          }
        }
      }
      &.forward {
        p {
          margin-right: 29.5px;
          &::before {
            width: 14.3px;
            height: 14.3px;
          }
        }
      }
    }
  }
  .remove {
    width: 548px;
    height: 95px;
    padding: 23.5px;
    box-shadow: 3px 3px 5px 0 rgb(195, 195, 195);
    .NuxtLink {
      font-size: 35px;
      line-height: 47.67px;
    }
  }
}
</style>

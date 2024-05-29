<template>
  <div class="framework">
    <div class="news">
      <div class="title titleline">
        <div class="topic">
          <p class="date">2024.3.12</p>
          <div class="genre">
            <p>機能アップデート</p>
          </div>
        </div>
        <h1>Pythonの新しい講座が追加されました！</h1>
      </div>
      <div class="contents">
        <div class="mainHeading heading">
          <h2 class="titleline">大見出しが入ります。</h2>
          <div class="text">
            <p>
              本文テキストが入ります。本文テキストが入ります。<br />
              本文テキストが入ります。本文テキストが入ります。本文テキストが入ります。<br />
              本文テキストが入ります。本文テキストが入ります。本文テキストが入ります。本文テキストが入ります。
              本文テキストが入ります。本文テキストが入ります。本文テキストが入ります。本文テキストが入ります。<br />
              <br />
              本文テキストが入ります。本文テキストが入ります。本文テキストが入ります。本文テキストが入ります。
            </p>
          </div>
          <div class="link">
            <img src="~/assets/link_icon.svg" alt="link" />
            <a href="">https://</a>
          </div>
        </div>
        <div class="middleHeading heading">
          <h3 class="titleline">中見出しが入ります。</h3>
          <div class="text">
            <p>
              本文テキストが入ります。本文テキストが入ります。<br />
              本文テキストが入ります。本文テキストが入ります。本文テキストが入ります。<br />
              本文テキストが入ります。本文テキストが入ります。本文テキストが入ります。本文テキストが入ります。
              本文テキストが入ります。本文テキストが入ります。本文テキストが入ります。本文テキストが入ります。
            </p>
          </div>
        </div>
        <div class="subHeading heading">
          <h4 class="titleline">小見出しが入ります。</h4>
          <div class="text">
            <p>
              本文テキストが入ります。本文テキストが入ります。<br />
              本文テキストが入ります。本文テキストが入ります。本文テキストが入ります。<br />
              本文テキストが入ります。本文テキストが入ります。本文テキストが入ります。本文テキストが入ります。
              本文テキストが入ります。本文テキストが入ります。本文テキストが入ります。本文テキストが入ります。
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
// Variables
$main_color: #242424;
$accent_color: #ff5a36;

.framework {
  background-color: #fffaf4;
  width: 1000px;
  height: auto;
  font-family: 'Noto Sans';
  color: $main_color;
  margin-top: 30px;
}
.news {
  width: 620px;
  height: auto;
  margin: 130.5px auto;
}
.titleline {
  border-left: 4px solid $accent_color;
  &.title {
    border-left: 5px solid $accent_color;
    padding-left: 19px;
  }
}
.title {
  height: 139px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .topic {
    display: flex;
    .date {
      width: 89px;
      height: 25px;
      font-size: 18px;
      font-weight: 400;
      line-height: 24.52px;
      letter-spacing: 0.05em;
    }
    .genre {
      width: 104px !important;
      border-radius: 5px 5px 5px 5px;
      background-color: $accent_color;
      margin-left: 20px;
      padding: 4px;
      text-align: center;
      font-size: 12px;
      font-weight: 700;
      line-height: 16.34px;
      color: #fff;
    }
  }
  h1 {
    letter-spacing: 0.05em;
    font-weight: 900;
    font-size: 34px;
    line-height: 52.5px;
  }
}
.contents {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 106px;
  font-size: 14px;
  font-weight: 400;
  height: auto;
  gap: 60px;

  .heading {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 20px;
    .titleline {
      padding-left: 16px;
    }
  }
  .mainHeading {
    h2 {
      font-size: 31px;
      font-weight: 700;
      line-height: 42.22px;
    }
  }
  .middleHeading {
    h3 {
      font-size: 26px;
      font-weight: 700;
      line-height: 35.41px;
    }
  }
  .subHeading {
    h4 {
      font-size: 20px;
      font-weight: 700;
      line-height: 27.24px;
    }
  }
  .text {
    line-height: 19.07px;
  }
  .link {
    display: flex;
    align-items: center;
    color: $accent_color;
    img {
      width: 16px;
      height: 16px;
    }
    a {
      margin-left: 6px;
      font-weight: 700;
      text-decoration: none;
      &:visited {
        text-decoration: none;
        color: inherit;
      }
      &:hover {
        text-decoration: underline;
      }
    }
  }
}

@media screen and (min-width: 768px) and (max-width: 1000px) {
  .framework {
    width: 100%;
    display: flex;
    justify-content: center;
  }
}

@media screen and (max-width: 768px) {
  .framework {
    width: 708px;
  }
  .news {
    width: 635px;
    margin: 89.5px auto;
  }
  .titleline {
    &.title {
      padding-left: 20px;
    }
  }
  .title {
    height: 107px;
    margin-left: 8px;
    .topic {
      flex-direction: column;
      .date {
        font-size: 14px;
        line-height: 19.07px;
        letter-spacing: normal;
      }
      .genre {
        width: 157px !important;
        margin-left: 0;
        font-size: 16px;
        line-height: 21.79px;
      }
    }
    h1 {
      font-size: 32px;
      line-height: 43.58px;
      letter-spacing: normal;
    }
  }
  .contents {
    width: 633px;
    margin-top: 109px;
    font-size: 24px;
    gap: 84px;
    .heading {
      gap: 41px;
      &.mainHeading {
        gap: 39px;
      }
      .titleline {
        margin-left: 4px;
      }
    }
    .mainHeading {
      width: 620px;
      h2 {
        font-size: 32px;
        line-height: 43.58px;
      }
    }
    .middleHeading {
      width: 620px;
      h3 {
        font-size: 30px;
        line-height: 40.86px;
      }
    }
    .subHeading {
      width: 620px;
      h4 {
        font-size: 28px;
        line-height: 38.14px;
      }
    }
    .text {
      line-height: 32.69px;
    }
    .link {
      img {
        width: 29px;
        height: 29px;
      }
      a {
        line-height: 32.69px;
      }
    }
  }
}
</style>

<script setup lang="ts"></script>

<template>
  <div class="framework center">
    <div class="newsList">
      <!-- 後で、DBと連携 -->
      <div v-for="i in 8">
        <div class="news">
          <div class="date">
            <p>2024.3.12</p>
          </div>
          <div class="topic">
            <div class="genre">
              <p>機能アップデート</p>
            </div>
            <div class="title">
              <RouterLink to="/news/newsDetail" class="RouterLink">
                Pythonの新しい講座が追加されました！
              </RouterLink>
              <!-- <p>Pythonの新しい講座が追加されました！</p> -->
            </div>
          </div>
        </div>
      </div>

      <div class="news">
        <div class="date">
          <p>2024.4.01</p>
        </div>
        <div class="topic">
          <div class="genre">
            <p>メディア掲載</p>
          </div>
          <div class="title">
            <p>サーバーメンテナンスのお知らせ！</p>
          </div>
        </div>
      </div>

      <div class="news">
        <div class="date">
          <p>2024.5.25</p>
        </div>
        <div class="topic">
          <div class="genre">
            <p>イベント情報</p>
          </div>
          <div class="title">
            <p>メンタースレッドが新しくなりました！</p>
          </div>
        </div>
      </div>
      <!--  -->
    </div>
  </div>
</template>

<style scoped lang="scss">
.center {
  align-items: center;
  justify-content: center;
  display: flex;
}
.framework {
  background-color: #f5f5f5;
  box-shadow:
    3px 3px 5px 0 #d8d8d8,
    3px 3px 10px 0 #d8d8d8;
  width: 1000px;
  height: 1038px;
  min-height: (870 + 30 * 2) px;
}
.newsList {
  height: 870px;
  width: 759px;
  margin: 84px auto;
}
.news {
  background-color: #fff;
  width: 759px !important;
  height: 60px !important;
  position: relative;
  display: flex;
  align-items: center;
  font-family: 'Noto Sans';
  padding: 0 40px;
  margin: auto;
  margin-bottom: 30px;

  .date {
    font-weight: 400;
    font-size: 14px;
    width: 60px;
    height: 19px;
    margin: 40px 0;
  }

  .topic {
    display: flex;
    margin: 0 20px;
    .genre {
      width: 104px;
      height: 24px;
      border-radius: 5px 5px 5px 5px;
      font-size: 12px;
      font-weight: 700;
      color: #fff;
      background-color: #ff5a36;
      margin: 0 10px;
      padding: 4px;
      text-align: center;
    }
    .title {
      margin: 0 10px;
      font-size: 14px;
      font-weight: 700;
      line-height: 19.07px;
      .RouterLink {
        text-decoration: none;
        color: #242424;
        &:hover {
          text-decoration: underline;
        }
        &:visited {
          color: inherit;
        }
      }
      p {
        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
}

@media screen and (min-width: 768px) and (max-width: 1000px) {
  .framework {
    width: 100%;
  }
}

@media screen and (max-width: 768px) {
  .framework {
    width: 708px;
    height: 2104px;

    .newsList {
      width: 601px;
      height: 1968px;
      margin: 68px auto;
    }
    .news {
      width: 601px !important;
      height: auto !important;
      flex-direction: column;
      align-items: normal;
      padding: 35px;
      gap: 7px;
      .date {
        margin: 0;
      }
      .topic {
        flex-direction: column;
        margin: 0;
        gap: 7px;
        .genre {
          width: 157px !important;
          height: auto;
          font-size: 16px;
          line-height: 21.79px;
          margin: 0;
        }
        .title {
          font-size: 26px;
          line-height: 35.41px;
          margin: 0;
          .RouterLink {
            &:hover {
              text-decoration-thickness: 2px;
            }
          }
        }
      }
    }
  }
}
</style>

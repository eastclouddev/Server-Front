<script lang="ts">
import { ref } from 'vue'

export default {
  data(): {
    categorys: Record<number, string>
    isEditing: number | null
    newCategory: string
    editflag: boolean
  } {
    return {
      categorys: {
        0: 'メディア掲載',
        1: '機能アップデート',
        2: 'イベント情報',
      },
      isEditing: null,
      newCategory: '',
      editflag: false,
    }
  },
  methods: {
    editItem(index: number) {
      this.isEditing = index
    },
    doneEditing() {
      if (
        this.isEditing !== null &&
        this.isEditing >= Object.keys(this.categorys).length
      ) {
        if (/\p{L}/u.test(this.newCategory)) {
          this.categorys[Object.keys(this.categorys).length] = this.newCategory
          this.newCategory = ''
        }
      }
      this.isEditing = null
      this.editflag = false
      console.log(this.categorys)
    },
    addCategory() {
      this.isEditing = Object.keys(this.categorys).length
      this.editflag = true
    },
  },
}
</script>

<template>
  <div class="lists">
    <div class="items" v-for="(category, index) in categorys" :key="index">
      <input
        class="editing"
        v-if="isEditing === index"
        type="text"
        v-model="categorys[index]"
        @blur="doneEditing"
      />
      <div v-else class="text">
        {{ category }}
      </div>
      <div
        class="editBtn center"
        :class="{ 'edit-mode': isEditing === index }"
        @click="isEditing === index ? doneEditing() : editItem(index)"
      >
        <p>編集</p>
        <img
          v-if="isEditing === index"
          src="~/assets/editing_icon.svg"
          alt="edit"
        />
        <img v-else src="~/assets/edit_icon.svg" alt="edit" />
      </div>
    </div>
    <div class="items">
      <input
        class="editing"
        v-if="isEditing === Object.keys(categorys).length"
        type="text"
        v-model="newCategory"
        @blur="doneEditing"
      />
      <div v-else class="text add center" @click="addCategory">
        <div class="cross" />
      </div>
      <div
        class="editBtn center"
        :class="{
          'edit-mode': editflag === true,
          'display-none': editflag === false,
        }"
        @click="
          isEditing === Object.keys(categorys).length
            ? doneEditing()
            : editItem(Object.keys(categorys).length)
        "
      >
        <p>編集</p>
        <img
          v-if="isEditing === Object.keys(categorys).length"
          src="~/assets/editing_icon.svg"
          alt="edit"
        />
        <img v-else src="~/assets/edit_icon.svg" alt="edit" />
      </div>
    </div>
    <div class="submit">
      <NuxtLink to="/news/manager/view" class="NuxtLink">完了</NuxtLink>
    </div>
  </div>
</template>

<style scoped lang="scss">
.lists {
  display: flex;
  flex-direction: column;
  width: 560px;
  margin: auto;
  margin-top: 60px;
  font-weight: 700;
  gap: 30px;
}

.center {
  display: flex;
  justify-content: center;
  align-items: center;
}

.editing {
  display: flex;
  align-items: center;
  width: 440px;
  height: 60px;
  background-color: #f5f5f5;
  border-radius: 5px;
  padding: 0 40px;
  font-size: 14px;
  line-height: 19.07px;
  outline: none;
}

.items {
  display: flex;
  gap: 20px;
  .text {
    display: flex;
    align-items: center;
    width: 440px;
    height: 60px;
    background-color: #f5f5f5;
    border-radius: 5px;
    padding: 0 40px;
    font-size: 14px;
    line-height: 19.07px;
    &.add {
      &:hover {
        cursor: pointer;
      }
    }
  }
  .editBtn {
    height: 60px;
    border-radius: 5px;
    padding: 10px;
    border: 2px solid #ff5a36;
    color: #ff5a36;
    gap: 10px;
    &.edit-mode {
      border: none;
      background-color: #ff5a36;
      color: #fff;
    }
    &.display-none {
      display: none;
    }
    &:hover {
      cursor: pointer;
    }
    p {
      font-size: 18px;
      text-align: center;
      line-height: 24.52px;
      margin-left: 10px;
    }
    img {
      width: 18px;
      height: 18px;
    }
  }
}
.cross {
  width: 15.63px;
  height: 15.63px;
  position: relative;
  &::before,
  &::after {
    content: '';
    position: absolute;
    background-color: #ff5a36;
  }
  &::before {
    left: 6.815px;
    width: 2px;
    height: 100%;
  }
  &::after {
    top: 6.815px;
    width: 100%;
    height: 2px;
  }
}
.submit {
  display: flex;
  width: 100%;
  height: 57px;
  margin-top: 18px;
  border-radius: 5px;
  background-color: #ff5a36;
}
.NuxtLink {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  font-weight: 700;
  line-height: 24.52px;
  color: #fff;
  text-decoration: none;
  &:visited {
    color: #fff;
  }
}

@media screen and (max-width: 768px) {
  .lists {
    width: 630px;
    margin-top: 120px;
  }

  .editing {
    width: 454px;
    height: 95px;
    padding: 35px;
  }
  .items {
    .text {
      width: 454px;
      height: 95px;
      padding: 35px;
      font-size: 26px;
      line-height: 35.41px;
    }
    .editBtn {
      height: auto;
      padding: 0 20px;
      p {
        font-size: 32px;
        line-height: 43.58px;
        margin-left: 0;
      }
      img {
        width: 31.5px;
        height: 31.5px;
      }
    }
  }

  .cross {
    width: 40.62px;
    height: 39.84px;
    &::before {
      left: 18.31px;
      width: 4px;
    }
    &::after {
      top: 17.92px;
      height: 4px;
    }
  }

  .submit {
    height: 94px;
    margin-top: 80px;
  }
  .NuxtLink {
    font-size: 35px;
    line-height: 47.67px;
  }
}
</style>

<script setup lang="ts">
import Dropdown from '~/features/userList/components/dropDown.vue'
import CourseDD from '~/features/userList/components/courseDropDown.vue'

const props = defineProps<{
  role: string
  roles: string[]
}>()

const label = '選択してください'

const role = reactive({
  label: label,
  items: props.roles,
})

const course = reactive({
  label: label,
  items: ['コースA', 'コースB', 'コースC'],
})

const selectedCourse = ref('')
const selectedRole = ref('')
</script>

<template>
  <v-container>
    <div class="name">
      <div class="form">
        <label for="f_name">姓</label>
        <v-text-field
          type="name"
          single-line
          placeholder="山田"
          variant="solo"
          hide-details
          bg-color="#EBEBEB"
        />
      </div>
      <div class="form">
        <label for="f_name">名</label>
        <v-text-field
          type="name"
          single-line
          placeholder="太郎"
          variant="solo"
          hide-details
          bg-color="#EBEBEB"
        />
      </div>
    </div>
    <div class="ruby">
      <div class="form">
        <label for="f_ruby">姓（フリガナ）</label>
        <v-text-field
          type="name"
          single-line
          placeholder="ヤマダ"
          variant="solo"
          hide-details
          bg-color="#EBEBEB"
        />
      </div>
      <div class="form">
        <label for="l_ruby">名（フリガナ）</label>
        <v-text-field
          type="name"
          single-line
          placeholder="タロウ"
          variant="solo"
          hide-details
          bg-color="#EBEBEB"
        />
      </div>
    </div>
    <div class="mail">
      <div class="form">
        <label for="mail">メールアドレス</label>
        <v-text-field
          type="mail"
          single-line
          placeholder="XXXXXXX @example .com"
          variant="solo"
          hide-details
          bg-color="#EBEBEB"
        />
      </div>
    </div>
    <div class="role" :class="{ manager: props.role === '管理者' }">
      <div class="form">
        <label for="mail">ユーザーロール</label>
        <Dropdown :role="props.role" v-bind="role" v-model="selectedRole" />
      </div>
    </div>
    <div class="course">
      <div class="form">
        <label for="mail">受講コース</label>
        <CourseDD :role="props.role" v-bind="course" v-model="selectedCourse" />
      </div>
    </div>
    <div class="btn">
      <v-btn>ユーザーを追加する</v-btn>
    </div>
  </v-container>
</template>

<style scoped lang="scss">
.v-theme--light * {
  box-shadow: none;
  font-size: 14px;
  font-weight: 400;
}

.form {
  display: flex;
  justify-content: left;
  label {
    width: 220px;
    display: flex;
    align-items: center;
    font-size: 16px;
    font-weight: 700;
    line-height: 21.79px;
  }
}
.v-container {
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding: 0;
  margin: 0;
  .name,
  .ruby {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
  .role {
    height: 156px;
    &.manager {
      height: 256px;
    }
  }
  .course {
    height: 206px;
  }
  .v-input {
    color: #242424;
  }
  .btn {
    display: flex;
    align-items: center;
    justify-content: center;
    .v-btn {
      background-color: #ff5a36;
      border-radius: 5px 5px;
      box-shadow: 3px 3px 10px 0 #f2eeee40;
      color: #fff;
      width: 400px;
      height: 48px;
      * {
        font-size: 18px;
        font-weight: 700;
        line-height: 24.52px;
      }
    }
  }
}

@media screen and (max-width: 768px) {
  .v-theme--light * {
    font-size: 30px;
  }

  .form {
    flex-direction: column;
    gap: 20px;
    label {
      font-size: 32px;
      line-height: 43.58px;
      white-space: nowrap;
    }
  }

  .v-container {
    width: 548px;
    gap: 60px;
    .name,
    .ruby {
      gap: 20px;
    }
    .v-input--density-default * {
      height: 95px;
    }
    .role,
    .course {
      .form {
        gap: 40px;
      }
    }

    .role {
      height: 324px;
      &.manager {
        height: 564px;
      }
      .v-container {
        width: 314px;
      }
    }

    .course {
      height: 404px;
    }
    .btn {
      .v-btn {
        width: 548px;
        height: 95px;
        * {
          font-size: 32px;
          line-height: 43.58px;
        }
      }
    }
  }
}
</style>

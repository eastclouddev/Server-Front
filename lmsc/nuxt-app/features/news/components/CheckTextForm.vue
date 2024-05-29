<script lang="ts">
import { ref } from 'vue'

export default {
  props: {
    item: {
      type: Object,
      default: () => ({ title: '', text: '' }),
    },
  },
  setup() {
    const svgs = ref({
      bold: 'mdi-format-bold',
      italic: 'mdi-format-italic',
      strike: 'mdi-format-strikethrough-variant',
      list_bulleted: 'mdi-format-list-bulleted',
      list_numbering: 'mdi-format-list-numbered',
      list_checked: 'mdi-format-list-checks',
      table: 'mdi-table',
      quote: 'mdi-format-quote-close',
      code: 'mdi-code-braces',
      link: 'mdi-link-variant',
    })
    return {
      svgs,
    }
  },
  data(): {
    SampleText: string
    inputTitle: string
    inputText: string
    isInputText: boolean
    spanNum: number
  } {
    return {
      SampleText: `
      *Header1\n
      **Header2\n
      ***Header3\n
      \n
      &color(#FF5A36){ Color }\n
      \n
      "Bold"\n
      \n
      https://sample.com/\n
      \n
      {code}\n
      package hello world;\n
      public class Hello {\n
        return “Hello”;\n
      }\n
    }\n
    {/code}\n
    `,
      inputTitle: this.item.title || '',
      inputText: this.item.text || '',
      isInputText: false,
      spanNum: 0,
    }
  },
  computed: {
    showLabel() {
      return this.inputTitle !== ''
    },
  },
  methods: {
    ClickOption(mode: string) {
      console.log(mode)
    },
  },
  watch: {
    inputTitle(newVal) {
      if (newVal !== '') {
        this.showLabel = true
      } else {
        this.showLabel = false
      }
    },
    inputText(newVal) {
      if (newVal !== '') {
        this.isInputText = true
        console.log(this.isInputText)
      } else {
        this.isInputText = false
        console.log(this.isInputText)
      }
    },
  },
}
</script>

<template>
  <div class="form">
    <v-text-field
      class="titleForm"
      color="#242424"
      bg-color="#fff"
      variant="plain"
      hide-details
      single-line
      :label="showLabel ? 'タイトル' : ''"
      v-model="inputTitle"
      readonly
    />

    <div class="preview">
      <div class="content">
        <h1 class="onLine">Header1</h1>
        <h2 class="onLine">Header2</h2>
        <h3 class="onLine">Header3</h3>
        <p class="color">Color</p>
        <p class="bold">Bold</p>
        <div class="link">
          <v-icon class="linkIcon">mdi-link-variant</v-icon>
          <p>https://○○○○○○</p>
        </div>
        <div class="code">
          <p>
            package helloworld;<br />
            public clas hello {<br />
            <span class="tag" />return "Hello";<br />
            }
          </p>
        </div>
      </div>
    </div>
    <div class="editOptions">
      <div class="icons">
        <v-icon
          v-for="(value, key) in svgs"
          :name="key"
          :class="{ icon: true, rotate: key === 'link' }"
        >
          {{ value }}
        </v-icon>
      </div>
      <div class="edit">
        <NuxtLink to="/news/manager/edit/editNews" class="NuxtLink">
          編集
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<style>
.form {
  .v-field--variant-plain.v-field {
    --v-field-padding-start: 16px;
  }
}
</style>

<style scoped lang="scss">
.form {
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;
  .v-input {
    font-size: 16px;
    font-weight: 400;
    line-height: 25.6px;
  }
  .titleForm {
    margin-bottom: 20px;
    height: 58px;
    * {
      box-shadow: none;
    }
    &.v-input--density-default {
      --v-input-control-height: 58px;
      --v-input-padding-top: 10px;
    }
  }

  .preview {
    background-color: #fffaf4;
    display: flex;
    justify-content: center;
    padding-top: 16px;
    font-size: 15.5px;
    padding-bottom: 2em;
    .content {
      display: flex;
      flex-direction: column;
      width: 728px;
      gap: 20px;
      .onLine {
        box-sizing: border-box;
        border-left: 4px solid #ff5a36;
        padding-left: 20px;
      }
      .color {
        color: #ff5a36;
      }
      .bold {
        font-weight: bold;
      }
      .link {
        display: flex;
        color: #ff5a36;
        align-items: center;
        .linkIcon {
          min-width: 16px;
          width: 16px;
          min-height: 16px;
          height: 16px;
          margin-right: 5px;
          transform: scaleX(-1) rotate(90deg);
          &::before {
            font-size: 16px;
          }
        }
        p {
          text-decoration: underline;
        }
      }
      .code {
        width: 100%;
        background-color: #f4f4f4;
        border: 0.5px solid rgba(207, 207, 207, 0.5);
        border-radius: 5px;
        padding: 10px;
        .tag::before {
          $sp: '\00a0' + '\00a0';
          content: $sp;
        }
      }
    }
  }
}
.editOptions {
  display: flex;
  justify-content: right;
  align-items: center;
  width: 100%;
  height: 40px;
  background-color: #fffaf4;
  border-top: 0.5px solid rgba(207, 207, 207, 0.5);
  border-radius: 0 0 5px 5px;
  .icons {
    display: flex;
    height: 20px;
    gap: 10px;
    opacity: 0.2;
    .icon {
      min-width: 20px;
      width: 20px;
      min-height: 20px;
      height: 20px;
      margin: 0;
      line-height: 20px;
      text-align: center;
      &::before {
        font-size: 20px;
      }
    }
    .rotate {
      transform: scaleX(-1) rotate(90deg);
    }
  }
  .edit {
    border-radius: 6.88px;
    border: 1px solid #ff5a36;
    background-color: #fff;
    margin: 0 10px;
    height: 29px;
    .NuxtLink {
      color: #ff5a36;
      text-decoration: none;
      padding: 4px 37px;
      font-size: 14px;
      font-weight: 400;
      line-height: 16.94px;
      text-align: center;
    }
  }
}

@media screen and (max-width: 768px) {
  .form {
    .preview {
      font-size: 25px;
      padding-top: 25px;
      padding-bottom: 4em;
      .content {
        width: 543px;
        gap: 25px;
        h1 {
          font-size: 32px;
        }
        h2 {
          font-size: 30px;
        }
        h3 {
          font-size: 28px;
        }
        .link {
          .linkIcon {
            min-width: 29px;
            width: 29px;
            min-height: 29px;
            height: 29px;
            margin-right: 5px;
            margin-right: 6px;
            &::before {
              font-size: 29px;
            }
          }
          p {
            font-weight: 700;
          }
        }
      }
    }
  }
  .editOptions {
    height: 150px;
    .icons {
      width: 290px;
      height: auto;
      display: flex;
      flex-wrap: wrap;
      .icon {
        min-width: 50px;
        width: 50px;
        min-height: 50px;
        height: 50px;
        &::before {
          font-size: 50px;
        }
      }
    }
    .edit {
      height: 80px;
      margin-left: 56px;
      margin-right: 17px;
      border: 2px solid #ff5a36;
      display: flex;
      justify-content: center;
      align-items: center;
      .NuxtLink {
        font-size: 35px;
        line-height: 42.36px;
        padding: 19px 64.5px;
      }
    }
  }
}
</style>

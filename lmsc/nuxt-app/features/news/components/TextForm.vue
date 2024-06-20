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
    {/code}\n
    `,
      inputTitle: this.item.title || '',
      inputText: this.item.text || '',
      isInputText: false,
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
      placeholder="タイトルを入力する"
    />

    <v-textarea
      class="textForm"
      color="#242424"
      bg-color="#fff"
      variant="plain"
      v-model="inputText"
      hide-details
      rows="18"
      rounded="true"
      single-line
      ref="textarea"
    >
      <template v-show="!inputText" v-slot:label @click:control="">
        <div>
          <p>
            *Header1<br />
            **Header2<br />
            ***Header3<br />
            <br />
            &color(#FF5A36){ Color }<br />
            <br />
            "Bold"<br />
            <br />
            https://sample.com/<br />
            <br />
            {code}<br />
            package hello world;<br />
            public class Hello {<br />
            return “Hello”;<br />
            }<br />
            {/code}<br />
          </p>
        </div>
      </template>
    </v-textarea>
    <div class="editOptions">
      <div class="icons">
        <v-icon
          v-for="(value, key) in svgs"
          :name="key"
          :class="{ icon: true, rotate: key === 'link' }"
          @click="ClickOption(key)"
        >
          {{ value }}
        </v-icon>
      </div>
      <div class="preview">
        <NuxtLink to="/news/manager/edit/Preview" class="NuxtLink">
          プレビュー
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
  .textForm {
    * {
      box-shadow: none;
    }
  }
}
.editOptions {
  display: flex;
  justify-content: right;
  align-items: center;
  width: 100%;
  height: 40px;
  background-color: #cfcfcf;
  border-radius: 0 0 5px 5px;
  .icons {
    display: flex;
    height: 20px;
    gap: 10px;
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
  .preview {
    border-radius: 6.88px;
    border: 1px solid #ff5a36;
    background-color: #fff;
    margin: 0 10px;
    height: 29px;
    .NuxtLink {
      color: #ff5a36;
      text-decoration: none;
      padding: 6px 16px;
      font-size: 14px;
      font-weight: 400;
      line-height: 16.94px;
      text-align: center;
    }
  }
}

@media screen and (max-width: 768px) {
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
    .preview {
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
        padding: 19px 20.5px;
      }
    }
  }
}
</style>

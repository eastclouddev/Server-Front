<template>
  <v-card
    flat
    :style="{
      backgroundColor: `rgb(var(--v-theme-background))`,
      padding: '32px',
    }"
  >
    <v-card-text>
      <div
        style="
          display: flex;
          align-items: center;
          font-size: 16px;
          margin-bottom: 16px;
        "
      >
        <p
          @click="$emit('switch-to-questions')"
          style="cursor: pointer; color: #ff5a36"
        >
          質問一覧
        </p>
        <v-icon style="margin: 0 5px">mdi-chevron-right</v-icon>
        <p style="color: #ff5a36">{{ question.title }}</p>
      </div>
      <div class="mt-3 mb-2" style="font-weight: bold; font-size: 24px">
        質問の詳細
      </div>
      <v-list style="background: none; padding: 10px">
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title style="font-weight: bold" class="mb-2">{{
              question.title
            }}</v-list-item-title>
            <v-list-item-subtitle>{{ question.content }}</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
        <div class="mt-4">
          <div class="mb-2" style="font-weight: bold; font-size: 18px">
            返信一覧
          </div>
          <template v-for="(reply, index) in replies" :key="index">
            <v-list-item class="mt-3 list-item-border">
              <v-row no-gutters>
                <v-col cols="auto">
                  <v-avatar>
                    <img
                      src="/assets/icons/avatar.svg"
                      alt="Avatar"
                      style="width: 40px; height: 40px"
                    />
                  </v-avatar>
                </v-col>
                <v-col style="margin-left: 10px">
                  <v-list-item-title style="font-weight: bold" class="mb-2">
                    {{ reply.user.name }}
                  </v-list-item-title>
                  <v-list-item-subtitle style="margin-bottom: 1rem">
                    {{ reply.content }}
                  </v-list-item-subtitle>
                  <v-list-item-subtitle
                    class="d-flex justify-space-between align-center"
                    style="opacity: 1 !important"
                  >
                    <span>
                      <span style="color: #b5b5b5">{{ reply.created_at }}</span>
                    </span>
                  </v-list-item-subtitle>
                </v-col>
              </v-row>
            </v-list-item>
          </template>
        </div>
      </v-list>
      <hr class="border-t border-dashed my-10" />
      <v-form @submit.prevent="submitReply">
        <TextArea
          v-model="newReply.content"
          placeholder="返信内容を入力する"
          outlined
        />
        <div
          style="
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-top: 20px;
            padding: 10px;
            border-radius: 5px;
          "
        >
          <OutlinedButton
            @click.prevent="selectFileOnce"
            :disabled="isSubmitting"
            color="#FF5A36"
            textColor="#FF5A36"
            fontSize="16px"
            fontWeight="normal"
            icon="mdi-paperclip"
            >ファイル選択</OutlinedButton
          >
          <!-- v-file-inputは非表示 -->
          <v-file-input
            ref="fileInput"
            v-model="newReply.file"
            label="ファイル選択"
            prepend-icon="mdi-paperclip"
            variant="outlined"
            outlined
            class="hidden-file-input"
            :disabled="isSubmitting"
          />
          <SolidButton
            :disabled="isSubmitting"
            type="submit"
            color="#FF5A36"
            textColor="white"
            fontSize="16px"
            icon="mdi-send"
            >返信する</SolidButton
          >
        </div>
        <p v-if="newReply.file">{{ newReply.file.name }}</p>
      </v-form>
      <p v-if="message">{{ message }}</p>
    </v-card-text>
  </v-card>
</template>

<script setup lang="ts">
import { ref, toRaw, watch } from 'vue'
import { useRoute } from 'vue-router'
import {
  VAvatar,
  VListItem,
  VRow,
  VCol,
  VList,
  VCard,
  VCardText,
  VListItemTitle,
  VListItemSubtitle,
  VFileInput,
} from 'vuetify/components'
import TextArea from '@/components/TextArea.vue'
import OutlinedButton from '@/components/OutlinedButton.vue'
import SolidButton from '@/components/SolidButton.vue'
import { useCreateAnswer } from '~/features/course/api/createAnswer'
import { useGetQuestionThread } from '~/features/course/api/getQuestionThread'
import { s3UploadFile } from '@/libs/s3Upload'

const route = useRoute()

const props = defineProps<{ selectedId: number }>()
const questionId = props.selectedId

const question = ref({
  title: '',
  content: '',
})
const replies = ref<any[]>([])

const {
  data: questionThreadData,
  error: questionThreadError,
  status: questionThreadStatus,
} = useGetQuestionThread(questionId)

watch(questionThreadData, () => {
  if (questionThreadData.value) {
    const rawData = toRaw(questionThreadData.value)
    question.value.title = rawData.question.title
    question.value.content = rawData.question.content
    replies.value = rawData.answer
  }
})

const newReply = ref({
  content: '',
  file: null as File | null,
})

const fileInput = ref<InstanceType<typeof VFileInput> | null>(null)
const message = ref<string>('')
const isSubmitting = ref<boolean>(false)

let triggered = false
const selectFile = () => {
  if (fileInput.value) {
    const inputElement = fileInput.value.$el.querySelector('input')
    if (inputElement) {
      inputElement.click()
    }
  }
}
const selectFileOnce = () => {
  if (!triggered) {
    selectFile()
    triggered = true
    setTimeout(() => {
      triggered = false
    }, 1000)
  }
}

const { mutate } = useCreateAnswer()

const submitReply = async () => {
  isSubmitting.value = true
  let fileUrl = ''
  if (newReply.value.file) {
    try {
      fileUrl = await s3UploadFile(
        newReply.value.file.name,
        await readFileAsBase64(newReply.value.file),
        'question/reply'
      )
    } catch (error: unknown) {
      console.error('Error uploading file:', error)
      if (error instanceof Error) {
        message.value = `Error: ${error.message}`
      } else {
        message.value = 'An unknown error occurred'
      }
      isSubmitting.value = false
      return
    }
  }

  const replyData = {
    user_id: 1, // Todo:固定値修正
    parent_answer_id: null,
    content: newReply.value.content,
    media_content: fileUrl ? [{ url: fileUrl }] : [],
  }

  mutate(
    { questionId, replyData },
    {
      onSuccess: () => {
        console.log('返信が投稿されました')
        message.value = '返信が投稿されました'
        location.reload() // 成功したら画面を再読み込み
      },
      onError: (error: any) => {
        if (error.response) {
          console.error('エラーが発生しました', error.response.data)
          message.value = `エラーが発生しました: ${error.response.data}`
        } else {
          console.error('エラーが発生しました', error.message)
          message.value = `エラーが発生しました: ${error.message}`
        }
        isSubmitting.value = false
      },
    }
  )
}

async function readFileAsBase64(file: File): Promise<string> {
  return new Promise<string>((resolve, reject) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => {
      resolve((reader.result as string).split(',')[1])
    }
    reader.onerror = error => {
      reject(error)
    }
  })
}
</script>

<style scoped>
.list-item-border {
  border-top: 1px solid #ccc;
  padding-top: 15px;
}
.list-item-border:last-child {
  border-bottom: 1px solid #ccc;
  padding-bottom: 15px;
}
.hidden-file-input {
  display: none;
}
</style>

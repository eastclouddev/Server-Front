<template>
  <div>
    <h1>Upload File</h1>
    <form @submit.prevent="uploadFile">
      <input type="file" @change="handleFileChange" />
      <input type="text" v-model="directory" placeholder="Enter directory" />
      <button type="submit">Upload</button>
    </form>
    <p v-if="message">{{ message }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const file = ref<File | null>(null)
const directory = ref<string>('')
const message = ref<string>('')

const handleFileChange = (event: Event) => {
  const target = event.target as HTMLInputElement
  if (target.files && target.files[0]) {
    file.value = target.files[0]
  }
}

const uploadFile = async () => {
  if (!file.value || !directory.value) {
    message.value = 'Please select a file and enter a directory.'
    return
  }

  const reader = new FileReader()
  reader.readAsDataURL(file.value)

  reader.onload = async () => {
    const base64File = (reader.result as string).split(',')[1]

    try {
      const response = await fetch('/api/upload', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          file: { name: file.value!.name, content: base64File },
          directory: directory.value,
        }),
      })

      const result = await response.json()
      message.value = result.success
        ? 'File uploaded successfully!'
        : `Error: ${result.message}`
    } catch (error) {
      message.value = `Error: ${error.message}`
    }
  }

  reader.onerror = error => {
    message.value = `Error reading file: ${error.message}`
  }
}
</script>

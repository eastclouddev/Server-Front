<template>
    <Head>
      <Title>質問詳細 | iDemy</Title>
      <Meta name="description" content="iDemy | 質問詳細画面" />
    </Head>
    <v-container>
      <MessageContent />
    </v-container>
</template>
<script setup>
definePageMeta({
  middleware: 'auth',
})
import MessageContent from '~/features/auth/question/components/MessageContent.vue';

</script>

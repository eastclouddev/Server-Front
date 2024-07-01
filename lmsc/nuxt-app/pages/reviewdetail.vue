<template>
    <Head>
      <Title>レビュー詳細 | iDemy</Title>
      <Meta name="description" content="iDemy | レビュー詳細画面" />
    </Head>
    <v-container>
      <MessageContent />
    </v-container>
</template>
<script setup>
definePageMeta({
  middleware: 'auth',
})
import MessageContent from '~/features/auth/review/components/MessageContent.vue';

</script>

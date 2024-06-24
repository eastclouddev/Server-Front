import { S3Client } from '@aws-sdk/client-s3'

export default defineNuxtPlugin(nuxtApp => {
  const config = useRuntimeConfig().public

  const s3 = new S3Client({
    region: config.awsRegion,
    credentials: {
      accessKeyId: config.awsAccessKeyId as string,
      secretAccessKey: config.awsSecretAccessKey as string,
    },
  })

  nuxtApp.provide('s3', s3)
})

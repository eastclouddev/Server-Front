import { defineEventHandler } from 'h3'
import { ListBucketsCommand, S3Client } from '@aws-sdk/client-s3'
import { useRuntimeConfig } from '#imports'

export default defineEventHandler(async event => {
  const config = useRuntimeConfig()

  console.log(
    'Runtime Config - CUSTOM_AWS_ACCESS_KEY_ID:',
    config.customAwsAccessKeyId
  )
  console.log(
    'Runtime Config - CUSTOM_AWS_SECRET_ACCESS_KEY:',
    config.customAwsSecretAccessKey
  )
  console.log('Runtime Config - CUSTOM_AWS_REGION:', config.customAwsRegion)
  console.log(
    'Runtime Config - CUSTOM_AWS_S3_BUCKET:',
    config.customAwsS3Bucket
  )

  console.log(
    'Environment Variable - CUSTOM_AWS_ACCESS_KEY_ID:',
    process.env.CUSTOM_AWS_ACCESS_KEY_ID
  )
  console.log(
    'Environment Variable - CUSTOM_AWS_SECRET_ACCESS_KEY:',
    process.env.CUSTOM_AWS_SECRET_ACCESS_KEY
  )
  console.log(
    'Environment Variable - CUSTOM_AWS_REGION:',
    process.env.CUSTOM_AWS_REGION
  )
  console.log(
    'Environment Variable - CUSTOM_AWS_S3_BUCKET:',
    process.env.CUSTOM_AWS_S3_BUCKET
  )

  const s3 = new S3Client({
    region: config.customAwsRegion,
    credentials: {
      accessKeyId: config.customAwsAccessKeyId,
      secretAccessKey: config.customAwsSecretAccessKey,
    },
  })

  try {
    const command = new ListBucketsCommand({})
    const response = await s3.send(command)
    return { success: true, buckets: response.Buckets }
  } catch (error) {
    if (error instanceof Error) {
      return { success: false, error: error.message }
    } else {
      return { success: false, error: 'An unknown error occurred' }
    }
  }
})

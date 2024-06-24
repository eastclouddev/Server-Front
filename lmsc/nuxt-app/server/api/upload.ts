import { defineEventHandler, readBody } from 'h3'
import { uploadFileToS3 } from '../util/s3Upload'

interface UploadRequestBody {
  file: {
    name: string
    content: string
  }
  directory: string
}

export default defineEventHandler(async event => {
  const body = await readBody<UploadRequestBody>(event)
  const { file, directory } = body

  if (!file || !directory) {
    return { success: false, message: 'File and directory are required' }
  }

  const buffer = Buffer.from(file.content, 'base64')
  const bucketName = process.env.CUSTOM_AWS_S3_BUCKET as string
  const key = `${directory}/${Date.now()}_${file.name}`

  try {
    await uploadFileToS3(bucketName, key, buffer)
    return { success: true, message: 'File uploaded successfully' }
  } catch (error) {
    return { success: false, message: (error as Error).message }
  }
})

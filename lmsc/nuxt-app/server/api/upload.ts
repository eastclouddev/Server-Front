import { defineEventHandler, readBody } from 'h3'
import { uploadFileToS3 } from '@/libs/s3Upload'

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
  const filePath = `${directory}/${Date.now()}_${file.name}`

  try {
    await uploadFileToS3(buffer, filePath)
    const fileUrl = `https://${process.env.CUSTOM_AWS_S3_BUCKET}.s3.${process.env.CUSTOM_AWS_REGION}.amazonaws.com/${filePath}`
    return { success: true, url: fileUrl }
  } catch (error: unknown) {
    console.error('Error uploading file:', error)
    return { success: false, message: (error as Error).message }
  }
})

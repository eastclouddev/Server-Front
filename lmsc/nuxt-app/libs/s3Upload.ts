import {
  S3Client,
  PutObjectCommand,
  type PutObjectCommandOutput,
} from '@aws-sdk/client-s3'

const s3Client = new S3Client({
  region: process.env.CUSTOM_AWS_REGION || 'us-east-1',
  credentials: {
    accessKeyId: process.env.CUSTOM_AWS_ACCESS_KEY_ID as string,
    secretAccessKey: process.env.CUSTOM_AWS_SECRET_ACCESS_KEY as string,
  },
})

const BASE_PATH = 'uploads/'

export async function uploadFileToS3(
  buffer: Buffer,
  relativePath: string
): Promise<PutObjectCommandOutput> {
  const bucketName = process.env.CUSTOM_AWS_S3_BUCKET as string
  const filePath = `${BASE_PATH}${relativePath}`
  const params = {
    Bucket: bucketName,
    Key: filePath,
    Body: buffer,
  }

  try {
    const data = await s3Client.send(new PutObjectCommand(params))
    console.log('File uploaded successfully. Data:', data)
    return data
  } catch (error) {
    console.error('Error uploading file:', error)
    throw error
  }
}

export async function s3UploadFile(
  name: string,
  content: string,
  directory: string
): Promise<string> {
  try {
    const response = await fetch('/api/upload', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        file: { name, content },
        directory,
      }),
    })

    const result = await response.json()
    if (result.success) {
      return result.url
    } else {
      throw new Error(result.message)
    }
  } catch (error: unknown) {
    console.error('Error uploading file:', error)
    if (error instanceof Error) {
      throw new Error(`Error: ${error.message}`)
    } else {
      throw new Error('An unknown error occurred')
    }
  }
}

import {
  S3Client,
  PutObjectCommand,
  PutObjectCommandOutput,
} from '@aws-sdk/client-s3'

const s3Client = new S3Client({
  region: process.env.CUSTOM_AWS_REGION || 'us-east-1',
  credentials: {
    accessKeyId: process.env.CUSTOM_AWS_ACCESS_KEY_ID as string,
    secretAccessKey: process.env.CUSTOM_AWS_SECRET_ACCESS_KEY as string,
  },
})

export const uploadFileToS3 = async (
  bucketName: string,
  key: string,
  file: Buffer
): Promise<PutObjectCommandOutput> => {
  const params = {
    Bucket: bucketName,
    Key: key,
    Body: file,
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

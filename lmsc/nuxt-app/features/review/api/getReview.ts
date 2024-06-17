
import { useAsyncData } from '#app'
import apiClient from '@/libs/axios'
import { AxiosError } from 'axios'
import { service } from '@/constants/service'

export async function getReviewRequest(reviewRequestId: number) {
  try {
    const response = await apiClient.get(`/reviews/${reviewRequestId}`)
    
    console.log('API取得データ:', response.data)
    return response.data
  } catch (err) {
    const axiosError = err as AxiosError
    if (axiosError.response) {
      console.error('レスポンスエラー:', axiosError.response)
    } else if (axiosError.request) {
      console.error('リクエストエラー:', axiosError.request)
    } else {
      console.error('設定エラー:', axiosError.message)
    }
    if (axiosError.response?.status !== 404) {
      throw new Error(service.apiFetchError)
    }
    throw err
  }
}

export function useGetReviewRequest(reviewRequestId: number) {
  const { data, error, status } = useAsyncData(
    `reviewRequest-${reviewRequestId}`,
    () => getReviewRequest(reviewRequestId),
    { server: true }
  )

  return { data, error, status }
}
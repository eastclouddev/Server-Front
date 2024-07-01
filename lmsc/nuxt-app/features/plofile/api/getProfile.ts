import { useAsyncData } from '#app'
import { apiClient } from '@/libs/axios'
import { AxiosError } from 'axios'
import { service } from '@/constants/service'

export async function getUser(userId: number) {
  try {
    const response = await apiClient.users._user_id(userId).$get()
    return response
  } catch (err) {
    const axiosError = err as AxiosError
    if (axiosError.response?.status !== 404) {
      throw new Error(service.apiFetchError)
    }
    throw err
  }
}

export function useGetUser(userId: number) {
  const { data, error, status } = useAsyncData(
    `user-${userId}`,
    () => getUser(userId),
    { server: true }
  )

  return { data, error, status }
}

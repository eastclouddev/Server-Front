import { useAsyncData } from '#app'
import { apiClient } from '@/libs/axios'
import { AxiosError } from 'axios'
import { service } from '@/constants/service'

export async function getCourseList() {
  try {
    const response = await apiClient.courses.$get()
    return response
  } catch (err) {
    const axiosError = err as AxiosError
    if (axiosError.response?.status !== 404) {
      throw new Error(service.apiFetchError)
    }
    throw err
  }
}

export function useGetCourseList() {
  const { data, error, status } = useAsyncData('courses', getCourseList, {
    server: true,
  })

  return { data, error, status }
}

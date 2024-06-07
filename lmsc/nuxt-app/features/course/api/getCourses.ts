/* eslint-disable no-underscore-dangle */
import { useAsyncData } from '#app'
import { apiClient } from '@/libs/axios'
import { AxiosError } from 'axios'
import { service } from '@/constants/service'

export async function getCourses() {
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

export function useGetCourses() {
  const { data, error, status } = useAsyncData(`courses`, () => getCourses(), {
    server: true,
  })

  return { data, error, status }
}

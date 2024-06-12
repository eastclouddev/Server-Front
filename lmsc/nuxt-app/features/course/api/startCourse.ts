import { useMutation } from '@tanstack/vue-query'
import { apiClient } from '@/libs/axios'
import { AxiosError } from 'axios'
import { service } from '@/constants/service'

export async function startCourse(postData: any) {
  try {
    const response = await apiClient.courses.start.$post({
      body: postData,
    })
    return response
  } catch (err) {
    const axiosError = err as AxiosError
    if (axiosError.response?.status !== 404) {
      throw new Error(service.apiFetchError)
    }
    throw err
  }
}

export function useStartCourse() {
  return useMutation({
    mutationFn: (params: { postData: any }) => startCourse(params.postData),
  })
}

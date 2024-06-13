/* eslint-disable no-underscore-dangle */
import { useAsyncData } from '#app'
import { apiClient } from '@/libs/axios'
import { AxiosError } from 'axios'
import { service } from '@/constants/service'

export async function getReviewList(studentId: number) {
  try {
    const response = await apiClient.students
      ._student_id_number(studentId)
      .reviews.$get()
    return response
  } catch (err) {
    const axiosError = err as AxiosError
    if (axiosError.response?.status !== 404) {
      throw new Error(service.apiFetchError)
    }
    throw err
  }
}

export function useGetReviewList(studentId: number) {
  const { data, error, status } = useAsyncData(
    `course-${studentId}`,
    () => getReviewList(studentId),
    { server: true }
  )

  return { data, error, status }
}

export default useGetReviewList

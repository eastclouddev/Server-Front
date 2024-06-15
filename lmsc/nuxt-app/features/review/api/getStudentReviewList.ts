/* eslint-disable no-underscore-dangle */
import { useAsyncData } from '#app'
import { apiClient } from '@/libs/axios'
import { AxiosError } from 'axios'
import { service } from '@/constants/service'

export async function getStudentReviewList(mentorId: number): Promise<any> {
  try {
    const response = await apiClient.mentors
      ._mentor_id(mentorId)
      .students.reviews.$get()
    return response
  } catch (err) {
    const axiosError = err as AxiosError
    if (axiosError.response?.status !== 404) {
      throw new Error(service.apiFetchError)
    }
    throw err
  }
}

export function useGetStudentReviewList(mentorId: number) {
  const { data, error, status } = useAsyncData(
    `course-${mentorId}`,
    () => getStudentReviewList(mentorId),
    { server: true }
  )

  return { data, error, status }
}

import { ref } from 'vue'
import { apiClient } from '@/libs/axios'
import { AxiosError } from 'axios'
import { service } from '@/constants/service'
import type {
  Schemas__students__ReviewRequestListResponseBody,
  Schemas__mentors__ReviewRequestListResponseBody,
} from '~/generated/api/@types'

async function fetchReviewListByRole(id: number, role: number) {
  try {
    if (role === 3) {
      const response = await apiClient.students
        ._student_id_number(id)
        .reviews.$get()
      return response
    } else {
      const response = await apiClient.mentors
        ._mentor_id(id)
        .students.reviews.$get()
      return response
    }
  } catch (err) {
    const axiosError = err as AxiosError
    if (axiosError.response?.status !== 404) {
      throw new Error(service.apiFetchError)
    }
    throw err
  }
}

export async function fetchReviewList(id: number, role: number) {
  const data = ref<
    | Schemas__students__ReviewRequestListResponseBody
    | Schemas__mentors__ReviewRequestListResponseBody
    | null
  >(null)
  const error = ref<Error | null>(null)
  const status = ref<'pending' | 'success' | 'error'>('pending')

  try {
    const response = await fetchReviewListByRole(id, role)
    data.value = response
    status.value = 'success'
  } catch (err) {
    error.value = err as Error
    status.value = 'error'
  }

  return { data, error, status }
}

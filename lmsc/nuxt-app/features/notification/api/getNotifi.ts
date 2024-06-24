import { apiClient } from '@/libs/axios'
import { AxiosError } from 'axios'
import { service } from '@/constants/service'

export async function fetchNotifications(userRole, userId) {
  try {
    let response
    if (userRole === 1) {
      response = await apiClient.notifications.$get()
    } else if (userRole === 2) {
      response = await apiClient.mentors._mentor_id(userId).notifications.$get()
    } else if (userRole === 3) {
      response = await apiClient.students
        ._student_id(userId)
        .notifications.$get()
    }
    console.log('API Response:', response) // APIのレスポンスをログに表示
    return response
  } catch (err) {
    const axiosError = err as AxiosError
    if (axiosError.response) {
      console.error('レスポンスエラー:', axiosError.response)
    } else if (axiosError.request) {
      console.error('リクエストエラー:', axiosError.request)
    } else {
      console.error('設定エラー:', axiosError.message)
    }
    throw err
  }
}

import { apiClient } from '@/libs/axios'
import { AxiosError } from 'axios'
import { service } from '@/constants/service'

export async function markNotificationAsRead(notificationId: number) {
  try {
    const response = await apiClient.notifications
      ._notification_id(notificationId)
      .mark_read.$patch()
    console.log('通知を既読に更新:', response)
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

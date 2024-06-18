import axios from 'axios'
import { AxiosError } from 'axios'
import { service } from '@/constants/service'

export async function createReviewResponse(reviewRequestId, requestBody) {
  try {
    const response = await axios.post(
      `http://localhost:8080/reviews/${reviewRequestId}/responses`,
      requestBody
    )
    return response.data
  } catch (err) {
    const axiosError = err
    if (axiosError.response?.status !== 404) {
      throw new Error(service.apiFetchError)
    }
    throw err
  }
}

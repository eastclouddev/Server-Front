import axios from 'axios'
import { AxiosError } from 'axios'
import { service } from '@/constants/service'

export async function updateUserPassword(new_password) {
  try {
    const response = await axios.post('/password_reset/confirm', {
      new_password,
    })
    return response.data
  } catch (err) {
    const axiosError = err as AxiosError
    if (axiosError.response?.status !== 404) {
      throw new Error(service.apiFetchError)
    }
    throw err
  }
}

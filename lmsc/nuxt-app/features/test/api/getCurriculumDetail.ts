/* eslint-disable no-underscore-dangle */
import { useAsyncData } from "#app";
import { apiClient } from "@/libs/axios";
import { AxiosError } from "axios";
import { service } from "@/constants/service";

export async function getCurriculumDetail(curriculumId: number) {
  try {
    const response = await apiClient.curriculums._curriculum_id(curriculumId).$get()
    return response
  } catch (err) {
    const axiosError = err as AxiosError
    if (axiosError.response?.status !== 404) {
      throw new Error(service.apiFetchError)
    }
    throw err
  }
}

export function useGetCurriculumDetail(curriculumId: number) {
  const { data, error, status } = useAsyncData(
    `currriculum-detail-${curriculumId}`,
    () => getCurriculumDetail(curriculumId),
    { server: true }
  )

  return { data, error, status }
}

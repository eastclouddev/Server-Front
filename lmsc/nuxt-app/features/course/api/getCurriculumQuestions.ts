/* eslint-disable no-underscore-dangle */
import { useAsyncData } from "#app";
import { apiClient } from "@/libs/axios";
import { AxiosError } from "axios";
import { service } from "@/constants/service";

export async function getCurriculumQuestions(courseId: number) {
  try {
    const response = await apiClient.courses._course_id(courseId).questions.$get();
    return response;
  } catch (err) {
    const axiosError = err as AxiosError;
    if (axiosError.response?.status !== 404) {
      throw new Error(service.apiFetchError);
    }
    throw err;
  }
}

export function useGetCurriculumQuestions(courseId: number) {
  const { data, error, status } = useAsyncData(
    `curriculum-questions-${courseId}`,
    () => getCurriculumQuestions(courseId),
    { server: true }
  );

  return { data, error, status };
}

/* eslint-disable no-underscore-dangle */
import { useAsyncData } from "#app";
import { apiClient } from "@/libs/axios";
import { AxiosError } from "axios";
import { service } from "@/constants/service";

export async function getCourse(courseId: number) {
  try {
    const response = await apiClient.courses._course_id(courseId).$get();
    return response;
  } catch (err) {
    const axiosError = err as AxiosError;
    if (axiosError.response?.status !== 404) {
      throw new Error(service.apiFetchError);
    }
    throw err;
  }
}

export function useGetCourse(courseId: number) {
  const { data, error, status } = useAsyncData(
    `course-${courseId}`,
    () => getCourse(courseId),
    { server: true }
  );

  return { data, error, status };
}

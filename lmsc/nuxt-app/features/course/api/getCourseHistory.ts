import { useAsyncData } from "#app";
import { apiClient } from "@/libs/axios";
import { AxiosError } from "axios";
import { service } from "@/constants/service";

export async function getCourseHistory(studentId: number) {
  try {
    const response = await apiClient.students._student_id(studentId).progresses.$get();
    return response;
  } catch (err) {
    const axiosError = err as AxiosError;
    if (axiosError.response?.status !== 404) {
      throw new Error(service.apiFetchError);
    }
    throw err;
  }
}

export function useGetCourseHistory(studentId: number) {
  const { data, error, status } = useAsyncData(
    `coursehistory-${studentId}`,
    () => getCourseHistory(studentId),
    { server: true }
  );

  return { data, error, status };
}
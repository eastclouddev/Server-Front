/* eslint-disable no-underscore-dangle */
import { useAsyncData } from "#app";
import { apiClient } from "@/libs/axios";
import { AxiosError } from "axios";
import { service } from "@/constants/service";

// 進捗管理一覧（受講生）
export async function getStudentProgresses(studentId: number) {
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

export function useGetStudentProgresses(studentId: number) {
  const { data, error, status } = useAsyncData(
    `student-progresses-${studentId}`,
    () => getStudentProgresses(studentId),
    { server: true }
  );

  return { data, error, status };
}

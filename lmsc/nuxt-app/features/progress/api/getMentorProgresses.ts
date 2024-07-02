/* eslint-disable no-underscore-dangle */
import { useAsyncData } from "#app";
import { apiClient } from "@/libs/axios";
import { AxiosError } from "axios";
import { service } from "@/constants/service";

// 進捗管理一覧（メンター）
export async function getMentorProgresses(mentorId: number) {
  try {
    const response = await apiClient.mentors._mentor_id(mentorId).progresses.$get();
    return response;
  } catch (err) {
    const axiosError = err as AxiosError;
    if (axiosError.response?.status !== 404) {
      throw new Error(service.apiFetchError);
    }
    throw err;
  }
}

export function useGetMentorProgresses(mentorId: number) {
  const { data, error, status } = useAsyncData(
    `mentor-progresses-${mentorId}`,
    () => getMentorProgresses(mentorId),
    { server: true }
  );

  return { data, error, status };
}

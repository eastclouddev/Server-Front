import { useMutation } from '@tanstack/vue-query';
import { apiClient } from "@/libs/axios";
import { AxiosError } from "axios";
import { service } from "@/constants/service";

export async function createQuestion(curriculumId: number, questionData: any) {
  try {
    const response = await apiClient.curriculums._curriculum_id(curriculumId).questions.$post({
      body: questionData,
    });
    return response;
  } catch (err) {
    const axiosError = err as AxiosError;
    if (axiosError.response?.status !== 404) {
      throw new Error(service.apiFetchError);
    }
    throw err;
  }
}

export function useCreateQuestion() {
  return useMutation({
    mutationFn: (params: { curriculumId: number, questionData: any }) => createQuestion(params.curriculumId, params.questionData),
  });
}

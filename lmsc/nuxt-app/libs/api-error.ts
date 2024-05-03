import { AxiosError } from "axios";

export enum ErrorCodeType {
  ERR_NETWORK = "ネットワークエラーが発生しました",
  BAD_REQUEST = "不正なリクエストです",
  UNAUTHORIZED = "認証に失敗しました",
  EMAIL_ALREADY_REGISTERED = "メールアドレスが重複しています",
  SHOP_PATH_ALREADY_REGISTERED = "ショップURLが重複しています",
}

type ErrorInfo = {
  errorCode: keyof typeof ErrorCodeType;
};

export function getApiError<T extends ErrorInfo>(
  err: unknown,
  category: string
): string {
  const axiosError = err as AxiosError<T>;

  if (axiosError.response) {
    const { errorCode } = axiosError.response.data;
    return ErrorCodeType[errorCode] ?? "エラーが発生しました";
  }

  return ErrorCodeType.ERR_NETWORK;
}

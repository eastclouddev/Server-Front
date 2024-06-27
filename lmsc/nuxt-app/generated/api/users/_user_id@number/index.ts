/* eslint-disable */
import type * as Types from '../../@types'

export type Methods = {
  /**
   * アカウント更新
   * 
   * Parameters
   * -----------------------
   * dict
   *     first_name: str
   *         名前
   *     last_name: str
   *         姓
   *     first_name_kana: str
   *         名前（カナ）
   *     last_name_kana: str
   *         姓（カナ）
   *     email: str
   *         メールアドレス
   *     is_enable: bool
   *         アカウントの状態
   * user_id: int
   *     更新するユーザーのID
   * 
   * Returns
   * -----------------------
   * なし
   */
  patch: {
    status: 200
    reqBody: Types.UpdateRequestBody
  }

  /**
   * アカウント詳細取得
   * 
   * Parameter
   * -----------------------
   * user_id: int
   *     取得するユーザーのID
   * 
   * Returns
   * -----------------------
   * dict
   *     user_id: str
   *         取得したユーザーのID
   *     first_name: str
   *         名前
   *     last_name: str
   *         姓
   *     first_name_kana: str
   *         名前（カナ）
   *     last_name_kana: str
   *         姓（カナ）
   *     email: str
   *         メールアドレス
   *     company_name: str
   *         会社名
   *     is_enable: bool
   *         アカウントの状態
   *     role: str
   *         ユーザーのロール
   *     last_login: str
   *         最終ログイン日時（ISO 8601形式）
   */
  get: {
    status: 200
    /** Successful Response */
    resBody: Types.Schemas__users__DetailResponseBody
  }
}

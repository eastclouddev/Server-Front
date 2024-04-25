/* eslint-disable */
import type * as Types from '../@types'

export type Methods = {
  /**
   * ログイン認証
   * 
   * Parameters
   * -----------------------
   * email: str
   *     ログインするユーザーのメールアドレス
   * password: str
   *     ログインするユーザーのパスワード
   * device_info: dict
   *     device_info: str
   *     device_name: str
   *     uuid: str
   * 
   * Returns
   * -----------------------
   * dict
   *     user_id: int
   *         ログインしたユーザーのID
   *     access_token: str
   *         生成したトークン
   *     expires_in: int
   *         トークン有効期限
   *     role: str
   *         ユーザーのロール(役割)
   */
  post: {
    status: 200
    /** Successful Response */
    resBody: Types.Schemas__login__ResponseBody
    reqBody: Types.Schemas__login__RequestBody
  }
}

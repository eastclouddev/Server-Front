/* eslint-disable */
export type Methods = {
  /**
   * メールアドレス認証と更新
   * 
   * Parameters
   * -----------------------
   * user_id: int
   *     メールアドレスを変更しようとしているユーザーのID
   * token: str
   *     メールアドレス変更を認証するための一意のトークン
   * 
   * Return
   * -----------------------
   * message: str
   *     "Your email address has been successfully updated."}
   */
  get: {
    status: 200
  }
}

/* eslint-disable */
import type * as Types from '../../@types'

export type Methods = {
  /**
   * 請求履歴詳細取得
   * 
   * Parameter
   * -----------------------
   * billing_id: int
   *     取得する請求履歴のID
   * 
   * Returns
   * -----------------------
   * dict
   *     billing_id: int
   *         請求履歴のID
   *     company_id: int
   *         会社のID
   *     date: str
   *         請求日（YYYY-MM-DD形式）
   *     amount: float
   *         請求金額
   *     status: string
   *         請求状況（例: "paid", "unpaid", "overdue"）
   *     payment_details: dict
   *         支払いの詳細（オプション、支払いが完了している場合に含まれる）
   *         payment_method: str
   *             支払い方法
   *         payment_date: str
   *             支払い日（YYYY-MM-DD形式）
   */
  get: {
    status: 200
    /** Successful Response */
    resBody: Types.BillingDetailResponseBody
  }
}

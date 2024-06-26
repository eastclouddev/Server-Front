/* eslint-disable */
import type * as Types from '../../../@types'

export type Methods = {
  /**
   * 請求履歴一覧取得
   * 
   * Parameter
   * -----------------------
   * company_id: int
   *     会社のID
   * フィルター
   *     target_month: str
   *         (YYYYMM形式)
   *     status: str
   * 
   * Returns
   * -----------------------
   * dict
   *     billing_id: int
   *         請求履歴のID
   *     date: str
   *         請求日（YYYY-MM-DD形式）
   *     amount: float
   *         請求金額
   *     status: string
   *         請求状況（例: "paid", "unpaid", "overdue"）
   *     description:str
   *         請求内容の説明
   */
  get: {
    query?: {
      target_month?: string | undefined
      status?: string | undefined
    } | undefined

    status: 200
    /** Successful Response */
    resBody: Types.BillingListResponseBody
  }
}

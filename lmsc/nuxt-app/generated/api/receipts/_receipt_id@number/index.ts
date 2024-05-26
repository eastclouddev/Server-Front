/* eslint-disable */
import type * as Types from '../../@types'

export type Methods = {
  /**
   * 領収書出力
   * 
   * Parameter
   * -----------------------
   * receipt_id: int
   *     出力する領収書のID
   * 
   * Returns
   * -----------------------
   * dict
   *     receipt_id: int
   *         領収書のID
   *     company_id: int
   *         会社のID
   *     billing_id: int
   *         関連する請求履歴のID
   *     date: str
   *         領収書の日付（YYYY-MM-DD形式）
   *     amount: float
   *         支払金額
   *     received_from: str
   *         支払いを受けた会社または個人の名前
   *     payment_method: str
   *         支払い方法
   */
  get: {
    status: 200
    /** Successful Response */
    resBody: Types.ReceiptDetailResponseBody
  }
}

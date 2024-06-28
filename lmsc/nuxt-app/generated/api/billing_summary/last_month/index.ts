/* eslint-disable */
import type * as Types from '../../@types'

export type Methods = {
  /**
   * 先月の請求金額合計取得
   * 
   * Parameter
   * -----------------------
   * 
   * Returns
   * -----------------------
   * dict
   *     month: str
   *         対象月(ISO 8601形式)
   *     total_billed_amount: float
   *         先月の請求金額の合計
   */
  get: {
    status: 200
    /** Successful Response */
    resBody: Types.BillingSummaryResponseBody
  }
}

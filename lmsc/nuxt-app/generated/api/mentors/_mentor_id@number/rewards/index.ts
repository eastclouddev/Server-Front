/* eslint-disable */
import type * as Types from '../../../@types'

export type Methods = {
  /**
   * 送金履歴一覧
   * 
   * Parameter
   * -----------------------
   * mentor_id: int
   *     送金先履歴を取得したいメンターのID
   * 
   * Returns
   * -----------------------
   * rewards: array
   *     reward_id: int
   *         送金履歴のID
   *     date: str
   *         送金日(YYYY-MM-DD形式)
   *     amount: float
   *         送金額
   *     to_mentor_id: int
   *         送金先のメンターID
   */
  get: {
    status: 200
    /** Successful Response */
    resBody: Types.RewardListResponseBody
  }
}

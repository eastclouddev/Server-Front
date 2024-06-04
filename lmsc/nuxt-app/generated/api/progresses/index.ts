/* eslint-disable */
import type * as Types from '../@types'

export type Methods = {
  /**
   * 進捗管理一覧
   * 
   * Parameters
   * ----------
   * 
   * Returns
   * -------
   * {"progresses": progresses_list} : dic{}
   *                 進捗一覧
   */
  get: {
    status: 200
    /** Successful Response */
    resBody: Types.ProgressesResponseBody
  }
}

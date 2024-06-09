/* eslint-disable */
import type * as Types from '../../@types'

export type Methods = {
  /**
   * メンター担当受講生数取得
   * 
   * Parameter
   * -----------------------
   * なし
   * 
   * Returns
   * -----------------------
   * mentors: array
   *     mentor_id: int
   *         メンターの一意識別子
   *     mentor_name: str
   *         メンターの名前
   *     student_content: str
   *         そのメンターが担当する受講生の数
   */
  get: {
    status: 200
    /** Successful Response */
    resBody: Types.MentorsCountListResponseBody
  }
}

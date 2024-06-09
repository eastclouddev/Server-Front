/* eslint-disable */
import type * as Types from '../../@types'

export type Methods = {
  /**
   * コース開始
   * 
   * Parameter
   * -----------------------
   * user_id: int
   *     コースを開始するユーザーのID
   * course_ids: array[int]
   *     開始するコースのIDリスト
   * 
   * Returns
   * -----------------------
   * courses: array
   *     course_id: int
   *         開始したコースのID
   *     started_at: str
   *         コースの開始日（ISO 8601形式）
   */
  post: {
    status: 201
    /** Successful Response */
    resBody: Types.CoursesStartResponsetBody
    reqBody: Types.CoursesStartRequestBody
  }
}

/* eslint-disable */
import type * as Types from '../../../@types'

export type Methods = {
  /**
   * 通知内容を既読に更新
   * 
   * Parameters
   * -----------------------
   * notification_id: int
   *     既読にする通知のID
   * 
   * -----------------------
   * mesasge: str
   *     操作成功のメッセージ(固定値:Notification marked as read successfully.)
   * notification_id: int
   *     既読にした通知のID
   */
  patch: {
    status: 200
    /** Successful Response */
    resBody: Types.NotificationUpdateResponseBody
  }
}

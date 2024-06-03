/* eslint-disable */
export type Account = {
  role_id: number
  role_name: string
  count: number
}

export type AllResponseList = {
  id: number
  title: string
  content: string
  curriculum_id: number
  created_at: string
  is_read: boolean
  is_closed: boolean
}

export type AnswerCreateRequestBody = {
  user_id: number
  content: string
}

export type AnswerCreateResponseBody = {
  answer_id: number
  question_id: number
  user_id: number
  content: string
}

export type AnswerUpdateRequestBody = {
  content: string | null

  media_content: null

  is_read: boolean
}

export type AnswerUpdateResponseBody = {
  id: number
  question_id: number
  user_id: number

  parent_answer_id: number | null

  content: string

  media_content: null

  is_read: boolean
  updated_at: string
}

export type BillingDetailResponseBody = {
  billing_id: number
  company_id: number
  date: string
  amount: number
  status: string

  payment_details?: Payment | null | undefined
}

export type Company = {
  company_id: number
  name: string
  prefecture: string
  city: string
  town: string

  address: string | null

  postal_code: string
  phone_number: string
  email: string
  created_at: string
}

export type CompanyCreateRequestBody = {
  name: string
  prefecture: string
  city: string
  town: string

  address?: string | null | undefined

  postal_code: string
  phone_number: string
  email: string
}

export type CompanyCreateResponseBody = {
  company_id: number
  name: string
  prefecture: string
  city: string
  town: string

  address: string | null

  postal_code: string
  phone_number: string
  email: string
}

export type CompanyDetailResponseBody = {
  company_id: number
  name: string
  prefecture: string
  city: string
  town: string
  address: string
  postal_code: string
  phone_number: string
  email: string
  created_at: string
  updated_at: string
}

export type CompanyListResponseBody = {
  companies: Company[]
}

export type Course = {
  course_id: number
  title: string
  description: string
  created_user: number

  thumbnail_url: string | null

  created_at: string
}

export type CourseDetailResponseBody = {
  course_id: number
  title: string
  description: string
  created_user_id: number
  created_at: string
  sections: Section[]
}

export type CourseListResponseBody = {
  courses: Course[]
}

export type CourseStart = {
  course_id: number
  started_at: string
}

export type CoursesStartRequestBody = {
  user_id: number
  course_ids: number[]
}

export type CoursesStartResponsetBody = {
  courses: CourseStart[]
}

export type Curriculum = {
  curriculum_id: number
  title: string

  description: string | null
}

export type CurriculumDetailResponseBody = {
  curriculum_id: number
  title: string
  description: string

  video_url?: string | null | undefined

  content?: string | null | undefined

  is_test: boolean
  display_no: number
}

export type DeviceInfo = {
  device_type?: string | null | undefined

  device_name?: string | null | undefined

  uuid?: string | null | undefined
}

export type HTTPValidationError = {
  detail?: ValidationError[] | undefined
}

export type MediaContent = {
  url: string
}

export type MentorsCountList = {
  mentor_id: number
  mentor_name: string
  student_count: number
}

export type MentorsCountListResponseBody = {
  mentors: MentorsCountList[]
}

export type News = {
  id: number
  title: string
  published_at: string
}

export type NewsCategory = {
  id: number
  name: string
  created_at: string
  updated_at: string
}

export type NewsCategoryListResponseBody = {
  categories: NewsCategory[]
}

export type NewsCategoryRequestBody = {
  name: string
}

export type NewsCategoryResponseBody = {
  message: string
  category: NewsCategory
}

export type NewsCategoryUpdateRequestBody = {
  name: string
}

export type NewsCategoryUpdateResponseBody = {
  message: string
  category: NewsCategory
}

export type NewsCreateRequestBody = {
  title: string
  content: string
  is_published: boolean
  published_at: string
}

export type NewsCreateResponseBody = {
  id: number
  title: string
  content: string
  is_published: boolean
  published_at: string
  created_at: string
}

export type NewsDetailResponseBody = {
  id: number
  title: string
  content: string
  published_at: string
}

export type NewsListResponseBody = {
  news: News[]
  page: number
  limit: number
  total_pages: number
  total_news: number
}

export type NewsUpdateRequestBody = {
  title?: string | undefined
  content?: string | undefined
  is_published?: boolean | undefined
  published_at?: string | undefined
}

export type NewsUpdateResponseBody = {
  news_id: number
  title: string
  content: string
  is_published: boolean
  published_at: string
  updated_at: string
}

export type Notification = {
  id: number
  from_user_id: number
  from_user_name: string
  content: string

  related_question_id: number | null

  related_answer_id: number | null

  related_review_request_id: number | null

  related_review_response_id: number | null

  is_read: boolean
  created_at: string
}

export type NotificationListResponseBody = {
  notifications: Notification[]
}

export type NotificationUpdateResponseBody = {
  message: string
  notification_id: number
}

export type Payment = {
  payment_method: string
  payment_date: string
}

export type Progress = {
  course_id: number
  course_title: string
  progress_percentage: number
  status: string
  last_accessed_at: string
}

export type ProgressesResponseList = {
  progress_id: number
  user_id: number
  course_id: number

  section_id: number | null

  curriculum_id: number | null

  progress_percentage: number
  status: string
}

export type Question = {
  id: number
  title: string
  content: string
  curriculum_id: number
  created_at: string
  is_read: boolean
  is_closed: boolean
}

export type QuestionCreateRequestBody = {
  user_id?: number | undefined
  title: string
  content: string
  media_content: MediaContent[]
}

export type QuestionCreateResponseBody = {
  question_id: number
  curriculum_id: number
  user_id: number
  title: string
  content: string
  media_content: MediaContent[]
}

export type QuestionThreadDetailResponseBody = {
  question: ResponseQuestion
  answer: ResponseList[]
}

export type QuestionUpdateRequestBody = {
  title: string | null

  content: string | null

  media_content: null

  is_closed: boolean
}

export type QuestionUpdateResponseBody = {
  id: number
  curriculum_id: number
  user_id: number
  title: string
  content: string

  media_content: null

  is_closed: boolean
  updated_at: string
}

export type Questions = {
  id: number
  title: string
  content: string
  curriculum_id: number
  created_at: string
  is_read: boolean
  is_closed: boolean
}

export type ReceiptDetailResponseBody = {
  receipt_id: number
  company_id: number
  billing_id: number
  date: string
  amount: number
  received_from: string
  payment_method: string
}

export type RequestBody = {
  email?: string | null | undefined

  password?: string | null | undefined

  device_info: DeviceInfo
}

export type ResponseBody = {
  user_id: number
  access_token: string
  expires_in: number
  role: string
}

export type ResponseList = {
  id: number
  question_id: number
  user_id: number

  parent_answer_id: number | null

  content: string

  media_content: null

  is_read: boolean
  created_at: string
}

export type ResponseQuestion = {
  id: number
  curriculum_id: number
  user_id: number
  title: string
  content: string
  is_closed: boolean
  created_at: string
}

export type Review = {
  id: number
  curriculum_id: number
  user_id: number
  title: string
  content: string
  is_closed: boolean
  created_at: string
  updated_at: string
}

export type ReviewRequestBody = {
  id: number
  curriculum_id: number
  user_id: number
  title: string
  content: string
  is_closed: boolean
  created_at: string
  updated_at: string
}

export type ReviewRequestCreateRequestBody = {
  user_id: number
  title: string
  content: string
  is_closed: boolean
}

export type ReviewRequestCreateResponseBody = {
  id: number
  curriculum_id: number
  user_id: number
  title: string
  content: string
  is_closed: boolean
  created_at: string
}

export type ReviewRequestUpdateRequestBody = {
  title: string | null

  content: string | null

  is_closed: boolean | null
}

export type ReviewRequestUpdateResponseBody = {
  id: number
  title: string
  content: string
  is_closed: boolean
  updated_at: string
}

export type ReviewResponse = {
  id: number
  title: string
  content: string
  curriculum_id: number
  created_at: string
  is_read: boolean
  is_closed: boolean
}

export type ReviewResponseBody = {
  id: number
  review_request_id: number
  user_id: number

  parent_response_id: number | null

  content: string
  is_read: boolean
  created_at: string
}

export type ReviewResponseUpdateRequestBody = {
  content: string | null

  is_read: boolean | null
}

export type ReviewResponseUpdateResponseBody = {
  id: number
  review_request_id: number
  user_id: number

  parent_response_id: number | null

  content: string
  is_read: boolean
  updated_at: string
}

export type ReviewThreadDetailResponseBody = {
  review_request: ReviewRequestBody
  responses: ReviewResponseBody[]
}

export type Role = {
  role_id: number
  role_name: string
  count: number
}

export type Section = {
  section_id: number
  title: string

  description: string | null

  curriculums: Curriculum[]
}

export type Student = {
  user_id: number
  first_name: string
  last_name: string
  email: string
  role: string
  last_login: string
}

export type StudentListResponseBody = {
  users: Student[]
}

export type User = {
  user_id: number
  first_name: string
  last_name: string
  email: string
  role: string
  last_login: string
}

export type UserDetailResponseBody = {
  user_id: number
  first_name: string
  last_name: string
  first_name_kana: string
  last_name_kana: string
  email: string
  role: string
  last_login: string
}

export type UserListResponseBody = {
  users: User[]
}

export type UserUpdateRequestBody = {
  first_name?: string | null | undefined

  last_name?: string | null | undefined

  first_name_kana?: string | null | undefined

  last_name_kana?: string | null | undefined

  email?: string | null | undefined
}

export type ValidationError = {
  loc: (string | number)[]
  msg: string
  type: string
}

export type Schemas__companies__AccountListResponseBody = {
  company_id: number
  role_counts: Account[]
}

export type Schemas__companies__ProgressListResponseBody = {
  progresses: ProgressesResponseList[]
}

export type Schemas__curriculums__QuestionListResponseBody = {
  questions: QuestionCreateResponseBody[]
}

export type Schemas__curriculums__ReviewRequestListResponseBody = {
  reviews: Review[]
}

export type Schemas__mentors__ProgressListResponseBody = {
  progresses: ProgressesResponseList[]
}

export type Schemas__mentors__QuestionListResponseBody = {
  questions: Question[]
}

export type Schemas__mentors__ReviewRequestListResponseBody = {
  reviews: AllResponseList[]
}

export type Schemas__progresses__ProgressListResponseBody = {
  progresses: ProgressesResponseList[]
}

export type Schemas__students__ProgressListResponseBody = {
  progresses: Progress[]
}

export type Schemas__students__QuestionListResponseBody = {
  questions: Questions[]
}

export type Schemas__students__ReviewRequestListResponseBody = {
  reviews: ReviewResponse[]
}

export type Schemas__users__AccountListResponseBody = {
  role_counts: Role[]
}

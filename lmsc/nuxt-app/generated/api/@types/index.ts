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
  tech_category: string
  created_at: string
  is_read: boolean
  is_closed: boolean
}

export type AnswerCreateRequestBody = {
  user_id: number

  parent_answer_id?: number | null | undefined

  content: string
}

export type AnswerCreateResponseBody = {
  answer_id: number
  question_id: number

  parent_answer_id: number | null

  user: Schemas__questions__User
  content: string

  media_content: null

  created_at: string
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

export type Billing = {
  billing_id: number
  date: string
  amount: number
  status: string
  description: string
}

export type BillingDetailResponseBody = {
  billing_id: number
  company_id: number
  date: string
  amount: number
  status: string

  payment_details?: Payment | null | undefined
}

export type BillingListResponseBody = {
  billings: Billing[]
}

export type BillingSummaryResponseBody = {
  month: string

  total_billed_amount: number | number
}

export type Category = {
  category_id: number
  category_name: string
}

export type Company = {
  company_id: number
  name: string
  name_kana: string
  prefecture: string
  city: string
  town: string

  address: string | null

  postal_code: string
  phone_number: string
  email: string
  created_at: string
}

export type CompanyBillingInfoCreateRequestBody = {
  prefecture: string
  city: string
  town: string

  address?: string | null | undefined

  billing_email: string
  invoice_number: string
  tax_number: string
  payment_method_id: number

  notes?: string | null | undefined

  last_receipt_number?: string | null | undefined
}

export type CompanyBillingInfoCreateResponseBody = {
  id: number
  prefecture: string
  city: string
  town: string

  address: string | null

  billing_email: string
  invoice_number: string
  tax_number: string
  payment_method_id: number

  notes: string | null

  last_receipt_number: string | null

  created_at: string
}

export type CompanyBillingInfoDetailResponseBody = {
  id: number
  prefecture: string
  city: string
  town: string

  address: string | null

  billing_email: string
  invoice_number: string
  tax_number: string
  payment_method: string

  description: string | null

  notes: string | null

  last_receipt_number: string | null

  created_at: string
  updated_at: string
}

export type CompanyBillingInfoUpdateRequestBody = {
  prefecture: string
  city: string
  town: string

  address?: string | null | undefined

  billing_email: string
  invoice_number: string
  tax_number: string
  payment_method_id: number

  notes?: string | null | undefined

  last_receipt_number?: string | null | undefined

  updated_at: string
}

export type CompanyBillingInfoUpdateResponseBody = {
  id: number
  prefecture: string
  city: string
  town: string

  address: string | null

  billing_email: string
  invoice_number: string
  tax_number: string
  payment_method_id: number

  notes: string | null

  last_receipt_number: string | null

  created_at: string
  updated_at: string
}

export type CompanyCreateRequestBody = {
  name: string
  name_kana: string
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
  name_kana: string
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
  name_kana: string
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

export type CompanyUpdateRequestBody = {
  name: string | null

  name_kana: string | null

  prefecture: string | null

  city: string | null

  town: string | null

  address?: string | null | undefined

  postal_code: string | null

  phone_number: string | null

  email: string | null
}

export type Course = {
  course_id: number
  title: string
  description: string
  created_user: number

  thumbnail_url: string | null

  expected_end_hours: number
  total_curriculums: number
  tech_category: string
  created_at: string
}

export type CourseDetailResponseBody = {
  course_id: number
  title: string
  description: string
  created_user_id: number

  thumbnail_url: string | null

  expected_end_hours: number
  total_curriculums: number
  tech_category: string
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

  duration: string
  is_completed: boolean
}

export type CurriculumDetailResponseBody = {
  curriculum_id: number
  title: string
  description: string

  video_url?: string | null | undefined

  content?: string | null | undefined

  is_quiz: boolean

  quiz_content?: QuizContent[] | null | undefined

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
  category: Category
  published_at: string
}

export type NewsBody = {
  id: number
  title: string
  category: NewsResponse
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
  category_id: number
  published_at: string
}

export type NewsCreateResponseBody = {
  id: number
  title: string
  content: string
  category: NewsResponse
  is_published: boolean
  published_at: string
  created_at: string
}

export type NewsDetailResponseBody = {
  id: number
  title: string
  content: string
  category: Category
  published_at: string
}

export type NewsListResponseBody = {
  news: News[]
}

export type NewsResponse = {
  category_id: number
  category_name: string
}

export type NewsUpdateRequestBody = {
  title?: string | undefined
  content?: string | undefined
  category_id: number
  is_published?: boolean | undefined
  published_at?: string | undefined
}

export type NewsUpdateResponseBody = {
  news_id: number
  title: string
  content: string
  category: NewsResponse
  is_published: boolean
  published_at: string
  updated_at: string
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

export type PublishedNewsListResponseBody = {
  news: NewsBody[]
}

export type Question = {
  id: number
  title: string
  objective: string
  current_situation: string
  research: string
  content: string
  curriculum_id: number
  tech_category: string
  created_at: string
  is_read: boolean
  is_closed: boolean
}

export type QuestionCreateRequestBody = {
  curriculum_id: number
  user_id: number
  title: string
  objective: string
  current_situation: string
  research: string
  content: string
  media_content: MediaContent[]
}

export type QuestionCreateResponseBody = {
  question_id: number
  curriculum_id: number
  user: Schemas__courses__User
  title: string
  objective: string
  current_situation: string
  research: string
  content: string
  media_content: MediaContent[]
  created_at: string
  is_read: boolean
  is_closed: boolean
  reply_counts: number
}

export type QuestionList = {
  question_id: number
  user: Schemas__courses__User
  title: string
  content: string
  curriculum_id: number
  created_at: string
  is_read: boolean
  is_closed: boolean
  reply_counts: number
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
  objective: string
  current_situation: string
  research: string
  content: string
  curriculum_id: number
  created_at: string
  tech_category: string
  is_read: boolean
  is_closed: boolean
}

export type QuizContent = {
  quiz_id: number
  question: string

  media_content?: null | undefined

  correct_answer: number
  explanation: string
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
  user: Schemas__questions__User

  parent_answer_id: number | null

  content: string

  media_content: null

  created_at: string
}

export type ResponseQuestion = {
  id: number
  curriculum_id: number
  user: Schemas__questions__User
  title: string
  objective: string
  current_situation: string
  research: string
  content: string

  media_content: null

  is_closed: boolean
  created_at: string
}

export type ReviewRequest = {
  id: number
  user: Schemas__courses__User
  title: string
  content: string
  curriculum_id: number
  created_at: string
  is_read: boolean
  is_closed: boolean
  reply_counts: number
}

export type ReviewRequestBody = {
  id: number
  curriculum_id: number
  user: Schemas__reviews__User
  title: string
  content: string

  media_content: null

  is_closed: boolean
  created_at: string
}

export type ReviewRequestCreateRequestBody = {
  curriculum_id: number
  user_id: number
  title: string
  content: string
  media_content: MediaContent[]
}

export type ReviewRequestCreateResponseBody = {
  id: number
  curriculum_id: number
  user: Schemas__courses__User
  title: string
  content: string
  media_content: MediaContent[]
  created_at: string
  is_read: boolean
  is_closed: boolean
  reply_counts: number
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
  tech_category: string
  created_at: string
  is_read: boolean
  is_closed: boolean
}

export type ReviewResponseBody = {
  id: number
  review_request_id: number
  user: Schemas__reviews__User

  parent_response_id: number | null

  content: string

  media_content: null

  created_at: string
}

export type ReviewResponseCreateRequestBody = {
  user_id: number

  parent_response_id: number | null

  content: string

  media_content?: null | undefined
}

export type ReviewResponseCreateResponseBody = {
  id: number
  review_request_id: number
  user: Schemas__reviews__User

  parent_response_id: number | null

  content: string

  media_content: null

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
  review_responses: ReviewResponseBody[]
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

  duration: string
  curriculums: Curriculum[]
}

export type Student = {
  user_id: number
  name: string
  email: string
  role: string
  is_enable: boolean
  last_login: string
}

export type StudentListResponseBody = {
  users: Student[]
}

export type UserCreateRequestBody = {
  first_name?: string | null | undefined

  last_name?: string | null | undefined

  first_name_kana?: string | null | undefined

  last_name_kana?: string | null | undefined

  email?: string | null | undefined

  role?: string | null | undefined

  company_id?: number | null | undefined
}

export type UserCreateResponseBody = {
  user_id: number
}

export type UserDetailResponseBody = {
  user_id: number
  first_name: string
  last_name: string
  first_name_kana: string
  last_name_kana: string
  email: string
  company_name: string
  is_enable: boolean
  role: string
  last_login: string
}

export type UserListResponseBody = {
  users: Schemas__users__User[]
}

export type UserUpdateRequestBody = {
  first_name?: string | null | undefined

  last_name?: string | null | undefined

  first_name_kana?: string | null | undefined

  last_name_kana?: string | null | undefined

  email?: string | null | undefined

  is_enable?: boolean | null | undefined
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

export type Schemas__courses__QuestionListResponseBody = {
  questions: QuestionList[]
}

export type Schemas__courses__ReviewRequestListResponseBody = {
  reviews: ReviewRequest[]
}

export type Schemas__courses__User = {
  user_id: number
  name: string
}

export type Schemas__mentors__Notification = {
  id: number
  from_user: Schemas__mentors__User

  question_id: number | null

  answer_id: number | null

  review_request_id: number | null

  review_response_id: number | null

  title: string
  content: string
  is_read: boolean
  created_at: string
}

export type Schemas__mentors__NotificationListResponseBody = {
  notifications: Schemas__mentors__Notification[]
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

export type Schemas__mentors__User = {
  id: number
  name: string
}

export type Schemas__notifications__Notification = {
  id: number
  from_user: Schemas__notifications__User

  question_id: number | null

  answer_id: number | null

  review_request_id: number | null

  review_response_id: number | null

  title: string
  content: string
  is_read: boolean
  created_at: string
}

export type Schemas__notifications__NotificationListResponseBody = {
  notifications: Schemas__notifications__Notification[]
}

export type Schemas__notifications__User = {
  id: number
  name: string
}

export type Schemas__progresses__ProgressListResponseBody = {
  progresses: ProgressesResponseList[]
}

export type Schemas__questions__User = {
  user_id: number
  name: string
}

export type Schemas__reviews__User = {
  user_id: number
  name: string
}

export type Schemas__students__Notification = {
  id: number
  from_user: Schemas__students__User

  question_id: number | null

  answer_id: number | null

  review_request_id: number | null

  review_response_id: number | null

  title: string
  content: string
  is_read: boolean
  created_at: string
}

export type Schemas__students__NotificationListResponseBody = {
  notifications: Schemas__students__Notification[]
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

export type Schemas__students__User = {
  id: number
  name: string
}

export type Schemas__users__AccountListResponseBody = {
  role_counts: Role[]
}

export type Schemas__users__User = {
  user_id: number
  name: string
  company_name: string
  email: string
  role: string
  is_enable: boolean
  last_login: string
}

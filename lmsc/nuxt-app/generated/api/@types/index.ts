/* eslint-disable */
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

<<<<<<< HEAD
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
=======
export type AllReviewResponse = {
  review_request: ReviewRequestBody_Output
  responses: ReviewResponseBody[]
>>>>>>> develop
}

export type BillingListResponseBody = {
  billings: Billing[]
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

<<<<<<< HEAD
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

=======
>>>>>>> develop
export type Course = {
  course_id: number
  title: string
  description: string
  created_user: number

  thumbnail_url: string | null

  created_at: string
}

export type Curriculum = {
  curriculum_id: number
  title: string

  description: string | null
}

export type DetailonseBody = {
  billing_id: number
  company_id: number
  date: string
  amount: number
  status: string

  payment_details?: Payment | null | undefined
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

export type News = {
  id: number
  title: string
  published_at: string
}

<<<<<<< HEAD
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

export type NotificationUpdateResponseBody = {
  message: string
  notification_id: number
}

=======
>>>>>>> develop
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

export type ProgressesResponse = {
  progresses: Progress[]
}

export type ProgressesResponseBody = {
  progresses: ProgressesResponseList[]
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

<<<<<<< HEAD
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
=======
export type QuestionResponseBody = {
  questions: Schemas__curriculums__ResponseBody[]
>>>>>>> develop
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

export type QuizResponseBody = {
  curriculum_id: number
  tests: Quizzes[]
}

<<<<<<< HEAD
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
=======
export type Quizzes = {
  test_id: number
  question: string
  options: string[]
  correct_answer: string
  explanation: string
  media_content_url: string[]
>>>>>>> develop
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

export type ReviewRequestBody_Input = {
  user_id: number
  title: string
  content: string
  is_closed: boolean
}

export type ReviewRequestBody_Output = {
  id: number
  curriculum_id: number
  user: Schemas__reviews__User
  title: string
  content: string

  media_content: null

  is_closed: boolean
  created_at: string
}

<<<<<<< HEAD
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

=======
>>>>>>> develop
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

export type ReviewsResponseBody = {
  reviews: Review[]
}

export type Rewards = {
  reward_id: number
  date: string
  amount: number
  to_mentor_id: number
}

<<<<<<< HEAD
export type ReviewThreadDetailResponseBody = {
  review_request: ReviewRequestBody
  review_responses: ReviewResponseBody[]
}

export type Role = {
  role_id: number
  role_name: string
  count: number
=======
export type RewardsResponseBody = {
  rewards: Rewards[]
>>>>>>> develop
}

export type Section = {
  section_id: number
  title: string

  description: string | null

  curriculums: Curriculum[]
}

export type UpdateAnswerRequestBody = {
  content: string | null

  media_content: null

  is_read: boolean
}

export type UpdateAnswerResponseBody = {
  id: number
  question_id: number
  user_id: number

  parent_answer_id: number | null

  content: string

  media_content: null

  is_read: boolean
  updated_at: string
}

export type UpdateQuestioinRequestBody = {
  title: string | null

  content: string | null

  media_content: null

  is_closed: boolean
}

<<<<<<< HEAD
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
=======
export type UpdateQuestionResponseBody = {
  id: number
  curriculum_id: number
  user_id: number
  title: string
  content: string

  media_content: null

  is_closed: boolean
  updated_at: string
}

export type UpdateRequestBody = {
>>>>>>> develop
  first_name?: string | null | undefined

  last_name?: string | null | undefined

  first_name_kana?: string | null | undefined

  last_name_kana?: string | null | undefined

  email?: string | null | undefined

  is_enable?: boolean | null | undefined
}

export type UpdateResponseBody = {
  news_id: number
  title: string
  content: string
  is_published: boolean
  published_at: string
  updated_at: string
}

export type UpdateResponseRequestBody = {
  content: string | null

  is_read: boolean | null
}

export type UpdateResponseResponseBody = {
  id: number
  review_request_id: number
  user_id: number

  parent_response_id: number | null

  content: string
  is_read: boolean
  updated_at: string
}

export type UpdateReviewRequestBody = {
  title: string | null

  content: string | null

  is_closed: boolean | null
}

export type UpdateReviewResponseBody = {
  id: number
  title: string
  content: string
  is_closed: boolean
  updated_at: string
}

export type UserResponseBody = {
  users: Schemas__users__ResponseBody[]
}

export type ValidationError = {
  loc: (string | number)[]
  msg: string
  type: string
}

export type Schemas__companies__AllResponseBody = {
  companies: Company[]
}

export type Schemas__companies__CreateRequestBody = {
  name: string
  prefecture: string
  city: string
  town: string

  address?: string | null | undefined

  postal_code: string
  phone_number: string
  email: string
}

export type Schemas__companies__CreateResponseBody = {
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

export type Schemas__companies__DetailResponseBody = {
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

<<<<<<< HEAD
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
=======
export type Schemas__companies__ResponseBody = {
  users: Schemas__companies__ResponseList[]
}

export type Schemas__companies__ResponseList = {
  user_id: number
  first_name: string
  last_name: string
  email: string
  role: string
  last_login: string
>>>>>>> develop
}

export type Schemas__courses__AllResponseBody = {
  courses: Course[]
}

export type Schemas__courses__DetailResponseBody = {
  course_id: number
  title: string
  description: string
  created_user_id: number
  created_at: string
  sections: Section[]
}

export type Schemas__curriculums__DetailResponseBody = {
  curriculum_id: number
  title: string
  description: string

  video_url?: string | null | undefined

  content?: string | null | undefined

  is_test: boolean
  display_no: number
}

export type Schemas__curriculums__RequestBody = {
  user_id?: number | undefined
  title: string
  content: string
  media_content: MediaContent[]
}

export type Schemas__curriculums__ResponseBody = {
  question_id: number
  curriculum_id: number
  user_id: number
  title: string
  content: string
  media_content: MediaContent[]
}

export type Schemas__curriculums__ReviewResponse = {
  id: number
  curriculum_id: number
  user_id: number
  title: string
  content: string
  is_closed: boolean
  created_at: string
}

export type Schemas__login__RequestBody = {
  email?: string | null | undefined

  password?: string | null | undefined

  device_info: DeviceInfo
}

export type Schemas__login__ResponseBody = {
  user_id: number
  access_token: string
  expires_in: number
  role: string
}

export type Schemas__mentors__AllResponseBody = {
  reviews: AllResponseList[]
}

<<<<<<< HEAD
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
=======
export type Schemas__mentors__CreateRequestBody = {
  bank_name: string
  branch_name: string
  bank_code: string
  branch_code: string
  account_type: string
  account_number: string
  account_name: string
}

export type Schemas__mentors__CreateResponseBody = {
  account_id: number
  mentor_id: number
  bank_name: string
  branch_name: string
  bank_code: string
  branch_code: string
  account_type: string
  account_number: string
  account_name: string
>>>>>>> develop
}

export type Schemas__mentors__DetailResponseBody = {
  mentor_id: number
  account_name: string
  bank_name: string
  branch_name: string
  account_number: string
  account_type: string
}

export type Schemas__mentors__ResponseBody = {
  questions: Question[]
}

export type Schemas__news__AllResponseBody = {
  news: News[]
  page: number
  limit: number
  total_pages: number
  total_news: number
}

export type Schemas__news__CreateRequestBody = {
  title: string
  content: string
  is_published: boolean
  published_at: string
}

export type Schemas__news__CreateResponseBody = {
  id: number
  title: string
  content: string
  is_published: boolean
  published_at: string
  created_at: string
}

export type Schemas__news__DetailResponseBody = {
  id: number
  title: string
  content: string
  published_at: string
}

export type Schemas__news__RequestBody = {
  title?: string | undefined
  content?: string | undefined
  is_published?: boolean | undefined
  published_at?: string | undefined
}

export type Schemas__questions__CreateRequestBody = {
  user_id: number
  content: string
}

export type Schemas__questions__CreateResponseBody = {
  answer_id: number
  question_id: number
  user_id: number
  content: string
}

export type Schemas__questions__DetailResponseBody = {
  question: ResponseQuestion
  answer: Schemas__questions__ResponseList[]
}

export type Schemas__questions__ResponseList = {
  id: number
  question_id: number
  user_id: number

  parent_answer_id: number | null

  content: string

  media_content: null

  is_read: boolean
  created_at: string
}

export type Schemas__receipts__ResponseBody = {
  receipt_id: number
  company_id: number
  billing_id: number
  date: string
  amount: number
  received_from: string
  payment_method: string
}

export type Schemas__students__AllResponseBody = {
  reviews: Schemas__students__ReviewResponse[]
}

export type Schemas__students__ResponseBody = {
  questions: Questions[]
}

export type Schemas__students__ReviewResponse = {
  id: number
  title: string
  content: string
  curriculum_id: number
  created_at: string
  is_read: boolean
  is_closed: boolean
}

<<<<<<< HEAD
export type Schemas__students__User = {
  id: number
  name: string
}

export type Schemas__users__AccountListResponseBody = {
  role_counts: Role[]
=======
export type Schemas__users__DetailResponseBody = {
  user_id: number
  first_name: string
  last_name: string
  first_name_kana: string
  last_name_kana: string
  email: string
  role: string
  last_login: string
}

export type Schemas__users__ResponseBody = {
  user_id: number
  first_name: string
  last_name: string
  email: string
  role: string
  last_login: string
>>>>>>> develop
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

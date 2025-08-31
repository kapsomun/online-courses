export type Course = {
  id: string
  title: string
  description: string
  videoUrl: string
  price: number
  imageUrl: string
}

export interface CourseState {
  courses: Course[]
  purchasedCourses: string[]
  loading: boolean
  error: string | null
  activeVideoId: string | null
}
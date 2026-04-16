import type { Course } from "@/types/course/types"
import type { Category } from "@/types/category/types"
import type { Topic } from "@/types/topic/types"
import type { Instructor } from "@/types/instructor/types"
import type { Enrollment } from "@/types/enrollment/types"
import type { Review } from "@/types/review/types"

export interface CourseDetail extends Course {
  reviews: Review[];
  isRated: boolean;
}

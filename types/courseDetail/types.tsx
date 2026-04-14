import type { Category } from "@/types/category/types"
import type { Topic } from "@/types/topic/types"
import type { Instructor } from "@/types/instructor/types"
import type { Enrollment } from "@/types/enrollment/types"
import type { Review } from "@/types/review/types"

export interface CourseDetail {
  id: number;
  title: string;
  description: string;
  image: string;
  basePrice: number;
  durationWeeks: BigInteger;
  isFeatured: boolean;
  reviews: Review[];
  isRated: boolean;
  category: Category;
  topic: Topic;
  instructor: Instructor;
  enrollment: Enrollment;
}

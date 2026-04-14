import type { Category } from "@/types/category/types"
import type { Topic } from "@/types/topic/types"
import type { Instructor } from "@/types/instructor/types"

export interface Course {
  id: number;
  title: string;
  description: string;
  image: string;
  basePrice: number;
  durationWeeks: BigInteger;
  isFeatured: boolean;
  avgRating: number | null;
  reviewCount: number;
  category: Category;
  topic: Topic;
  instructor: Instructor;
}

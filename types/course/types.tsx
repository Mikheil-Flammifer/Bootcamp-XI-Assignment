import type { Category } from "@/types/category/types"
import type { Topic } from "@/types/topic/types"
import type { Instructor } from "@/types/instructor/types"

export interface Course {
  id: number;
  title: string;
  description: string;
  image: string;
  basePrice: number;
  durationWeeks: number; 
  isFeatured: boolean;
  avgRating: number;
  reviewCount: number;
  category: Category;
  topic: Topic;
  instructor: Instructor;
}

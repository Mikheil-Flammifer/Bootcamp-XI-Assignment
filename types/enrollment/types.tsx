import type { Course } from "@/types/course/types"
import type { Schedule } from "@/types/schedule/types"

export interface Enrollment {
  id: number;
  quantity: number;
  totalPrice: number;
  progress: number;
  completedAt: string | null;
  course: Course;
  schedule: Schedule;
}

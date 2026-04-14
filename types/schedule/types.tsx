import type { WeeklySchedule } from "@/types/weeklySchedule/types"
import type { TimeSlot } from "@/types/timeSlot/types"
import type { SessionType } from "@/types/sessionType/types"

export interface Schedule {
  id: number;
  weeklySchedule: WeeklySchedule;
  timeSlot : TimeSlot;
  sessionType: SessionType;
  location: string | null;
}

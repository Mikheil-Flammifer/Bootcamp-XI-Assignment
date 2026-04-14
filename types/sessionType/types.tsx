export interface SessionType {
  id: number;
  courseScheduleId: number;
  name: string; // Enum
  priceModifier: string;
  availableSeats: number;
  location: string | null;
}

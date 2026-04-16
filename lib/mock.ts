"use client";
import mockUsers from "@/data/mockUsers.json";
import mockCoursesData from "@/data/mockCurses.json";
import mockEnrollments from "@/data/mockEnrollments.json"
import type { User } from "@/types/user/types";
import type { Course } from "@/types/course/types";
import type { Topic } from "@/types/topic/types";
import type { Category } from "@/types/category/types";
import type { Instructor } from "@/types/instructor/types";
import type { Enrollment } from "@/types/enrollment/types";
import mockInstructors from "@/data/mockInstructors.json";
import mockTopics from "@/data/mockTopics.json";
import mockCategories from "@/data/mockCategories.json";

// ─── Courses ────────────────────────────────────────────────────────────────

const MOCK_COURSES = mockCoursesData as Course[];
const MOCK_CATEGORIES = mockCategories as Category[];
const MOCK_INSTRUCTORS = mockInstructors as Instructor[];
const MOCK_TOPICS = mockTopics as Topic[];

export function mockGetCourses(): Course[] {
  return MOCK_COURSES;
}

export function mockGetFeaturedCourses(): Course[] {
  return MOCK_COURSES.filter((c) => c.isFeatured);
}

export function mockGetCourseById(id: number): Course {
  const found = MOCK_COURSES.find((c) => c.id === id);
  if (!found) throw new Error(`Course with id ${id} not found.`);
  return found;
}

export function mockGetCoursesByCategory(categoryId: number): Course[] {
  return MOCK_COURSES.filter((c) => c.category.id === categoryId);
}

export function mockGetCoursesByInstructor(instructorId: number): Course[] {
  return MOCK_COURSES.filter((c) => c.instructor.id === instructorId);
}

// ─── Users ───────────────────────────────────────────────────────────────────

// strip password before returning — never expose it
const toUser = (u: typeof mockUsers[0]): User => ({
  id: u.id,
  username: u.username,
  email: u.email,
  avatar: u.avatar,
  fullName: u.fullName,
  mobileNumber: u.mobileNumber,
  age: u.age,
  profileComplete: u.profileComplete,
});

export function mockLogin(email: string, password: string): User {
  const found = mockUsers.find(
    (u) => u.email === email && u.password === password
  );
  if (!found) throw new Error("Invalid email or password.");
  localStorage.setItem("user", JSON.stringify(found));
  return toUser(found);
}

export function mockRegister(email: string, username: string): User {
  const exists = mockUsers.find((u) => u.email === email);
  if (exists) throw new Error("Email already in use.");
  return {
    id: Date.now(),
    username,
    email,
    avatar: null,
    fullName: null,
    mobileNumber: null,
    age: null,
    profileComplete: false,
  };
}

export function getUser(): User | null {
  const data = localStorage.getItem("user");
  return data ? JSON.parse(data) : null;
}

export function logout() {
  localStorage.removeItem("user");
}

export function getUserEnrollments() {
  return mockEnrollments;
}

export function getCourseProgress(courseId: number): number {
  const enrollment = mockEnrollments.find(
    (e) => e.course.id === courseId
  );

  return enrollment?.progress ?? 0;
}

// Instructor 

export function mockGetinstructors(): Instructor[] {
  return MOCK_INSTRUCTORS;
}

export function mockGetinstructorById(id: number): Instructor {
  const found = MOCK_INSTRUCTORS.find((l) => l.id === id);
  if (!found) throw new Error(`instructor ${id} not found`);
  return found;
}

// Topics
export function mockGetTopics(): Topic[] {
  return MOCK_TOPICS;
}

export function mockGetTopicsByCategory(categoryId: number): Topic[] {
  return MOCK_TOPICS.filter((t) => t.categoryId === categoryId);
}

// Categories 
export function mockGetCategories(): Category[] {
  return MOCK_CATEGORIES;
}
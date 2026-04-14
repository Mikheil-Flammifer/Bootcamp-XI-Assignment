"use client";
import { FeaturedCourses } from "@/components/ui/featuredCourses/FeaturedCourses";
import { mockGetFeaturedCourses } from "@/lib/mock";

export default function DashboardPage() {
  const featuredCourses = mockGetFeaturedCourses();

  return (
    <main className="flex flex-col items-center px-[40px] py-[60px] gap-[60px]">
      <FeaturedCourses courses={featuredCourses} />
    </main>
  );
}
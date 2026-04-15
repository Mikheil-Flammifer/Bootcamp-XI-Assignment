"use client";
import { HeaderNavbar } from "@/components/ui/sections/HeaderNavbar"
import { FeaturedCourses } from "@/components/ui/sections/FeaturedCourses";
import { InProgressCourses } from "@/components/ui/sections/InProgressCourses";
import { mockGetCourses, mockGetFeaturedCourses } from "@/lib/mock";

export default function DashboardPage() {
  const featuredCourses = mockGetFeaturedCourses().slice(0, 3);
  const inProgressCourses = mockGetCourses();

  return (
    <div className="flex flex-col min-h-screen bg-[#F5F5F5]">
      
      {/* Navbar */}
      <HeaderNavbar />

      {/* Page content */}
      <main className="flex flex-col w-[1920px] h-[2282px] items-center py-[60px] gap-[64px]">
        <FeaturedCourses courses={featuredCourses} />
        <InProgressCourses courses={inProgressCourses}/>
      </main>

    </div>
  );
}
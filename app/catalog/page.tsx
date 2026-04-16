"use client";
import { CatalogCourses } from "@/components/ui/sections/Catalog/CatalogCuorses";
import { CatalogCuorsesFilter } from "@/components/ui/sections/Catalog/CatalogCuorsesFilter";
import { mockGetCourses, getUser } from "@/lib/mock";

export default function CatalogPage() {
    const courses = mockGetCourses();
    
    return(
    <div className="w-[1920px] min-h-[2283px] bg-white">
      
      {/* Header */}

      {/* Main Content */}
      <div className="flex gap-[32px] px-[576px] pt-[234px]">
        
        {/* Left: Filters */}
        <CatalogCuorsesFilter />

        {/* Right: Courses */}
        <CatalogCourses courses={courses}/>

      </div>

    </div>
    );
}
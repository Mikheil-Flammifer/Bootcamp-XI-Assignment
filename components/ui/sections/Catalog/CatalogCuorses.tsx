"use client";
import { SortingDropdown } from "@/components/ui/sections/Catalog/SortingDropdaow";
import { Pagination } from "@/components/ui/sections/Catalog/Pagination";
import { CatalogCard } from "@/components/ui/cards/CatalogCard"

import type { Course } from "@/types/course/types"

interface Props {
  courses: Course[];
  loading?: boolean;
}

export function CatalogCourses({ courses, loading }: Props) {
  return (
    <div className="w-[1167px] h-[1554px] flex flex-col gap-[32px]">

      {/* Header (Frame 333) */}
      <div className="w-[1167px] h-[49px] flex justify-between items-center">
        
        <p className="text-[16px] leading-[24px]">
          Showing 9 courses
        </p>

        <SortingDropdown />

      </div>

      {/* Courses (Frame 422) */}
      <div className="w-[1167px] h-[1401px] flex flex-col gap-[24px]">
        
      <div className="flex flex-wrap gap-[24px]">
        <div className="grid grid-cols-3 gap-[24px]">
          {courses.map((course) => (
            <CatalogCard
              key={course.id}
              imageSrc={course.image}
              lecturer={course.instructor.name}
              duration={`${course.durationWeeks} weeks`}
              rating={course.avgRating ?? 0}
              title={course.title}
              category={course.category.name}
              price={course.basePrice}
            />
          ))}
        </div>
      </div>

      </div>

      {/* Pagination */}
      <Pagination />

    </div>
  );
}
import type { Course } from "@/types/course/types"
import { Title } from "@/components/ui/forms/Title"
import { FeaturedCard } from "@/components/ui/cards/FeaturedCard"

interface Props {
  courses: Course[];
  loading?: boolean;
}


export function FeaturedCourses({ courses, loading }: Props) {
  return (
    /* ferame236 */
    <div className="flex flex-col w-[1566px] w-[739px] gap-[32px]">
        {/* frame 248 */}
         <div className="flex flex-col w-[1566px] w-[76px] left-[1px] gap-[10px]">
             {/* frame 240 */}
             <div className="flex flex-col w-[538px] w-[76px] gap-[6px]">
                 {/* Title */}
                    <Title
                        title="Start Learning Today"
                        titleNameClass="w-[538px] h-[48px] font-semibold text-[32px] leading-none size-[40px] text-gray-950 font-inter"
                        subtitle="Choose from our most popular courses and begin your journey"
                        subtitleNameClass="w-[538px] h-[22px] font-medium font-inter text-[14px] leading-none tracking-normal size-[18px] text-gray-700"
                    />
               </div>
         </div>
         {/* frame 349 */}
         <div className="flex flex-row w-[1556px] w-[576px] gap-[24px]">
            {/* Card 1 - 3 */}
            {courses.map((course) => (
                <FeaturedCard
                    key={course.id}
                    imageSrc={course.image} 
                    lecturer={course.instructor.name} 
                    raiting={course.avgRating ?? 0}
                    title={course.title}    
                    content={course.description}       
                    prise={course.basePrice}          
                    loading={loading}
                />
            ))}
         </div>
    </div>
  )}
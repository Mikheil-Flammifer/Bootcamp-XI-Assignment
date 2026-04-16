import type { Category } from "@/types/category/types";
import type { Topic } from "@/types/topic/types";
import type { Instructor } from "@/types/instructor/types";

interface Props {
  categories: Category[];
  lecturers: Instructor[];
  topics: Topic[];
}

export function CatalogCuorsesFilter({
          categories,
          topics,
          lecturers,
        }: Props) {
  return (
    <div
      className="w-[309px] h-[914px] flex flex-col gap-[24px] absolute top-[234px] left-[177px]"
    >
      {/* Frame 347 */}
      <div className="w-[309px] h-[854px] flex flex-col gap-[32px]">
        
        {/* Frame 52 (Header) */}
        <div className="w-[309px] h-[48px] flex items-center justify-between">
          
          <div
            className="w-[121px] h-[48px] flex items-center text-[40px] font-semibold leading-[100%] text-[#0A0A0A]"
          >
            Filter
          </div>

          {/* Clear Filters */}
          <div className="w-[133px] h-[24px] flex items-center gap-[7px] text-[#8A8A8A]">
            <span>Clear all filters</span>
            
            {/* Vector X */}
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18 6L6 18M6 6L18 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </div>
        </div>

        {/* Frame 344 */}
        <div className="w-[309px] h-[774px] flex flex-col gap-[56px]">
          
          {/* Frame 342 - Categories */}
          <div className="w-[309px] h-[179px] flex flex-col gap-[24px]">
            <div className="text-[18px] font-medium text-[#666666]">
              Categories
            </div>
            <div>
              {/* category items here */}
               <div className="w-[309px] h-[133px] flex flex-col gap-[8px]">
      
                {/* Frame 426 */}
                <div className="w-[309px] h-[133px] flex flex-col gap-[8px]">
                    
                    {/* Chips container */}
                    <div className="w-[309px] flex flex-wrap gap-[8px]">

                    {/* Chip */}
                    <div
                        className="w-[160px] h-[39px] flex items-center gap-[10px]
                                px-[12px] py-[8px] rounded-[12px]
                                bg-white border border-[#E5E5E5]"
                    >
                        {/* Icon */}
                        <div className="w-[24px] h-[24px] flex items-center justify-center">
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                        >
                            <circle cx="12" cy="12" r="5" fill="#666666" />
                        </svg>
                        </div>

                        {/* Text */}
                        <span
                        className="w-[102px] h-[24px] text-[16px] font-medium
                                    leading-[24px] text-center text-[#666666]"
                        >
                        {categories.map((cat) => (
                          <div
                            key={cat.id}
                            className="w-[160px] h-[39px] flex items-center gap-[10px]
                                      px-[12px] py-[8px] rounded-[12px]
                                      bg-white border border-[#E5E5E5]"
                          >
                            <img src={cat.icon} className="w-[24px] h-[24px]" />
                            <span className="text-[16px] font-medium text-[#666666]">
                              {cat.name}
                            </span>
                          </div>
                        ))}
                        </span>
                    </div>

                    </div>
                </div>
                </div>
            </div>
          </div>

          {/* Frame 343 - Topics */}
          <div className="w-[309px] h-[229px] flex flex-col gap-[24px]">
            <div className="text-[18px] font-medium text-[#666666]">
              Topics
            </div>
            <div>
              {/* topics list here */}
              <div className="w-[309px] h-[133px] flex flex-col gap-[8px]">
      
                {/* Frame 426 */}
                <div className="w-[309px] h-[133px] flex flex-col gap-[8px]">
                    
                    {/* Chips container */}
                    <div className="w-[309px] flex flex-wrap gap-[8px]">

                    {/* Chip  */}
                        <div
                            className="w-[160px] h-[39px] flex items-center gap-[10px]
                                    px-[12px] py-[8px] rounded-[12px]
                                    bg-white border border-[#E5E5E5]"
                        >

                        {/* Text */}
                        <span
                        className="w-[102px] h-[24px] text-[16px] font-medium
                                    leading-[24px] text-center text-[#666666]"
                        >
                          {topics.map((topic) => (
                            <div
                              key={topic.id}
                              className="w-[160px] h-[39px] flex items-center px-[12px] py-[8px]
                                        rounded-[12px] bg-white border border-[#E5E5E5]"
                            >
                              <span className="text-[16px] font-medium text-[#666666]">
                                {topic.name}
                              </span>
                            </div>
                          ))}
                        </span>
                    </div>

                    </div>
                </div>
                </div>
            </div>
          </div>

          {/* Frame 346 - Instructors */}
          <div className="w-[179px] h-[254px] flex flex-col gap-[24px]">
            <div className="text-[18px] font-medium text-[#666666]">
              Instructors
            </div>
            <div>
              {/* instructors list column */}
                <div className="w-[179px] h-[208px] flex flex-col gap-[8px]">
                    
                    {/* Instructor Item */}
                    <div
                        className="w-[179px] h-[46px] flex items-center gap-[12px]
                                px-[12px] py-[8px] rounded-[12px]
                                bg-white"
                    >
                        {/* Image */}
                        <div className="w-[30px] h-[30px] rounded-[4px] overflow-hidden bg-gray-200">
                        <img
                            src="/instructor.jpg"
                            alt="Instructor"
                            className="w-full h-full object-cover"
                        />
                        </div>

                        {/* Name */}
                        <span
                        className="w-[113px] h-[24px] text-[16px] font-medium
                                    leading-[24px] text-[#666666]"
                        >
                        {lecturers.map((ins) => (
                          <div
                            key={ins.id}
                            className="w-[179px] h-[46px] flex items-center gap-[12px]
                                      px-[12px] py-[8px] rounded-[12px] bg-white"
                          >
                            <div className="w-[30px] h-[30px] rounded-[4px] overflow-hidden">
                              <img
                                src={ins.avatar}
                                className="w-full h-full object-cover"
                              />
                            </div>

                            <span className="text-[16px] font-medium text-[#666666]">
                              {ins.name}
                            </span>
                          </div>
                        ))}
                                                </span>
                    </div>
               </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Container */}
      <div className="w-[309px] h-[36px] border-t border-[#ADADAD] pt-[16px]" />
    </div>
  );
}
import { Title } from "@/components/ui/forms/Title";
import { InProgressCard } from "@/components/ui/cards/InProgressCard";
import { LoginPromptContent } from "@/components/ui/sections/LoginPromptContent"
import { Enrollment } from "@/types/enrollment/types";

interface Props {
  enrollments: Enrollment[] | null;
  loading?: boolean;
  isAuthorized?: boolean;
}

export function InProgressCourses({ enrollments, loading, isAuthorized }: Props) {
  return (
    /* frame 249 */
    <div className="relative flex flex-col w-[1566px] h-[369px] gap-[32px]">
      
      {/* frame 247 */}
      <div className="flex flex-col w-[1566px] h-[76px] gap-[10px]">
        
        {/* frame 241 */}
        <div className="flex flex-row justify-between w-[1566px] h-[76px]">
          
          {/* frame 240 */}
          <div className="flex flex-col w-[1500px] h-[76px] gap-[6px]">
            <Title
              title="Continue Learning"
              titleNameClass="w-[1500px] h-[48px] font-semibold text-[40px] leading-none text-[#0A0A0A] font-inter"
              subtitle="Pick up where you left"
              subtitleNameClass=""
            />
          </div>

          {/* See All */}
          <p
            className="w-[66px] h-[24px] font-inter font-medium text-[20px] underline cursor-pointer"
            style={{ color: "#4F46E5" }}
          >
            See All
          </p>
        </div>
      </div>

      {/* frame 315 */}
      <div className={`flex flex-row w-[1566px] h-[219px] gap-[24px] transition ${
            !isAuthorized ? "blur-[2.5px] opacity-85" : ""
          }`}
        > 
          {enrollments ? enrollments.slice(0, 3).map((enrollment) => (
            <InProgressCard
              key={enrollment.id}
              title={enrollment.course.title}
              imageSrc={enrollment.course.image ?? ""}
              lecturer={enrollment.course.instructor?.name}
              rating={enrollment.course.avgRating}
              progress={enrollment.progress}
              isAuthorized={isAuthorized}
            />
          )) : ""}
        </div>

        {/* OVERLAY (only when locked) */}
        {!isAuthorized && (
        <div className="absolute inset-0 flex  justify-center px-[56px] py-[100px]">
          <div className="w-[418px] h-[233px] rounded-[12px] border border-[#ADADAD] bg-white p-[32px_56px] flex items-center justify-center">
            <LoginPromptContent />
          </div>
        </div>
        )}
    </div>
  );
}
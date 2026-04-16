"use client";
import React from "react";
import { FormButton } from "@/components/ui/forms/FormButton"

interface Props {
  userImage?: string;
  onProfileClick?: () => void;
  onBrowseCourses?: () => void;
  onEnrolledCourses?: () => void;
}

export function NavItemAuthorized({ userImage, onProfileClick, onBrowseCourses, onEnrolledCourses }: Props) {
  return (
    <div className="w-[547px] h-[56px] flex items-center gap-[36px]">

      {/* Frame 326 */}
      <div className="w-[455px] h-[56px] flex items-center gap-[8px]">

        <div
          className="w-[220px] h-[56px] p-[15px] rounded-[8px] flex items-center gap-[8px] cursor-pointer hover:bg-black/5 transition"
          onClick={onBrowseCourses}
        >
          <div className="h-[26px] flex items-center gap-[8px]">
            <div className="w-[26px] h-[26px] flex items-center justify-center">
               <div className="w-[26px] h-[26px] flex items-center justify-center">
                <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14.5068 11.6797C14.5834 12.0307 14.6655 12.3604 14.7578 12.6689C15.0654 13.6967 15.492 14.5561 16.168 15.2383C16.9892 16.0669 18.0873 16.5345 19.4883 16.8467C18.0874 17.1589 16.9892 17.6265 16.168 18.4551C15.492 19.1372 15.0654 19.9968 14.7578 21.0244C14.6617 21.3454 14.5762 21.6895 14.4971 22.0566C14.4164 21.6947 14.3303 21.356 14.2334 21.04C13.9212 20.0216 13.4928 19.1745 12.8184 18.501C12.1434 17.8269 11.2983 17.4029 10.2861 17.0977C10.0118 17.0149 9.72065 16.9398 9.41211 16.8701C10.8646 16.558 11.9994 16.0892 12.8428 15.2393C13.5193 14.5575 13.9463 13.6979 14.2549 12.6699C14.3476 12.3611 14.43 12.031 14.5068 11.6797ZM22.4443 16.3975H22.4414C22.4437 16.3972 22.446 16.3967 22.4482 16.3965L22.4443 16.3975ZM7.11621 8.14941C7.22914 8.36262 7.37056 8.5646 7.55371 8.74609C7.76599 8.95637 8.0052 9.11164 8.25879 9.23145C8.00997 9.35115 7.77476 9.5031 7.56543 9.70605C7.3943 9.872 7.25941 10.0549 7.14941 10.248C7.03738 10.0399 6.89862 9.84279 6.71875 9.66504C6.49849 9.44747 6.24859 9.28806 5.98438 9.16504C6.23629 9.04772 6.47627 8.89902 6.68945 8.69727C6.86561 8.5305 7.00318 8.34533 7.11621 8.14941ZM12.4365 3.11523C12.4706 3.15099 12.5055 3.18479 12.541 3.2168C12.5003 3.25211 12.4607 3.28996 12.4219 3.33008C12.4099 3.34246 12.3982 3.35562 12.3867 3.36816C12.3767 3.35742 12.3678 3.34557 12.3574 3.33496C12.3184 3.29501 12.2782 3.2578 12.2373 3.22266C12.2758 3.18824 12.3138 3.15209 12.3506 3.11328C12.3654 3.0976 12.3785 3.08039 12.3926 3.06445C12.4073 3.08109 12.421 3.09889 12.4365 3.11523Z" stroke="#525252" strokeWidth={2}/>
                </svg>
              </div>
            </div>
            <span className="text-[20px] font-medium leading-[100%] text-[#525252]">
              Browse Courses
            </span>
          </div>
        </div>

        <div
          className="w-[227px] h-[56px] p-[15px] rounded-[8px] flex items-center gap-[8px] cursor-pointer hover:bg-black/5 transition"
          onClick={onEnrolledCourses}
        >
          <div className="h-[26px] flex items-center gap-[8px]">
              <div className="w-[26px] h-[26px] flex items-center justify-center">
                <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                 <path d="M12.9998 7.58333V22.75M12.9998 7.58333C12.9998 6.43406 12.5433 5.33186 11.7306 4.5192C10.918 3.70655 9.81578 3.25 8.6665 3.25H3.24984C2.96252 3.25 2.68697 3.36414 2.4838 3.5673C2.28064 3.77047 2.1665 4.04602 2.1665 4.33333V18.4167C2.1665 18.704 2.28064 18.9795 2.4838 19.1827C2.68697 19.3859 2.96252 19.5 3.24984 19.5H9.74984C10.6118 19.5 11.4384 19.8424 12.0479 20.4519C12.6574 21.0614 12.9998 21.888 12.9998 22.75M12.9998 7.58333C12.9998 6.43406 13.4564 5.33186 14.269 4.5192C15.0817 3.70655 16.1839 3.25 17.3332 3.25H22.7498C23.0372 3.25 23.3127 3.36414 23.5159 3.5673C23.719 3.77047 23.8332 4.04602 23.8332 4.33333V18.4167C23.8332 18.704 23.719 18.9795 23.5159 19.1827C23.3127 19.3859 23.0372 19.5 22.7498 19.5H16.2498C15.3879 19.5 14.5612 19.8424 13.9517 20.4519C13.3422 21.0614 12.9998 21.888 12.9998 22.75" stroke="#666666" strokeWidth={2} strokeLinecap={"round"} strokeLinejoin={"round"}/>
                </svg>
              </div>
            <span className="text-[20px] font-medium leading-[100%] text-[#525252]">
              Enrolled Courses
            </span>
          </div>
        </div>

      </div>

      {/* Avatar */}
      <div
        className="w-[56px] h-[56px] rounded-full bg-[#EEEDFC] flex items-center justify-center relative cursor-pointer flex-shrink-0"
        onClick={onProfileClick}
      >
        <div className="w-[38px] h-[38px] rounded-full overflow-hidden">
          {userImage
            ? <img src={userImage} alt="User avatar" className="w-full h-full object-cover" />
            : <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M30.0837 33.25V30.0833C30.0837 28.4036 29.4164 26.7927 28.2287 25.605C27.0409 24.4173 25.43 23.75 23.7503 23.75H14.2503C12.5706 23.75 10.9597 24.4173 9.77198 25.605C8.58425 26.7927 7.91699 28.4036 7.91699 30.0833V33.25" stroke="#736BEA" strokeWidth={2.5} strokeLinecap={"round"} strokeLinejoin={"round"}/>
                  <path d="M19.0003 17.4167C22.4981 17.4167 25.3337 14.5811 25.3337 11.0833C25.3337 7.58553 22.4981 4.75 19.0003 4.75C15.5025 4.75 12.667 7.58553 12.667 11.0833C12.667 14.5811 15.5025 17.4167 19.0003 17.4167Z" stroke="#736BEA" strokeWidth={2.5} strokeLinecap={"round"} strokeLinejoin={"round"}/>
                </svg>
                <circle cx="48.5" cy="48.5" r="6.5" fill="#F4A316" stroke="white" strokeWidth={2}/>
               </svg>
          }
        </div>
        <div className="absolute bottom-0 right-0 w-[15px] h-[15px] rounded-full bg-[#F4A316] border-2 border-white" />
      </div>

    </div>
  );
}
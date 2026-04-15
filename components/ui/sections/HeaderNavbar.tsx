"use client";

import React from "react";
import { FormButton } from "@/components/ui/forms/FormButton";

export function HeaderNavbar() {
  return (
    <header className="w-[1920px] h-[108px] bg-[#F5F5F5] border-b border-[#D1D1D1] shadow-[0px_0px_11.7px_0px_#0000000A] px-[177px] py-[24px]">
      
      {/* Frame 328 */}
      <div className="w-[1566px] h-[60px] flex items-center justify-between">
        
        {/* Logo */}
        <div
          className="w-[60px] h-[60px] px-[16px] py-[16px] rounded-[14px] bg-[#4F46E5] flex items-center justify-center cursor-pointer"
          onClick={() => console.log("Dashboard_authorized")}
        >
                <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="60" height="60" rx="14" fill="#4F46E5"/>
                  <path 
                    d="M29.1282 34.5001L24.6667 29.8848M29.1282 34.5001C31.2056 33.6828 33.1984 32.652 35.0769 31.4232M29.1282 34.5001V42.1923C29.1282 42.1923 33.6344 41.3462 35.0769 39.1155C36.6831 36.6232 35.0769 31.4232 35.0769 31.4232M24.6667 29.8848C25.4581 27.7609 26.4546 25.725 27.641 23.808C29.3739 20.9418 31.7867 18.5819 34.6501 16.9528C37.5135 15.3237 40.7322 14.4794 44 14.5004C44 18.6849 42.84 26.0387 35.0769 31.4232M24.6667 29.8848L17.2308 29.8848C17.2308 29.8848 18.0487 25.2233 20.2051 23.731C22.6144 22.0695 27.641 23.731 27.641 23.731M17.9744 36.8078C15.7436 38.7462 15 44.5 15 44.5C15 44.5 20.5621 43.7308 22.4359 41.4231C23.4918 40.1308 23.4769 38.1462 22.3021 36.9463C21.724 36.3755 20.9625 36.0457 20.1638 36.0201C19.3651 35.9946 18.5854 36.2751 17.9744 36.8078Z" 
                    stroke="white"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
        </div>

        {/* Frame 327 (Nav + Buttons together) */}
        <div className="w-[510px] h-[56px] flex items-center justify-between">
          
          {/* LEFT: Nav Item */}
          <div
            className="w-[220px] h-[56px] p-[15px] rounded-[8px] flex items-center gap-[8px] cursor-pointer hover:bg-black/5 transition"
            onClick={() => console.log("Browse courses_Authorized")}
          >
            <div className="w-[190px] h-[26px] flex items-center gap-[8px]">
              
              {/* Icon */}
              <div className="w-[26px] h-[26px] flex items-center justify-center">
                <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14.5068 11.6797C14.5834 12.0307 14.6655 12.3604 14.7578 12.6689C15.0654 13.6967 15.492 14.5561 16.168 15.2383C16.9892 16.0669 18.0873 16.5345 19.4883 16.8467C18.0874 17.1589 16.9892 17.6265 16.168 18.4551C15.492 19.1372 15.0654 19.9968 14.7578 21.0244C14.6617 21.3454 14.5762 21.6895 14.4971 22.0566C14.4164 21.6947 14.3303 21.356 14.2334 21.04C13.9212 20.0216 13.4928 19.1745 12.8184 18.501C12.1434 17.8269 11.2983 17.4029 10.2861 17.0977C10.0118 17.0149 9.72065 16.9398 9.41211 16.8701C10.8646 16.558 11.9994 16.0892 12.8428 15.2393C13.5193 14.5575 13.9463 13.6979 14.2549 12.6699C14.3476 12.3611 14.43 12.031 14.5068 11.6797ZM22.4443 16.3975H22.4414C22.4437 16.3972 22.446 16.3967 22.4482 16.3965L22.4443 16.3975ZM7.11621 8.14941C7.22914 8.36262 7.37056 8.5646 7.55371 8.74609C7.76599 8.95637 8.0052 9.11164 8.25879 9.23145C8.00997 9.35115 7.77476 9.5031 7.56543 9.70605C7.3943 9.872 7.25941 10.0549 7.14941 10.248C7.03738 10.0399 6.89862 9.84279 6.71875 9.66504C6.49849 9.44747 6.24859 9.28806 5.98438 9.16504C6.23629 9.04772 6.47627 8.89902 6.68945 8.69727C6.86561 8.5305 7.00318 8.34533 7.11621 8.14941ZM12.4365 3.11523C12.4706 3.15099 12.5055 3.18479 12.541 3.2168C12.5003 3.25211 12.4607 3.28996 12.4219 3.33008C12.4099 3.34246 12.3982 3.35562 12.3867 3.36816C12.3767 3.35742 12.3678 3.34557 12.3574 3.33496C12.3184 3.29501 12.2782 3.2578 12.2373 3.22266C12.2758 3.18824 12.3138 3.15209 12.3506 3.11328C12.3654 3.0976 12.3785 3.08039 12.3926 3.06445C12.4073 3.08109 12.421 3.09889 12.4365 3.11523Z" stroke="#525252" strokeWidth={2}/>
                </svg>
              </div>

              {/* Text */}
              <span className="w-[156px] h-[24px] text-[20px] font-medium leading-[100%] text-[#525252]">
                Browse Courses
              </span>
            </div>
          </div>

          {/* RIGHT: Buttons (Frame 245) */}
          <div className="w-[254px] h-[60px] flex items-center gap-[15px]">
            
            <FormButton
              label="Log In"
              variant="ghost"
              className="w-[114px] h-[60px] !border-2 !border-[#958FEF] !bg-transparent"
              textClassName="text-black"
              onClick={() => console.log("Login_Modal")}
            />

            <FormButton
              label="Sign Up"
              variant="primary"
              className="w-[125px] h-[60px] !bg-[#4F46E5]"
              textClassName="text-white"
              onClick={() => console.log("Sign Up Modal")}
            />

          </div>

        </div>

      </div>
    </header>
  );
}
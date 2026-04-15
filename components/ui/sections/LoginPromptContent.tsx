import { FaLock } from "react-icons/fa";

export function LoginPromptContent() {
  return (
    <div className="w-[306px] h-[179px] flex flex-col gap-[24px] items-center justify-between">
      
      {/* frame 303 */}
      <div className="w-[306px] h-[113px] flex flex-col gap-[12px] items-center">
        
        {/* frame 302 (icon circle) */}
        <div className="w-[74px] h-[77px] rounded-[50px] p-[20px] bg-[#DDDBFA] flex items-center justify-center relative">
          
          {/* Lock icon (simplified but visually same) */}
          <FaLock className="text-[#4F46E5] w-[24px] h-[24px]" />

          {/* small ellipse */}
          <div className="absolute w-[4px] h-[4px] bg-[#4F46E5] top-[23px] left-[15px] rounded-full" />
        </div>

        {/* Text */}
        <p className="w-[306px] h-[24px] text-center font-inter font-medium text-[16px] leading-[24px] text-[#0A0836]">
          Sign in to track your learning progress
        </p>
      </div>

      {/* Button */}
      <button
        className="w-[83px] h-[42px] px-[25px] py-[17px] rounded-[8px] bg-[#4F46E5] items-center flex flex-row justify-center">
        <span className="w-[47px] h-[24px] text-[16px] text-white font-medium">Log In</span>
      </button>
    </div>
  );
}
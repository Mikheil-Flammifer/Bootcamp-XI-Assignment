"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FormButton } from "@/components/ui/forms/FormButton";

interface Props {
  imageSrc: string;
  lecturer: string;
  duration: string; // e.g. "6 weeks"
  rating: number;
  title: string;
  category: string;
  price: number;
  loading?: boolean;
  onClick?: () => void;
}

export function CatalogCard({
  imageSrc,
  lecturer,
  duration,
  rating,
  title,
  category,
  price,
  loading,
  onClick,
}: Props) {
  return (
    <div className="w-[373px] h-[451px]">
      {/* browse (main card) */}
      <div className="w-full h-full bg-white border border-[#F5F5F5] rounded-[12px] p-[20px] flex flex-col gap-[24px]">

        {/* frame 414 */}
        <div className="w-full h-[411px] flex flex-col gap-[18px]">

          {/* frame 373 */}
          <div className="w-full flex flex-col gap-[18px]">

            {/* frame 11 (image) */}
            <img
              src={imageSrc}
              alt={title}
              className="w-full h-[181px] rounded-[10px] object-cover"
            />

            {/* frame 372 */}
            <div className="w-full flex flex-col gap-[16px]">

              {/* frame 374 */}
              <div className="flex flex-col gap-[12px]">

                {/* frame 370 */}
                <div className="flex justify-between items-center">

                  {/* lecturer | duration */}
                  <div className="flex items-center gap-[8px] text-[14px] text-[#666666] font-medium">
                    <span>{lecturer}</span>
                    <span>|</span>
                    <span>{duration}</span>
                  </div>

                  {/* rating */}
                  <div className="flex items-center gap-[4px] text-[14px]">
                    <FontAwesomeIcon
                      icon={faStar}
                      className="text-[#DFB300] w-[16px] h-[16px]"
                    />
                    <span className="text-[#525252] font-medium">
                      {rating}
                    </span>
                  </div>

                </div>

                {/* title */}
                <p className="text-[18px] leading-[24px] font-medium text-[#141414] line-clamp-2">
                  {title}
                </p>

              </div>
            </div>

            {/* frame 377 (category chip) */}
            <div className="flex gap-[8px]">
              <span className="px-[10px] py-[6px] text-[12px] rounded-[6px] bg-[#F5F5F5] text-[#4F46E5]">
                 {/* Chip */}
                    <div
                        className="w-[160px] h-[39px] flex items-center gap-[10px]
                                px-[12px] py-[8px] rounded-[12px]"
                    >
                        {/* Icon */}
                        <div className="w-[18px] h-[18px] flex items-center justify-center">
                          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4.85983 6.61994L2.00374 9.00002L4.85983 11.3801C4.91822 11.4268 4.9667 11.4848 5.00244 11.5505C5.03818 11.6162 5.06045 11.6883 5.06796 11.7628C5.07547 11.8372 5.06806 11.9124 5.04616 11.9839C5.02427 12.0554 4.98833 12.1218 4.94045 12.1793C4.89257 12.2368 4.83372 12.2841 4.76732 12.3185C4.70093 12.353 4.62833 12.3738 4.55378 12.3799C4.47923 12.3859 4.40422 12.377 4.33314 12.3538C4.26206 12.3305 4.19635 12.2932 4.13983 12.2442L0.764831 9.43174C0.701502 9.37895 0.650552 9.31288 0.615588 9.23822C0.580624 9.16355 0.5625 9.08211 0.5625 8.99967C0.5625 8.91722 0.580624 8.83578 0.615588 8.76112C0.650552 8.68645 0.701502 8.62039 0.764831 8.5676L4.13983 5.7551C4.25452 5.65962 4.40243 5.61361 4.55104 5.62719C4.69965 5.64077 4.83678 5.71283 4.93225 5.82752C5.02773 5.9422 5.07374 6.09012 5.06016 6.23873C5.04658 6.38734 4.97452 6.52446 4.85983 6.61994ZM17.2348 8.5676L13.8598 5.7551C13.803 5.70782 13.7375 5.67219 13.6669 5.65025C13.5964 5.6283 13.5222 5.62047 13.4486 5.62719C13.375 5.63392 13.3035 5.65507 13.2381 5.68944C13.1727 5.72381 13.1147 5.77073 13.0674 5.82752C12.9719 5.9422 12.9259 6.09012 12.9395 6.23873C12.9531 6.38734 13.0251 6.52446 13.1398 6.61994L15.9959 9.00002L13.1398 11.3801C13.0814 11.4268 13.033 11.4848 12.9972 11.5505C12.9615 11.6162 12.9392 11.6883 12.9317 11.7628C12.9242 11.8372 12.9316 11.9124 12.9535 11.9839C12.9754 12.0554 13.0113 12.1218 13.0592 12.1793C13.1071 12.2368 13.1659 12.2841 13.2323 12.3185C13.2987 12.353 13.3713 12.3738 13.4459 12.3799C13.5204 12.3859 13.5954 12.377 13.6665 12.3538C13.7376 12.3305 13.8033 12.2932 13.8598 12.2442L17.2348 9.43174C17.2982 9.37895 17.3491 9.31288 17.3841 9.23822C17.419 9.16355 17.4372 9.08211 17.4372 8.99967C17.4372 8.91722 17.419 8.83578 17.3841 8.76112C17.3491 8.68645 17.2982 8.62039 17.2348 8.5676ZM11.4418 2.28377C11.3723 2.25856 11.2986 2.24727 11.2248 2.25056C11.151 2.25384 11.0786 2.27162 11.0117 2.3029C10.9448 2.33417 10.8846 2.37832 10.8348 2.43283C10.7849 2.48734 10.7463 2.55113 10.7211 2.62057L6.22108 14.9956C6.19576 15.065 6.18439 15.1388 6.18762 15.2127C6.19085 15.2866 6.20861 15.3591 6.2399 15.4261C6.27118 15.4931 6.31537 15.5533 6.36993 15.6032C6.42449 15.6531 6.48836 15.6918 6.55788 15.717C6.6195 15.7389 6.68443 15.7501 6.74983 15.75C6.86535 15.75 6.97807 15.7145 7.07267 15.6482C7.16727 15.5819 7.23916 15.4881 7.27858 15.3795L11.7786 3.00447C11.8038 2.93504 11.8151 2.86131 11.8118 2.78752C11.8085 2.71372 11.7907 2.64129 11.7595 2.57436C11.7282 2.50744 11.684 2.44733 11.6295 2.39747C11.575 2.34761 11.5112 2.30897 11.4418 2.28377Z" fill="#525252"/>
                          </svg>
                        </div>

                        {/* Text */}
                        <span
                        className="w-[102px] h-[24px] text-[16px] font-medium
                                    leading-[24px] text-center text-[#525252]"
                        >
                        {category}
                        </span>
                    </div>
              </span>
            </div>

          </div>

          {/* frame 371 (bottom row) */}
          <div className="flex w-[337px] h-[48px] justify-between items-center">

            {/* frame 45 */}
            <div className="flex flex-col w-[144px] h-[44px]">
              <span className="w-[76px] h-[19px] text-[12px] text-[#ADADAD] font-medium">
                Starting from
              </span>
              <span className="w-[62px] h-[29px] text-[24px] font-semibold text-[#3D3D3D]">
                ${price}
              </span>
            </div>

            {/* button */}
            <FormButton
              label="Details"
              loading={loading}
              loadingLabel="Loading..."
              disabled={loading}
              onClick={onClick}
              className="w-[103px] h-[48px] pt-[15px] pb-[17px] pl-[25px] pr-[25px] gap-[10px] rounded-[8px] bg-[#4F46E5]"
              textClassName="w-[53px] h-[24px] item-center justify-center text-white text-[16px] font-medium"
            />

          </div>

        </div>
      </div>
    </div>
  );
}
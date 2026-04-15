import React from "react";
import { FormButton } from "@/components/ui/forms/FormButton";

export type InProgressCardProps = {
  title: string;
  imageSrc: string;
  lecturer?: string;
  progress?: string;
  isAuthorized?: boolean;
  loading?: boolean;
  onClick?: () => void;
};

export function InProgressCard({
  title,
  imageSrc,
  lecturer,
  progress = "In Progress",
  isAuthorized = false,
  loading,
  onClick,
}: InProgressCardProps) {
  return (
    <div
      className="relative flex flex-col rounded-[12px] cursor-pointer"
      style={{
        width: "506px",
        height: "219px",
        padding: "20px",
        background: "#FFFFFF",
      }}
    >
      {/* Blur overlay */}
      {!isAuthorized && (
        <div
          className="absolute inset-0 rounded-[12px]"
          style={{ background: "rgba(255,255,255,0.4)", zIndex: 10 }}
        />
      )}

      {/* Top section */}
      <div className="flex flex-col w-[466px] gap-[16px] opacity-[0.76]">
        <div className="flex flex-row justify-between w-full h-[123px]">
          {/* Image */}
          <img
            src={imageSrc}
            alt={title}
            className="w-[140px] h-[123px] rounded-[12px] object-cover"
          />

          {/* Right content */}
          <div className="flex flex-col w-[326px] pl-[16px] pr-[4px] gap-[9px]">
            {/* Top row */}
            <div className="flex flex-row justify-between w-full h-[18px]">
              <p
                className="font-inter font-medium text-[14px]"
                style={{ color: "#666666" }}
              >
                {lecturer ? `Lecturer ${lecturer}` : ""}
              </p>

              <p
                className="font-inter font-medium text-[14px]"
                style={{ color: "#666666" }}
              >
                {progress}
              </p>
            </div>

            {/* Title */}
            <p
              className="w-[306px] h-[56px] font-inter font-semibold text-[20px] leading-[28px]"
              style={{ color: "#141414" }}
            >
              {title}
            </p>
          </div>
        </div>
      </div>

      {/* Bottom section */}
      <div className="flex flex-row justify-between w-[466px] h-[48px] items-end opacity-[0.76]">
        {/* Empty progress space */}
        <div className="w-[336px] h-[39px]" />

        {/* Button */}
        <FormButton
          label="View"
          loading={loading}
          loadingLabel="Loading..."
          disabled={!isAuthorized}
          onClick={onClick}
          className="w-[90px] h-[48px] rounded-[8px] border-2 border-[#958FEF]"
          textClassName="flex justify-center"
        />
      </div>
    </div>
  );
}

export function SortingDropdown() {
  return (
    <div className="w-[234px] h-[49px] flex items-center justify-between border border-gray-300 rounded-[10px] px-[20px] py-[7px]">

      {/* Frame 18 */}
      <div className="w-[166px] h-[35px] flex items-center gap-[25px]">

        {/* Frame 17 */}
        <div className="w-[166px] h-[24px] flex items-center gap-[8px]">
          <span className="text-[16px] text-[#666666] font-medium">
            Sort by:
          </span>
          <span className="text-[16px] text-[#4F46E5] font-medium">
            Newest first
          </span>
        </div>

      </div>

      {/* Arrow */}
      <svg
        className="w-[20px] h-[20px] rotate-180"
        viewBox="0 0 20 20"
        fill="none"
      >
        <path
          d="M5 8L10 13L15 8"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

    </div>
  );
}
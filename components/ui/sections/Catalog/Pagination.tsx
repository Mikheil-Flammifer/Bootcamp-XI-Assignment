"use client";
import { PageButton } from "@/components/ui/sections/Catalog/PageButton"

interface Props {
  currentPage?: number;
  totalPages?: number;
  onPageChange?: (page: number) => void;
}

export function Pagination({
  currentPage = 1,
  totalPages = 10,
  onPageChange,
}: Props) {
  return (
    <div className="w-[328px] h-[40px] flex items-center justify-center gap-[8px]">

      {/* Prev Arrow */}
      <button
        onClick={() => onPageChange?.(currentPage - 1)}
        className="w-[40px] h-[40px] rounded-[4px] border border-[#D1D1D1] bg-white flex items-center justify-center rotate-180"
      >
        <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
          <path
            d="M5 8L10 13L15 8"
            stroke="#333"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {/* Page 1 */}
      <PageButton
        page={1}
        active={currentPage === 1}
        onClick={onPageChange}
      />

      {/* Page 2 */}
      <PageButton
        page={2}
        active={currentPage === 2}
        onClick={onPageChange}
      />

      {/* Page 3 */}
      <PageButton
        page={3}
        active={currentPage === 3}
        onClick={onPageChange}
      />

      {/* Dots */}
      <div className="w-[40px] h-[40px] rounded-[4px] border border-[#D1D1D1] flex items-center justify-center">
        ...
      </div>

      {/* Last Page */}
      <PageButton
        page={totalPages}
        active={currentPage === totalPages}
        onClick={onPageChange}
      />

      {/* Next Arrow */}
      <button
        onClick={() => onPageChange?.(currentPage + 1)}
        className="w-[40px] h-[40px] rounded-[4px] border border-[#D1D1D1] bg-white flex items-center justify-center"
      >
        <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
          <path
            d="M5 8L10 13L15 8"
            stroke="#333"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

    </div>
  );
}
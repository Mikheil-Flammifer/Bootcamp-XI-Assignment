export function PageButton({
  page,
  active,
  onClick,
}: {
  page: number;
  active?: boolean;
  onClick?: (page: number) => void;
}) {
  return (
    <button
      onClick={() => onClick?.(page)}
      className={`w-[40px] h-[40px] rounded-[4px] border text-[14px] font-medium
        ${
          active
            ? "bg-[#281ED2] border-[#4F46E5] text-white"
            : "bg-white border-[#D1D1D1] text-[#333]"
        }
      `}
    >
      {page}
    </button>
  );
}
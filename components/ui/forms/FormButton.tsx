type Variant = "primary" | "secondary" | "danger" | "ghost";
type Size = "sm" | "md" | "lg";

interface Props {
  label: string;
  loading?: boolean;
  loadingLabel?: string;
  disabled?: boolean;
  form?: string;
  onClick?: () => void;
  variant?: Variant;
  size?: Size;
  fullWidth?: boolean;
  className?: string;
  textClassName?: string;
  type?: "button" | "submit" | "reset";
}

const variantStyles: Record<Variant, string> = {
  primary:   "bg-indigo-600 text-white hover:bg-indigo-700",
  secondary: "bg-gray-100 text-gray-800 hover:bg-gray-200",
  danger:    "bg-red-600 text-white hover:bg-red-700",
  ghost:     "bg-transparent text-indigo-600 border border-indigo-600 hover:bg-indigo-50",
};

const sizeStyles: Record<Size, string> = {
  sm: "h-[36px] px-[8px]  text-xs w-[200px]",
  md: "h-[47px] px-[10px] text-sm w-[360px]",
  lg: "h-[56px] px-[14px] text-base w-[480px]",
};

export function FormButton({
  label,
  loading,
  loadingLabel,
  disabled,
  form,
  onClick,
  variant = "primary",
  size = "md",
  fullWidth = false,
  className = "",
  textClassName = "",
  type = "button", 
}: Props) {
  const base =
    "rounded-[8px] font-medium transition-all disabled:opacity-60 disabled:cursor-not-allowed";

  const computed = [
    base,
    variantStyles[variant],
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button
      type={type}
      form={form}
      disabled={disabled || loading}
      onClick={onClick}
      className={computed}
    >
      <span className={textClassName}>
        {loading ? loadingLabel : label}
      </span>
    </button>
  );
}
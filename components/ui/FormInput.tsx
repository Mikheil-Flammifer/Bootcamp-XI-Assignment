// components/ui/FormInput.tsx
interface Props {
  label: string;
  type?: string;
  placeholder?: string;
  value: string;
  error?: string;
  optional?: boolean;
  autoFocus?: boolean;
  onChange: (value: string) => void;
  onClearError?: () => void;
}

export function FormInput({
  label, type = "text", placeholder, value,
  error, optional, autoFocus, onChange, onClearError,
}: Props) {
  return (
    <div className="flex flex-col w-[360px] min-h-[73px]">
      <label className="h-[17px] font-inter text-sm font-medium text-gray-700">
        {label}
        {optional && <span className="text-gray-400 text-xs ml-1">(optional)</span>}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        autoFocus={autoFocus}
        onChange={(e) => { onChange(e.target.value); onClearError?.(); }}
        className={`w-[360px] h-[48px] rounded-[8px] border-[1.5px] text-sm outline-none transition-colors
          ${error
            ? "border-red-400 bg-red-50 focus:border-red-500"
            : "border-gray-200 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100"
          }`}
        style={{ paddingTop: "12px", paddingRight: "15px", paddingBottom: "12px", paddingLeft: "13px" }}
      />
      {error && <p className="text-xs text-red-500">{error}</p>}
    </div>
  );
}
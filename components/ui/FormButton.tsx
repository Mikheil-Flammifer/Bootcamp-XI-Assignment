// components/ui/FormButton.tsx
interface Props {
  label: string;
  loading?: boolean;
  loadingLabel?: string;
  disabled?: boolean;
  form?: string;
  onClick?: () => void;
}

export function FormButton({ label, loading, loadingLabel, disabled, form, onClick }: Props) {
  return (
    <button
      type="submit"
      form={form}
      disabled={disabled || loading}
      onClick={onClick}
      style={{ backgroundColor: "#4F46E5" }}
      className="w-[360px] h-[47px] rounded-[8px] px-[10px] text-white text-sm font-medium
        hover:opacity-90 disabled:opacity-60 disabled:cursor-not-allowed transition-opacity"
    >
      {loading ? loadingLabel : label}
    </button>
  );
}
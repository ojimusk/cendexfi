type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

export default function Input({
  className = "",
  ...props
}: InputProps) {
  return (
    <input
      {...props}
      className={`w-full rounded-xl border border-[#252525] bg-[#151515] px-4 py-3 text-white placeholder:text-[#A0A0A0] focus:outline-none focus:ring-2 focus:ring-[#5B8CFF] ${className}`}
    />
  );
}

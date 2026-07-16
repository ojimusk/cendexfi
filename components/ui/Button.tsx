type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
};

export default function Button({
  children,
  onClick,
  className = "",
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`rounded-xl bg-blue-600 px-4 py-2 text-white font-medium hover:bg-blue-500 transition ${className}`}
    >
      {children}
    </button>
  );
}

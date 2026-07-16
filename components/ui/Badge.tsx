type BadgeProps = {
  children: React.ReactNode;
};

export default function Badge({ children }: BadgeProps) {
  return (
    <span className="rounded-full bg-[#1F1F1F] px-3 py-1 text-xs text-white">
      {children}
    </span>
  );
}

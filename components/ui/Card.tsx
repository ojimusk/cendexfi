type CardProps = {
  children: React.ReactNode;
};

export default function Card({ children }: CardProps) {
  return (
    <div className="rounded-2xl bg-[#151515] border border-[#252525] p-4">
      {children}
    </div>
  );
}

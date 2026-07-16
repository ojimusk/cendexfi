type Props = {
  title: string;
  value: string;
  color?: string;
};

export default function StatsCard({
  title,
  value,
  color = "text-white",
}: Props) {
  return (
    <div className="rounded-2xl bg-[#151515] p-4">
      <p className="text-xs text-[#A0A0A0]">
        {title}
      </p>

      <p className={`mt-2 text-lg font-bold ${color}`}>
        {value}
      </p>
    </div>
  );
}

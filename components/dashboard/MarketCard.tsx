type Props = {
  symbol: string;
  price: string;
  change: string;
  positive?: boolean;
};

export default function MarketCard({
  symbol,
  price,
  change,
  positive = true,
}: Props) {
  return (
    <div className="rounded-2xl bg-[#151515] p-4">
      <div className="flex items-center justify-between">
        <h3 className="font-semibold">{symbol}</h3>

        <span
          className={`text-sm ${
            positive
              ? "text-[#00D084]"
              : "text-[#FF5C5C]"
          }`}
        >
          {change}
        </span>
      </div>

      <p className="mt-3 text-xl font-bold">
        {price}
      </p>
    </div>
  );
}

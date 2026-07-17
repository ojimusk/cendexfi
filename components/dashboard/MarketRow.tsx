type MarketRowProps = {
  symbol: string;
  price: string;
  change: string;
  positive?: boolean;
};

export default function MarketRow({
  symbol,
  price,
  change,
  positive = true,
}: MarketRowProps) {
  return (
    <div className="flex items-center justify-between rounded-xl bg-[#151515] p-4 border border-[#252525]">

      <div>
        <h3 className="font-semibold text-white">
          {symbol}
        </h3>

        <p className="mt-1 text-sm text-[#A0A0A0]">
          {price}
        </p>
      </div>

      <span
        className={`font-semibold ${
          positive ? "text-[#00D084]" : "text-[#FF5C5C]"
        }`}
      >
        {change}
      </span>

    </div>
  );
}

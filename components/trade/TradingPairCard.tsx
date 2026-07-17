import Card from "@/components/ui/Card";

type TradingPairCardProps = {
  pair: string;
  price: string;
  change: string;
};

export default function TradingPairCard({
  pair,
  price,
  change,
}: TradingPairCardProps) {
  return (
    <Card>
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-xl font-semibold">
            {pair}
          </h3>

          <p className="mt-2 text-2xl font-bold">
            {price}
          </p>
        </div>

        <span className="text-[#00D084] font-semibold">
          {change}
        </span>
      </div>
    </Card>
  );
}

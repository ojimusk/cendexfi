import Header from "@/components/layout/Header";
import BottomNav from "@/components/layout/BottomNav";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";

export default function TradePage() {
  return (
    <main className="min-h-screen bg-[#0B0B0B] px-5 pb-24 pt-4 text-white">

      <Header />

      <section className="mt-8">
        <h1 className="text-4xl font-bold">
          Trade
        </h1>

        <p className="mt-2 text-[#A0A0A0]">
          Execute perpetual futures trades
        </p>
      </section>

      <section className="mt-6">
        <Card>

  <div className="flex justify-between">
    <span>Pair</span>
    <span>BTC/USDT</span>
  </div>

  <div className="mt-4 flex justify-between">
    <span>Price</span>
    <span>$118,240</span>
  </div>

  <div className="mt-6">
    <label className="mb-2 block text-sm text-[#A0A0A0]">
      Order Type
    </label>

    <select className="w-full rounded-xl border border-[#2A2A2A] bg-[#111111] p-3">
      <option>Market</option>
      <option>Limit</option>
    </select>
  </div>

  <div className="mt-4">
    <label className="mb-2 block text-sm text-[#A0A0A0]">
      Amount (USDT)
    </label>

    <input
      type="number"
      placeholder="100"
      className="w-full rounded-xl border border-[#2A2A2A] bg-[#111111] p-3"
    />
  </div>

  <div className="mt-4">
    <label className="mb-2 block text-sm text-[#A0A0A0]">
      Leverage
    </label>

    <input
      type="range"
      min="1"
      max="100"
      defaultValue="10"
      className="w-full"
    />

    <p className="mt-2 text-sm text-[#A0A0A0]">
      10x
    </p>
  </div>

  <div className="mt-6">
    <Button className="w-full">
      Buy / Long
    </Button>
  </div>

  <div className="mt-3">
    <Button className="w-full bg-red-600 hover:bg-red-500">
      Sell / Short
    </Button>
  </div>

</Card>
      <div className="mt-6">

  <h2 className="mb-3 text-lg font-semibold">
    Open Positions
  </h2>

  <Card>

    <div className="flex items-center justify-between">
      <div>
        <p className="font-semibold">
          BTC/USDT Long
        </p>

        <p className="mt-1 text-sm text-[#A0A0A0]">
          Entry: $117,850
        </p>
      </div>

      <div className="text-right">
        <p className="font-semibold text-[#00D084]">
          +$390
        </p>

        <p className="text-sm text-[#00D084]">
          +2.1%
        </p>
      </div>
    </div>

  </Card>

</div>
      </section>

      <BottomNav />

    </main>
  );
}

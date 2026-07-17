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
            <Button className="w-full">
              Buy / Long
            </Button>
          </div>

          <div className="mt-3">
            <Button
              className="w-full bg-red-600 hover:bg-red-500"
            >
              Sell / Short
            </Button>
          </div>

        </Card>
      </section>

      <BottomNav />

    </main>
  );
}

import Header from "@/components/layout/Header";
import BottomNav from "@/components/layout/BottomNav";
import MarketRow from "@/components/dashboard/MarketRow";

export default function MarketsPage() {
  return (
    <main className="min-h-screen bg-[#0B0B0B] px-5 pb-24 pt-4 text-white">

      <Header />

      <section className="mt-6">

        <h1 className="text-2xl font-bold">
          Markets
        </h1>

        <p className="mt-1 text-sm text-[#8A8A8A]">
          Trade crypto with real-time market data
        </p>

      </section>

      <section className="mt-6">

        <input
          placeholder="Search market..."
          className="w-full rounded-xl border border-[#252525] bg-[#151515] px-4 py-3 outline-none"
        />

      </section>

      <section className="mt-8">

        <h2 className="mb-3 text-lg font-semibold">
          Trading Pairs
        </h2>

        <div className="space-y-3">

          <MarketRow
            symbol="BTC/USDT"
            price="$118,240"
            change="+2.45%"
          />

          <MarketRow
            symbol="ETH/USDT"
            price="$3,840"
            change="+1.28%"
          />

          <MarketRow
            symbol="SOL/USDT"
            price="$192.35"
            change="-0.84%"
            positive={false}
          />

          <MarketRow
            symbol="XRP/USDT"
            price="$2.91"
            change="+4.10%"
          />

          <MarketRow
            symbol="DOGE/USDT"
            price="$0.42"
            change="+8.52%"
          />

        </div>

      </section>

      <BottomNav />

    </main>
  );
}

import Header from "@/components/layout/Header";
import BottomNav from "@/components/layout/BottomNav";

import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";

import StatsCard from "@/components/dashboard/StatsCard";
import QuickAction from "@/components/dashboard/QuickAction";
import TradingPairCard from "@/components/trade/TradingPairCard";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0B0B0B] px-5 pb-24 pt-4 text-white">

      <Header />

      {/* Balance */}
      <section className="mt-6">
        <Card>
          <p className="text-sm text-[#A0A0A0]">
            Total Balance
          </p>

          <h2 className="mt-2 text-3xl font-bold">
            $25,420.35
          </h2>

          <p className="mt-2 text-[#00D084]">
            +$482.12 Today
          </p>

          <div className="mt-6">
            <Button className="w-full">
              Start Trading
            </Button>
          </div>
        </Card>
      </section>

      {/* Stats */}
      <section className="mt-6 grid grid-cols-2 gap-3">

        <StatsCard
          title="Equity"
          value="$25,420"
        />

        <StatsCard
          title="Today's PnL"
          value="+$482"
          color="text-[#00D084]"
        />

        <StatsCard
          title="Open Positions"
          value="3"
        />

        <StatsCard
          title="Win Rate"
          value="68%"
        />

      </section>

      {/* Quick Actions */}
      <section className="mt-6">

        <h2 className="mb-3 text-lg font-semibold">
          Quick Actions
        </h2>

        <div className="grid grid-cols-2 gap-3">

          <QuickAction title="Deposit" />

          <QuickAction title="Withdraw" />

          <QuickAction title="Trade" />

          <QuickAction title="History" />

        </div>

      </section>

      {/* Trading Pairs */}
      <section className="mt-8">

        <h2 className="mb-3 text-lg font-semibold">
          Trading Pairs
        </h2>

        <div className="space-y-3">

          <TradingPairCard
            pair="BTC/USDT"
            price="$118,240"
            change="+2.45%"
          />

          <TradingPairCard
            pair="ETH/USDT"
            price="$3,840"
            change="+1.28%"
          />

          <TradingPairCard
            pair="SOL/USDT"
            price="$182"
            change="+5.91%"
          />

        </div>

      </section>

      <BottomNav />

    </main>
  );
}

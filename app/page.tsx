import Header from "@/components/layout/Header";
import BottomNav from "@/components/layout/BottomNav";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import StatsCard from "@/components/dashboard/StatsCard";
import QuickAction from "@/components/dashboard/QuickAction";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0B0B0B] px-5 pb-24 pt-4 text-white">
      <Header />

      {/* Total Balance */}
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

      <BottomNav />
    </main>
  );
      }

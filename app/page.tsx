import Header from "@/components/layout/Header";
import BottomNav from "@/components/layout/BottomNav";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0B0B0B] px-5 pb-24 pt-4 text-white">
      <Header />

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

      <BottomNav />
    </main>
  );
}

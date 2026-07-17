import Header from "@/components/layout/Header";
import BottomNav from "@/components/layout/BottomNav";

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
          className="w-full rounded-xl border border-[#2A2A2A] bg-[#151515] px-4 py-3 outline-none"
        />

      </section>

      <BottomNav />

    </main>
  );
}

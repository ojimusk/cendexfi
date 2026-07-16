import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0B0B0B] p-6 text-white">
      <h1 className="text-4xl font-bold mb-6">Cendex</h1>

      <Card>
        <p className="mb-4">Welcome to Cendex.</p>

        <Button>Connect Wallet</Button>
      </Card>
    </main>
  );
}

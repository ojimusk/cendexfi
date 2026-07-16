import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Input from "@/components/ui/Input";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0B0B0B] p-6 text-white">
      <h1 className="mb-2 text-4xl font-bold">Cendex</h1>

      <Badge>Beta</Badge>

      <Card>
        <p className="mb-4">Welcome to Cendex.</p>

        <Input placeholder="Wallet Address" />

        <div className="mt-4">
          <Button>Connect Wallet</Button>
        </div>
      </Card>
    </main>
  );
}

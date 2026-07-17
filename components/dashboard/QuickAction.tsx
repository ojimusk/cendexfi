import Button from "@/components/ui/Button";

export default function QuickAction() {
  return (
    <div className="grid grid-cols-2 gap-3 mt-6">
      <Button>Deposit</Button>
      <Button>Withdraw</Button>
      <Button>Trade</Button>
      <Button>History</Button>
    </div>
  );
}

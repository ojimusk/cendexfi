import Button from "@/components/ui/Button";

type QuickActionProps = {
  title: string;
};

export default function QuickAction({
  title,
}: QuickActionProps) {
  return (
    <Button className="w-full">
      {title}
    </Button>
  );
}

import { cn } from "@/lib/utils";
import { LeanView as View } from "@/components/ui/primitive/lean-view";

const Card = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return <View className={cn("rounded-lg p-4", className)}>{children}</View>;
};

export default Card;

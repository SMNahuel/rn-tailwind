import { cn } from "@/lib/utils";
import { View } from "react-native";

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

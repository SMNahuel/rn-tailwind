const Text = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return <Text className={className}>{children}</Text>;
};

export default Text;

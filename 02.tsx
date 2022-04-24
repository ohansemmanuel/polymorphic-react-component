type TextProps<C extends React.ElementType> = {
  as?: C;
  children: React.ReactNode;
} & React.ComponentPropsWithoutRef<C>;

export const Text = <C extends React.ElementType>({
  as,
  children,
  ...restProps
}: TextProps<C>) => {
  const Component = as || "span";

  return <Component {...restProps}>{children}</Component>;
};

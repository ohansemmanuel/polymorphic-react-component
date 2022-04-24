type TextProps<C extends React.ElementType> = {
  as?: C;
  children: React.ReactNode;
} & React.ComponentPropsWithoutRef<C>;

// Note the Generic defaulted to a "span". If no "as" prop is passed e.g., <Text>Hi</Text>, TS will treat the rendered element as a span and provide typings accordingly
export const Text = <C extends React.ElementType = "span">({
  as,
  children,
  ...restProps
}: TextProps<C>) => {
  const Component = as || "span";

  return <Component {...restProps}>{children}</Component>;
};

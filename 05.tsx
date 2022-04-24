type Rainbow =
  | "red"
  | "orange"
  | "yellow"
  | "green"
  | "blue"
  | "indigo"
  | "violet";

type AsProp<C extends React.ElementType> = {
  as?: C;
};

type PropsToOmit<C extends React.ElementType, P> = keyof (AsProp<C> & P);

type PolymorphicComponentProp<
  C extends React.ElementType,
  Props = {}
> = React.PropsWithChildren<Props & AsProp<C>> &
  Omit<React.ComponentPropsWithoutRef<C>, PropsToOmit<C, Props>>;

type TextProps = { color?: Rainbow | "black" };

export const Text = <C extends React.ElementType = "span">({
  as,
  color,
  children,
}: PolymorphicComponentProp<C, TextProps>) => {
  const Component = as || "span";

  const style = color ? { style: { color } } : {};

  return <Component {...style}>{children}</Component>;
};

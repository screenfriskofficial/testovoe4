import React from "react";
import { ITypographyComponent, ITypographyProps } from "./interfaces.ts";
/*
 * Компонент Typography
 * */
const TypographyComponent: ITypographyComponent = React.forwardRef<
  HTMLButtonElement,
  ITypographyProps
>((props, ref) => {
  const { children, ...rest } = props;
  return (
    <h3 ref={ref} {...rest}>
      {children}
    </h3>
  );
});

const Typography = React.memo(TypographyComponent) as ITypographyComponent;

export { Typography };

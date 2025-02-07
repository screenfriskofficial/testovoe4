import React from "react";
import { ITypographyComponent, ITypographyProps } from "./interfaces.ts";
import clsx from "clsx";
/*
 * Компонент Typography
 * */
const TypographyComponent: ITypographyComponent = React.forwardRef<
  HTMLHeadingElement,
  ITypographyProps
>((props, ref) => {
  const { children, className, ...rest } = props;
  return (
    <h3
      className={clsx(className, "font-semibold text-2xl leading-[33.6]px")}
      ref={ref}
      {...rest}
    >
      {children}
    </h3>
  );
});

const Typography = React.memo(TypographyComponent) as ITypographyComponent;

export { Typography };

import React from "react";
import { ISurfaceComponent, ISurfaceProps } from "./interfaces.ts";
import clsx from "clsx";
/*
 * Компонент surface
 * */
const SurfaceComponent: ISurfaceComponent = React.forwardRef<
  HTMLDivElement,
  ISurfaceProps
>((props, ref) => {
  const { children, className, ...rest } = props;
  return (
    <div className={clsx(className, "bg-white")} ref={ref} {...rest}>
      {children}
    </div>
  );
});

const Surface = React.memo(SurfaceComponent) as ISurfaceComponent;

export { Surface };

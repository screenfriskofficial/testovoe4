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
    <div
      className={clsx(className, "bg-white p-8 rounded-[8px]")}
      ref={ref}
      {...rest}
    >
      {children}
    </div>
  );
});

const Surface = React.memo(SurfaceComponent) as ISurfaceComponent;

export { Surface };

import React from "react";
import { ISurfaceComponent, ISurfaceProps } from "./interfaces.ts";
/*
 * Компонент surface
 * */
const SurfaceComponent: ISurfaceComponent = React.forwardRef<
  HTMLButtonElement,
  ISurfaceProps
>((props, ref) => {
  const { children, ...rest } = props;
  return (
    <div ref={ref} {...rest}>
      {children}
    </div>
  );
});

const Surface = React.memo(SurfaceComponent) as ISurfaceComponent;

export { Surface };

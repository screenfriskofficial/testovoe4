import React from "react";
import { IButtonComponent, IButtonProps } from "./interfaces.ts";
import clsx from "clsx";
/*
 * Компонент кнопки
 * */
const ButtonComponent: IButtonComponent = React.forwardRef<
  HTMLButtonElement,
  IButtonProps
>((props, ref) => {
  const { children, className, ...rest } = props;
  return (
    <button
      className={clsx(className, "border p-y-[13px] p-x-[24px]")}
      ref={ref}
      {...rest}
    >
      {children}
    </button>
  );
});

const Button = React.memo(ButtonComponent) as IButtonComponent;

export { Button };

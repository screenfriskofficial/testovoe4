import React from "react";
import { IButtonComponent, IButtonProps } from "./interfaces.ts";
/*
 * Компонент кнопки
 * */
const ButtonComponent: IButtonComponent = React.forwardRef<
  HTMLButtonElement,
  IButtonProps
>((props, ref) => {
  const { children, ...rest } = props;
  return (
    <button ref={ref} {...rest}>
      {children}
    </button>
  );
});

const Button = React.memo(ButtonComponent) as IButtonComponent;

export { Button };

import React from "react";
/*
 * Тип пропсов кнопки
 * */
type IButtonProps = React.PropsWithChildren<
  React.ButtonHTMLAttributes<HTMLButtonElement>
>;
/*
 * Тип компонента кнопки
 * */
type IButtonComponent = React.ForwardRefExoticComponent<
  React.PropsWithoutRef<IButtonProps> & React.RefAttributes<HTMLButtonElement>
>;

export type { IButtonProps, IButtonComponent };

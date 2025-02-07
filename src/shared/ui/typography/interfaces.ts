import React from "react";
/*
 * Тип пропсов typography
 * */
type ITypographyProps = React.PropsWithChildren<
  React.HTMLAttributes<HTMLElement>
>;
/*
 * Тип компонента typography
 * */
type ITypographyComponent = React.ForwardRefExoticComponent<
  React.PropsWithoutRef<ITypographyProps> & React.RefAttributes<HTMLElement>
>;

export type { ITypographyProps, ITypographyComponent };

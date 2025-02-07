import React from "react";
/*
 * Тип пропсов typography
 * */
type ITypographyProps = React.PropsWithChildren<
  React.HTMLAttributes<HTMLHeadingElement>
>;
/*
 * Тип компонента typography
 * */
type ITypographyComponent = React.ForwardRefExoticComponent<
  React.PropsWithoutRef<ITypographyProps> &
    React.RefAttributes<HTMLHeadingElement>
>;

export type { ITypographyProps, ITypographyComponent };

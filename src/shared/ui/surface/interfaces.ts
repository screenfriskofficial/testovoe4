import React from "react";
/*
 * Тип пропсов surface
 * */
type ISurfaceProps = React.PropsWithChildren<
  React.HTMLAttributes<HTMLDivElement>
>;
/*
 * Тип компонента surface
 * */
type ISurfaceComponent = React.ForwardRefExoticComponent<
  React.PropsWithoutRef<ISurfaceProps> & React.RefAttributes<HTMLDivElement>
>;

export type { ISurfaceProps, ISurfaceComponent };

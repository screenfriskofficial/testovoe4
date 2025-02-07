import React from "react";
/*
 * Тип пропсов badge
 * */
type IBadgeProps = React.PropsWithChildren<
  React.HTMLAttributes<HTMLDivElement>
>;
/*
 * Тип компонента badge
 * */
type IBadgeComponent = React.ForwardRefExoticComponent<
  React.PropsWithoutRef<IBadgeProps> & React.RefAttributes<HTMLDivElement>
>;

export type { IBadgeProps, IBadgeComponent };

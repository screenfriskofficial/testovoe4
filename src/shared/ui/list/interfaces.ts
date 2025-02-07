import React from "react";

/*
 * пропсы list item
 * */
type IListProps = React.PropsWithChildren<
  React.HTMLAttributes<HTMLUListElement>
>;
/*
 * Тип компонента ListItem
 * */
type IListComponent = React.ForwardRefExoticComponent<
  React.PropsWithoutRef<IListProps> & React.RefAttributes<HTMLUListElement>
>;

export type { IListProps, IListComponent };

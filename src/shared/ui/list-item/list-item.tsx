import React from "react";
import { IListItemsComponent, IListItemsProps } from "./interfaces.ts";
import clsx from "clsx";
/*
 * Компонент list item
 * */
const ListItemComponent: IListItemsComponent = React.forwardRef<
  HTMLLIElement,
  IListItemsProps
>((props, ref) => {
  const { children, className, ...rest } = props;
  return (
    <li
      className={clsx(className, "flex justify-between py-[14px]")}
      ref={ref}
      {...rest}
    >
      {children}
    </li>
  );
});

const ListItem = React.memo(ListItemComponent) as IListItemsComponent;

export { ListItem };

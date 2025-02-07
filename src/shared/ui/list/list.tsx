import React from "react";
import { IListComponent, IListProps } from "./interfaces.ts";
import clsx from "clsx";
/*
 * Компонент list
 * */
const ListComponent: IListComponent = React.forwardRef<
  HTMLUListElement,
  IListProps
>((props, ref) => {
  const { children, className, ...rest } = props;
  return (
    <ul
      className={clsx(
        className,
        "bg-white rounded-[8px] divide-y divide-[#ECEBF0]",
      )}
      ref={ref}
      {...rest}
    >
      {children}
    </ul>
  );
});

const List = React.memo(ListComponent) as IListComponent;

export { List };

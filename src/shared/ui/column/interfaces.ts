import React from "react";
/*
 * Заливка колонны
 * */
type IColumnFill = {
  fill?: number;
};
/*
 * Дата колонны
 * */
type IColumnDate = {
  date?: string;
};
/*
 * Тип пропсов column
 * */
type IColumnProps = React.HTMLAttributes<HTMLDivElement> &
  IColumnFill &
  IColumnDate;
/*
 * Тип компонента column
 * */
type IColumnComponent = React.ForwardRefExoticComponent<
  React.PropsWithoutRef<IColumnProps> & React.RefAttributes<HTMLDivElement>
>;

export type { IColumnProps, IColumnComponent, IColumnFill, IColumnDate };

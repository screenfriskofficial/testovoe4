import React from "react";
/*
 * Тип пропса title
 * */
type IListItemsCount = {
  count: number;
};
/*
 * Тип пропса title
 * */
type IListItemsTitle = {
  title: string;
};
/*
 * Тип пропса id
 * */
type IListItemsId = {
  id: number;
};
/*
 * Тип пропсов айтемов
 * */
type IListItems = IListItemsId & IListItemsTitle & IListItemsCount;
/*
 * Тип пропсов ListItem
 * */
type IListItemsProps = React.PropsWithChildren<
  React.HTMLAttributes<HTMLLIElement>
>;
/*
 * Тип компонента ListItem
 * */
type IListItemsComponent = React.ForwardRefExoticComponent<
  React.PropsWithoutRef<IListItemsProps> & React.RefAttributes<HTMLLIElement>
>;

export type {
  IListItemsProps,
  IListItemsComponent,
  IListItems,
  IListItemsTitle,
  IListItemsId,
};

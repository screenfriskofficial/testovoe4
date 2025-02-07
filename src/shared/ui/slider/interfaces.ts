import React from "react";
type ISliderGradient = {
  gradient?: string;
};
type ISliderInitialValue = {
  initialValue?: number;
};
type ISliderCircleColor = {
  circleColor?: string;
};
/*
 * Тип пропсов slider
 * */
type ISliderProps = React.HTMLAttributes<HTMLDivElement> &
  ISliderGradient &
  ISliderInitialValue &
  ISliderCircleColor;

/*
 * Тип компонента slider
 * */
type ISliderComponent = React.ForwardRefExoticComponent<
  React.PropsWithoutRef<ISliderProps> & React.RefAttributes<HTMLDivElement>
>;

export type { ISliderProps, ISliderComponent };

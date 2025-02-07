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
type ISliderChange = {
  onChange?: (value: number) => void;
};
/*
 * Тип пропсов slider
 * */
type ISliderProps = Omit<React.HTMLAttributes<HTMLDivElement>, "onChange"> &
  ISliderGradient &
  ISliderInitialValue &
  ISliderCircleColor &
  ISliderChange;

/*
 * Тип компонента slider
 * */
type ISliderComponent = React.ForwardRefExoticComponent<
  React.PropsWithoutRef<ISliderProps> & React.RefAttributes<HTMLDivElement>
>;

export type { ISliderProps, ISliderComponent };

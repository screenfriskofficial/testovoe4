import React from "react";

type ISliderSectionValue = {
  value: number;
};

type ISliderSectionOnChange = {
  handleChange: (value: number) => void;
};

type ISliderSectionProps = ISliderSectionValue & ISliderSectionOnChange;

type ISliderSectionComponent = React.FC<ISliderSectionProps>;

export type { ISliderSectionProps, ISliderSectionComponent };

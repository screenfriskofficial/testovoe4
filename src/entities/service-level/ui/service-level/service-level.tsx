import { Surface, Typography } from "../../../../shared";
import React from "react";
import { QuestionMark } from "../../../promotion-activity/model/icons/QuestionMark.tsx";
import { SliderSection } from "../slider-section";
import { Subtitle } from "../subtitle";
import { Description } from "../description";

const ServiceLevel = React.memo(() => {
  const [value, setValue] = React.useState(100);
  const handleChange = React.useCallback((val: number): void => {
    setValue(Math.round(val));
  }, []);
  return (
    <Surface
      style={{
        width: 430,
        height: 276,
        display: "flex",
        gap: 16,
        flexDirection: "column",
        position: "relative",
      }}
    >
      <div className="absolute right-4 top-4 cursor-pointer">
        <QuestionMark />
      </div>
      <Typography>Уровень сервиса</Typography>
      <Subtitle value={value} />
      <SliderSection value={value} handleChange={handleChange} />
      <Description />
    </Surface>
  );
});

export { ServiceLevel };

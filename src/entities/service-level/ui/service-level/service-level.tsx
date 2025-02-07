import { Surface, Typography } from "../../../../shared";
import { Slider } from "../../../../shared/ui";
import React from "react";
import { QuestionMark } from "../../../promotion-activity/model/icons/QuestionMark.tsx";

const ServiceLevel = () => {
  const [value, setValue] = React.useState(100);
  const handleChange = (val: number): void => {
    setValue(Math.round(val));
  };
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
      <Typography>
        {value}% <span className="text-[12px] text-[#636570]">За 30 дней</span>
      </Typography>
      <section className="flex gap-2">
        <div
          className={"relative w-[120px] h-[16px] rounded-[8px] bg-[#DCDDE5]"}
        />
        <Slider
          gradient={"linear-gradient(to right, #BFBF00, #7DBF00)"}
          circleColor={"#74B200"}
          onChange={handleChange}
          initialValue={value}
        />
      </section>
      <section>
        <h5 className="font-semibold">У вас высокий уровень</h5>
        <div className="text-[13px] text-[#636570]">
          Спасибо, что следуете правилам, — за это положены преимущества
        </div>
      </section>
    </Surface>
  );
};

export { ServiceLevel };

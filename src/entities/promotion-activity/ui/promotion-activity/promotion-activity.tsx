import { Surface, Typography } from "../../../../shared";
import { Slider } from "../../../../shared/ui";
import React from "react";
import { QuestionMark } from "../../model/icons/QuestionMark.tsx";

const PromotionActivity = () => {
  const [value, setValue] = React.useState(20);

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
      <Typography>Активность продвижения</Typography>
      <Typography>
        {Math.round(value / 10)}&nbsp;
        <span className="text-[#898B94]">/ 10</span>&nbsp;
        <span className="text-[12px] text-[#636570]">За 7 дней</span>
      </Typography>
      <section className="flex gap-2">
        <Slider
          gradient={"linear-gradient(to right, #F33939, #F39039)"}
          circleColor={"#F33939"}
          onChange={handleChange}
          initialValue={value}
        />
        <div
          className={"relative w-[104px] h-[16px] rounded-[8px] bg-[#DCDDE5]"}
        />
        <div
          className={"relative w-[72px] h-[16px] rounded-[8px] bg-[#DCDDE5]"}
        />
      </section>
      <section>
        <h5 className="font-semibold">Продвиньте обьявления</h5>
        <div className="text-[13px] text-[#636570]">
          Конкуренты активнее, чем вы
        </div>
      </section>
    </Surface>
  );
};

export { PromotionActivity };

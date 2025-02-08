import { Typography } from "../../../../shared";

const Subtitle = ({ value }: { value: number }) => {
  return (
    <Typography>
      {Math.round(value / 10)}&nbsp;
      <span className="text-[#898B94]">/ 10</span>&nbsp;
      <span className="text-[12px] text-[#636570]">За 7 дней</span>
    </Typography>
  );
};

export { Subtitle };

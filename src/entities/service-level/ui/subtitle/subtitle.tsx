import { Typography } from "../../../../shared";

const Subtitle = ({ value }: { value: number }) => {
  return (
    <Typography>
      {value}% <span className="text-[12px] text-[#636570]">За 30 дней</span>
    </Typography>
  );
};

export { Subtitle };

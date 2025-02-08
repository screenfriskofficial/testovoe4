import { Slider } from "../../../../shared/ui";
import {
  ISliderSectionComponent,
  ISliderSectionProps,
} from "../../model/types/interfaces.ts";

const SliderSection: ISliderSectionComponent = (props: ISliderSectionProps) => {
  const { value, handleChange } = props;
  return (
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
  );
};

export { SliderSection };

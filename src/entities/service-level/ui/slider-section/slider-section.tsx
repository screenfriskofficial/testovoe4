import { Slider } from "../../../../shared/ui";
import {
  ISliderSectionComponent,
  ISliderSectionProps,
} from "../../model/types/interfaces.ts";

const SliderSection: ISliderSectionComponent = (props: ISliderSectionProps) => {
  const { value, handleChange } = props;
  return (
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
  );
};

export { SliderSection };

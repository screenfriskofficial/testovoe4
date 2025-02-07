import { Badges } from "../badges";
import { Surface } from "../../../../shared";
import { Title } from "../title";
import { Columns } from "../columns";

const Statistic = () => {
  return (
    <Surface className={"w-[870px] flex flex-col gap-6"}>
      <Title />
      <Badges />
      <Columns />
    </Surface>
  );
};

export { Statistic };

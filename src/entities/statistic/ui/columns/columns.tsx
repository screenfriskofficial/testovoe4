import { colData } from "../../model/api/statisticsMock.ts";
import { Column } from "../../../../shared";

const Columns = () => {
  return (
    <section className={"flex gap-[25px]"}>
      {colData.map((col) => (
        <Column fill={col.fill} key={col.id} date={col.date} />
      ))}
    </section>
  );
};

export { Columns };

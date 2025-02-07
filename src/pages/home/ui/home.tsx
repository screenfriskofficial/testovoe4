import React from "react";
import { Typography } from "../../../shared";
import {
  Announcements,
  OrderIncome,
  PromotionActivity,
  ServiceLevel,
  Statistic,
} from "../../../entities";

const Home = () => {
  return (
    <article className="flex flex-col gap-4">
      <Typography className="text-[32px] leading-[44.8]px mb-6">
        Сводка
      </Typography>
      <Statistic />
      <section className="grid grid-cols-2 grid-rows-2 gap-4">
        <OrderIncome />
        <Announcements />
        <ServiceLevel />
        <PromotionActivity />
      </section>
    </article>
  );
};

const HomePage = React.memo(Home);

export { HomePage };

import React from "react";
import { Typography } from "../../../shared";
import { Statistic } from "../../../entities";

const Home = () => {
  return (
    <article>
      <Typography className="text-[32px] leading-[44.8]px mb-6">
        Сводка
      </Typography>
      <Statistic />
    </article>
  );
};

const HomePage = React.memo(Home);

export { HomePage };

import { Badge, Typography } from "../../../../shared";
import clsx from "clsx";
import { badges } from "../../model/api/statisticsMock.ts";
import { ArrowDown } from "../../model/icons/arrow-down.tsx";
import { ArrowUp } from "../../model/icons/arrow-up.tsx";

const Badges = () => {
  return (
    <section className="flex gap-2">
      {badges.map((badge) => (
        <Badge key={badge.id} style={{ width: 197, height: 87 }}>
          <section className="flex flex-col justify-between">
            <h4 className="text-[#636570] font-normal !text-[12px] leading-[16.8px]">
              {badge.title}
            </h4>
            <section className="flex gap-2">
              <Typography className="relative top-1">{badge.count}</Typography>
              {badge.conversion && (
                <span
                  className={clsx(
                    badge.isNegative && "!text-[#F33939]",
                    "text-[#74B200] text-[12px] mt-auto flex items-center gap-1",
                  )}
                >
                  {badge.isNegative ? <ArrowDown /> : <ArrowUp />}
                  {badge.conversion}%
                </span>
              )}
            </section>
          </section>
        </Badge>
      ))}
    </section>
  );
};

export { Badges };

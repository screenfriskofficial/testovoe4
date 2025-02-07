import React, { useState } from "react";
import { IBadgeComponent, IBadgeProps } from "./interfaces";
import clsx from "clsx";

/*
 * Компонент Badge
 */
const BadgeComponent: IBadgeComponent = React.forwardRef<
  HTMLDivElement,
  IBadgeProps
>((props, ref) => {
  const { children, className, onClick, ...rest } = props;
  const [active, setActive] = useState(false);

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    setActive((prevActive) => !prevActive);
    if (onClick) {
      onClick(e);
    }
  };

  return (
    <section
      onClick={handleClick}
      className={clsx(
        className,
        "bg-[#F6F5FA] p-4 rounded-[8px] border hover:border-[#DCDDE5] cursor-pointer",
        {
          "!border-[#74B200] bg-white": active,
          "border-transparent": !active,
        },
      )}
      ref={ref}
      {...rest}
    >
      {children}
    </section>
  );
});

const Badge = React.memo(BadgeComponent) as IBadgeComponent;

export { Badge };

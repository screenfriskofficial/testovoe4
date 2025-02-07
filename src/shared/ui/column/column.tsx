import React from "react";
import { IColumnComponent, IColumnProps } from "./interfaces";
import clsx from "clsx";

/*
 * Компонент Column
 * */
const ColumnComponent: IColumnComponent = React.forwardRef<
  HTMLDivElement,
  IColumnProps
>((props, ref) => {
  const { className, fill = 0, ...rest } = props;

  return (
    <div
      ref={ref}
      {...rest}
      className={clsx(
        className,
        "relative group w-[95px] h-[240px] bg-[#F6F5FA] rounded-[8px] cursor-pointer",
      )}
    >
      <div
        style={{ height: `${fill}%` }}
        className="absolute bottom-0 left-0 w-full bg-[#8FBA3E] rounded-[8px]"
      ></div>

      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <span className="text-[12px] font-light opacity-90 bg-black p-2 rounded-[8px] text-white">
          {fill}%
        </span>
      </div>
    </div>
  );
});

const Column = React.memo(ColumnComponent) as IColumnComponent;

export { Column };

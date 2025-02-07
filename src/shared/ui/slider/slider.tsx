import React, { MouseEvent as ReactMouseEvent } from "react";
import { ISliderComponent, ISliderProps } from "./interfaces.ts";
import clsx from "clsx";

const SliderComponent: ISliderComponent = React.forwardRef<
  HTMLDivElement,
  ISliderProps
>((props, ref) => {
  const {
    className,
    gradient,
    circleColor,
    initialValue = 0,
    onChange, // тип: (value: number) => void
    ...rest
  } = props;

  const handleSize = 20; // 28px + 2*6px
  const handleRadius = handleSize / 2; // 20px

  const sliderRef = React.useRef<HTMLDivElement>(null);
  const [value, setValue] = React.useState<number>(initialValue);
  const [dragging, setDragging] = React.useState<boolean>(false);
  const [sliderWidth, setSliderWidth] = React.useState<number>(0);

  React.useLayoutEffect(() => {
    const updateWidth = () => {
      if (sliderRef.current) {
        setSliderWidth(sliderRef.current.getBoundingClientRect().width);
      }
    };

    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  const handleMouseMove = React.useCallback(
    (event: MouseEvent) => {
      if (!sliderRef.current) return;
      const rect = sliderRef.current.getBoundingClientRect();
      let newValue =
        ((event.clientX - rect.left - handleRadius) /
          (rect.width - handleSize)) *
        100;
      newValue = Math.max(0, Math.min(newValue, 100));
      setValue(newValue);
      if (onChange) {
        onChange(newValue);
      }
    },
    [onChange, handleRadius, handleSize],
  );

  const handleMouseUp = React.useCallback(() => {
    setDragging(false);
  }, []);

  React.useEffect(() => {
    if (dragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
    } else {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    }
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [dragging, handleMouseMove, handleMouseUp]);

  const handleMouseDown = React.useCallback(
    (event: ReactMouseEvent<HTMLDivElement>) => {
      event.preventDefault();
      setDragging(true);
    },
    [],
  );

  const setRefs = (node: HTMLDivElement | null) => {
    sliderRef.current = node;
    if (!ref) return;
    if (typeof ref === "function") {
      ref(node);
    } else {
      (ref as React.MutableRefObject<HTMLDivElement | null>).current = node;
    }
  };

  const backgroundGradient =
    gradient || "linear-gradient(to right, #f00, #00f)";

  const handleLeftStyle =
    sliderWidth > 0
      ? ((sliderWidth - handleSize) * (value / 100) + handleRadius).toFixed(2) +
        "px"
      : `${value}%`;

  return (
    <div
      ref={setRefs}
      {...rest}
      className={clsx("relative w-full h-[16px] rounded-[8px]", className)}
      style={{ background: backgroundGradient }}
    >
      <div
        className="absolute top-1/2 cursor-pointer"
        onMouseDown={handleMouseDown}
        style={{
          left: handleLeftStyle,
          width: "28px",
          height: "28px",
          backgroundColor: "#fff",
          border: `6px solid ${circleColor ?? "#ccc"}`,
          borderRadius: "50%",
          boxShadow: "0 0 4px rgba(0, 0, 0, 0.2)",
          transform: "translate(-50%, -50%)",
        }}
      />
    </div>
  );
});

const Slider = React.memo(SliderComponent) as ISliderComponent;

export { Slider };

import { IFooterProps } from "../model/types/interfaces.ts";

const Footer = (props: IFooterProps) => {
  const { style } = props;
  return (
    <div>
      <img style={style} src={"./footer.png"} alt={"footer image"} />
    </div>
  );
};

export { Footer };

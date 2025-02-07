import { IHeaderProps } from "../model/types/interfaces.ts";

const Header = (props: IHeaderProps) => {
  const { style } = props;
  return (
    <div>
      <img style={style} src={"./header.png"} alt={"header image"} />
    </div>
  );
};

export { Header };

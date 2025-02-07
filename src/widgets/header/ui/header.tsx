import { IHeaderProps } from "../model/types/interfaces.ts";

const Header = (props: IHeaderProps) => {
  const { style } = props;
  return <img style={style} src={"./header.png"} alt={"header image"} />;
};

export { Header };

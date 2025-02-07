import { ISidebarProps } from "../model/types/interfaces.ts";

const Sidebar = (props: ISidebarProps) => {
  const { style } = props;
  return <img style={style} src={"./sidebar.png"} alt="sidebar image" />;
};

export { Sidebar };

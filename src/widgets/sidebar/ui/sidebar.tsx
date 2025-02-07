import { ISidebarProps } from "../model/types/interfaces.ts";

const Sidebar = (props: ISidebarProps) => {
  const { style } = props;
  return (
    <div>
      <img style={style} src={"./sidebar.png"} alt="sidebar image" />
    </div>
  );
};

export { Sidebar };

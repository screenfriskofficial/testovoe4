import { Outlet } from "react-router-dom";
import React from "react";
import { Footer, Header, Sidebar } from "../../../../widgets";

const Main = () => {
  return (
    <article>
      <Header style={{ width: 1600, height: 89 }} />

      <section className="flex">
        <Sidebar style={{ width: 300, height: 600 }} />
        <Outlet />
      </section>

      <Footer style={{ width: 1600, height: 153 }} />
    </article>
  );
};

const MainLayout = React.memo(Main);

export { MainLayout };

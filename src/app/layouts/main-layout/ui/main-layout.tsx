import { Outlet } from "react-router-dom";
import React from "react";
import { Footer, Header, Sidebar } from "../../../../widgets";

const Main = () => {
  return (
    <article className="w-screen h-screen flex flex-col items-center bg-[#F6F5FA]">
      <section className={"w-[1600px] flex flex-col items-center"}>
        <Header
          style={{
            width: 1600,
            height: 89,
            marginBottom: 40,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        />

        <section className="flex gap-6">
          <Sidebar style={{ width: 300, height: 600 }} />
          <Outlet />
        </section>

        <Footer style={{ width: 1600, height: 153, marginTop: 23 }} />
      </section>
    </article>
  );
};

const MainLayout = React.memo(Main);

export { MainLayout };

import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../component/Footer";
import Header2 from "../component/Header2";

type Props = {};

const Layout = (props: Props) => {
  return (
    <div>
      <div>
        <Header2 />
      </div>
      <main>
        <Outlet />
      </main>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;

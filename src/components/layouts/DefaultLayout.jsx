import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router";

const DefaultLayout = () => {
  return (
    <div>
      {/* navbar */}
      <Header />
      {/* body of the page */}
      <main className="main">
        <Outlet />
      </main>
      {/* footer */}
      <Footer />
    </div>
  );
};

export default DefaultLayout;

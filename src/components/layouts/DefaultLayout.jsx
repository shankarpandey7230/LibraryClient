import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router";

const DefaultLayout = () => {
  return (
    <div className="flex-grow-1 w-100">
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

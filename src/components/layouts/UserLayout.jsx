import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router";
import { Container, Row, Col } from "react-bootstrap";
import Sidebar from "./Sidebar";
import AuthRoute from "../auth/AuthRoute";

const UserLayout = () => {
  return (
    <AuthRoute>
      {/* navbar */}
      <Header />
      {/* body of the page */}

      <div className="d-flex">
        <div className="bg-secondary text-white p-3" style={{ width: "200px" }}>
          <div className="p-3">
            <div className="">Welcome Back</div>
            <h4>Shankar</h4>
          </div>
          <hr />
          <Sidebar />
        </div>

        <main className="main">
          <Outlet />
        </main>
      </div>

      {/* footer */}
      <Footer />
    </AuthRoute>
  );
};

export default UserLayout;

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
      <Container fluid>
        <Row>
          <Col md={3} xl={2} className="bg-secondary text-white">
            <div className="p-3">
              <div className="">Welcome Back</div>
              <h4>Shankar</h4>
            </div>
            <hr />
            <Sidebar />
          </Col>
          <Col md={9} xl={10}>
            <main className="main">
              <Outlet />
            </main>
          </Col>
        </Row>
      </Container>

      {/* footer */}
      <Footer />
    </AuthRoute>
  );
};

export default UserLayout;

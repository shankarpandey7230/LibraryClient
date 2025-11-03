import CustomCarousel from "@components/customCarousel/CustomCarousel";
import BestRead from "@components/pageSection/BestRead";
import JustInSection from "@components/pageSection/JustInSection";
import Recommendation from "@components/pageSection/Recommendation";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const HomePage = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="w-100">
        <CustomCarousel className="p-2" />
      </div>

      <Container className="mb-4">
        <Row>
          <Col>
            {/* Just Read */}

            <JustInSection />
            <BestRead />
            <Recommendation />
            {/* Best Read  */}
            {/* Recommendation section */}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default HomePage;

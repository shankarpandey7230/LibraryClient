import React from "react";
import { Carousel } from "react-bootstrap";
import lib1 from "../../assets/img/lib1.jpg";
import lib2 from "../../assets/img/lib2.jpg";
import lib3 from "../../assets/img/lib3.jpg";

const CustomCarousel = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img src={lib1} alt="first slide" className="d-block w-100" />

        <Carousel.Caption className="carousel-caption-bg rounded p-2">
          <h3>Explore Shankar's Library</h3>
          <hr />
          <p>Please find your choice of Books and be knowledgeable</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={lib2} alt="second slide" />
        <Carousel.Caption className="carousel-caption-bg rounded p-2">
          <h3>Book for Knowledge</h3>
          <p>The more you read in depth the more you have to practice</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={lib3} alt="third slide" />
        <Carousel.Caption className="carousel-caption-bg rounded p-2">
          <h3>Knowledge to Gain</h3>
          <p>Gain more Knowledge with Books and apply in practical</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default CustomCarousel;

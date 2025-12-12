import React from 'react';
import { Container, Row, Col, Button } from "react-bootstrap";
import Slider from "react-slick";
// import Banner from './Banner';
import portfolio1 from "../assets/img.jpg/Ellipse 1.png";
import portfolio2 from "../assets/img.jpg/image (1).png";


function Porfolio2() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // number of visible slides
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    responsive: [
      {
        breakpoint: 992, // tablet
        settings: { slidesToShow: 2 }
      },
      {
        breakpoint: 576, // mobile
        settings: { slidesToShow: 1 }
      },
       {
        breakpoint: 480, // mobile
        settings: { slidesToShow: 1 }
      }
    ]
  };

  const developers = [
    { img: {portfolio2}, name: "Martin Danelio", role: "Founder" },
    { img: {portfolio1}, name: "Anna Robert", role: "Co-Founder" },
    { img: {portfolio2}, name: "James Smith", role: "Designer" },
    { img: {portfolio1}, name: "Sophia Lee", role: "Developer" }
  ];

  return (
    <>
    <section className="sec-6">
      <Container>
        <Row className="align-items-center mb-4">
          <Col lg={8} md={6}>
            <div className="sec-6-heading">
              <h4>Meet our developers</h4>
            </div>
          </Col>
          <Col lg={4} md={6} className= "portfolio-button">
            <Button>See All</Button>
          </Col>
        </Row>

        {/* Slider here */}
        <Slider {...settings}>
          {developers.map((dev, i) => (
            <div key={i} className="first-image">
              <img src={dev.img} alt={dev.name} />
              <div className="image-containt">
                <h5>{dev.name}</h5>
                <p>{dev.role}</p>
              </div>
            </div>
          ))}
        </Slider>
      </Container>
    </section>
    </>
  );
}

export default Porfolio2;
        












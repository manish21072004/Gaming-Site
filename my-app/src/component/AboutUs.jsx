import { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import { Col, Row } from "react-bootstrap";
// import { useState}  from "react";
import Nav from "react-bootstrap/Nav";
// import Player from "./Reactplayer";


function Counter({ target, duration, suffix = "" }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = parseInt(target, 10);
    if (start === end) return;

    let incrementTime = Math.floor(duration / end);

    let timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) clearInterval(timer);
    }, incrementTime);

    return () => clearInterval(timer);
  }, [target, duration]);

  return (
    <h2>
      {count}
      {suffix}
    </h2>
  );
}

function AboutUs() {
   const [play, setPlay] = useState(false);
  return (
    <>
      
    <section className="back">
    <Container >
    <Row>
      <Col lg={6} md={12}>
    <div className="heading">
    <h2>
    Parchis Club Wants New Members
    </h2>
    <p>It is very important for the customer to be aware of the fact that the customer needs to be able to
    decorate the product in the two elements</p>
    <div>
      <div className="back-count">
        <div className="inner-back">
      <Row >
        <Col className="right" ><Counter target={4} duration={2000} /> 
        <p>Leagues</p></Col>
        <Col className="right"><Counter target={320} duration={2000} suffix=" H" /> 
        <p>Total Streams</p></Col>
        <Col className="right" ><Counter target={64} duration={2000} suffix=" k" /> 
        <p>Awarded</p></Col>
      </Row>
      </div>
      </div>
    </div>
    </div>
    </Col>
    <Col lg={6} md={12}>
    <div className="image">
      {/* <Player/> */}

       <div className="give-position">
      {play ? (
        // Show YouTube iframe when clicked
        <iframe
          width="100%"
          height="315"
          src="https://www.youtube.com/watch?v=bKpcAOVyX3g"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      ) : (
        // Show thumbnail with play button
        <>
          <img
            src="src\assets\img.jpg\c7521301654a3b9cdae0af938a0622bf9597b6a9.png"
            alt="Thumbnail"
            className="w-100"
          />
              <Nav.Link onClick={() => setPlay(true)}>
            <i className="fa-regular fa-circle-play icon-tag"></i>
          </Nav.Link>
        </>
      )}
    </div>


      <p>Introducing Aquatik Esports | Now Recruiting</p>
      <Row >
        <Col lg={6}  md={12}>
          <h5 style={{color:"white", fontSize:"15px"}}> <img style={{width:"20px"}} src="src\assets\img.jpg\bx_bxs-check-circle.png" alt="" /> Lorem Ipsum is simply</h5>
        </Col>
        <Col lg={6}  md={12}>
            <h5 style={{color:"white", fontSize:"15px"}}> <img style={{width:"20px"}} src="src\assets\img.jpg\bx_bxs-check-circle.png" alt="" /> Lorem Ipsum is simply</h5>
        </Col>
      </Row>
      </div>
    </Col>  
    </Row>      
    </Container>
    </section>
    
    </>
  );
}

export default AboutUs;

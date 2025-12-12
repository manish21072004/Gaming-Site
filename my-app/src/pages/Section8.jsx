import React from 'react'


import Container from 'react-bootstrap/Container';
import { Row, Col,  } from "react-bootstrap";
import starImg from "../assets/img.jpg/Star 1.png";
import mainImg from "../assets/img.jpg/09411e233057c58b7faa7392398dac73ba4cab2b.jpg";




function Section8() {
    return (
        <>
            <section className='sec-8'>
                <Container>
                    <div className='sec-8-main'>
                        <Row>
                            <Col md={6}>
                                <div className='sec-8-heading'>
                                    <h4>
                                        The Intelligent Revolution: AI Shaping Our Future
                                    </h4>
                                </div>
                                <div className='sec-8-bot'>
                                    <p>
                                        The website's user-friendly interface makes it easy to navigate and access
                                        a wide range of content, including cutting-edge AI solutions, informative case studies,
                                        and expert insights. Networking opportunities and funding resources
                                    </p>
                                    <Row className='star'>
                                        <Col>
                                            <h6>James Smiths</h6>
                                            <span>Client</span>
                                        </Col>
                                        <Col>
                                            <div className='rating'>
                                                <img  className= "star-blue" src= {starImg } alt="star" />
                                                 <img className= "star-blue" src= {starImg } alt="star" />
                                                 <img className= "star-blue" src= {starImg } alt="star" />
                                                 <img className= "star-blue" src= {starImg } alt="star" />
                                                 <img className= "star-blue" src= {starImg } alt="star" />
                                                 <img className= "star-blue" src= {starImg } alt="star" />
                                                 <img className= "star-blue" src= {starImg } alt="star" />
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                            </Col>
                            <Col md={6}>
                                <div className='sec-8-image'>
                                    <img src={mainImg} alt="main" />
                                </div>
                            </Col>
                        </Row>
                    </div>
                    

                   
                    
                </Container>
                
            </section>
        </>
    )
}

export default Section8;

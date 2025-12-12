import React from 'react'
import {Row, Col} from "react-bootstrap"
import Container from "react-bootstrap/esm/Container";
import frameImg from "../assets/img.jpg/Frame 1320 (1).png";
import lineImg from "../assets/images/Line 1.png";


function Scroll() {
  return (
    <div className="fourth-sec">
    <Container>
        <Row>
            <Col lg={6} md={12} >
             <div className="fourth-main">
                <div className="box-image">
                <img src={frameImg} alt="" />
                </div>
                <div className="line-image">
                    <img src={lineImg} alt="" />
                    <div className="game-content">
                        <h2>Game Development</h2>
                        <p>Our works have been internationally recognized for their design, stories and art direction. Together, we can transform your ideas into captivating games, on desktop, mobile or console.</p>
                        <a href="learn more">Learn more</a>
                    </div>
                </div>
             </div>

              <div className="fourth-main">
                <div className="box-image">
                <img src={frameImg} alt="" />
                </div>
                <div className="line-image">
                    <img src={lineImg} alt="" />
                    <div className="game-content">
                        <h2>Game Development</h2>
                        <p>We have long experience in creating educational and serious games with a wide range of topics, from history to ecology.</p>
                        <a href="learn more">Learn more</a>
                    </div>
                </div>
             </div>

              <div className="fourth-main">
                <div className="box-image">
                <img src={frameImg} alt="" />
                </div>
                <div className="line-image">
                    <img src={lineImg} alt="" />
                    <div className="game-content">
                        <h2>Game Development</h2>
                        <p>Our works have been internationally recognized for their design, stories and art direction. Together, we can transform your ideas into captivating games, on desktop, mobile or console.</p>
                        <a href="learn more">Learn more</a>
                    </div>
                </div>
             </div>

              <div className="fourth-main">
                <div className="box-image">
                <img src={frameImg} alt="" />
                </div>
                <div className="line-image">
                    <img src={lineImg} alt="" />
                    <div className="game-content">
                        <h2>Game Development</h2>
                        <p>Our works have been internationally recognized for their design, stories and art direction. Together, we can transform your ideas into captivating games, on desktop, mobile or console.</p>
                        <a href="learn more">Learn more</a>
                    </div>
                </div>
             </div>
            </Col>
            <Col  lg={6} md={12}>
            <div className="fourth-right">
                <h2>Key Features</h2>
                <p>We are ready to deliver your vision across multiple platforms, mobile, or desktop. Games are the language of the 21st century and we can help you harness their unique power.
Games are a language of storytelling. We’re looking for games that develop and expand this language.</p>
                
                <button className="learn-btn">Read more</button>
            </div>

            </Col>
        </Row>
    </Container>
    
</div>
  )
}

export default Scroll

import Button from 'react-bootstrap/Button';   // ✅ correct import
import Container from 'react-bootstrap/Container';
import { Col, Row } from "react-bootstrap";
import rect23 from "../assets/img.jpg/Rectangle 23.png";
import rect24 from "../assets/img.jpg/Rectangle 24.png";
import rect25 from "../assets/img.jpg/Rectangle 25.png";
import rect26 from "../assets/img.jpg/Rectangle 26.png";
import fireIcon from "../assets/img.jpg/fire 1.png";


function Section3() {
  return (
   <>
   <section className='sec-3 d-flex justify-content-between'>
    <Container>
        <Row>
            <Col lg={8} md={6}>
            <div className='top-right'>
                <h2>Currently Trending Games</h2>
            </div>
            </Col>
             <Col lg={4} md={6}>
             <div className='btn d-flex justify-content-end'>
             <Button variant="primary">Primary</Button>
             </div>
            </Col>
        </Row>
        <Row>
            <Col lg={3} md={12}>
             <div className='sec-3-image'>
                <img className='please-blur' src={rect23} alt="" />
                <div className='section-3-hov'>
                  <h2>40 K</h2><span>Awarded</span>
              
                </div>
             <div className='sec-3-image-bottom'>
               <span><img style={{width:"15px"}} src={fireIcon} alt="" />40 Followers</span>
             </div>
             </div>
            </Col>

            <Col lg={3} md={12}>
             <div className='sec-3-image'>
                <img className='please-blur' src={rect24} alt="" />
                <div className='section-3-hov'>
                  <h2>40 K</h2><span>Awarded</span>
              
                </div>
             <div className='sec-3-image-bottom'>
               <span><img className='please-blur' style={{width:"15px"}}src={fireIcon} alt="" />40 Followers</span>
             </div>
             </div>
            </Col>

            <Col lg={3} md={12}>
             <div className='sec-3-image'>
                <img className='please-blur' src={rect25} alt="" />
                <div className='section-3-hov'>
                  <h2>40 K</h2><span>Awarded</span>
              
                </div>
             <div className='sec-3-image-bottom'>
               <span><img style={{width:"15px"}}src={fireIcon} alt="" />40 Followers</span>
             </div>
             </div>
            </Col>

            <Col lg={3} md={12}>
             <div className='sec-3-image'>
                <img className='please-blur' src={rect26} alt="" />
                <div className='section-3-hov'>
                  <h2>40 K</h2><span>Awarded</span>
              
                </div>
             <div className='sec-3-image-bottom'>
               <span><img style={{width:"15px"}} src={fireIcon} alt="" />40 Followers</span>
             </div>
             </div>
            </Col>

             
        </Row>
    </Container>
   </section>
   </>
  );
}

export default Section3;
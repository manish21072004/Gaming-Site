import Button from 'react-bootstrap/Button';   // ✅ correct import
import Container from 'react-bootstrap/Container';
import { Col, Row } from "react-bootstrap";

function Section3() {
  return (
   <>
   <section className='sec-3 d-flex justify-content-between'>
    <Container>
        <Row>
            <Col md={8}>
            <div className='top-right'>
                <h2>Currently Trending Games</h2>
            </div>
            </Col>
             <Col md={4}>
             <div className='btn d-flex justify-content-end'>
             <Button variant="primary">Primary</Button>
             </div>
            </Col>
        </Row>
        <Row>
            <Col md={3}>
             <div className='sec-3-image'>
                <img className='please-blur' src="src\assets\img.jpg\Rectangle 23.png" alt="" />
                <div className='section-3-hov'>
                  <h2>40 K</h2><span>Awarded</span>
              
                </div>
             <div className='sec-3-image-bottom'>
               <span><img style={{width:"15px"}} src="src\assets\img.jpg\fire 1.png" alt="" />40 Followers</span>
             </div>
             </div>
            </Col>

            <Col md={3}>
             <div className='sec-3-image'>
                <img className='please-blur' src="src\assets\img.jpg\Rectangle 24.png" alt="" />
                <div className='section-3-hov'>
                  <h2>40 K</h2><span>Awarded</span>
              
                </div>
             <div className='sec-3-image-bottom'>
               <span><img className='please-blur' style={{width:"15px"}}src="src\assets\img.jpg\fire 1.png" alt="" />40 Followers</span>
             </div>
             </div>
            </Col>

            <Col md={3}>
             <div className='sec-3-image'>
                <img className='please-blur' src="src\assets\img.jpg\Rectangle 25.png" alt="" />
                <div className='section-3-hov'>
                  <h2>40 K</h2><span>Awarded</span>
              
                </div>
             <div className='sec-3-image-bottom'>
               <span><img style={{width:"15px"}}src="src\assets\img.jpg\fire 1.png" alt="" />40 Followers</span>
             </div>
             </div>
            </Col>

            <Col md={3}>
             <div className='sec-3-image'>
                <img className='please-blur' src="src\assets\img.jpg\Rectangle 26.png" alt="" />
                <div className='section-3-hov'>
                  <h2>40 K</h2><span>Awarded</span>
              
                </div>
             <div className='sec-3-image-bottom'>
               <span><img style={{width:"15px"}} src="src\assets\img.jpg\fire 1.png" alt="" />40 Followers</span>
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
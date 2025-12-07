import { Col, Row, Container } from "react-bootstrap";


function Footer() {
  return (
    <div className="footer-back">
      <div className='footer'>
                                            <Container>
                                          
                                                <Row>
                                                    <Col lg={4} md={12}>
                                                    <div className='footer-heading'>
                                                        <h2>parchis club</h2>
                                                        <p>It is very important for the customer to be aware of the fact
                                                             that the customer needs to be able to decorate
                                                              the product in the two elements</p>
                                                              <h6>Find Us On:</h6>
                                                              <span>
                                                                <img src="src\assets\img.jpg\Item → Link.png" alt="" />
                                                                <img src="src\assets\img.jpg\Item → Link (1).png" alt="" />
                                                                <img src="src\assets\img.jpg\Item → Link (2).png" alt="" />
                                                                <img src="src\assets\img.jpg\Item → Link (3).png" alt="" />
                    
                                                              </span>
                    
                                                    </div>
                                                    </Col>
                                                    <Col lg={4} md={12}>
                                                        <div className='footer-middle'>
                                                          <h2>Quick Links</h2>
                                                          <ul>
                                                            <li>About Us </li>
                                                            <li>Our Services </li>
                                                            <li>Our Portfolio </li>
                                                            <li>Our Team </li>
                                                            <li>Testimonials </li>
                                                          </ul>
                                                        </div>
                                                      
                                                    </Col>
                                                    <Col lg={4} md={12}>
                                                    <div className='footer-left'>
                                                    <h3>Contact Info</h3>
                                                    <p> <img src="src\assets\img.jpg\Container.png" alt="" />1234, ABC Apartments, XYZ Street,
                                                     Near LMN Market, Sector 15,
                                                     Cityname - 110011, State, India.</p>
                                                     <img src="src\assets\img.jpg\Container (1).png" alt="" /><span>+91-9876543210</span>
                                                     </div>
                                                    </Col>
                                                </Row>
                                                </Container>
                                            
                                        </div>
                                        </div>

  )
}

export default Footer
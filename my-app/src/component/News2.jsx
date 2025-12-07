
import {Container} from 'react-bootstrap'
import Nav from 'react-bootstrap/Nav';
import { Col, Row } from "react-bootstrap";
// import Banner from './Banner';


function News() {
  return (
   <>
  
   <section className='sec-7'>
    <Container>
        <div className='sec-7-heading'>
            <h4> Our latest news</h4>
            <p>It is very important for the customer to be aware of the fact that the customer needs to be able to decorate the product in the two elements</p>
        </div>

        <Row>
            <Col md={12} lg={4}>
               <div className='sec-7-image'>
                <img width="100%"  src="src\assets\img.jpg\52b04ecc24d6542bff26811155cfc69511e6d3c6.png" alt="" />
                <div className='sec-7-image-containt'>
                    <h6>MAY 2, 2024  |  ADMIN </h6>
                    <p>A Guide to Latest Style and Techniques</p>
                    <Nav.Link>learn more</Nav.Link>
                </div>
               </div>
            </Col>

            <Col md={12} lg={4}>
               <div className='sec-7-image'>
                <img width="100%"  src="src\assets\img.jpg\1b693ba6b8f24cac4dd28234eb17a5b6c1221011.png" alt="" />
                <div className='sec-7-image-containt'>
                    <h6>MAY 2, 2024  |  ADMIN </h6>
                    <p>A Guide to Latest Style and Techniques</p>
                    <Nav.Link>learn more</Nav.Link>
                </div>
               </div>
            </Col>

            <Col md={12} lg={4}>
               <div className='sec-7-image'>
                <img width="100%" src="src\assets\img.jpg\e7895f7055e46df661aec4f8dd7cc0cd80bf431c.png" alt="" />
                <div className='sec-7-image-containt'>
                    <h6>MAY 2, 2024  |  ADMIN </h6>
                    <p>A Guide to Latest Style and Techniques</p>
                    <Nav.Link>learn more</Nav.Link>
                </div>
               </div>
            </Col>
        </Row>
    </Container>
   </section>
   </>
  )
}

export default News;
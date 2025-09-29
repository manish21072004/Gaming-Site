
import Container from 'react-bootstrap/Container';
import { Col, Row } from "react-bootstrap";
import ReactPlayer from 'react-player'


function Section5() {
    return (
        <>
            <section className='sec-5'>
                <Container className='sec-5-main'>
                    <div className='sec-5-image'>
                        <ReactPlayer src='https://www.youtube.com/watch?v=cLx3tyzht3Y&list=RDcLx3tyzht3Y&start_radio=1'
                            controls
                            width="100%"
                            height="400px"
                            

                        />
                    </div>
                    <Row>
                        <Col>
                            <div className='sec-5-containt'>
                                <p>We are ready to deliver your vision across multiple platforms, mobile, or desktop. Games are the language of the 21st century and we can help you harness their unique power.
                                    Games are a language of storytelling. We’re looking for games that develop and expand this language.</p>
                            </div>
                        </Col>
                        <Col >
                            <div className='sec-5-containt'>
                                <p>We are ready to deliver your vision across multiple platforms, mobile, or desktop. Games are the language of the 21st century and we can help you harness their unique power.
                                    Games are a language of storytelling. We’re looking for games that develop and expand this language.</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Section5;
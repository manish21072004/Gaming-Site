import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';   
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

function Header() {
  // State for controlling modal
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
     
        <Navbar expand="lg">
          <Container className="header">
            <Navbar.Brand href="/" className="logo">
              parchis club
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="nav-name ms-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/About">About Us</Nav.Link>
                <Nav.Link href="/Portfolio">Portfolio</Nav.Link>
                <Nav.Link href="/News">News</Nav.Link>
              </Nav>
              {/* Button that opens modal */}
              <Button
                style={{
                  borderRadius: "30px",
                  fontWeight: "500",
                  fontSize: "13px",
                  width: "110px",
                  margin: "10px",
                }}
                onClick={handleShow}
              >
                Read More
              </Button>
            </Navbar.Collapse>
          </Container>
        </Navbar>
     

      {/* Popup Modal with Form */}
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Contact Form</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter your name" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter your email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formMessage">
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows={3} placeholder="Enter your message" />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Header;

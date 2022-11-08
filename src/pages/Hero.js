import React from "react";
import { Container, Row, Col, Navbar, Nav, Button } from "react-bootstrap";

const Hero = () => {
  return (
    <div className="hero min-vh-100 w-100" id="home">
      <div>
        <Navbar expand="lg">
          <Container className="d-flex justify-content-center align-items-center">
            <Nav className="text-center">
              <Nav.Link href="#home" className="mx-2">
                About
              </Nav.Link>
              <Nav.Link href="#gallery" className="mx-2">
                Gallery
              </Nav.Link>
              <Nav.Link href="#service" className="mx-2">
                Service
              </Nav.Link>
              <Nav.Link href="#faq" className="mx-2">
                Faq
              </Nav.Link>
              <Nav.Link href="register" className="mx-2">
                Profile
              </Nav.Link>
            </Nav>
          </Container>
        </Navbar>
        <Container className="text-center d-flex justify-content-center align-items-center mt-100">
          <Row>
            <Col>
              <div>
                <h1 className="text-white text-center fs-1 animate__animated animate__fadeInUp">
                  THE POPULER WEB GAME IN THE WORLD, EASY TO JOIN AND PLAY GAME
                  FROM YOUR DEVICE, ANYWHERE AND ANYTIME.
                </h1>
              </div>
              <div className="mt-4 text-center animate__animated animate__fadeInUp">
                <Button type="Button" class="btn btn-primary">
                  Play Games
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Hero;

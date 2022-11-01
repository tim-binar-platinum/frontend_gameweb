import React from "react";
import {
  Navbar,
  Container,
  Nav,
  Row,
  Col,
  Button,
  NavDropdown,
} from "react-bootstrap";
const LandingPage = () => {
  return (
    <div>
      <div className="intro">
        <Navbar variant="light">
          <Container className="d-flex justify-content-center align-items-center font-weight-bold">
            <Nav>
              <Nav.Link>About</Nav.Link>
              <NavDropdown title="Game List">
                <NavDropdown.Item href="#action/3.1">
                  Game Suit
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Coming Soon
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Coming Soon
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link>Register</Nav.Link>
              <Nav.Link>Login</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </div>
      <div>
        <Container className="text-white text-center d-flex justify-content-center align-items-center">
          <Row>
            <Col>
              <div className="title">
                THE POPULER GAME WEBSITE IN THE WORLD, EASY TO JOIN AND PLAY
                GAME FROM YOUR DEVICE, ANYWHERE AND ANYTIME.
              </div>
              <div className="mt-4 text-center">
                <Button type="Button" class="btn btn-success">
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

export default LandingPage;

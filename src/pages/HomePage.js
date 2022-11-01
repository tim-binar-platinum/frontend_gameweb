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
const HomePage = () => {
  return (
    <div>
      <div className="intro">
        <Navbar variant="dark">
          <Container className="d-flex justify-content-center align-items-center">
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
              <Nav.Link>Profile</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </div>
      <div>
        <Container className="text-color-red text-center d-flex justify-content-center align-items-center">
          <Row>
            <Col>
              <div className="title">
                THE POPULER GAME WEBSITE IN THE WORLD, EASY TO JOIN AND PLAY
                GAME FROM YOUR DEVICE, ANYWHRE AND ANYTIME
              </div>
              <div className="mt-4 text-center">
                <Button type="button" class="btn btn-success">
                  Play Game
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default HomePage;

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
const Footer = () => {
  return (
    <div className="footer pb-3 pt-4">
      <Container>
        <Row>
          <Col>
            <h3 className="fw-bold text-white">Last of Game</h3>
          </Col>
          <Col className="text-end">
            <i class="fa-brands fa-facebook fs-1 text-white mx-lg-3"></i>
            <i class="fa-brands fa-twitter fs-1 text-white mx-lg-3"></i>
            <i class="fa-brands fa-instagram fs-1 text-white mx-lg-3"></i>
            <i class="fa-brands fa-youtube fs-1 text-white mx-lg-3"></i>
          </Col>
        </Row>
        <Row>
          <Col>
            <p className="text-white-50 text-center">&copy; Copyright by Last of Game.inc</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;

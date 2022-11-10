import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Gallery1 from "../assets/image/suit.jpg";
import Gallery2 from "../assets/image/preorder.jpg";
import Gallery3 from "../assets/image/preorder.jpg";
import Gallery4 from "../assets/image/preorder.jpg";
import Gallery5 from "../assets/image/preorder.jpg";
import Gallery6 from "../assets/image/preorder.jpg";
const Gallery = () => {
  return (
    <div className="gallery min-vh-100 d-flex align-items-center" id="gallery">
      <Container>
        <Row
          className="row-cols-lg-3 row-cols-md-2 row-cols-sm-2 row-cols-1 g-4"
          data-aos="fade-right"
        >
          <Col>
            <Link to="/game-suit">
              <img src={Gallery1} alt="unsplah.com" className="w-100" />
              <p className="text-center fw-bold">Rock Paper Scisor</p>
            </Link>
          </Col>
          <Col>
            <img src={Gallery2} alt="unsplah.com" className="w-100" />
            <p className="text-center fw-bold">Coming Soon</p>
          </Col>
          <Col>
            <img src={Gallery4} alt="unsplah.com" className="w-100" />
            <p className="text-center fw-bold">Coming Soon</p>
          </Col>
          <Col>
            <img src={Gallery5} alt="unsplah.com" className="w-100" />
            <p className="text-center fw-bold">Coming Soon</p>
          </Col>
          <Col>
            <img src={Gallery6} alt="unsplah.com" className="w-100" />
            <p className="text-center fw-bold">Coming Soon</p>
          </Col>
          <Col>
            <img src={Gallery3} alt="unsplah.com" className="w-100" />
            <p className="text-center fw-bold">Coming Soon</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Gallery;

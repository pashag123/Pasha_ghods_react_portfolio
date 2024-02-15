

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import imageTwo from "../../assets/anyYes.jpg";
import nugImage from "../../assets/nug.jpg";
import muiLogo from "../../assets/muiLogo.jpg";
import liberLogo from "../../assets/LiberLogo.jpg"
import "./Body.css";

function Body() {
  return (
    <Container className="d-flex justify-content-center mt-4 flex-wrap">
      <Row className="row-cols-md-3 row-cols-sm-1 row-cols-1">
        <Col>
          <div className="project-box">
            <a href="https://pashag123.github.io/group_5_project/">
              <img src={muiLogo} alt="Project 1" className="project-image" />
              <p className="project-description">Movies Under The Influence</p>
            </a>
          </div>
        </Col>
        <Col>
          <div className="project-box">
            <a href="https://anyyes-3bf9b8d1cf29.herokuapp.com/">
              <img
                src={imageTwo}
                alt="AnyYes Gaming E-Commerce"
                className="project-image"
              />
              <p className="project-description">AnyYes: Gaming E-Commerce</p>
            </a>
          </div>
        </Col>
        <Col>
          <div className="project-box">
            <a href="https://liber-d603fbac9e96.herokuapp.com/">
              <img src={liberLogo} alt="Project 3" className="project-image" />
              <p className="project-description">LIBER: Interactive E-Reader</p>
            </a>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Body;

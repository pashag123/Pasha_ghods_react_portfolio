

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import imageTwo from '../../assets/anyYes.jpg';

function Body() {
  return (
    <Container>
      <Row>
        <Col>
          <div className="box">
            <a href="">
              <img src="" alt="" />
              <p>Project 1 Description</p>
            </a>
          </div>
        </Col>
        <Col>
          <div className="box">
            <a href="https://anyyes-3bf9b8d1cf29.herokuapp.com/">
              <img src={imageTwo} alt="" />
              <p>Project 2 Description</p>
            </a>
          </div>
        </Col>
        <Col>
          <div className="box">
            <a href="">
              <img src="" alt="" />
              <p>AnyYes Gaming E-Commerce</p>
            </a>
          </div>
        </Col>
      </Row>
    
    </Container>
  );
}

export default Body;



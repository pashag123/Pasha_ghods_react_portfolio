

// import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { Container, Row, Col } from 'react-bootstrap';
// import imageTwo from '../../assets/anyYes.jpg';

// function Body() {
//   return (
//     <Container>
//       <Row>
//         <Col>
//           <div className="box">
//             <a href="">
//               <img src="" alt="" />
//               <p>Project 1 Description</p>
//             </a>
//           </div>
//         </Col>
//         <Col>
//           <div className="box">
//             <a href="https://anyyes-3bf9b8d1cf29.herokuapp.com/">
//               <img src={imageTwo} alt="" />
//               <p>AnyYes Gaming E-Commerce</p>
//             </a>
//           </div>
//         </Col>
//         <Col>
//           <div className="box">
//             <a href="">
//               <img src="" alt="" />
//               <p></p>
//             </a>
//           </div>
//         </Col>
//       </Row>
    
//     </Container>
//   );
// }

// export default Body;


import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import imageTwo from '../../assets/anyYes.jpg';
import './Body.css';

function Body() {
  return (
    <Container>
      <Row>
        <Col>
          <div className="project-box">
            <a href="link-to-project-1">
              <img src="path-to-image-1" alt="Project 1" className="project-image" />
              <p className="project-description">Project 1 Description</p>
            </a>
          </div>
        </Col>
        <Col>
          <div className="project-box">
            <a href="https://anyyes-3bf9b8d1cf29.herokuapp.com/">
              <img src={imageTwo} alt="AnyYes Gaming E-Commerce" className="project-image" />
              <p className="project-description">AnyYes Gaming E-Commerce</p>
            </a>
          </div>
        </Col>
        <Col>
          <div className="project-box">
            <a href="link-to-project-3">
              <img src="path-to-image-3" alt="Project 3" className="project-image" />
              <p className="project-description">Project 3 Description</p>
            </a>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Body;

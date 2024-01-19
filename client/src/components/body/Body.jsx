

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
import nugImage from '../../assets/nug.jpg'
import muiLogo from '../../assets/muiLogo.jpg'
import './Body.css';

function Body() {
  return (
    <Container>
      <Row>
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
              <img src={imageTwo} alt="AnyYes Gaming E-Commerce" className="project-image" />
              <p className="project-description">AnyYes Gaming E-Commerce</p>
            </a>
          </div>
        </Col>
        <Col>
          <div className="project-box">
            <a href="link-to-project-3">
              <img src={nugImage} alt="Project 3" className="project-image" />
              <p className="project-description">TO BE DETERMINED...</p>
            </a>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Body;

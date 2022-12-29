import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import imagefeature from "../assets/images/img/img_1.jpg";

const Infohotel= () => {
  return (
    <section className="feature" id="features">
      <Container>
        <Row>
          <Col lg={6}>
            <div className="imageblock">
              <img src={imagefeature} alt="Image" />
             
            </div>
          </Col>
          <Col lg={6}>
      <div className="content-block">             
      <div className="block-title text-left">
      <h2>
        Bienvenue sur nos Hotel
         </h2>
    </div>
    
        <p>
            Duis aute irure dolor in reprehenderit in voluptate <br /> velit
            esse cillum dolore eu fugiat nulla pariatur.
              </p>
              <ul className="lists">
                <li>
                   Refresing to get such a
                  personal touch.
                </li>
                <li>
            Duis aute irure dolor in
                  reprehenderit in voluptate.
                </li>
                <li>
               Velit esse cillum dolore eu
                  fugiat nulla pariatur.
                </li>
              </ul>
              <a href="#" className="featurebtn">
                Learn More
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Infohotel;

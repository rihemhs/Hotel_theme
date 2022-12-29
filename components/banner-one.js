import React from "react";
import { Container, Row, Col } from "react-bootstrap";
const BannerOne = () => {
  return (
    <section className="banner" id="banner">
      <span className="bubble1"></span>
      <span className="bubble2"></span>
      <span className="bubble3"></span>
      <span className="bubble4"></span>
      <span className="bubble5"></span>
      <span className="bubble6"></span>
      <Container>
        <Row>
          <Col xl={6} lg={8}>
            <div className="content-block">
             
              <p>
              Bienvenue sur notre site Web            
              </p>
              <span
              style={{
              color: "orange !important",
              fontWeight:"bolder",
              fontfamily: "Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif"
            }}
              
              > Lorem ipsum dolor sit amet consectetur</span>
              <div className="button-block">
                <a href="contact" className="banner-btn">
                  <i className="fa fa-play"></i>
                 Contact
                </a>
               
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default BannerOne;

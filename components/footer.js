import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import logoImage from "../assets/images/img/logo.png";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <footer className="site-footer">
        <span className="bubble-1"></span>
        <span className="bubble-2"></span>
        <span className="bubble-3"></span>
        <span className="bubble-4"></span>
        <span className="bubble-5"></span>
        <span className="bubble-6"></span>
        <Container>
          <div className="inner-container">
            <Row>
              <Col lg={2} md={6} sm={12}>
                <div className="footer-widget">
                  <a href="index.html">
                    <img src={logoImage} alt=" Image" />
                  </a>
                </div>
              </Col>
              <Col lg={3} md={6} sm={12}>
                <div className="footer-widget">
                  <div className="widget-title">
                    <h3>Address</h3>
                  </div>
                  <ul className="contact-list">
                    <li>+21 52 113 008</li>
                    <li>rihemhassounanjim90@gmail.com </li>
                    <li>
                   Tunis, 7333  <br />103 Rue El maner
                     
                    </li>
                  </ul>
                </div>
              </Col>
              <Col lg={2} md={6} sm={12}>
                <div className="footer-widget">
                  <div className="widget-title">
                    <h3>SERVICES</h3>
                  </div>
                  <ul className="links-list">
                    <li>
                  <Link href="/#service">
                   <a>Offres</a>
                   </Link>
                    </li>
                   
                    <li>
                    <Link href="/#blog">
                   <a>Suites & Rooms</a>
                   </Link>
                   
                    </li>
                  </ul>
                </div>
              </Col>
              <Col lg={2} md={6} sm={12}>
                <div className="footer-widget">
                  <div className="widget-title">
                    <h3>INFO</h3>
                  </div>
                  <ul className="links-list">
                    <li>
                      <a href="/Impressum">IMPRESSUM</a>
                    </li>
                                  
                  </ul>
                </div>
              </Col>
              <Col lg={3} md={6} sm={12}>
                <div className="footer-widget">
                  <div className="widget-title">
                    <h3>Follow</h3>
                  </div>
                  <div className="social-block">
                    <a href="#">
                      <i className="fa fa-twitter"></i>
                    </a>
                    <a href="#">
                      <i className="fa fa-facebook-f"></i>
                    </a>
                    <a href="#">
                      <i className="fa fa-instagram"></i>
                    </a>
                    <a href="#">
                      <i className="fa fa-dribbble"></i>
                    </a>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </footer>

      <div className="bottom-footer text-center">
        <Container>
          <p>
            &copy; copyright 2022 by <a href="#">Rihem Hs.com</a>
          </p>
        </Container>
      </div>
    </>
  );
};
export default Footer;

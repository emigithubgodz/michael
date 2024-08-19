import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { Container, Row, Col } from 'react-bootstrap';
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Contact = () => {
  return (
    <section className="contact-me" id="contact">
      <Container>
        <div className="contact-header">
          <div className="line"></div>
          <h2>Contact Me</h2>
          <div className="line"></div>
        </div>
        <Row className="contact-info-row">
          <Col md={4} className="contact-info">
            <FaPhoneAlt size={30} />
            <p>+63 94 8990 6347</p>
          </Col>
          <Col md={4} className="contact-info">
            <FaEnvelope size={30} />
            <p>balajadia.pro@gmail.com</p>
          </Col>
          <Col md={4} className="contact-info">
            <FaMapMarkerAlt size={30} />
            <p>San Pedro, Laguna</p>
          </Col>
        </Row>
        <div className="social-icon-container">
          <div className="line"></div>
          <div className="social-icon">
            <a
              href="https://www.linkedin.com/in/michael-balajadia-8417322b9/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={navIcon1} alt="LinkedIn" />
            </a>
            <a
              href="https://www.facebook.com/Porogami.18/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={navIcon2} alt="Facebook" />
            </a>
            <a
              href="https://www.instagram.com/mike.airforce1s/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={navIcon3} alt="Instagram" />
            </a>
          </div>
          <div className="line"></div>
        </div>
      </Container>
    </section>
  );
};

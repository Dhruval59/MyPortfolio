import React from "react";
import "../style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";

function footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <div >
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Developed by Dhruval Sharma</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} DS</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/Dhruval59"
                style={{ color: "white" }}
              >
                <i className="fab fa-github"></i>
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://twitter.com/dhruvalsharma59"
                style={{ color: "white" }}
              >
                <i className="fab fa-twitter"></i>
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/dhruval-sharma/"
                style={{ color: "white" }}
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.instagram.com/dhruval_sharma45/"
                style={{ color: "white" }}
              >
                <i className="fab fa-instagram"></i>
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
    </div>
  );
}

export default footer;

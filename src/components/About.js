import React, { useState } from 'react';
import { Container, Row, Col, Modal, Button } from "react-bootstrap";
import "../style.css";
import "bootstrap/dist/css/bootstrap.min.css";

import logo from "../../src/Images/load.gif";
import aws from "../../src/Images/icons/icons8-amazon-web-services.svg"
import jenkins from "../../src/Images/icons/icons8-jenkins.svg"
import ansible from "../../src/Images/icons/icons8-ansible.svg"
import docker from "../../src/Images/icons/icons8-docker.svg"
import linux from "../../src/Images/icons/icons8-linux-96.png"
import python from "../../src/Images/icons/icons8-python.svg"
import react from "../../src/Images/icons/icons8-react-native.svg"
import git from "../../src/Images/icons/icons8-merge-git-96.png"


function About() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return(
        <>
        <section>
        <Container fluid className="section">
        <Container>
          <Row style={{ justifyContent: "center", padding: "10px" }}>
            <Col
              md={7}
              style={{
                justifyContent: "center",
                paddingTop: "30px",
                paddingBottom: "50px",
              }}
            >
              <h1 style={{ fontSize: "2.5em", paddingBottom: "20px" }}>
                Know Who <strong>I'M</strong>
                </h1>
                <div>
                    <p style={{ textAlign: "left", fontSize: "1.6em" }}>
                    Hi Everyone, I am <strong className="main-name">Dhruval Sharma </strong>
                    from Gujarat, India.
                    <br />I completed my B.Tech from Dharmsinh Desai University, Nadiad and I started my career with 
                    <strong className="main-name"> SRE</strong> role.
                    
                    <br />
                    <br />
                    Apart from <strong className="main-name">Computers</strong>, Few activities I love to do!
                </p>
                <ul style={{ textAlign: "left", fontSize: "1.6em"}}>
                    <li>Playing Tabla</li>
                    <li>Watching Cricket</li>
                    <li>Travelling</li>
                </ul>
                </div>
            </Col>
            <Col
              md={5}
              style={{ paddingTop: "120px", paddingBottom: "50px" }}
            >
              <img src={logo} alt="loading..." className="img-fluid"/>
            </Col>
          </Row>
          <h1>
            Professional <strong>Skillset </strong>
          </h1>
          <Row style={{ justifyContent: "center", paddingBottom: "50px"}}>
            <Col xs={4} md={5} className="tech">
                <img src={aws} alt="loading..." />
                <img src={jenkins} alt="loading..." />
                <img src={ansible} alt="loading..." />
                <img src={docker} alt="loading..." />
                <img src={linux} alt="loading..." />
                <img src={python} alt="loading..." /> 
                <img src={react} alt="loading..." />
                <img src={git} alt="loading..." />
            </Col>
            
          </Row>


        </Container>
        <Container fluid className="home-about-section">
        <Container>
          <Row>
            <Col>
              <h1>
                Feel free to connect with me
              </h1>
              <ul>
                <li className="social-icons">
                  <a
                    href="https://github.com/Dhruval59"
                    target="_blank"
                    rel="noreferrer"
                    className="home-social-icons"
                  >
                    <i className="fab fa-github"></i>
                  </a>
                </li>
                <li className="social-icons">
                  <a
                    href="https://twitter.com/dhruvalsharma59"
                    target="_blank"
                    rel="noreferrer"
                    className="home-social-icons"
                  >
                    <i className="fab fa-twitter"></i>
                  </a>
                </li>
                <li className="social-icons">
                  <a
                    href="https://www.linkedin.com/in/dhruval-sharma/"
                    target="_blank"
                    rel="noreferrer"
                    className="home-social-icons"
                  >
                    <i className="fab fa-linkedin-in" ></i>
                  </a>
                </li>
                <li className="social-icons">
                  <a
                    href="https://www.instagram.com/dhruval_sharma45/"
                    target="_blank"
                    rel="noreferrer"
                    className="home-social-icons"
                  >
                    <i className="fab fa-instagram"></i>
                  </a>
                </li>
                <li className="social-icons">
                <a
                    target="_blank"
                    rel="noreferrer"
                    className="home-social-icons"
                  >
                    <i className="fa fa-envelope" onClick={handleShow} aria-hidden="true"></i>
                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header>
                            <Modal.Title>Mailto: dhruvalsharma59@gmail.com</Modal.Title>
                        </Modal.Header>
                        <Modal.Footer>
                        <Button variant="primary" onClick={handleClose}>
                            Close
                        </Button>
                        </Modal.Footer>
                    </Modal>
                    </a>
                </li>
              </ul>
            </Col>
          </Row>
          <Row>
            <Col>
              <h1>Check out my YouTube channel</h1>
                <a
                    href="https://www.youtube.com/channel/UCDYL3Guoey6Q2465e9khfsw"
                    target="_blank"
                    rel="noreferrer"
                    className="home-social-icons"
                  >
                    <i className="fab fa-youtube"></i>
                  </a>
            </Col>
        </Row>
        </Container>
      </Container>
      </Container>
      </section>

      </>
    );
}

export default About;

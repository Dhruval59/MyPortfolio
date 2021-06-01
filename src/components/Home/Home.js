import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Type from "../Home/Type";
import TwitterContainer from "../../components/TwitterContainer";
import mypic from "../../Images/dhruval.png"

function Home() {
  return (
    <>
    <section>
      <Container fluid className="home-section">
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hey there! <span className="wave">👋🏻</span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> DHRUVAL SHARMA</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left", fontSize: '1.2em' }}>
                <Type />
              </div>
              
            </Col>
            <Col>
              <img src={mypic} alt="home pic" className="img-fluid" />
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
    <section>
        <Container fluid>
          <TwitterContainer />
        </Container>
    </section>
    </>
  );
}

export default Home;

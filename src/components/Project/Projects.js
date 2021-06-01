import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ProjectCard from "./ProjectCards";
import Sentiment from "../../Images/sentiment.jpg"
import Vote from "../../Images/vote.jpg"
import Automate from "../../Images/automate.jpg"

function Projects() {
  return (
    <> 
    <Container fluid className="section">
      <Container>
        <h1 style={{ fontSize: "2.5em", paddingBottom: "20px" }}>
        a few projects that I have done
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard 
            imgPath={Vote}
            title="Online Election Management System"
            description="Implemented Database schema for undertaking online voting using MySQL and provided front end functionalities with the use of PHP."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard 
            imgPath={Sentiment}
            title="Twitter Sentiment Analysis"
            description="Sentiment Analysis of Twitter users. Collected real tweets of users using Twitter API and classified the polarity & sentiments of any individual using python. Also developed the front-end pages using the Django framework."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard 
            imgPath={Automate}
            title="Deploying and managing applications"
            description="Automation for deployment of instances and installing services. Constructed the plans in Terraform to deploy EC2 machines on AWS and installed the application on it using Jenkins CI/CD."
            />
          </Col>
          
        </Row>
        <Row>
          <Col>
            <h1>Many more to come...</h1>
          </Col>
        </Row>
      </Container>
    </Container>
    </>
  );
}

export default Projects;

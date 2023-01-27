import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ProjectCard from "./ProjectCards";
import Sentiment from "../../Images/sentiment.jpg"
import Vote from "../../Images/vote.jpg"
import Automate from "../../Images/automate.jpg"
import Helmet from "../../Images/helmet.jpg"
import Fakenews from "../../Images/fakenews.png"

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
            techStack="MySQL, PHP, HTML, CSS"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard 
            imgPath={Sentiment}
            title="Twitter Sentiment Analysis"
            description="Sentiment Analysis of Twitter users. Collected real tweets of users using Twitter API and classified the polarity & sentiments of any individual using python. Also developed the front-end pages using the Django framework."
            techStack="Twitter Developer API, Python, Django"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard 
            imgPath={Automate}
            title="Deploying and managing applications"
            description="Automation for deployment of instances and installing services. Constructed the plans in Terraform to deploy EC2 machines on AWS and installed the application on it using Jenkins CI/CD."
            techStack="AWS, Terraform, Ansible, Jenkins, Git"
            />
          </Col>
          
        </Row>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard 
            imgPath={Helmet}
            title="Helmet Detection using Classifiers"
            description="Worked on a deep learning model and trained it to determine whether the person is wearing a helmet or not using
            TensorFlow 2 Object Detection API. Used the medium size dataset containing pictures of different people on vehicles. Applied Faster RCNN Algorithm for
            training the data. Achieved around 90% of accuracy. Created the dashboard using detection API to compare the performance of the
            trained model with the results of other approaches."
            techStack="Tensorflow, Keras, Python"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard 
            imgPath={Fakenews}
            title="Fake News Detection using Tree-based and Deep Learning model"
            description="Used a combination of three datasets to build the generalized model. Implemented Adaboost and XGBoost classifier
            along with CNN Deep learning model. Applied NLP techniques like tokenization and normalization. Achieved around 95% accuracy Score on XGBoost."
            techStack="Python, JupyterNotebook"
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

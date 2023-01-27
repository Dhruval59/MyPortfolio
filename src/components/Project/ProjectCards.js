import React from "react";
import Card from "react-bootstrap/Card";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title><h3>{props.title}</h3></Card.Title>
        <Card.Text style={{ textAlign: "justify", fontSize: "1.2em" }}>
        {props.description}
        </Card.Text>
      </Card.Body>
      <Card.Footer>Tech Stack: {props.techStack}</Card.Footer>
    </Card>
  );
}
export default ProjectCards;

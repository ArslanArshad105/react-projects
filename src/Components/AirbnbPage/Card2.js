import React from "react";
import { Col, Container } from "react-bootstrap";

const Card2 = (props) => {
  return (
    <Col className="card--container" xs={12} md={3}>
      <img src={props.card2img} alt="ImageCard" className="cardimg" />

      <Container className="cardstats">
        <span> {props.name}</span>
        <p>
          <span className="bold">{props.title}</span>
        </p>
        <p>
          <span className="bold">${props.price}</span>
        </p>
        <p>
          <span>{props.description}</span>
        </p>
      </Container>
    </Col>
  );
};

export default Card2;

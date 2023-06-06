import React from "react";
import { Col, Container } from "react-bootstrap";

const Card = (props) => {
  return (
    <Col className="card--container" xs={12} md={3}>
      <img src={props.crdimg} alt="ImageCard" className="cardimg" />

      <Container className="cardstats">
        <img src={props.star} alt="Rating" className="cardstar" />
        <span> {props.rating}</span>
        <span> ({props.ratingCount}) . </span>
        <span>{props.countryLoc}</span>
        <p>{props.title}</p>
        <p>
          From <span className="bold">${props.price}</span> / Person
        </p>
      </Container>
    </Col>
  );
};

export default Card;

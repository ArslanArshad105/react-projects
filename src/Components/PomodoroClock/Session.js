import React from "react";
import { Button, Col, Container } from "react-bootstrap";

const Session = (prop) => {
  return (
    <Container>
      <Col></Col>
      <Col className="Session-Col">
        <h3 className="Session-Heading">Session</h3>
        <h4 className="Session-Heading">{prop.timer}</h4>
      </Col>
      <Col></Col>
      <Button className="Session-Button">Start</Button>
      <Button className="Session-Button">Pause</Button>
      <Button className="Session-Button"> Reset</Button>
    </Container>
  );
};

export default Session;

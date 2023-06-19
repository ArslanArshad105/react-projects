import React from "react";
import "../PomodoroClock/PomodoroClock.css";
import { Container, Row, Col } from "react-bootstrap";
import BreakLength from "./BreakLength";
import SessionLength from "./SessionLength";

const PomodoroClock = () => {
  return (
    <>
      <Container className="Pomo-Main-Container">
        <Container className="Pomo-Center-Container">
          <h1 className="Heading-Color">Pomodoro Clock</h1>
          <h2 className="Heading-Color">25 + 5 Clock</h2>
          <Row>
            <Col>
              <BreakLength />
            </Col>
            <Col>
              <SessionLength />
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
};

export default PomodoroClock;

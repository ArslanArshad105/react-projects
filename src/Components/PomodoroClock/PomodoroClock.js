import React from "react";
import "../PomodoroClock/PomodoroClock.css";
import { Container, Row, Col } from "react-bootstrap";
import BreakSection from "./BreakSection";
import SessionSection from "./SessionSection";
import Session from "./Session";

const PomodoroClock = () => {
  return (
    <>
      <Container className="Pomo-Main-Container">
        <Container className="Pomo-Center-Container">
          <h1 className="Heading-Color">Pomodoro Clock</h1>
          <h2 className="Heading-Color">25 + 5 Clock</h2>
          <Row>
            <Col>
              <BreakSection />
            </Col>
            <Col>
              <SessionSection />
            </Col>
          </Row>
          <Row>
            <Session />
          </Row>
        </Container>
      </Container>
    </>
  );
};

export default PomodoroClock;

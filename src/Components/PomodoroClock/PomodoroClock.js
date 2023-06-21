import React, { useState } from "react";
import "../PomodoroClock/PomodoroClock.css";
import { Container, Row, Col } from "react-bootstrap";
import BreakSessionLength from "./BreakSessionLength";
import Session from "./Session";

const PomodoroClock = () => {
  const [time, setTime] = useState(25);
  const [breakLength, setBreakLength] = useState(5);

  // const setTimeValue = (value) => setTime(value);

  return (
    <>
      <Container className="Pomo-Main-Container">
        <Container className="Pomo-Center-Container">
          <h1 className="Heading-Color" style={{ paddingTop: "30px" }}>
            Pomodoro Clock
          </h1>
          <h2 className="Heading-Color">25 + 5 Clock</h2>
          <Row>
            <Col>
              <BreakSessionLength
                title="Break Length"
                initialValue={breakLength}
                timeLength={setBreakLength}
              />
            </Col>
            <Col>
              <BreakSessionLength
                title="Session Length"
                initialValue={time}
                timeLength={setTime}
              />
            </Col>
          </Row>
          <Row>
            <Session timer={time} />
          </Row>
        </Container>
      </Container>
    </>
  );
};

export default PomodoroClock;

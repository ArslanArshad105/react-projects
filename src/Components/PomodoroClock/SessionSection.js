import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquarePlus, faSquareMinus } from "@fortawesome/free-solid-svg-icons";

const SessionSection = () => {
  const [sessionLength, setSessionLength] = useState(25);

  const sessionIncrement = () => {
    setSessionLength(sessionLength + 1);
  };

  const sessionDecrement = () => {
    if (sessionLength > 1) {
      setSessionLength(sessionLength - 1);
    }
  };

  return (
    <Container>
      <h3 className="Heading-Color">Session Length</h3>
      <FontAwesomeIcon
        className="Fa-Square-Plus"
        icon={faSquareMinus}
        onClick={sessionDecrement}
      />
      <h4 className="Heading4-width">{sessionLength}</h4>
      <FontAwesomeIcon
        className="Fa-Square-Plus"
        icon={faSquarePlus}
        onClick={sessionIncrement}
      />
    </Container>
  );
};

export default SessionSection;

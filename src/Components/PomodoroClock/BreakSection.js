import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquarePlus, faSquareMinus } from "@fortawesome/free-solid-svg-icons";

const BreakSection = () => {
  const [breakLength, setBreakLength] = useState(5);

  const breakIncrement = () => {
    setBreakLength(breakLength + 1);
  };

  const breakDecrement = () => {
    if (breakLength > 1) {
      setBreakLength(breakLength - 1);
    }
  };

  return (
    <Container>
      <h3 className="Heading-Color">Break Length</h3>
      <FontAwesomeIcon
        className="Fa-Square-Plus"
        icon={faSquareMinus}
        onClick={breakDecrement}
      />
      <h4 className="Heading4-width">{breakLength}</h4>
      <FontAwesomeIcon
        className="Fa-Square-Plus"
        icon={faSquarePlus}
        onClick={breakIncrement}
      />
    </Container>
  );
};

export default BreakSection;

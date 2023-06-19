import React, { useState } from "react";
import { Container, Button } from "react-bootstrap";

const SessionLength = () => {
  const [increased, setIncreased] = useState(25);

  const increasedValue = () => {
    setIncreased(increased + 1);
  };

  const decreasedValue = () => {
    if (increased > 1) {
      setIncreased(increased - 1);
    }
  };

  return (
    <Container>
      <h3 className="Heading-Color">Session Length</h3>
      <Button onClick={decreasedValue}>-</Button>
      <h4 className="Heading4-width">{increased}</h4>
      <Button onClick={increasedValue}>+</Button>
    </Container>
  );
};

export default SessionLength;

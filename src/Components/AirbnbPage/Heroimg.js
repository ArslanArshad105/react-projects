import React from "react";
import { Container } from "react-bootstrap";
const Heroimg = () => {
  return (
    <Container className="hero--container">
      <img
        src="../../Media/Heroimage.png"
        alt="HeroImage"
        className="hero-photo"
      />
      <h1 className="hero--heading">Online Experience</h1>
      <p className="hero-heading">
        Join unique interactive led by one-of-a-kind hosts-all without leaving
        home.
      </p>
    </Container>
  );
};

export default Heroimg;

import { useState } from "react";
import React from "react";
import { Nav, Navbar, Container, NavDropdown, Button } from "react-bootstrap";

const Navigationbar = (props) => {
  const [show, setShow] = useState(false);
  const showDropdown = (e) => {
    setShow(!show);
  };
  const hideDropdown = (e) => {
    setShow(false);
  };
  return (
    <Navbar bg="light" expand="lg" className="stickyNavbar">
      <Container>
        <Navbar.Brand href="/" style={{ height: "80px" }}>
          <img
            src="../../Media/Arslan_Logo_2-1.png"
            alt="Logo"
            style={{ height: "70px" }}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <NavDropdown
              title="Portfolio"
              id="basic-nav-dropdown"
              show={show}
              onMouseEnter={showDropdown}
              onMouseLeave={hideDropdown}
            >
              <NavDropdown.Item href="/airbnb">Airbnb</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/todolist">To Do List</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/pomodoro-clock">
                Pomodoro Clock
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/blogs">Blogs</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
            <Button href="/signup" style={{ marginRight: "20px" }}>
              Sign Up
            </Button>
            <Button href={props.btnnmbrurl} variant="outline-primary">
              {props.button}
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigationbar;

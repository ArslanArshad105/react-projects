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
        <Navbar.Brand href="/">{props.title}</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about-us/">About Us</Nav.Link>
            <NavDropdown
              title="Portfolio"
              id="basic-nav-dropdown"
              show={show}
              onMouseEnter={showDropdown}
              onMouseLeave={hideDropdown}
            >
              <NavDropdown.Item href="/airbnb/">Airbnb</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/todolist/">To Do List</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#">{props.smm}</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#">{props.sem}</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#">{props.ppc}</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/blogs/">Blogs</Nav.Link>
            <Nav.Link href="/contact-us/">{props.contactus}</Nav.Link>
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

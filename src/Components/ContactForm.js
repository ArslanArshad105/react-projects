import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import location_marker from "../location_marker.svg";
import EmailLink from "./EmailLink";

const ContactForm = (props) => {
  return (
    <Container>
      <Row>
        <Col xs={12} md={6}>
          <h1>Let’s build something awesome together.</h1>
          <p>
            We’d Love To Discuss Your Ideas And Look Forward To Bring Them To
            Life!
          </p>
          <Row>
            <Col>
              <img src={location_marker} alt="Location Marker" />
            </Col>
            <Col>
              <h4>Melbourne, Australia</h4>
              <p>Melbourne VIC 3000, Australia</p>
            </Col>
          </Row>
          <Row>
            <Col>
              <img src={location_marker} alt="Location Marker" />
            </Col>
            <Col>
              <h4> +61 424 373 623</h4>
              <p>Mon-Fri 9am-6pm</p>
            </Col>
          </Row>
          <Row>
            <Col>
              <img src={location_marker} alt="Location Marker" />
            </Col>
            <Col>
              <Row>
                <EmailLink
                  label="arsi.irshad1996@gmail.com"
                  mailto="mailto:arsi.irshad1996@gmail.com"
                />
              </Row>
              <Row>
                <p>online support</p>
              </Row>
            </Col>
          </Row>
        </Col>
        <Col xs={12} md={6}>
          <Form>
            <Form.Group className="mb-3">
              <h1>{props.formheading}</h1>
              <Form.Label>First Name</Form.Label>
              <Form.Control type="text" placeholder={props.fname} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Last Name</Form.Label>
              <Form.Control type="text" placeholder={props.lname} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Button variant="primary">SUBMIT</Button>
            </Form.Group>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactForm;

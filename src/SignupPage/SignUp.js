import React from "react";
import {
  Container,
  Form,
  FormControl,
  FormGroup,
  FormLabel,
  Col,
  Row,
  FormSelect,
  FormCheck,
  Button,
} from "react-bootstrap";
import { Helmet } from "react-helmet";
import "../SignupPage/Signup.css";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <Container className="Main-Container">
      <Helmet>
        <title>Sign Up | Arslan's Portfolio</title>
      </Helmet>
      <Container>
        <Row>
          <Col sm={6} lg={6}></Col>
          <Col
            style={{
              padding: "20px",
              backgroundColor: "rgba(255, 255, 255, 0.8)",
            }}
            sm={6}
            lg={6}
          >
            <Row className="logo">
              <a href="/signup" style={{ textAlign: "center" }}>
                <img src="../../Media/Sozie_logo.png" alt="Logo" />
              </a>
            </Row>
            <Row className="mb-3">
              <h4 style={{ fontSize: "2.25rem" }}>Create an Account</h4>
            </Row>
            <Row>
              <Form>
                <Row className="mb-3">
                  <Col className="mb-3">
                    <FormGroup controlId="formGroupFname">
                      <FormLabel>First Name</FormLabel>
                      <FormControl
                        type="text"
                        placeholder="Enter First Name"
                      ></FormControl>
                    </FormGroup>
                  </Col>

                  <Col sm={6}>
                    <FormGroup controlId="formGroupLname">
                      <FormLabel>Last Name</FormLabel>
                      <FormControl
                        type="text"
                        placeholder="Enter Last Name"
                      ></FormControl>
                    </FormGroup>
                  </Col>

                  <Col sm={6} className="mb-3">
                    <FormGroup controlId="formGroupCname">
                      <FormLabel>Company Name</FormLabel>
                      <FormControl
                        type="text"
                        placeholder="Enter Company Name"
                      ></FormControl>
                    </FormGroup>
                  </Col>

                  <Col sm={6}>
                    <FormGroup controlId="formGroupEmail">
                      <FormLabel>Email</FormLabel>
                      <FormControl
                        type="email"
                        placeholder="Enter Email"
                      ></FormControl>
                    </FormGroup>
                  </Col>

                  <Col sm={6} className="mb-3">
                    <FormGroup controlId="formGroupPassword">
                      <FormLabel>Password</FormLabel>
                      <FormControl
                        type="password"
                        placeholder="Enter Password"
                      ></FormControl>
                    </FormGroup>
                  </Col>

                  <Col sm={6}>
                    <FormGroup controlId="formGroupCpassword">
                      <FormLabel>Confrim Password</FormLabel>
                      <FormControl
                        type="password"
                        placeholder="Confirm Your Password"
                      ></FormControl>
                    </FormGroup>
                  </Col>

                  <Col sm={6} className="mb-3">
                    <FormGroup controlId="formGroupRetailer">
                      <FormLabel>Retailers</FormLabel>
                      <FormSelect defaultValue="Choose Retailer">
                        <option>Choose Retailer</option>
                        <option>Walmart</option>
                        <option>Target</option>
                      </FormSelect>
                    </FormGroup>
                  </Col>
                  <Col sm={6}>
                    <FormGroup controlId="formGroupSeller">
                      <FormLabel>Seller or Supplier</FormLabel>
                      <FormSelect defaultValue="Seller or Supplier">
                        <option>Seller or Supplier - Pick One</option>
                        <option>Seller</option>
                        <option>Supplier</option>
                      </FormSelect>
                    </FormGroup>
                  </Col>
                </Row>
              </Form>
            </Row>

            <Row className="mb-3">
              <Col sm={3}></Col>
              <Col sm={6}>
                <FormGroup controlId="formGroupCode">
                  <FormLabel>Code</FormLabel>
                  <FormControl type="text" placeholder="Enter Code" />
                </FormGroup>
              </Col>
              <Col sm={3}></Col>
            </Row>

            <Row className="mb-3">
              <FormGroup>
                <FormCheck
                  type="checkbox"
                  label="By clicking on Sign up, I accept Terms and Conditions of Use."
                />
              </FormGroup>
            </Row>

            <Row className="mb-3" style={{ justifyContent: "center" }}>
              <Col sm={5}>
                <Button className="signup-button" type="submit">
                  Sign Up
                </Button>
              </Col>
            </Row>

            <Row>
              <p>
                Already have an account? <Link> Sign In</Link>
              </p>
            </Row>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default SignUp;

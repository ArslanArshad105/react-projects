import React, { useState } from "react";
import {
  Container,
  Form,
  FormControl,
  FormGroup,
  FormLabel,
  Col,
  Row,
  Button,
} from "react-bootstrap";
import { Helmet } from "react-helmet";
import "./Signup.css";
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    // getValues,
    formState: { errors },
  } = useForm();
  const onSubmit = (userdata) => {
    console.log(watch(userdata));

    axios({
      method: "POST",
      mode: "cors",
      url: "https://stage-api.sozie.com/api/v1/user/seller_signup/",
      headers: {
        "Access-Control-Allow-Origin": "*",
        // "Access-Control-Allow-Credentials": true,
      },
      data: userdata,
    })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const showHidePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Container className="signin-Main-Container">
      <Helmet>
        <title>Sign In | Arslan's Portfolio</title>
      </Helmet>
      <Container>
        <Row>
          <Col xs={1} sm={2} md={7}></Col>
          <Col className="signin-center-container" xs={8} sm={8} md={4}>
            <Row className="logo">
              <a href="/signup">
                <img src="../../Media/Arslan_logo_3-1.png" alt="Logo" />
              </a>
            </Row>
            <Row className="mb-3">
              <h1 style={{ fontSize: "2rem", textAlign: "center" }}>
                Sign In to Continue
              </h1>
            </Row>
            <Form onSubmit={handleSubmit(onSubmit)}>
              <Row className="mb-3">
                <Col xs={10} md={8} className="mb-3" style={{ width: "100%" }}>
                  <FormGroup>
                    <FormLabel>Email</FormLabel>
                    <FormControl
                      type="email"
                      placeholder="Enter Email"
                      {...register("Email", {
                        required: {
                          value: true,
                          message: "Email is required",
                        },
                        pattern: {
                          value: /^[a-zA-Z0-9]+@+[a-zA-Z0-9]+.+[A-z]/,
                          message: "Please enter a valid email.",
                        },
                      })}
                    />
                    {errors.Email && (
                      <p className="signup-error">{errors.Email.message}</p>
                    )}
                  </FormGroup>
                </Col>

                <Col xs={8} md={2} className="mb-3" style={{ width: "100%" }}>
                  <FormLabel>Password</FormLabel>
                  <Row className="custom-col">
                    <Col xs={10} md={10} className="col-passw">
                      <FormGroup>
                        <FormControl
                          className="col-password form-control-focus"
                          type={showPassword ? "text" : "password"}
                          placeholder="Enter Password"
                          {...register("Password", {
                            required: {
                              value: true,
                              message: "Please enter password to continue.",
                            },
                            minLength: {
                              value: 8,
                              message:
                                "Password must have at least 8 characters.",
                            },
                            pattern: {
                              value:
                                /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&+=])/,
                              message:
                                "Password must contain at least one uppercase, one lowercase, one number and one special character.",
                            },
                          })}
                        />
                      </FormGroup>
                    </Col>
                    <Col xs={1} sm={2} md={2} className="col-icon">
                      <FontAwesomeIcon
                        className="fa-Eye"
                        icon={showPassword ? faEye : faEyeSlash}
                        onClick={showHidePassword}
                      />
                    </Col>
                  </Row>
                  {errors.Password && (
                    <p className="signup-error">{errors.Password.message}</p>
                  )}
                </Col>
              </Row>

              <Row className="mb-3" style={{ justifyContent: "center" }}>
                <Col sm={5}>
                  <Button
                    className="signup-button"
                    // onClick={(e) => {
                    //   handleSubmit(e);
                    // }}
                    type="submit"
                  >
                    Sign In
                  </Button>
                </Col>
              </Row>
            </Form>
            <Row>
              <p style={{ textAlign: "center" }}>
                Do not have an account? <a href="/signup">Create an Account</a>
              </p>
            </Row>
          </Col>
          <Col xs={1} sm={2} md={1}></Col>
        </Row>
      </Container>
    </Container>
  );
};

export default SignIn;

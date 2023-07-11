import React, { useState } from "react";
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
import "./Signup.css";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

const SignUp = () => {
  const [isPasswordShown, setIsPasswordShown] = useState(false);
  const [isConfirmPasswordShown, setIsConfirmPasswordShown] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    getValues,
    formState: { errors },
  } = useForm();
  const onSubmit = (userdata) => {
    console.log(watch(userdata));
  };

  const showPassword = () => {
    if (isPasswordShown === false) {
      setIsPasswordShown(!isPasswordShown);
    } else {
      setIsPasswordShown(!isPasswordShown);
    }
  };
  const showConfirmPassword = () => {
    if (isConfirmPasswordShown === false) {
      setIsConfirmPasswordShown(!isConfirmPasswordShown);
    } else {
      setIsConfirmPasswordShown(!isConfirmPasswordShown);
    }
  };

  return (
    <Container className="Main-Container">
      <Helmet>
        <title>Sign Up | Arslan's Portfolio</title>
      </Helmet>
      <Container>
        <Row>
          <Col sm={3} md={6}></Col>
          <Col
            style={{
              padding: "20px",
              backgroundColor: "rgba(255, 255, 255, 0.8)",
            }}
            sm={6}
          >
            <Row className="logo">
              <a href="/signup" style={{ textAlign: "center" }}>
                <img src="../../Media/Sozie_logo.png" alt="Logo" />
              </a>
            </Row>
            <Row className="mb-3">
              <h4 style={{ fontSize: "2.25rem" }}>Create an Account</h4>
            </Row>
            <Form onSubmit={handleSubmit(onSubmit)}>
              <Row className="mb-3">
                <Col xs={6} md={6} className="mb-3">
                  <FormGroup controlId="formGroupFname">
                    <FormLabel>First Name</FormLabel>
                    <FormControl
                      type="text"
                      placeholder="Enter First Name"
                      {...register("FirstName", {
                        required: {
                          value: true,
                          message: "First Name is required",
                        },
                        maxLength: {
                          value: 30,
                          message: "The Maximum Length is reached.",
                        },
                        pattern: {
                          value: /^[A-Za-z]+$/i,
                          message:
                            "Special Characters and Numbers are not allowed.",
                        },
                      })}
                    />

                    {errors.FirstName && (
                      <p className="signup-error">{errors.FirstName.message}</p>
                    )}
                  </FormGroup>
                </Col>

                <Col xs={6} md={6}>
                  <FormGroup controlId="formGroupLname">
                    <FormLabel>Last Name</FormLabel>
                    <FormControl
                      type="text"
                      placeholder="Enter Last Name"
                      {...register("LastName", {
                        required: {
                          value: true,
                          message: "Last Name is required",
                        },
                        maxLength: {
                          value: 30,
                          message: "The Maximum Length is reached.",
                        },
                        pattern: {
                          value: /^[A-Za-z]+$/i,
                          message:
                            "Special Characters and Numbers are not allowed.",
                        },
                      })}
                    />
                    {errors.LastName && (
                      <p className="signup-error">{errors.LastName.message}</p>
                    )}
                  </FormGroup>
                </Col>

                <Col xs={6} md={6} className="mb-3">
                  <FormGroup controlId="formGroupCname">
                    <FormLabel>Company Name</FormLabel>
                    <FormControl
                      type="text"
                      placeholder="Enter Company Name"
                      {...register("CompanyName", {
                        required: {
                          value: true,
                          message: "Company Name is required",
                        },
                        maxLength: {
                          value: 30,
                          message: "The Maximum Length is reached.",
                        },
                        pattern: {
                          value: /^[A-Za-z]+$/i,
                          message:
                            "Special Characters and Numbers are not allowed.",
                        },
                      })}
                    />
                    {errors.CompanyName && (
                      <p className="signup-error">
                        {errors.CompanyName.message}
                      </p>
                    )}
                  </FormGroup>
                </Col>

                <Col xs={6} md={6}>
                  <FormGroup controlId="formGroupEmail">
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
                <Col xs={6} md={6} className="mb-3">
                  <FormGroup controlId="formGroupRetailer">
                    <FormLabel>Retailers</FormLabel>
                    <FormSelect
                      placeholder="arslab"
                      {...register("Retailers", { required: true })}
                    >
                      <option value="">Choose Retailer</option>
                      <option value={21}>Walmart</option>
                      <option value={10}>Target</option>
                    </FormSelect>
                    {errors.Retailers && (
                      <p className="signup-error">
                        Select a retailer from the list.
                      </p>
                    )}
                  </FormGroup>
                </Col>
                <Col xs={6} md={6}>
                  <FormGroup controlId="formGroupSeller">
                    <FormLabel>Seller or Supplier</FormLabel>
                    <FormSelect {...register("Sellers", { required: true })}>
                      <option value="">Seller or Supplier - Pick One</option>
                      <option value="SEL">Seller</option>
                      <option value="SUP">Supplier</option>
                    </FormSelect>
                    {errors.Sellers && (
                      <p className="signup-error">
                        You need to select an option.
                      </p>
                    )}
                  </FormGroup>
                </Col>

                <Col xs={6} className="mb-3" style={{ width: "100%" }}>
                  <FormLabel>Password</FormLabel>
                  <Row className="custom-col">
                    <Col xs={10} md={10} className="col-passw">
                      <FormGroup>
                        <FormControl
                          className="col-password form-control-focus"
                          type={isPasswordShown ? "text" : "password"}
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
                    <Col xs={2} md={2} className="col-icon">
                      <FontAwesomeIcon
                        className="fa-Eye"
                        icon={isPasswordShown ? faEyeSlash : faEye}
                        onClick={showPassword}
                      />
                    </Col>
                  </Row>
                  {errors.Password && (
                    <p className="signup-error">{errors.Password.message}</p>
                  )}
                </Col>

                <Col xs={6} style={{ width: "100%" }} className="mb-3">
                  <FormLabel>Confirm Password</FormLabel>
                  <Row className="custom-col">
                    <Col xs={10} md={10} className="col-passw">
                      <FormGroup>
                        <FormControl
                          className="col-password form-control-focus"
                          type={isConfirmPasswordShown ? "text" : "password"}
                          placeholder="Confirm Password"
                          {...register("Confirm_Password", {
                            required: {
                              value: true,
                            },
                          })}
                        />
                      </FormGroup>
                    </Col>
                    <Col xs={2} md={2} className="col-icon">
                      <FontAwesomeIcon
                        className="fa-Eye"
                        icon={isConfirmPasswordShown ? faEyeSlash : faEye}
                        onClick={showConfirmPassword}
                      />
                    </Col>
                  </Row>
                  {watch("Confirm_Password") !== watch("Password") &&
                  getValues("Confirm_Password") ? (
                    <p style={{ color: "red", fontSize: "12px" }}>
                      Password does not match
                    </p>
                  ) : null}
                </Col>
              </Row>

              <Row className="mb-3">
                <Col xs={3}></Col>
                <Col xs={6}>
                  <FormGroup controlId="formGroupCode">
                    <FormLabel>Code</FormLabel>
                    <FormControl
                      type="text"
                      placeholder="Enter Code"
                      {...register("Code", {
                        required: {
                          value: true,
                          message: "Please enter the code to continue.",
                        },
                        validate: (value) =>
                          value === "5357" || "Enter the valid code.",
                      })}
                    />
                    {errors.Code && (
                      <p className="signup-error">{errors.Code.message}</p>
                    )}
                  </FormGroup>
                </Col>
                <Col sm={3}></Col>
              </Row>

              <Row className="mb-3">
                <FormGroup>
                  <FormCheck
                    type="checkbox"
                    label="I accept Terms and Conditions of Use."
                    {...register("Terms", { required: true })}
                    style={{ textAlign: "left" }}
                  />
                  {errors.Terms && (
                    <p className="signup-error">
                      Please accept Sozie Terms and Conditions.
                    </p>
                  )}
                </FormGroup>
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
                    Sign Up
                  </Button>
                </Col>
              </Row>
            </Form>
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

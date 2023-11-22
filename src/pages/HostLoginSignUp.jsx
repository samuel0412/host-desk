import React, { useState } from "react";
import { LogInBg, UploadImg } from "../assets/images";
import { Col, Container, Row, Tab, Tabs, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { doLogin } from "../Redux/Actions/AuthActions";
import { useDispatch } from "react-redux";

const HostLoginSignUp = () => {
  const dispatch = useDispatch();
  const [loginUserData, setLoginUserData] = useState({
    email: "",
    password: "",
  });
  const [validated, setValidated] = useState(false);
  const handleChange = (e) => {
    let { name, value } = e.target;
    setLoginUserData((prevState) => ({
      ...prevState,
      [name]: value === "",
    }));

    setLoginUserData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleHostLogin = async () => {
    let check = false;

    const data = {
      email: loginUserData.email,
      password: loginUserData.password,
    };

    if (data.email === "" || data.password === "") {
      setValidated(true);
      check = true;
    }
    if (check === true) return;
    dispatch(doLogin(data));
  };
  return (
    <>
      <div className="login-bg">
        <Container fluid>
          <Row>
            <Col sm="6" className="p-0">
              <div className="login-img">
                <img src={LogInBg} alt="" />
              </div>
            </Col>
            <Col sm="6" className="p-0 d-flex align-items-center">
              <div className="login-main">
                {/* <div className="login-logo">
                  <img src={Logo} alt="" />
                </div> */}
                <div className="login-content">
                  <Tabs
                    defaultActiveKey="log-in"
                    id="fill-tab-example"
                    className="mb-3"
                    fill
                  >
                    <Tab eventKey="log-in" title="Log In">
                      <Row className="mt-5">
                        <Col sm="12">
                          <Form noValidate validated={validated}>
                            <Form.Group
                              className="mb-4"
                              controlId="validationCustom01"
                            >
                              <Form.Label>
                                Enter email address or phone number
                              </Form.Label>
                              <Form.Control
                                required
                                type="email"
                                placeholder="Please enter"
                                name="email"
                                value={loginUserData.email}
                                onChange={handleChange}
                              />
                              <Form.Control.Feedback type="invalid">
                                Please provide a valid email
                              </Form.Control.Feedback>
                            </Form.Group>
                          </Form>
                        </Col>
                        <Col sm="12">
                          <Form noValidate validated={validated}>
                            <Form.Group
                              className="mb-2"
                              controlId="validationCustom02"
                            >
                              <Form.Label>Password</Form.Label>
                              <Form.Control
                                required
                                type="password"
                                placeholder="Please enter"
                                name="password"
                                value={loginUserData.password}
                                onChange={handleChange}
                              />
                              <Form.Control.Feedback type="invalid">
                                Please provide a valid password
                              </Form.Control.Feedback>
                            </Form.Group>
                          </Form>
                        </Col>
                        <Col sm="12">
                          <Link to="/">Forgotten Password?</Link>
                        </Col>
                        <Col sm="12">
                          <Button className="submit" onClick={handleHostLogin}>
                            Log In
                          </Button>
                        </Col>
                        <Col sm="12">
                          <p className="is-account">
                            Don't have an account? <Link to="/">Sign Up</Link>
                          </p>
                        </Col>
                      </Row>
                    </Tab>
                    <Tab eventKey="sign-up" title="Sign Up">
                      <Row className="mt-5">
                        <Col sm="12">
                          <div className="stepper">
                            <div className="progressBar">
                              <div className="progressBarContainer">
                                <div className="progress">
                                  <div className="percent"></div>
                                </div>
                                <div className="steps">
                                  <div className="step completed"></div>
                                  <div className="step"></div>
                                  <div className="step"></div>
                                  <div className="step"></div>
                                  <div className="step"></div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <Row className="mt-5">
                            <Col sm="12">
                              <Form>
                                <Form.Group className="mb-4">
                                  <Form.Label>Full Name</Form.Label>
                                  <Form.Control
                                    type="text"
                                    placeholder="Please enter"
                                  />
                                </Form.Group>
                              </Form>
                            </Col>
                            <Col sm="12">
                              <Form>
                                <Form.Group className="mb-4">
                                  <Form.Label>
                                    Phone number (Optional)
                                  </Form.Label>
                                  <Form.Control
                                    type="tel"
                                    placeholder="Please enter"
                                  />
                                </Form.Group>
                              </Form>
                            </Col>
                            <Col sm="12">
                              <Form>
                                <Form.Group className="mb-4">
                                  <Form.Label>Enter your email</Form.Label>
                                  <Form.Control
                                    type="email"
                                    placeholder="Please enter"
                                  />
                                </Form.Group>
                              </Form>
                            </Col>
                            <Col sm="12">
                              <Form>
                                <Form.Group className="mb-2">
                                  <Form.Label>Password</Form.Label>
                                  <Form.Control
                                    type="password"
                                    placeholder="Please enter"
                                  />
                                </Form.Group>
                              </Form>
                            </Col>
                            <Col sm="12">
                              <button className="submit">Continue</button>
                            </Col>
                          </Row>
                          <Row className="mt-5">
                            <Col sm="12">
                              <Form.Group className="mb-4 file-input form-control">
                                <Form.Control
                                  type="file"
                                  placeholder="Please enter"
                                />
                                <span>
                                  <img src={UploadImg} alt="" />
                                  Upload business logo
                                </span>
                              </Form.Group>
                            </Col>
                            <Col sm="12">
                              <Form.Group className="mb-4">
                                <Form.Label>Business name</Form.Label>
                                <Form.Control
                                  type="text"
                                  placeholder="Please enter"
                                />
                              </Form.Group>
                            </Col>
                            <Col sm="12">
                              <Form.Group className="mb-4">
                                <Form.Label>Enter your industry</Form.Label>
                                <Form.Select
                                  aria-label="Default select example"
                                  className="form-control"
                                >
                                  <option>Open this select menu</option>
                                  <option value="1">One</option>
                                  <option value="2">Two</option>
                                  <option value="3">Three</option>
                                </Form.Select>
                              </Form.Group>
                            </Col>
                            <Col sm="12">
                              <button className="submit">Continue</button>
                            </Col>
                          </Row>
                        </Col>
                      </Row>
                    </Tab>
                  </Tabs>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default HostLoginSignUp;

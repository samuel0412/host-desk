import React from "react";
import { LogInBg, Logo } from "../assets/images";
import { Col, Container, Row, Tab, Tabs, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const Guestlogin = () => {
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
                <div className="login-logo">
                  <img src={Logo} alt="" />
                </div>
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
                          <Form>
                            <Form.Group className="mb-4">
                              <Form.Label>
                                Enter email address or phone number
                              </Form.Label>
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
                          <Link to="/">Forgotten Password?</Link>
                        </Col>
                        <Col sm="12">
                          <button className="submit">Log In</button>
                        </Col>
                        <Col sm="12">
                          <p className="is-account">
                            Don't have an account? <Link to="/">Sign Up</Link>
                          </p>
                        </Col>
                      </Row>
                    </Tab>
                    <Tab eventKey="sign-up" title="Sign Up">
                      Tab content for Profile
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

export default Guestlogin;

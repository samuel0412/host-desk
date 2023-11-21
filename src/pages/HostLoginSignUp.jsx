import React from "react";
import { ArrowImg, BackImg, LogInBg, UploadImg } from "../assets/images";
import {
  Col,
  Container,
  Row,
  Tab,
  Tabs,
  Form,
  Button,
  InputGroup,
} from "react-bootstrap";
import { Link } from "react-router-dom";

const HostLoginSignUp = () => {
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
                              <Button className="submit">Continue</Button>
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
                              <Button className="submit">Continue</Button>
                            </Col>
                          </Row>
                          <Row className="mt-5">
                            <Col sm="12">
                              <div className="data-protect">
                                <h4>Your Data Protection</h4>
                                <p>
                                  General Data Protection Regulation (GDPR) puts
                                  you in change of your personal data.Select the
                                  below to confirm how <span>Hotdesknow </span>
                                  can use your data.
                                </p>
                                <div className="check-section">
                                  <Form.Check
                                    type="checkbox"
                                    label="*Acceptance of the Terms and conditions and the Privacy Policy "
                                  />
                                  <img src={ArrowImg} alt="" />
                                </div>
                                <div className="check-section check-section-two">
                                  <Form.Check type="checkbox" />
                                  <label>
                                    I agree to <span>Hotdesknow</span> using my
                                    personal data to send me offers and other
                                    materials
                                  </label>
                                  <img src={ArrowImg} alt="" />
                                </div>
                                <div className="check-section">
                                  <label>
                                    By choosing to continue, I am agreeing to
                                    <span> Hotdesknow </span> processing my
                                    personal data{" "}
                                  </label>
                                  <img src={ArrowImg} alt="" />
                                </div>
                              </div>
                            </Col>
                            <Col sm="12">
                              <div className="d-flex align-items-center justify-content-center mt-5">
                                <Button className="back">
                                  <img src={BackImg} alt="" />
                                </Button>
                                <Button className="submit">Continue</Button>
                              </div>
                            </Col>
                          </Row>
                          <Row className="mt-5">
                            <Col sm="12">
                              <div className="data-protect">
                                <h4>Your Address</h4>
                                <p>Where can customers find you?</p>
                              </div>
                            </Col>
                            <Col sm="12">
                              <InputGroup className="mb-4">
                                <Form.Control
                                  placeholder="Enter location"
                                  aria-label="Recipient's username"
                                  aria-describedby="basic-addon2"
                                />
                                <InputGroup.Text id="basic-addon2">
                                  Search
                                </InputGroup.Text>
                              </InputGroup>
                            </Col>
                            <Col sm="12">
                              <Form.Group className="mb-4">
                                <Form.Select
                                  aria-label="Default select example"
                                  className="form-control"
                                >
                                  <option>Enter location</option>
                                  <option value="1">One</option>
                                  <option value="2">Two</option>
                                  <option value="3">Three</option>
                                </Form.Select>
                              </Form.Group>
                            </Col>
                            <Col sm="12">
                              <div className="d-flex align-items-center justify-content-center mt-5">
                                <Button className="back">
                                  <img src={BackImg} alt="" />
                                </Button>
                                <Button className="submit">Continue</Button>
                              </div>
                            </Col>
                          </Row>
                          <Row className="mt-5">
                            <Col sm="12">
                              <div className="data-protect">
                                <h4>Opening time</h4>
                                <p>Select what times you are open</p>
                              </div>
                            </Col>
                            <Col sm="12">
                              <div className="d-flex align-items-center justify-content-center mt-5">
                                <Button className="submit">Continue</Button>
                              </div>
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

import React from "react";
import { Card, Col, Container, Form, Row } from "react-bootstrap";

export default function BusinessDetails() {
  return (
    <div className="mt-4 businessDetailsSec">
      <Container fluid>
        <Row>
          <Col sm={12}>
            <Card>
              <Card.Header style={{ background: "#ffff" }}>
                <div className="cardHeaderBusinessDetailsSec">
                  <div className="businessTopHeader">
                    <p>This information is visible on your listing</p>
                  </div>
                  <div className="businessTopHeaderTitle">
                    <p>My business details</p>
                  </div>
                </div>
              </Card.Header>
              <Card.Body>
                <Row>
                  <Col sm={12} md={6} lg={6}>
                    <Form>
                      <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlInput1"
                      >
                        <Form.Label>Business name</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder=""
                          value={""}
                          name=""
                        />
                      </Form.Group>
                    </Form>
                  </Col>
                  <Col sm={12} md={6} lg={6}>
                    <Form>
                      <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlInput1"
                      >
                        <Form.Label>Enter your industry</Form.Label>
                        <Form.Select
                          aria-label="Default select example"
                          className="form-control"
                          value={""}
                          name=""
                        >
                          <option>Ex - Agriculture</option>
                          <option value="Agriculture">Agriculture</option>
                          <option value="Manufacturing">Manufacturing</option>
                          <option value="Construction">Construction</option>
                          <option value="Retail">Retail</option>
                        </Form.Select>
                      </Form.Group>
                    </Form>
                  </Col>
                  <Col sm={12} md={6} lg={6}>
                    <Form>
                      <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlInput1"
                      >
                        <Form.Label>Business phone number</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder=""
                          value={""}
                          name=""
                        />
                      </Form.Group>
                    </Form>
                  </Col>
                  <Col sm={12} md={6} lg={6}>
                    <Form>
                      <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlInput1"
                      >
                        <Form.Label>Location</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder=""
                          value={""}
                          name=""
                        />
                      </Form.Group>
                    </Form>
                  </Col>
                  <Col sm={12} md={6} lg={6}>
                    <div className="fileUploadBusinessDetails">
                      <div>
                        <img src="" alt="" />
                      </div>
                      <div>
                        <p>Upload logo</p>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
